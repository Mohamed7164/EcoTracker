// ========================================
// ECOTRACKER IRELAND - MAIN APPLICATION
// Handles all map interactions and user interface logic
// ========================================

// ========================================
// GLOBAL VARIABLES
// ========================================

// The main Leaflet map object
let map;

// Current active mode (wildlife, climate, or underwater)
let currentMode = 'wildlife';

// Layer groups to organize different types of markers
let animalMarkers = L.layerGroup();
let biomeMarkers = L.layerGroup();
let climateMarkers = L.layerGroup();
let marineMarkers = L.layerGroup();
let biomeOverlays = L.layerGroup();
let wetlandOverlays = L.layerGroup();
let climateOverlays = L.layerGroup();
let marineOverlays = L.layerGroup();

// ========================================
// INITIALIZE MAP WHEN PAGE LOADS
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('🌿 EcoTracker Ireland loading...');
    
    // Initialize the map
    initializeMap();
    
    // Set up event listeners for buttons
    setupEventListeners();
    
    // Set up legend toggle
    setupLegendToggle();
    
    // Show default wildlife mode
    showWildlifeMode();
    
    console.log('✅ EcoTracker Ireland ready!');
});

// ========================================
// MAP INITIALIZATION
// Creates the Leaflet map and centers it on Ireland
// ========================================
function initializeMap() {
    // Create map centered on Ireland
    // Coordinates: [latitude, longitude], zoom level
    map = L.map('map').setView([53.4, -8.0], 7);
    
    // Add OpenStreetMap tile layer (the actual map imagery)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 18,
    }).addTo(map);
    
    // Add a welcome popup in the center of Ireland
    L.popup()
        .setLatLng([53.4, -8.0])
        .setContent('<strong>Welcome to EcoTracker Ireland! 🌿</strong><br>Click around to explore.')
        .openOn(map);
    
    console.log('🗺️ Map initialized');
}

// ========================================
// EVENT LISTENERS SETUP
// Connects buttons to their functions
// ========================================
function setupEventListeners() {
    // Mode switching buttons
    document.getElementById('defaultMode').addEventListener('click', showWildlifeMode);
    document.getElementById('climateMode').addEventListener('click', showClimateMode);
    document.getElementById('underwaterMode').addEventListener('click', showUnderwaterMode);
    
    // Wildlife sighting form
    document.getElementById('reportSightingBtn').addEventListener('click', openSightingModal);
    
    // Modal close button
    document.querySelector('.close').addEventListener('click', closeSightingModal);
    
    // Close modal when clicking outside of it
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('sightingModal');
        if (event.target === modal) {
            closeSightingModal();
        }
    });
    
    // Form submission
    document.getElementById('sightingForm').addEventListener('submit', handleSightingSubmit);
    
    console.log('👂 Event listeners set up');
}

/**
 * Set up legend toggle functionality
 */
let isLegendVisible = false;

function setupLegendToggle() {
    const legendToggle = document.getElementById('legendToggle');
    const legend = document.getElementById('legend');
    const legendClose = document.getElementById('legendClose');
    
    function toggleLegend() {
        if (isLegendVisible) {
            legend.style.display = 'none';
            legendToggle.textContent = '📋 Show Legend';
            isLegendVisible = false;
        } else {
            legend.style.display = 'block';
            legendToggle.textContent = '📋 Hide Legend';
            isLegendVisible = true;
        }
    }
    
    legendToggle.addEventListener('click', toggleLegend);
    
    legendClose.addEventListener('click', function() {
        legend.style.display = 'none';
        legendToggle.textContent = '📋 Show Legend';
        isLegendVisible = false;
    });
    
    console.log('👂 Legend toggle set up');
}

// ========================================
// MODE SWITCHING FUNCTIONS
// These functions change what's displayed on the map
// ========================================

/**
 * Show Wildlife & Biomes Mode (Default)
 * Displays animals and natural ecosystems
 */
