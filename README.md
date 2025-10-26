# Sketch Sort Layers Plugin

A powerful Sketch plugin to sort layers and artboards by name, position, or type.

## Features

- **Sort by Name** - Alphabetically sort layers A→Z or Z→A
- **Sort by Position** - Organize layers by Y position (top to bottom) or X position (left to right)
- **Sort by Type** - Group layers by their type (Artboards, Groups, Shapes, Text, etc.)
- **Reverse Order** - Quickly reverse the order of selected layers

## Installation

### Using skpm (Recommended)

1. Install Node.js and npm if you haven't already
2. Install skpm globally:
   ```bash
   npm install -g skpm
   ```

3. Navigate to the plugin directory and build:
   ```bash
   cd path/to/sketch-sort-layers
   npm install
   npm run build
   ```

4. The plugin will be automatically installed in Sketch

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

## Development

### Building

```bash
npm run build
```

### Watch mode

To automatically rebuild when you make changes:

```bash
npm run watch
```

### Project Structure

```
sketch-sort-layers/
├── src/
│   ├── manifest.json       # Plugin manifest
│   └── sort-commands.js    # Main plugin code
├── package.json            # Project configuration
└── README.md              # This file
```

## Compatibility

This plugin is compatible with Sketch 46+

## License

MIT License - Feel free to use and modify as needed!
