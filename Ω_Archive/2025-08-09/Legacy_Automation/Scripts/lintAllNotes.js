module.exports = async (params) => {
  const { app } = params;
  const linter = app.plugins.plugins["linter"];
  if (!linter) {
    new Notice("Linter plugin is not enabled.");
    return;
  }
  const files = app.vault.getMarkdownFiles();
  let count = 0;
  for (const file of files) {
    try {
      const content = await app.vault.read(file);
      const linted = await linter.lintText(content, file.path);
      if (linted && linted !== content) {
        await app.vault.modify(file, linted);
      }
      count++;
    } catch (e) {
      console.error("Lint error:", file.path, e);
    }
  }
  new Notice(`Linted ${count} notes.`);
};


