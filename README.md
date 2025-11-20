# 🌿 EcoTracker Ireland

An interactive ecological map showcasing Ireland's wildlife, ecosystems, climate zones, and marine life. Built as a beginner-friendly web application with clean, well-commented code.

![EcoTracker](https://img.shields.io/badge/EcoTracker-Ireland-green)
![No Backend Required](https://img.shields.io/badge/Backend-Not%20Required-blue)
![Beginner Friendly](https://img.shields.io/badge/Beginner-Friendly-success)

## 🎯 Features

### 🦌 Wildlife & Biomes Mode (Default)
- **12 Irish animal species** with detailed information
- Clickable markers showing where animals live
- Animal photos, scientific names, and endangered status
- **6 distinct biomes**: forests, bogs, grasslands, coastal areas, and more
- Ecosystem information with typical flora and fauna

### 🌦️ Climate Mode
- **5 climate zones** covering Ireland
- Temperature and rainfall data for each region
- Seasonal weather patterns
- Visual overlays showing climate boundaries

### 🐟 Underwater Mode
- **6 marine zones** around Ireland's coast
- Depth information and marine habitats
- Common species found in each zone
- Kelp forests, reefs, deep waters, and more

### 📸 Wildlife Sighting Form
- Report wildlife observations
- Simple form with species, location, date, and description
- Demo functionality (no backend required)

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No installation or build tools required!

### How to Run

1. **Download or clone** this project
2. **Open `index.html`** in your web browser
3. That's it! The map will load automatically

**Alternative methods:**
- Double-click `index.html` 
- Right-click `index.html` → "Open with" → Choose your browser
- If you have VS Code with Live Server: Right-click `index.html` → "Open with Live Server"

## 📁 Project Structure

```
EcoTracker/
│
├── index.html          # Main HTML page with map container
├── styles.css          # All styling (colors, layouts, animations)
├── data.js             # Irish ecological data (animals, biomes, climate)
├── app.js              # Main application logic and interactivity
└── README.md           # This file
```

## 🎓 How It Works (For Beginners)

### HTML (`index.html`)
The HTML file creates the structure:
- Header with title
- Control panel with mode buttons
- Map container (where Leaflet.js displays the map)
- Legend showing what icons mean
- Modal popup for wildlife sighting form

### CSS (`styles.css`)
The CSS file makes everything look good:
- Colors and gradients
- Button styles and hover effects
- Popup designs
- Responsive design for mobile devices
- Custom marker styling

### JavaScript (`data.js`)
This file contains all the Irish ecological data:
- `irishAnimals` - Array of 12 animal species with locations
- `irishBiomes` - Array of 6 ecosystem types
- `climateZones` - Array of 5 climate regions
- `marineZones` - Array of 6 underwater habitats
- `irishCounties` - Basic county information

### JavaScript (`app.js`)
The main application file handles all interactivity:
- Initializes the Leaflet map centered on Ireland
- Creates clickable markers for animals, biomes, climate, and marine zones
- Switches between different modes
- Handles user interactions (clicks, form submissions)
- Updates the legend and info panel

## 🗺️ Technologies Used

- **HTML5** - Page structure
- **CSS3** - Styling and animations
- **JavaScript (ES6)** - Application logic
- **[Leaflet.js](https://leafletjs.com/)** - Interactive map library
- **OpenStreetMap** - Map tiles (free and open-source)

## 🎨 Customization Ideas

Want to expand this project? Here are some ideas:

1. **Add More Animals**
   - Edit `data.js` → Add new objects to `irishAnimals` array
   - Find coordinates using [Google Maps](https://maps.google.com)

2. **Add More Biomes**
   - Edit `data.js` → Add to `irishBiomes` array
   - Use different emoji icons and colors

3. **Change Map Style**
   - Edit `app.js` → Change the tile layer URL
   - Try other providers: CartoDB, Stamen, etc.

4. **Add Sound Effects**
   - Add animal sounds when clicking markers
   - Use the HTML5 Audio API

5. **Add a Search Feature**
   - Create a search box to find specific animals or locations
   - Filter markers based on search terms

6. **Connect to a Real Backend**
   - Set up a database to store wildlife sightings
   - Use Node.js + Express or Firebase
   - Store user submissions permanently

## 📚 Learning Resources

If you're new to web development, here are helpful resources:

### HTML & CSS
- [MDN Web Docs](https://developer.mozilla.org/) - Comprehensive guides
- [W3Schools](https://www.w3schools.com/) - Beginner tutorials
- [CSS-Tricks](https://css-tricks.com/) - CSS tips and tricks

### JavaScript
- [JavaScript.info](https://javascript.info/) - Modern JavaScript tutorial
- [FreeCodeCamp](https://www.freecodecamp.org/) - Interactive coding lessons
- [Eloquent JavaScript](https://eloquentjavascript.net/) - Free online book

### Leaflet.js
- [Leaflet Documentation](https://leafletjs.com/reference.html) - Official docs
- [Leaflet Tutorials](https://leafletjs.com/examples.html) - Step-by-step guides

## 🐛 Troubleshooting

### Map Doesn't Load
- **Check internet connection** - Leaflet loads from a CDN
- **Check browser console** - Press F12 to see errors
- **Try a different browser**

### Markers Don't Appear
- **Check browser console** for JavaScript errors
- Make sure all files are in the same folder
- Verify `data.js` loads before `app.js`

### Images Don't Load
- **Internet connection required** - Images load from Unsplash
- Check if Unsplash is accessible in your region

### Form Doesn't Submit
- This is a demo - submissions are logged to console only
- Press F12 → Console to see submitted data
- To make it real, you need a backend server

## 🌍 About Ireland's Ecology

Ireland is an island nation with diverse ecosystems:

- **Temperate Climate** - Mild, wet weather year-round
- **Coastal Habitats** - 7,500km of coastline with cliffs, beaches, and estuaries
- **Bogs** - Ireland has some of Europe's last remaining blanket bogs
- **Marine Life** - Rich waters with whales, dolphins, and seals
- **Endemic Species** - Unique subspecies like the Irish hare
- **Conservation** - Many species are protected and recovering

## 📄 License

This project is open-source and available for educational purposes. Feel free to use, modify, and learn from the code.

## 🙏 Credits

- **Map Data**: [OpenStreetMap](https://www.openstreetmap.org/) contributors
- **Map Library**: [Leaflet.js](https://leafletjs.com/)
- **Images**: [Unsplash](https://unsplash.com/) (placeholder images)
- **Ecological Data**: Educational placeholder data for demonstration

## 🤝 Contributing

This is a learning project! If you want to improve it:

1. Add more Irish species
2. Improve the data accuracy
3. Add new features
4. Fix bugs
5. Improve documentation

## 📞 Support

If you're learning web development and need help understanding the code:

1. Read the comments in each file carefully
2. Check the browser console (F12) for error messages
3. Look up unfamiliar terms on [MDN Web Docs](https://developer.mozilla.org/)
4. Try modifying small things to see what happens
5. Don't be afraid to break things - that's how you learn!

## 🎓 Educational Use

This project is perfect for:
- Learning HTML, CSS, and JavaScript
- Understanding how interactive maps work
- Practicing with APIs and external libraries
- Learning about Ireland's ecology
- School projects and presentations
- Portfolio projects for beginners

---

**Made with 🌿 for nature enthusiasts and coding learners**

Enjoy exploring Ireland's incredible ecosystems! 🇮🇪

