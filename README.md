# Obsidian Image File Creator Plugin

This plugin for Obsidian (https://obsidian.md) creates individual Markdown files for each image in your vault's folders and links them to a parent file named after the folder.

## Features

- Automatically creates a Markdown file for each image in a folder
- Generates a parent file for each folder, containing links to all image files
- Supports jpg, jpeg, png, gif, and bmp file formats
- Maintains proper relative paths for Obsidian links

## Installation

1. Download the `image-file-creator.js` file from this repository.
2. Place the file in your Obsidian vault's `.obsidian/plugins/image-file-creator/` directory.
   - You may need to create the `image-file-creator` folder if it doesn't exist.
3. Restart Obsidian or reload plugins.
4. Enable the "Image File Creator" plugin in Obsidian's settings under Community Plugins.

## Usage

1. Open your Obsidian vault.
2. Run the "Create Image Files" command from the Command Palette (Ctrl/Cmd + P).
3. The plugin will process all folders in your vault, creating Markdown files for images and linking them in parent folder files.

## Configuration

This plugin currently doesn't require any configuration. It will process all folders in your vault when run.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Support

If you encounter any issues or have questions, please file an issue on the GitHub repository.

## Disclaimer

This plugin modifies files in your Obsidian vault. While it's designed to be safe, please ensure you have a backup of your vault before using this plugin. Avijit Dhaliwal or any of ther contributors are not responsible for any lost files. Use according to your own accord and understanding of the plugin and Obsidian.

## Contact
avijit.dhaliwal@gmail.com