// ========================================
// ECOTRACKER IRELAND - DATA FILE
// All ecological data for Ireland including animals, biomes, climate, and marine life
// ========================================

// ========================================
// IRISH ANIMAL DATA
// Contains information about various species found in Ireland
// ========================================
const irishAnimals = [
    {
        name: "Red Deer",
        scientificName: "Cervus elaphus",
        location: "County Kerry",
        coordinates: [52.0, -9.5],
        icon: "🦌",
        habitat: "Forests and moorlands",
        description: "Ireland's largest land mammal. Red deer are found mainly in Killarney National Park and the Wicklow Mountains. They prefer woodland areas with open moorland.",
        endangered: false,
        // Placeholder image URL (using a nature photo service)
        imageUrl: "https://images.unsplash.com/photo-1551069613-1904dbdcda11?w=400&h=300&fit=crop"
    },
    {
        name: "Atlantic Puffin",
        scientificName: "Fratercula arctica",
        location: "Skellig Islands",
        coordinates: [51.77, -10.54],
        icon: "🐦",
        habitat: "Coastal cliffs",
        description: "These colorful seabirds nest on Ireland's coastal cliffs from April to August. The Skellig Islands host one of Ireland's largest puffin colonies.",
        endangered: true,
        imageUrl: "https://images.unsplash.com/photo-1612564148954-59545876eaa0?w=400&h=300&fit=crop"
    },
    {
        name: "Irish Hare",
        scientificName: "Lepus timidus hibernicus",
        location: "County Donegal",
        coordinates: [54.8, -8.1],
        icon: "🐇",
        habitat: "Grasslands and coastal dunes",
        description: "A subspecies unique to Ireland, the Irish hare is larger than rabbits and has distinctive russet brown fur. Found throughout Ireland in open grasslands.",
        endangered: false,
        imageUrl: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=400&h=300&fit=crop"
    },
    {
        name: "Pine Marten",
        scientificName: "Martes martes",
        location: "County Clare",
        coordinates: [52.8, -9.0],
        icon: "🦊",
        habitat: "Woodlands",
        description: "These shy, cat-sized carnivores are making a comeback in Ireland. They live in woodland areas and are excellent climbers.",
        endangered: false,
        imageUrl: "https://images.unsplash.com/photo-1551316679-9c6ae9dec224?w=400&h=300&fit=crop"
    },
    {
        name: "Grey Seal",
        scientificName: "Halichoerus grypus",
        location: "West Cork Coast",
        coordinates: [51.5, -9.8],
        icon: "🦭",
        habitat: "Coastal waters and islands",
        description: "Ireland is home to approximately 6% of the world's grey seal population. They can be spotted along the rugged western coastline.",
        endangered: false,
        imageUrl: "https://images.unsplash.com/photo-1568430462989-44163eb1752f?w=400&h=300&fit=crop"
    },
    {
        name: "Common Dolphin",
        scientificName: "Delphinus delphis",
        location: "Dingle Bay",
        coordinates: [52.1, -10.2],
        icon: "🐬",
        habitat: "Coastal waters",
        description: "These playful dolphins are frequently spotted off Ireland's west coast, particularly in Dingle Bay. They often travel in large pods.",
        endangered: false,
        imageUrl: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop"
    },
    {
        name: "Red Fox",
        scientificName: "Vulpes vulpes",
        location: "County Dublin",
        coordinates: [53.35, -6.26],
        icon: "🦊",
        habitat: "Forests, farmlands, urban areas",
        description: "Red foxes are widespread throughout Ireland and have adapted to urban environments. They're most active at dawn and dusk.",
        endangered: false,
        imageUrl: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=400&h=300&fit=crop"
    },
    {
        name: "Basking Shark",
        scientificName: "Cetorhinus maximus",
        location: "County Mayo Coast",
        coordinates: [54.0, -9.9],
        icon: "🦈",
        habitat: "Open ocean waters",
        description: "The second-largest fish in the world visits Irish waters in summer. Despite their size, they're gentle filter feeders eating only plankton.",
        endangered: true,
        imageUrl: "https://images.unsplash.com/photo-1560275619-4662e36fa65c?w=400&h=300&fit=crop"
    },
    {
        name: "Common Frog",
        scientificName: "Rana temporaria",
        location: "County Galway",
        coordinates: [53.3, -9.0],
        icon: "🐸",
        habitat: "Ponds, bogs, wetlands",
        description: "Ireland's only native frog species. They thrive in ponds, bogs, and wetlands across the island and are important indicators of ecosystem health.",
        endangered: false,
        imageUrl: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=400&h=300&fit=crop"
    },
    {
        name: "Peregrine Falcon",
        scientificName: "Falco peregrinus",
        location: "Wicklow Mountains",
        coordinates: [53.0, -6.4],
        icon: "🦅",
        habitat: "Mountain cliffs and coastline",
        description: "The world's fastest animal (diving speeds over 300 km/h). These magnificent birds of prey nest on cliff faces in mountainous and coastal areas.",
        endangered: true,
        imageUrl: "https://images.unsplash.com/photo-1611689342806-0863700ce1e4?w=400&h=300&fit=crop"
    },
    {
        name: "Otter",
        scientificName: "Lutra lutra",
        location: "River Shannon",
        coordinates: [52.7, -8.6],
        icon: "🦦",
        habitat: "Rivers, lakes, coastal areas",
        description: "Ireland has one of the healthiest otter populations in Europe. They live along rivers, lakes, and coastal areas throughout the country.",
        endangered: false,
        imageUrl: "https://images.unsplash.com/photo-1604802761732-494c0c678e05?w=400&h=300&fit=crop"
    },
    {
        name: "Barn Owl",
        scientificName: "Tyto alba",
        location: "County Limerick",
        coordinates: [52.5, -8.8],
        icon: "🦉",
        habitat: "Farmland, grasslands",
        description: "These ghostly white owls are nocturnal hunters that feed mainly on small mammals. They nest in old buildings and tree cavities.",
        endangered: true,
        imageUrl: "https://images.unsplash.com/photo-1579170053380-58064b2dee67?w=400&h=300&fit=crop"
    }
];

