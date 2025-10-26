import sketch from "sketch";

/**
 * Get the selected layers or all layers in the current page
 */
function getLayersToSort() {
  const doc = sketch.getSelectedDocument();
  const selectedLayers = doc.selectedLayers;

  if (selectedLayers.isEmpty) {
    sketch.UI.message(
      "No layers selected. Select layers or artboards to sort."
    );
    return null;
  }

  const layers = selectedLayers.layers;

  // Check if we have a valid parent to sort within
  if (layers.length === 0) {
    return null;
  }

  return layers;
}

/**
 * Sort layers by their index within the parent
 * This function reorders layers in the layer list
 * Optimized version that batches operations
 */
function sortLayers(layers, compareFn) {
  if (!layers || layers.length === 0) {
    return;
  }

  // Get the parent (assuming all layers have the same parent)
  const parent = layers[0].parent;

  // Sort the layers array - create a copy using slice
  const sortedLayers = layers.slice().sort(compareFn);

  // Find the minimum current index to know where to insert
  let minIndex = parent.layers.length;
  for (let i = 0; i < layers.length; i++) {
    if (layers[i].index < minIndex) {
      minIndex = layers[i].index;
    }
  }

  // Move all layers to the back first (in reverse to avoid conflicts)
  for (let i = sortedLayers.length - 1; i >= 0; i--) {
    sortedLayers[i].moveToBack();
  }

  // Now move them to their final positions from back to front
  for (let i = 0; i < sortedLayers.length; i++) {
    const targetIndex = minIndex + i;
    sortedLayers[i].index = targetIndex;
  }
}

/**
 * Sort by Name (A→Z)
 * Note: Reversed because Sketch layer list shows index 0 at bottom
 */
export function sortByNameAsc() {
  const layers = getLayersToSort();
  if (!layers) return;

  sortLayers(layers, (a, b) => {
    return b.name.localeCompare(a.name);
  });

  sketch.UI.message(`Sorted ${layers.length} layers by name (A→Z)`);
}

/**
 * Sort by Name (Z→A)
 * Note: Reversed because Sketch layer list shows index 0 at bottom
 */
export function sortByNameDesc() {
  const layers = getLayersToSort();
  if (!layers) return;

  sortLayers(layers, (a, b) => {
    return a.name.localeCompare(b.name);
  });

  sketch.UI.message(`Sorted ${layers.length} layers by name (Z→A)`);
}

/**
 * Sort by Y Position (Top to Bottom)
 * Note: Reversed because Sketch layer list shows index 0 at bottom
 */
export function sortByPositionY() {
  const layers = getLayersToSort();
  if (!layers) return;

  sortLayers(layers, (a, b) => {
    return b.frame.y - a.frame.y;
  });

  sketch.UI.message(
    `Sorted ${layers.length} layers by Y position (top to bottom)`
  );
}

/**
 * Sort by X Position (Left to Right)
 * Note: Reversed because Sketch layer list shows index 0 at bottom
 */
export function sortByPositionX() {
  const layers = getLayersToSort();
  if (!layers) return;

  sortLayers(layers, (a, b) => {
    return b.frame.x - a.frame.x;
  });

  sketch.UI.message(
    `Sorted ${layers.length} layers by X position (left to right)`
  );
}

/**
 * Sort by Layer Type
 * Note: Reversed because Sketch layer list shows index 0 at bottom
 */
export function sortByType() {
  const layers = getLayersToSort();
  if (!layers) return;

  // Define type priority
  const typePriority = {
    Artboard: 1,
    SymbolMaster: 2,
    Group: 3,
    Shape: 4,
    ShapePath: 5,
    Text: 6,
    Image: 7,
    SymbolInstance: 8,
    HotSpot: 9,
    Slice: 10,
  };

  sortLayers(layers, (a, b) => {
    const priorityA = typePriority[a.type] || 99;
    const priorityB = typePriority[b.type] || 99;

    if (priorityA !== priorityB) {
      return priorityB - priorityA; // Reversed
    }

    // If same type, sort by name (also reversed)
    return b.name.localeCompare(a.name);
  });

  sketch.UI.message(`Sorted ${layers.length} layers by type`);
}

/**
 * Reverse the order of selected layers
 */
export function reverseOrder() {
  const layers = getLayersToSort();
  if (!layers) return;

  sortLayers(layers, (a, b) => {
    return a.index - b.index; // This one stays the same to actually reverse
  });

  sketch.UI.message(`Reversed order of ${layers.length} layers`);
}
