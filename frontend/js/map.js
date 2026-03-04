// Flood Risk Heat Map Visualization using JavaScript

// Sample map data (for demonstration purposes)
const mapData = [
    { location: 'Area 1', risk: 80 },
    { location: 'Area 2', risk: 50 },
    { location: 'Area 3', risk: 20 },
    { location: 'Area 4', risk: 90 },
];

// Create a heatmap layer
function createHeatMap(data) {
    const heatMapData = data.map(item => {
        return [item.location, item.risk];
    });

    console.log('Heatmap Data:', heatMapData);
    // Ideally, here you'd use a mapping library like Leaflet or Google Maps API
    // to display the heatmap using heatMapData.
}

// Initialize the heatmap
createHeatMap(mapData);