// ========================================
// IRISH BIOMES AND NATURAL ZONES
// Different ecosystem types found across Ireland
// ========================================
const irishBiomes = [
    {
        name: "Atlantic Oakwoods",
        type: "Forest",
        locations: ["Killarney", "Glenveagh", "Wicklow"],
        coordinates: [52.0, -9.5],
        color: "#2d5016",
        icon: "🌲",
        description: "Ancient woodland dominated by oak trees with moss-covered trunks. These rare woodlands are biodiversity hotspots.",
        flora: "Oak, birch, hazel, mosses, ferns",
        fauna: "Pine marten, red squirrel, jay, wood warbler"
    },
    {
        name: "Blanket Bog",
        type: "Wetland",
        locations: ["Connemara", "Mayo", "Donegal"],
        coordinates: [53.5, -9.7],
        color: "#8b4513",
        icon: "🌾",
        description: "Ireland's most extensive habitat type, covering much of the west. These peatlands store massive amounts of carbon and are home to unique species.",
        flora: "Heather, cotton grass, sphagnum moss, sundew",
        fauna: "Golden plover, dunlin, Irish hare, red grouse"
    },
    {
        name: "Coastal Grassland",
        type: "Grassland",
        locations: ["Burren", "Aran Islands", "West Cork"],
        coordinates: [53.0, -9.2],
        color: "#90ee90",
        icon: "🌱",
        description: "Windswept grasslands along the coast with salt-tolerant plants. The limestone pavement of the Burren creates a unique ecosystem.",
        flora: "Spring gentian, orchids, mountain avens, sea pink",
        fauna: "Chough, butterflies, rabbits, stoats"
    },
    {
        name: "Sand Dunes",
        type: "Coastal",
        locations: ["Donegal", "Wexford", "Kerry"],
        coordinates: [52.2, -10.0],
        color: "#f4a460",
        icon: "🏖️",
        description: "Dynamic coastal habitats shaped by wind and waves. Important breeding grounds for birds and home to rare plants.",
        flora: "Marram grass, sea holly, lady's bedstraw",
        fauna: "Little tern, ringed plover, natterjack toad"
    },
    {
        name: "Freshwater Lakes",
        type: "Aquatic",
        locations: ["Lough Neagh", "Lough Corrib", "Lough Derg"],
        coordinates: [53.5, -8.0],
        color: "#4682b4",
        icon: "💧",
        description: "Ireland has numerous lakes supporting diverse aquatic life. These provide vital habitats for birds, fish, and invertebrates.",
        flora: "Water lilies, reeds, pondweeds",
        fauna: "Pike, trout, otter, great crested grebe, swans"
    },
    {
        name: "Native Pine Forest",
        type: "Forest",
        locations: ["Killarney", "Glenveagh"],
        coordinates: [51.95, -9.6],
        color: "#1b4d0e",
        icon: "🌲",
        description: "Remnants of ancient Scots pine forests. These once covered much of Ireland but are now rare and protected.",
        flora: "Scots pine, juniper, heather, bilberry",
        fauna: "Red deer, crossbill, red squirrel, pine marten"
    }
];