function showWildlifeMode() {
    console.log('🦌 Switching to Wildlife mode');
    currentMode = 'wildlife';
    
    // Update button styles
    updateActiveButton('defaultMode');
    
    // Clear all existing markers
    clearAllMarkers();
    
    // Add animal markers to the map
    addAnimalMarkers();
    
    // Add biome markers to the map
    addBiomeMarkers();
    
    // Add biome and wetland overlays
    addBiomeOverlays();
    
    // Update the legend
    updateLegend('wildlife');
    
    // Update info panel
    updateInfoPanel(
        'Wildlife & Biomes Mode',
        'Explore Ireland\'s amazing animals and natural ecosystems. Click on markers to learn more about each species and their habitats.'
    );
}

/**
 * Show Climate Mode
 * Displays temperature, rainfall, and weather patterns
 */
function showClimateMode() {
    console.log('🌦️ Switching to Climate mode');
    currentMode = 'climate';
    
    // Update button styles
    updateActiveButton('climateMode');
    
    // Clear all existing markers
    clearAllMarkers();
    
    // Add climate zone markers
    addClimateMarkers();
    
    // Add climate zone overlays
    addClimateOverlays();
    
    // Update the legend
    updateLegend('climate');
    
    // Update info panel
    updateInfoPanel(
        'Climate Mode',
        'View Ireland\'s climate zones and weather patterns. Ireland has a temperate oceanic climate with mild winters and cool summers.'
    );
}

/**
 * Show Underwater Mode
 * Displays marine zones and ocean life
 */
function showUnderwaterMode() {
    console.log('🐟 Switching to Underwater mode');
    currentMode = 'underwater';
    
    // Update button styles
    updateActiveButton('underwaterMode');
    
    // Clear all existing markers
    clearAllMarkers();
    
    // Add marine zone markers
    addMarineMarkers();
    
    // Add marine overlays
    addMarineOverlays();
    
    // Update the legend
    updateLegend('underwater');
    
    // Update info panel
    updateInfoPanel(
        'Underwater Mode',
        'Explore Ireland\'s rich marine ecosystems. The waters around Ireland support diverse marine life from tiny plankton to giant basking sharks.'
    );
}

// ========================================
// MARKER CREATION FUNCTIONS
// These functions add different types of markers to the map
// ========================================

/**
 * Add animal markers to the map
 * Creates clickable icons for each animal species
 */
function addAnimalMarkers() {
    // Clear previous animal markers
    animalMarkers.clearLayers();
    
    // Loop through each animal in our data
    irishAnimals.forEach(animal => {
        // Create a custom icon using emoji
        const icon = L.divIcon({
            html: `<div class="animal-marker">${animal.icon}</div>`,
            className: 'custom-marker',
            iconSize: [32, 32]
        });
        
        // Create marker at animal's location
        const marker = L.marker(animal.coordinates, { icon: icon });
        
        // Create popup content with animal information
        const popupContent = createAnimalPopup(animal);
        marker.bindPopup(popupContent, { maxWidth: 300 });
        
        // Add marker to the animal markers group
        marker.addTo(animalMarkers);
    });
    
    // Add all animal markers to the map
    animalMarkers.addTo(map);
    console.log(`✅ Added ${irishAnimals.length} animal markers`);
}

/**
 * Add biome markers to the map
 * Shows different ecosystem types
 */
function addBiomeMarkers() {
    // Clear previous biome markers
    biomeMarkers.clearLayers();
    
    // Loop through each biome
    irishBiomes.forEach(biome => {
        // Create a custom icon
        const icon = L.divIcon({
            html: `<div class="animal-marker">${biome.icon}</div>`,
            className: 'custom-marker',
            iconSize: [32, 32]
        });
        
        // Create marker
        const marker = L.marker(biome.coordinates, { icon: icon });
        
        // Create popup content
        const popupContent = createBiomePopup(biome);
        marker.bindPopup(popupContent, { maxWidth: 300 });
        
        // Add to biome markers group
        marker.addTo(biomeMarkers);
    });
    
    // Add all biome markers to the map
    biomeMarkers.addTo(map);
    console.log(`✅ Added ${irishBiomes.length} biome markers`);
}

/**
 * Add climate zone markers to the map
 * Shows weather and temperature information
 */
