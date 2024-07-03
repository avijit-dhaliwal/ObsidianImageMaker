const fs = require('fs');
const path = require('path');

module.exports = {
  id: 'image-file-creator',
  name: 'Image File Creator',
  description: 'Creates a new file for each picture in a folder and links them to a parent file.',
  
  async onload() {
    this.addCommand({
      id: 'create-image-files',
      name: 'Create Image Files',
      callback: () => this.createImageFiles(),
    });
  },
  
  async createImageFiles() {
    const folder = await this.app.vault.adapter.list('');
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp'];
    
    for (const item of folder.folders) {
      const folderPath = item;
      const folderName = path.basename(folderPath);
      const files = await this.app.vault.adapter.list(folderPath);
      
      let imageLinks = '';
      
      for (const file of files.files) {
        const ext = path.extname(file).toLowerCase();
        if (imageExtensions.includes(ext)) {
          const baseName = path.basename(file, ext);
          const newFilePath = `${folderPath}/${baseName}.md`;
          const imageRelPath = path.relative(this.app.vault.adapter.basePath, file);
          
          // Create a new file for the image
          await this.app.vault.create(newFilePath, `![[${imageRelPath}]]`);
          
          // Add a link to the new file
          imageLinks += `[[${baseName}]]\n`;
        }
      }
      
      // Create or update the parent folder file
      const parentFilePath = `${folderPath}/${folderName}.md`;
      let parentContent = `# ${folderName}\n\n## Images\n\n${imageLinks}`;
      
      if (await this.app.vault.adapter.exists(parentFilePath)) {
        const existingContent = await this.app.vault.adapter.read(parentFilePath);
        parentContent = existingContent + '\n\n' + parentContent;
      }
      
      await this.app.vault.create(parentFilePath, parentContent);
    }
    
    new Notice('Image files created and linked successfully!');
  },
};