// ========================================
// CLIMATE ZONES DATA
// Weather and climate patterns across Ireland
// ========================================
const climateZones = [
    {
        name: "West Coast - Oceanic",
        region: "West Coast",
        coordinates: [53.5, -9.5],
        avgTemp: "10°C",
        rainfall: "1400mm/year (High)",
        icon: "🌧️",
        color: "#4169e1",
        description: "The west coast experiences Ireland's wettest weather due to Atlantic weather systems. Mild winters and cool summers with high rainfall year-round.",
        seasons: "Wet winters (Nov-Feb), Mild springs, Cool summers, Rainy autumns"
    },
    {
        name: "East Coast - Drier",
        region: "East Coast",
        coordinates: [53.3, -6.2],
        avgTemp: "10°C",
        rainfall: "750mm/year (Moderate)",
        icon: "⛅",
        color: "#87ceeb",
        description: "The east is in the rain shadow of mountains and receives less rainfall. Slightly warmer in summer and experiences more sunshine.",
        seasons: "Drier overall, Cold winters, Warmer summers"
    },
    {
        name: "Southeast - Warmest",
        region: "Southeast",
        coordinates: [52.2, -6.9],
        avgTemp: "11°C",
        rainfall: "800mm/year (Moderate)",
        icon: "☀️",
        color: "#ffa500",
        description: "Ireland's sunniest and warmest region. Wexford and Waterford get the most sunshine hours and warmest summer temperatures.",
        seasons: "Warm sunny summers, Mild winters, Lowest rainfall"
    },
    {
        name: "Mountain Climate",
        region: "Wicklow & Kerry Mountains",
        coordinates: [52.1, -9.6],
        avgTemp: "7°C",
        rainfall: "2000mm/year (Very High)",
        icon: "🏔️",
        color: "#8a9a5b",
        description: "Mountain areas are significantly cooler and wetter. Snow is possible in winter at higher elevations.",
        seasons: "Heavy rain, Snow in winter peaks, Cool year-round"
    },
    {
        name: "Midlands - Continental",
        region: "Central Ireland",
        coordinates: [53.3, -7.8],
        avgTemp: "9°C",
        rainfall: "900mm/year (Moderate)",
        icon: "🌤️",
        color: "#98d8c8",
        description: "More sheltered from Atlantic weather. Experiences more temperature extremes - colder winters and warmer summers than coastal areas.",
        seasons: "Cold winters, Pleasant summers, Moderate rainfall"
    }
];

