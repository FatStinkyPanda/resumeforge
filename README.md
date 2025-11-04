# ResumeForge

A modern, interactive template showcase platform for exploring professional resume designs. Browse through 26 distinct resume templates with 130+ style variations to find the perfect design for your career.

![ResumeForge](public/assets/images/showcase-placeholder.png)

## 🌟 Features

- **26 Diverse Templates**: From traditional to modern, minimalist to bold
- **130+ Style Variations**: Multiple color palettes and design philosophies for each template
- **Smart Search & Filtering**: Real-time search across template names, descriptions, and job suitability
- **Interactive Previews**: Hover to preview styles, click for detailed information
- **Responsive Design**: Mobile-first grid layout that works on all devices
- **Zero Dependencies**: Built with vanilla JavaScript, HTML5, and CSS3

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/FatStinkyPanda/resumeforge.git
   cd resumeforge
   ```

2. **Open in browser**
   ```bash
   # Using Python's built-in server
   python3 -m http.server 8000

   # Or using Node.js
   npx serve public
   ```

3. **Navigate to** `http://localhost:8000/public/`

That's it! No build process, no installation required.

## 📁 Project Structure

```
resumeforge/
├── public/
│   ├── index.html              # Main HTML structure
│   ├── styles/
│   │   └── style.css           # All styling and theme variables
│   ├── js/
│   │   ├── template_theory.js  # Template data (26 templates)
│   │   ├── style_theory.js     # Style variations (130+ styles)
│   │   └── showcase.js         # Gallery logic, modals, search
│   └── assets/
│       ├── previews/           # Template preview images
│       └── images/             # UI assets
└── README.md
```

## 🎨 Template Categories

ResumeForge includes templates for various professional contexts:

| Category | Templates | Best For |
|----------|-----------|----------|
| **Traditional** | Alpha, Mike, Yankee | Corporate, Finance, Legal |
| **Modern** | Beta, Juliet, Uniform | Tech, Startups, Marketing |
| **Creative** | Echo, India, Lima | Design, Media, Creative Industries |
| **Academic** | Hotel, Tango | Research, Education, PhD |
| **Minimalist** | Foxtrot, Victor, Sierra | Any field, clean aesthetic |
| **Bold** | Papa, Zebra, Kilo | Stand-out applications |
| **Specialized** | Oscar (Projects), Romeo (Timeline), November (Skills-first) | Specific career needs |

## 🔍 Template Highlights

### Alpha - Traditional & Clear
Single-column layout with bold typography. Perfect for traditional industries.

### Beta - Modern & Organized
Two-column design with sidebar. Great for tech professionals.

### Kilo - Tech-Focused
Dark theme with code-inspired aesthetics. Ideal for developers.

### Lima - Infographic-Inspired
Visual data presentation. Perfect for marketing and design roles.

### Oscar - Project-Centric
Detailed project showcase. Great for portfolios and project managers.

*...and 21 more unique templates!*

## 💡 How It Works

1. **Browse**: Scroll through the template gallery
2. **Search**: Use the search bar to filter by keywords, job types, or styles
3. **Preview**: Hover over style chips to see a quick preview
4. **Explore**: Click on styles to view detailed information including:
   - Color palettes
   - Design philosophy
   - Best suited professions
   - Page count

## 🛠️ Technologies

- **HTML5**: Semantic markup with accessibility features
- **CSS3**:
  - CSS Grid for responsive layouts
  - CSS Custom Properties for theming
  - Smooth animations and transitions
- **Vanilla JavaScript**:
  - No frameworks or libraries
  - Efficient DOM manipulation
  - Debounced search for performance
  - Modal system with keyboard support

## 🎯 Key Features

### Smart Search System
Real-time filtering across:
- Template names and descriptions
- Style variations
- Color palettes
- Job suitability categories

### Interactive Modals
- **Preview Modal**: Multi-page template previews with navigation
- **Details Modal**: Comprehensive style information
- Keyboard support (ESC to close)
- Click-outside-to-close functionality

### Responsive Design
- Mobile-first approach
- Grid layout adapts from 1 to 4 columns
- Touch-friendly interactions

## 📊 Template Data Structure

Each template includes:
```javascript
{
  key: "alpha",
  name: "Alpha",
  tagline: "Traditional & Clear",
  description: "Markdown description...",
  styles: [
    {
      name: "Classic Professional",
      colors: ["#2C3E50", "#ECF0F1", "#3498DB"],
      bestSuitedJobs: ["Corporate", "Finance", "Legal"],
      pageCount: 1
    },
    // 4 more style variations
  ]
}
```

## 🎨 Customization

### Adding New Templates

1. **Add template to `template_theory.js`**:
   ```javascript
   {
     key: "newtemplate",
     name: "New Template",
     tagline: "Your Tagline",
     description: "Your description in markdown"
   }
   ```

2. **Add styles to `style_theory.js`**:
   ```javascript
   {
     template: "newtemplate",
     key: "style1",
     name: "Style Name",
     brief: "Brief description",
     colors: ["#COLOR1", "#COLOR2"],
     bestSuitedJobs: ["Job1", "Job2"],
     pageCount: 1
   }
   ```

3. **Add preview images** to `public/assets/previews/newtemplate/`

### Styling
Modify CSS custom properties in `style.css`:
```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --accent-color: #f093fb;
  /* More variables... */
}
```

## 🚧 Development Status

**Current State**: Core functionality complete
- ✅ 26 templates with 130+ style variations
- ✅ Interactive gallery with search
- ✅ Preview and details modals
- ✅ Responsive design
- ⏳ Preview images (placeholders in place)

## 🤝 Contributing

Contributions are welcome! Areas for contribution:
- Additional template designs
- New style variations
- Preview image generation
- Accessibility improvements
- Performance optimizations

## 📝 License

This project is open source and available under the MIT License.

## 🔗 Links

- **Repository**: [FatStinkyPanda/resumeforge](https://github.com/FatStinkyPanda/resumeforge)
- **Live Demo**: *(Coming soon)*

## 💬 Support

Found a bug or have a feature request? Please open an issue on GitHub.

---

**Made with ❤️ for job seekers everywhere**