function addClimateMarkers() {
    // Clear previous climate markers
    climateMarkers.clearLayers();
    
    // Loop through each climate zone
    climateZones.forEach(zone => {
        // Create colored circle marker for climate zones
        const circle = L.circle(zone.coordinates, {
            color: zone.color,
            fillColor: zone.color,
            fillOpacity: 0.3,
            radius: 40000 // 40km radius
        });
        
        // Create icon marker
        const icon = L.divIcon({
            html: `<div class="animal-marker">${zone.icon}</div>`,
            className: 'custom-marker',
            iconSize: [32, 32]
        });
        const marker = L.marker(zone.coordinates, { icon: icon });
        
        // Create popup content
        const popupContent = createClimatePopup(zone);
        marker.bindPopup(popupContent, { maxWidth: 300 });
        circle.bindPopup(popupContent, { maxWidth: 300 });
        
        // Add both circle and marker to climate group
        circle.addTo(climateMarkers);
        marker.addTo(climateMarkers);
    });
    
    // Add all climate markers to the map
    climateMarkers.addTo(map);
    console.log(`✅ Added ${climateZones.length} climate zones`);
}

/**
 * Add marine zone markers to the map
 * Shows underwater habitats and sea life
 */
function addMarineMarkers() {
    // Clear previous marine markers
    marineMarkers.clearLayers();
    
    // Loop through each marine zone
    marineZones.forEach(zone => {
        // Create colored circle for marine zones
        const circle = L.circle(zone.coordinates, {
            color: zone.color,
            fillColor: zone.color,
            fillOpacity: 0.4,
            radius: 35000 // 35km radius
        });
        
        // Create icon marker
        const icon = L.divIcon({
            html: `<div class="animal-marker">${zone.icon}</div>`,
            className: 'custom-marker',
            iconSize: [32, 32]
        });
        const marker = L.marker(zone.coordinates, { icon: icon });
        
        // Create popup content
        const popupContent = createMarinePopup(zone);
        marker.bindPopup(popupContent, { maxWidth: 300 });
        circle.bindPopup(popupContent, { maxWidth: 300 });
        
        // Add both to marine group
        circle.addTo(marineMarkers);
        marker.addTo(marineMarkers);
    });
    
    // Add all marine markers to the map
    marineMarkers.addTo(map);
    console.log(`✅ Added ${marineZones.length} marine zones`);
}

// ========================================
// POPUP CREATION FUNCTIONS
// These create the HTML content for popups
// ========================================

/**
 * Create HTML popup for an animal
 * @param {Object} animal - Animal data object
 * @returns {string} HTML string for popup
 */
function createAnimalPopup(animal) {
    const statusBadge = animal.endangered 
        ? '<span class="endangered-badge">⚠️ Endangered</span>'
        : '<span class="safe-badge">✅ Least Concern</span>';
    
    return `
        <div class="custom-popup">
            <div class="popup-header">
                ${animal.icon} ${animal.name}
            </div>
            <div class="popup-content">
                <img src="${animal.imageUrl}" alt="${animal.name}" class="popup-image">
                <p><strong>Scientific Name:</strong> <em>${animal.scientificName}</em></p>
                <p><strong>Location:</strong> ${animal.location}</p>
                <p><strong>Habitat:</strong> ${animal.habitat}</p>
                <p>${animal.description}</p>
                ${statusBadge}
            </div>
        </div>
    `;
}

/**
 * Create HTML popup for a biome
 * @param {Object} biome - Biome data object
 * @returns {string} HTML string for popup
 */
function createBiomePopup(biome) {
    return `
        <div class="custom-popup">
            <div class="popup-header">
                ${biome.icon} ${biome.name}
            </div>
            <div class="popup-content">
                <p><strong>Type:</strong> ${biome.type}</p>
                <p><strong>Found in:</strong> ${biome.locations.join(', ')}</p>
                <p>${biome.description}</p>
                <p><strong>Typical Flora:</strong> ${biome.flora}</p>
                <p><strong>Typical Fauna:</strong> ${biome.fauna}</p>
            </div>
        </div>
    `;
}

/**
 * Create HTML popup for a climate zone
 * @param {Object} zone - Climate zone data object
 * @returns {string} HTML string for popup
 */
