module.exports = async (params) => {
  const { app } = params;
  const notice = (msg, t=4000) => { try { new Notice(msg, t); } catch { /* no-op */ } };

  const today = new Date();
  const pad = (n) => String(n).padStart(2, '0');
  const yyyy = today.getFullYear();
  const mm = pad(today.getMonth() + 1);
  const dd = pad(today.getDate());
  const dateStr = `${yyyy}-${mm}-${dd}`;

  const archiveBase = `Ω_Archive/${dateStr}`;
  const placeholderDir = `${archiveBase}/Placeholders`;
  const dashboardsDir = `${archiveBase}/Dashboards`;

  async function ensureFolder(path) {
    const parts = path.split('/');
    let current = '';
    for (const part of parts) {
      current = current ? `${current}/${part}` : part;
      const exists = app.vault.getAbstractFileByPath(current);
      if (!exists) {
        await app.vault.createFolder(current);
      }
    }
  }

  const orphanRegexes = [
    /\$\{[^}]+\}\.md$/i,
    /<%tp\.system\.prompt\([^)]+\)%>\.md$/i,
    /Dungeon\d+\.png\.md$/i,
    /Template-.*\.md$/i,
    /z_Templates-World Builder Templates-Template-.*\.md\.md$/i,
    /\{\{[^}]+\}\}\.md$/i,
    /file\.name/i,
    /updatePath\(link\)/i
  ];

  const isInArchive = (p) => p.startsWith('Ω_Archive/');
  const isMarkdown = (p) => p.toLowerCase().endsWith('.md');
  const matchesAny = (p, regs) => regs.some((rx) => rx.test(p));

  const files = app.vault.getMarkdownFiles();
  const moved = [];
  const skipped = [];

  await ensureFolder(placeholderDir);
  await ensureFolder(dashboardsDir);

  // 1) Sweep templater/placeholder artifacts
  for (const file of files) {
    const rel = file.path;
    if (isInArchive(rel) || !isMarkdown(rel)) continue;
    if (!matchesAny(rel, orphanRegexes)) continue;
    try {
      const base = rel.split('/').pop();
      let target = `${placeholderDir}/${base}`;
      let suffix = 1;
      while (app.vault.getAbstractFileByPath(target)) {
        const dot = base.lastIndexOf('.');
        const name = dot === -1 ? base : base.slice(0, dot);
        const ext = dot === -1 ? '' : base.slice(dot);
        target = `${placeholderDir}/${name}-${suffix}${ext}`;
        suffix++;
      }
      await app.fileManager.renameFile(file, target);
      moved.push([rel, target]);
    } catch (e) {
      skipped.push([rel, `error: ${e?.message || e}`]);
    }
  }

  // 2) Sweep outdated dashboards in 00_Dashboard (keep dataview-queries folder; keep MASTER dashboard elsewhere)
  for (const file of files) {
    const rel = file.path;
    if (!rel.startsWith('00_Dashboard/')) continue;
    const name = rel.split('/').pop();
    if (name.toLowerCase() === 'dataview-queries' || name.endsWith('/')) continue;
    // do not move the master dashboard, which lives at vault root
    if (name === 'MASTER_CAMPAIGN_DASHBOARD.md') continue;
    try {
      const base = rel.split('/').pop();
      let target = `${dashboardsDir}/${base}`;
      let suffix = 1;
      while (app.vault.getAbstractFileByPath(target)) {
        const dot = base.lastIndexOf('.');
        const nm = dot === -1 ? base : base.slice(0, dot);
        const ext = dot === -1 ? '' : base.slice(dot);
        target = `${dashboardsDir}/${nm}-${suffix}${ext}`;
        suffix++;
      }
      await app.fileManager.renameFile(file, target);
      moved.push([rel, target]);
    } catch (e) {
      skipped.push([rel, `error: ${e?.message || e}`]);
    }
  }

  // 3) Write log
  const logPath = `${placeholderDir}/Archive_Move_Log.md`;
  let log = `---\n`;
  log += `type: archive-log\n`;
  log += `tags: [archive]\n`;
  log += `---\n\n`;
  log += `# Archive Move Log\n\n`;
  log += `Date: ${dateStr}\n\n`;
  log += `## Moved Files\n`;
  if (moved.length) {
    for (const [src, dst] of moved) log += `- ${src} → ${dst}\n`;
  } else {
    log += `- (none)\n`;
  }
  log += `\n## Skipped Files\n`;
  if (skipped.length) {
    for (const [src, reason] of skipped) log += `- ${src} (${reason})\n`;
  } else {
    log += `- (none)\n`;
  }

  const existingLog = app.vault.getAbstractFileByPath(logPath);
  if (existingLog) {
    const prev = await app.vault.read(existingLog);
    await app.vault.modify(existingLog, prev + `\n\n` + log);
  } else {
    await app.vault.create(logPath, log);
  }

  notice(`Archive sweep complete. Moved ${moved.length}, skipped ${skipped.length}.`);
};


