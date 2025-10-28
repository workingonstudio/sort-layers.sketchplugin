# Sketch Sort Layers Plugin

A powerful Sketch plugin to sort layers and artboards by name, position, or type.

## Features

- **Sort by Name** - Alphabetically sort layers A→Z or Z→A
- **Sort by Position** - Organize layers by Y position (top to bottom) or X position (left to right)
- **Sort by Type** - Group layers by their type (Artboards, Groups, Shapes, Text, etc.)
- **Reverse Order** - Quickly reverse the order of selected layers

### Manual Installation

1. Download the plugin files
2. Build the plugin:
   ```bash
   npm install
   npm run build
   ```
3. Double-click the `sort-layers.sketchplugin` file to install

## Usage

1. **Select layers or artboards** you want to sort in your Sketch document
2. Go to **Plugins → Sort Layers** in the menu
3. Choose your sorting method:
   - Sort by Name (A→Z)
   - Sort by Name (Z→A)
   - Sort by Position (Top to Bottom)
   - Sort by Position (Left to Right)
   - Sort by Type
   - Reverse Layer Order

The selected layers will be reordered in the layer list according to your chosen sorting method.

## Tips

- Works with any layer type: artboards, groups, shapes, text layers, etc.
- Select multiple layers to sort them within their parent group/artboard
- Sort by position is especially useful for organizing artboards laid out on the canvas
- Sort by type helps group similar layers together for better organization

### Project Structure

```
sketch-sort-layers/
├── src/
│   ├── manifest.json       # Plugin manifest
│   └── sort-commands.js    # Main plugin code
├── package.json            # Project configuration
└── README.md               # This file
```

## Compatibility

This plugin is compatible with Sketch 46+

## License

MIT License - Feel free to use and modify as needed!

# Sort Layers

[A powerful Sketch plugin to sort layers and artboards by name, position, or type.]

## Installation

### Manual Installation
1. Download the [latest release](https://github.com/workingonstudio/sort-layers.sketchplugin/releases/latest)
2. Double-click the `.sketchplugin` file to install

## Usage

1. **Select layers or artboards** you want to sort in your Sketch document
2. Go to **Plugins → Sort Layers** in the menu
3. Choose your sorting method:
   - Sort by Name (A→Z)
   - Sort by Name (Z→A)
   - Sort by Position (Top to Bottom)
   - Sort by Position (Left to Right)
   - Sort by Type
   - Reverse Layer Order

The selected layers will be reordered in the layer list according to your chosen sorting method.

## Requirements

- Sketch [version]+

## Development

```bash
# Clone the repository
git clone https://github.com/workingonstudio/sort-layers.sketchplugin.git

# Install dependencies (if any)
npm install
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - see the [LICENSE](LICENSE) file for details

## Credits

Created by [Your Name]

## Support

If you find this plugin helpful, please consider:
- ⭐ Starring the repository
- 🐛 [Reporting bugs](https://github.com/workingonstudio/sort-layers.sketchplugin/issues)
- 💡 [Suggesting features](https://github.com/workingonstudio/sort-layers.sketchplugin/issues)