function createClimatePopup(zone) {
    return `
        <div class="custom-popup">
            <div class="popup-header">
                ${zone.icon} ${zone.name}
            </div>
            <div class="popup-content">
                <p><strong>Average Temperature:</strong> ${zone.avgTemp}</p>
                <p><strong>Annual Rainfall:</strong> ${zone.rainfall}</p>
                <p>${zone.description}</p>
                <p><strong>Seasons:</strong> ${zone.seasons}</p>
            </div>
        </div>
    `;
}

/**
 * Create HTML popup for a marine zone
 * @param {Object} zone - Marine zone data object
 * @returns {string} HTML string for popup
 */
function createMarinePopup(zone) {
    return `
        <div class="custom-popup">
            <div class="popup-header">
                ${zone.icon} ${zone.name}
            </div>
            <div class="popup-content">
                <img src="${zone.imageUrl}" alt="${zone.name}" class="popup-image">
                <p><strong>Location:</strong> ${zone.location}</p>
                <p><strong>Depth:</strong> ${zone.depth}</p>
                <p>${zone.description}</p>
                <p><strong>Common Species:</strong> ${zone.species.join(', ')}</p>
            </div>
        </div>
    `;
}

// ========================================
// UI UPDATE FUNCTIONS
// These update various parts of the interface
// ========================================

/**
 * Update which mode button appears active
 * @param {string} activeButtonId - ID of the button to make active
 */
function updateActiveButton(activeButtonId) {
    // Remove active class from all buttons
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Add active class to clicked button
    document.getElementById(activeButtonId).classList.add('active');
}

/**
 * Clear all markers from the map
 */
function clearAllMarkers() {
    map.removeLayer(animalMarkers);
    map.removeLayer(biomeMarkers);
    map.removeLayer(climateMarkers);
    map.removeLayer(marineMarkers);
    map.removeLayer(biomeOverlays);
    map.removeLayer(wetlandOverlays);
    map.removeLayer(climateOverlays);
    map.removeLayer(marineOverlays);
}

/**
 * Add biome and wetland overlays (polygons) to the map
 */
function addBiomeOverlays() {
    biomeOverlays.clearLayers();
    wetlandOverlays.clearLayers();
    
    // Add biome polygons
    irishBiomes.forEach(biome => {
        // Create polygon around biome location
        const polygon = L.polygon([
            [biome.coordinates[0] + 0.3, biome.coordinates[1] - 0.3],
            [biome.coordinates[0] + 0.3, biome.coordinates[1] + 0.3],
            [biome.coordinates[0] - 0.3, biome.coordinates[1] + 0.3],
            [biome.coordinates[0] - 0.3, biome.coordinates[1] - 0.3]
        ], {
            color: biome.color || '#2d5016',
            fillColor: biome.color || '#2d5016',
            fillOpacity: 0.3,
            weight: 2
        });
        
        polygon.bindPopup(`<strong>${biome.name}</strong><br>${biome.type}<br><small>${biome.description}</small>`);
        polygon.addTo(biomeOverlays);
    });
    
    // Add wetland overlays (highlight blanket bogs and wetlands)
    irishBiomes.forEach(biome => {
        if (biome.type === 'Wetland' || biome.name.toLowerCase().includes('bog')) {
            const wetlandPolygon = L.polygon([
                [biome.coordinates[0] + 0.4, biome.coordinates[1] - 0.4],
                [biome.coordinates[0] + 0.4, biome.coordinates[1] + 0.4],
                [biome.coordinates[0] - 0.4, biome.coordinates[1] + 0.4],
                [biome.coordinates[0] - 0.4, biome.coordinates[1] - 0.4]
            ], {
                color: '#8b4513',
                fillColor: '#8b4513',
                fillOpacity: 0.4,
                weight: 3,
                dashArray: '10, 5'
            });
            
            wetlandPolygon.bindPopup(`<strong>🌾 Wetland Area: ${biome.name}</strong><br>${biome.description}`);
            wetlandPolygon.addTo(wetlandOverlays);
        }
    });
    
    biomeOverlays.addTo(map);
    wetlandOverlays.addTo(map);
    console.log('✅ Added biome and wetland overlays');
}

