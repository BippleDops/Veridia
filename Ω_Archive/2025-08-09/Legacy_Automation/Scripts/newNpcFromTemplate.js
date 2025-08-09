module.exports = async (params) => {
  const { app, quickAddApi } = params;
  const name = await app.plugins.plugins["quickadd"].inputPrompt("NPC name");
  if (!name) return;
  const target = `01_Campaigns/NPCs/${name}.md`;
  const template = `05_Templates/NPC_Template.md`;
  const existing = app.vault.getAbstractFileByPath(target);
  if (existing) {
    new Notice(`NPC already exists: ${name}`);
    return;
  }
  // Load template content
  const tFile = app.vault.getAbstractFileByPath(template);
  if (!tFile) {
    new Notice(`Template not found: ${template}`);
    return;
  }
  const content = await app.vault.cachedRead(tFile);
  const filled = content.replace(/\{\{VALUE-name\}\}/g, name).replace(/\{\{name\}\}/g, name);
  // Ensure folder
  const folder = '01_Campaigns/NPCs';
  if (!app.vault.getAbstractFileByPath(folder)) {
    await app.vault.createFolder(folder);
  }
  await app.vault.create(target, filled);
  new Notice(`NPC created: ${name}`);
};