// ========================================
// MARINE ZONES AND UNDERWATER LIFE
// Ocean ecosystems around Ireland's coast
// ========================================
const marineZones = [
    {
        name: "Continental Shelf",
        location: "South Coast",
        coordinates: [51.5, -8.0],
        depth: "0-200m",
        icon: "🌊",
        color: "#4682b4",
        description: "Shallow waters rich in nutrients. Important fishing grounds and home to diverse marine life.",
        species: ["Cod", "Haddock", "Plaice", "Crabs", "Lobsters"],
        imageUrl: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop"
    },
    {
        name: "Kelp Forests",
        location: "West Coast",
        coordinates: [53.3, -10.0],
        depth: "5-30m",
        icon: "🌿",
        color: "#2e8b57",
        description: "Underwater forests of giant kelp provide shelter and food for hundreds of species. These are Ireland's most productive marine habitats.",
        species: ["Seals", "Sea urchins", "Crabs", "Fish", "Octopus"],
        imageUrl: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=400&h=300&fit=crop"
    },
    {
        name: "Deep Atlantic Waters",
        location: "West of Ireland",
        coordinates: [53.0, -11.5],
        depth: "200-4000m",
        icon: "🐋",
        color: "#000080",
        description: "Deep oceanic waters where whales, dolphins, and large fish migrate through. Cold water coral reefs exist at depth.",
        species: ["Whales", "Dolphins", "Tuna", "Sharks", "Deep-sea corals"],
        imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop"
    },
    {
        name: "Rocky Reefs",
        location: "North Coast",
        coordinates: [55.2, -7.0],
        depth: "0-50m",
        icon: "🪨",
        color: "#696969",
        description: "Rocky underwater habitats with crevices and caves. Home to colorful sponges, anemones, and many fish species.",
        species: ["Wrasse", "Conger eels", "Lobsters", "Sea anemones", "Starfish"],
        imageUrl: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=400&h=300&fit=crop"
    },
    {
        name: "Sandy Seabed",
        location: "Irish Sea",
        coordinates: [53.5, -5.5],
        depth: "10-100m",
        icon: "🏖️",
        color: "#daa520",
        description: "Sandy bottoms where flatfish camouflage and rays burrow. Important nursery grounds for young fish.",
        species: ["Plaice", "Sole", "Rays", "Sand eels", "Shrimp"],
        imageUrl: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=400&h=300&fit=crop"
    },
    {
        name: "Estuaries",
        location: "Shannon Estuary",
        coordinates: [52.6, -9.6],
        depth: "0-20m",
        icon: "🦐",
        color: "#8b7d6b",
        description: "Where rivers meet the sea, creating brackish water habitats. Critical nursery areas for fish and feeding grounds for birds.",
        species: ["Salmon", "Sea trout", "Shrimp", "Flounder", "Wading birds"],
        imageUrl: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop"
    }
];

// ========================================
// IRISH COUNTIES DATA
// Basic information about Irish counties for map interactions
// ========================================
const irishCounties = [
    { name: "Dublin", coordinates: [53.35, -6.26], info: "Ireland's capital with coastal habitats and urban wildlife." },
    { name: "Cork", coordinates: [51.9, -8.5], info: "Ireland's largest county with diverse coastal and inland habitats." },
    { name: "Kerry", coordinates: [52.1, -9.6], info: "Home to Killarney National Park and Ireland's highest mountains." },
    { name: "Galway", coordinates: [53.3, -9.0], info: "Contains the unique Burren limestone landscape and extensive bogs." },
    { name: "Mayo", coordinates: [54.0, -9.5], info: "Wild Atlantic coast with blanket bogs and important bird habitats." },
    { name: "Donegal", coordinates: [54.8, -8.1], info: "Ireland's most northerly county with dramatic coastal cliffs." },
    { name: "Clare", coordinates: [52.8, -9.0], info: "Famous for the Cliffs of Moher and the Burren ecosystem." },
    { name: "Wicklow", coordinates: [53.0, -6.4], info: "The 'Garden of Ireland' with mountains, forests, and lakes." },
    { name: "Limerick", coordinates: [52.5, -8.8], info: "Rich farmland and important wetland habitats along the Shannon." },
    { name: "Waterford", coordinates: [52.2, -7.6], info: "Coastal county with diverse marine life and sunny climate." }
];