/**
 * Add climate zone overlays to the map
 */
function addClimateOverlays() {
    climateOverlays.clearLayers();
    
    climateZones.forEach(zone => {
        // Create larger polygon for climate zones
        const polygon = L.polygon([
            [zone.coordinates[0] + 0.5, zone.coordinates[1] - 0.5],
            [zone.coordinates[0] + 0.5, zone.coordinates[1] + 0.5],
            [zone.coordinates[0] - 0.5, zone.coordinates[1] + 0.5],
            [zone.coordinates[0] - 0.5, zone.coordinates[1] - 0.5]
        ], {
            color: zone.color,
            fillColor: zone.color,
            fillOpacity: 0.25,
            weight: 2
        });
        
        polygon.bindPopup(`<strong>${zone.icon} ${zone.name}</strong><br>${zone.avgTemp}<br>${zone.rainfall}`);
        polygon.addTo(climateOverlays);
    });
    
    climateOverlays.addTo(map);
    console.log('✅ Added climate zone overlays');
}

/**
 * Add marine zone overlays to the map
 */
function addMarineOverlays() {
    marineOverlays.clearLayers();
    
    marineZones.forEach(zone => {
        // Create polygon for marine zones (in ocean areas)
        const polygon = L.polygon([
            [zone.coordinates[0] + 0.6, zone.coordinates[1] - 0.6],
            [zone.coordinates[0] + 0.6, zone.coordinates[1] + 0.6],
            [zone.coordinates[0] - 0.6, zone.coordinates[1] + 0.6],
            [zone.coordinates[0] - 0.6, zone.coordinates[1] - 0.6]
        ], {
            color: zone.color,
            fillColor: zone.color,
            fillOpacity: 0.35,
            weight: 2,
            dashArray: '8, 4'
        });
        
        polygon.bindPopup(`<strong>${zone.icon} ${zone.name}</strong><br>Depth: ${zone.depth}<br><small>${zone.species.join(', ')}</small>`);
        polygon.addTo(marineOverlays);
    });
    
    marineOverlays.addTo(map);
    console.log('✅ Added marine zone overlays');
}

/**
 * Update the legend based on current mode
 * @param {string} mode - Current mode (wildlife, climate, underwater)
 */
function updateLegend(mode) {
    const legendContent = document.getElementById('legendContent');
    
    if (mode === 'wildlife') {
        legendContent.innerHTML = `
            <div class="legend-section">
                <div class="legend-section-title">🦌 Wildlife</div>
                <div class="legend-item">
                    <span class="legend-icon">🦌</span>
                    <div class="legend-label">
                        <strong>Mammals</strong>
                        <small>Red deer, foxes, hares</small>
                    </div>
                </div>
                <div class="legend-item">
                    <span class="legend-icon">🐦</span>
                    <div class="legend-label">
                        <strong>Birds</strong>
                        <small>Puffins, falcons, owls</small>
                    </div>
                </div>
                <div class="legend-item">
                    <span class="legend-icon">🦭</span>
                    <div class="legend-label">
                        <strong>Marine Mammals</strong>
                        <small>Seals, dolphins, whales</small>
                    </div>
                </div>
            </div>
            
            <div class="legend-section">
                <div class="legend-section-title">🌍 Biomes & Ecosystems</div>
                <div class="legend-item">
                    <div class="legend-color" style="background: #2d5016;"></div>
                    <div class="legend-label">
                        <strong>Forests</strong>
                        <small>Oakwoods, pine forests</small>
                    </div>
                </div>
                <div class="legend-item">
                    <div class="legend-color" style="background: #8b4513; border-style: dashed;"></div>
                    <div class="legend-label">
                        <strong>Wetlands & Bogs</strong>
                        <small>Blanket bogs, marshes</small>
                    </div>
                </div>
                <div class="legend-item">
                    <div class="legend-color" style="background: #90ee90;"></div>
                    <div class="legend-label">
                        <strong>Grasslands</strong>
                        <small>Coastal, limestone</small>
                    </div>
                </div>
                <div class="legend-item">
                    <div class="legend-color" style="background: #4682b4;"></div>
                    <div class="legend-label">
                        <strong>Freshwater</strong>
                        <small>Lakes, rivers, ponds</small>
                    </div>
                </div>
            </div>
            
            <div class="legend-section">
                <div class="legend-section-title">🐟 Marine Life (Oceans)</div>
                <div class="legend-item">
                    <span class="legend-icon">🌿</span>
                    <div class="legend-label">
                        <strong>Kelp Forests</strong>
                        <small>West coast</small>
                    </div>
                </div>
                <div class="legend-item">
                    <span class="legend-icon">🐋</span>
                    <div class="legend-label">
                        <strong>Deep Waters</strong>
                        <small>Whales, dolphins</small>
                    </div>
                </div>
            </div>
        `;
    } else if (mode === 'climate') {
        legendContent.innerHTML = `
            <div class="legend-section">
                <div class="legend-section-title">🌦️ Climate Zones</div>
                <div class="legend-item">
                    <div class="legend-color" style="background: #4169e1;"></div>
                    <div class="legend-label">
                        <strong>West Coast - Oceanic</strong>
                        <small>High rainfall (1400mm/yr)</small>
                    </div>
                </div>
                <div class="legend-item">
                    <div class="legend-color" style="background: #ffa500;"></div>
                    <div class="legend-label">
                        <strong>Southeast - Warmest</strong>
                        <small>Sunniest region (800mm/yr)</small>
                    </div>
                </div>
                <div class="legend-item">
                    <div class="legend-color" style="background: #8a9a5b;"></div>
                    <div class="legend-label">
                        <strong>Mountain Climate</strong>
                        <small>Cool, wet (2000mm/yr)</small>
                    </div>
                </div>
                <div class="legend-item">
                    <div class="legend-color" style="background: #87ceeb;"></div>
                    <div class="legend-label">
                        <strong>East Coast - Drier</strong>
                        <small>Moderate (750mm/yr)</small>
                    </div>
                </div>
                <div class="legend-item">
                    <div class="legend-color" style="background: #98d8c8;"></div>
                    <div class="legend-label">
                        <strong>Midlands - Continental</strong>
                        <small>Moderate (900mm/yr)</small>
                    </div>
                </div>
            </div>
        `;
    } else if (mode === 'underwater') {
        legendContent.innerHTML = `
            <div class="legend-section">
                <div class="legend-section-title">🌊 Marine Zones</div>
                <div class="legend-item">
                    <div class="legend-color" style="background: #2e8b57; border-style: dashed;"></div>
                    <div class="legend-label">
                        <strong>Kelp Forests</strong>
                        <small>Depth: 5-30m</small>
                    </div>
                </div>
                <div class="legend-item">
                    <div class="legend-color" style="background: #000080; border-style: dashed;"></div>
                    <div class="legend-label">
                        <strong>Deep Atlantic</strong>
                        <small>Depth: 200-4000m</small>
                    </div>
                </div>
                <div class="legend-item">
                    <div class="legend-color" style="background: #4682b4; border-style: dashed;"></div>
                    <div class="legend-label">
                        <strong>Continental Shelf</strong>
                        <small>Depth: 0-200m</small>
                    </div>
                </div>
                <div class="legend-item">
                    <div class="legend-color" style="background: #696969; border-style: dashed;"></div>
                    <div class="legend-label">
                        <strong>Rocky Reefs</strong>
                        <small>Depth: 0-50m</small>
                    </div>
                </div>
                <div class="legend-item">
                    <div class="legend-color" style="background: #daa520; border-style: dashed;"></div>
                    <div class="legend-label">
                        <strong>Sandy Seabed</strong>
                        <small>Depth: 10-100m</small>
                    </div>
                </div>
            </div>
            
            <div class="legend-section">
                <div class="legend-section-title">🐟 Marine Life</div>
                <div class="legend-item">
                    <span class="legend-icon">🐋</span>
                    <div class="legend-label">
                        <strong>Whales & Dolphins</strong>
                        <small>Deep waters</small>
                    </div>
                </div>
                <div class="legend-item">
                    <span class="legend-icon">🦈</span>
                    <div class="legend-label">
                        <strong>Sharks</strong>
                        <small>Basking, porbeagle</small>
                    </div>
                </div>
                <div class="legend-item">
                    <span class="legend-icon">🐟</span>
                    <div class="legend-label">
                        <strong>Fish Species</strong>
                        <small>Cod, haddock, tuna</small>
                    </div>
                </div>
                <div class="legend-item">
                    <span class="legend-icon">🦐</span>
                    <div class="legend-label">
                        <strong>Crustaceans</strong>
                        <small>Crabs, lobsters, shrimp</small>
                    </div>
                </div>
                <div class="legend-item">
                    <span class="legend-icon">🌿</span>
                    <div class="legend-label">
                        <strong>Kelp & Seaweed</strong>
                        <small>Marine plants</small>
                    </div>
                </div>
            </div>
        `;
    }
}

/**
 * Update the info panel text
 * @param {string} title - Panel title
 * @param {string} description - Panel description
 */
function updateInfoPanel(title, description) {
    const infoPanel = document.getElementById('infoPanel');
    infoPanel.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
        <p><em>💡 Tip: Click on any marker to see detailed information!</em></p>
    `;
}

// ========================================
// WILDLIFE SIGHTING FORM FUNCTIONS
// Handle user submissions of wildlife sightings
// ========================================

/**
 * Open the wildlife sighting modal
 */
function openSightingModal() {
    document.getElementById('sightingModal').style.display = 'block';
    console.log('📸 Opening sighting form');
}

/**
 * Close the wildlife sighting modal
 */
function closeSightingModal() {
    document.getElementById('sightingModal').style.display = 'none';
    // Clear the form
    document.getElementById('sightingForm').reset();
    // Clear any messages
    document.getElementById('formMessage').innerHTML = '';
    document.getElementById('formMessage').className = '';
}

/**
 * Handle wildlife sighting form submission
 * @param {Event} event - Form submit event
 */
function handleSightingSubmit(event) {
    // Prevent the form from actually submitting (no backend)
    event.preventDefault();
    
    // Get form data
    const formData = {
        species: document.getElementById('speciesName').value,
        location: document.getElementById('location').value,
        date: document.getElementById('date').value,
        description: document.getElementById('description').value,
        email: document.getElementById('email').value
    };
    
    console.log('📝 Wildlife sighting reported:', formData);
    
    // Show success message
    const messageDiv = document.getElementById('formMessage');
    messageDiv.innerHTML = `
        <strong>✅ Thank you for your sighting report!</strong><br>
        Your observation of <strong>${formData.species}</strong> in <strong>${formData.location}</strong> 
        has been recorded. While this is a demo app with no backend, in a real system this would be 
        sent to wildlife conservation experts for verification.
    `;
    messageDiv.className = 'success';
    
    // In a real application, you would send this data to a server:
    // fetch('/api/sightings', {
    //     method: 'POST',
    //     body: JSON.stringify(formData),
    //     headers: { 'Content-Type': 'application/json' }
    // });
    
    // Close modal after 3 seconds
    setTimeout(() => {
        closeSightingModal();
    }, 3000);
}

// ========================================
// HELPER FUNCTIONS
// ========================================

/**
 * Add interactive county overlays (optional enhancement)
 * This could be expanded to show detailed county information
 */
function addCountyOverlays() {
    irishCounties.forEach(county => {
        const marker = L.circle(county.coordinates, {
            color: 'transparent',
            fillColor: 'transparent',
            radius: 20000
        });
        
        marker.bindPopup(`
            <strong>${county.name}</strong><br>
            ${county.info}
        `);
        
        marker.addTo(map);
    });
}

// ========================================
// CONSOLE WELCOME MESSAGE
// ========================================
console.log('%c🌿 EcoTracker Ireland 🌿', 'font-size: 20px; color: green; font-weight: bold;');
console.log('%cExploring Ireland\'s incredible biodiversity!', 'font-size: 14px; color: blue;');
console.log('Built with ❤️ for nature lovers and learners');

