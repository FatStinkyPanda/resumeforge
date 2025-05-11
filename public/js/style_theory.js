// resumeforge/public/js/style_theory.js
/**
 * @fileoverview Provides detailed descriptions, color palettes, and job suitability
 * for each specific style variation within every resume template.
 */

const styleTheories = [
    // --- Alpha Template Styles ---
    {
        templateKey: "alpha",
        styleKey: "classic",
        displayName: "Alpha - Classic Heritage",
        briefDescription: "A timeless and professional single-column layout, emphasizing clarity and readability with traditional typography and a balanced structure. Conveys reliability and experience.",
        colorPalette: ["Charcoal Black (#36454F)", "Crisp White (#FFFFFF)", "Medium Gray (#808080)", "Subtle Navy Blue Accent (#000080)", "Light Silver (#C0C0C0)"],
        bestSuitedForJobs: ["Accountant", "Lawyer/Attorney", "Administrative Director", "Bank Manager", "Civil Servant", "Operations Manager", "University Professor", "Financial Controller", "Senior Executive (Traditional Industries)"],
        numPages: 2
    },
    {
        templateKey: "alpha",
        styleKey: "modern",
        displayName: "Alpha - Modern Impact",
        briefDescription: "A clean, contemporary take on the single-column format, utilizing sans-serif fonts, generous whitespace, and a focus on scannability for today's job market.",
        colorPalette: ["Dark Slate Gray (#2F4F4F)", "White (#FFFFFF)", "Cool Gray (#778899)", "Vibrant Teal Accent (#008080)", "Light Steel Blue (#B0C4DE)"],
        bestSuitedForJobs: ["Marketing Specialist", "Project Manager", "Business Analyst", "HR Generalist", "Consultant", "Content Strategist", "Product Manager", "Operations Coordinator"],
        numPages: 2
    },
    {
        templateKey: "alpha",
        styleKey: "bold",
        displayName: "Alpha - Bold Authority",
        briefDescription: "A strong, assertive single-column design featuring impactful typography, clear sectioning with strong borders, and a commanding presence. Ideal for leadership or roles requiring confidence.",
        colorPalette: ["Jet Black (#0A0A0A)", "Bright White (#FFFFFF)", "Deep Red Accent (#A52A2A)", "Graphite Gray (#383838)", "Metallic Silver (#A8A9AD)"],
        bestSuitedForJobs: ["Sales Director", "Executive Manager", "Lead Engineer", "Chief Financial Officer (CFO)", "Public Speaker", "Entrepreneur", "Business Owner", "Construction Manager"],
        numPages: 2
    },
    {
        templateKey: "alpha",
        styleKey: "executive",
        displayName: "Alpha - Executive Presence",
        briefDescription: "A refined and sophisticated single-column layout tailored for senior-level professionals. Features elegant typography, ample whitespace, and a focus on highlighting key achievements and leadership.",
        colorPalette: ["Deep Navy Blue (#000080)", "Cream (#FFFDD0)", "Charcoal Gray (#36454F)", "Gold Accent (#FFD700)", "Silver Gray (#BCC6CC)"],
        bestSuitedForJobs: ["CEO", "COO", "VP of Operations", "Board Member", "Senior Partner (Consulting/Law)", "Non-Profit Director", "Managing Director", "Department Head"]
    },
    {
        templateKey: "alpha",
        styleKey: "contemporary",
        displayName: "Alpha - Contemporary Clarity",
        briefDescription: "A fresh and current single-column style that balances modern aesthetics with straightforward readability. Uses clean lines and a subtle color palette for a polished look.",
        colorPalette: ["Midnight Blue (#191970)", "Off-White (#FAF9F6)", "Cool Medium Gray (#696969)", "Soft Aqua Accent (#7FFFD4)", "Light Periwinkle (#CCCCFF)"],
        bestSuitedForJobs: ["Communications Manager", "UX Writer", "Technical Writer", "Customer Success Manager", "Financial Planner", "Academic Advisor", "Content Marketing Manager", "Digital Strategist"]
    },

    // --- Beta Template Styles ---
    {
        templateKey: "beta",
        styleKey: "professional",
        displayName: "Beta - Professional Blueprint",
        briefDescription: "A classic two-column layout with a clearly defined sidebar. Employs traditional fonts and a conservative color scheme for a highly professional and organized appearance.",
        colorPalette: ["Dark Blue (#003366)", "White (#FFFFFF)", "Light Gray (#D3D3D3)", "Muted Blue Accent (#6A8EAE)", "Silver (#C0C0C0)"],
        bestSuitedForJobs: ["Corporate Manager", "Financial Analyst", "Legal Counsel", "IT Manager", "Senior Accountant", "Business Development Manager", "Operations Manager", "Logistics Coordinator"]
    },
    {
        templateKey: "beta",
        styleKey: "creative",
        displayName: "Beta - Creative Canvas",
        briefDescription: "A vibrant and modern two-column design. Uses unique color accents, contemporary typography, and often a visual timeline to showcase creativity and dynamism.",
        colorPalette: ["Dark Slate Gray (#2d3748)", "White (#FFFFFF)", "Teal Accent (#38b2ac)", "Light Gray (#edf2f7)", "Soft Orange Highlight (#f6ad55)"],
        bestSuitedForJobs: ["Graphic Designer", "Marketing Coordinator", "Web Developer (Frontend)", "Content Creator", "UX/UI Designer", "Brand Strategist", "Social Media Manager", "Animator"]
    },
    {
        templateKey: "beta",
        styleKey: "tech",
        displayName: "Beta - Tech Innovator",
        briefDescription: "A sleek, modern two-column layout geared towards tech professionals. Features monospace or clean sans-serif fonts, often with a dark mode sidebar and tech-inspired accents.",
        colorPalette: ["Dark Charcoal (#282c34)", "Light Cyan (#61afef)", "Medium Gray (#abb2bf)", "Electric Blue Accent (#56b6c2)", "Off-White (#dcdfe4)"],
        bestSuitedForJobs: ["Software Engineer", "Data Scientist", "Cybersecurity Analyst", "DevOps Engineer", "IT Support Specialist", "Network Administrator", "Cloud Architect", "AI/ML Engineer"]
    },
    {
        templateKey: "beta",
        styleKey: "corporate",
        displayName: "Beta - Corporate Structure",
        briefDescription: "A polished and authoritative two-column format, ideal for corporate environments. Features strong headings, a clear hierarchy, and a refined color palette projecting confidence.",
        colorPalette: ["Navy Blue (#001f3f)", "Crisp White (#FFFFFF)", "Silver Gray (#A9A9A9)", "Deep Burgundy Accent (#800020)", "Light Beige (#F5F5DC)"],
        bestSuitedForJobs: ["Management Consultant", "Operations Director", "Chief Marketing Officer (CMO)", "HR Director", "Investment Banker", "Strategy Manager", "Finance Director", "Corporate Lawyer"]
    },
    {
        templateKey: "beta",
        styleKey: "sleek",
        displayName: "Beta - Sleek Minimalist",
        briefDescription: "A highly refined and minimalist two-column design. Prioritizes whitespace, clean typography, and subtle visual cues for a sophisticated and uncluttered presentation.",
        colorPalette: ["Monochromatic Grays (Dark #212121, Medium #757575, Light #E0E0E0)", "White (#FFFFFF)", "Bright Blue Accent (#2979FF)", "Matte Black (#121212)"],
        bestSuitedForJobs: ["Product Manager (Tech)", "Architect", "UX Researcher", "Minimalist Designer", "Technical Project Manager", "Data Analyst", "Information Architect", "Systems Analyst"]
    },

    // --- Charlie Template Styles ---
    {
        templateKey: "charlie",
        styleKey: "academic",
        displayName: "Charlie - Academic Scholar",
        briefDescription: "An elegant and formal layout suitable for CVs. Features classic serif typography, ample space for publications and research, and a distinguished header.",
        colorPalette: ["Deep Maroon (#800000)", "Cream (#FFFDD0)", "Dark Gray (#333333)", "Old Gold Accent (#CFB53B)", "Ivory (#FFFFF0)"],
        bestSuitedForJobs: ["University Professor", "Researcher", "Postdoctoral Fellow", "Archivist", "Librarian (Academic)", "Museum Curator", "Historian", "Journal Editor"]
    },
    {
        templateKey: "charlie",
        styleKey: "chloe",
        displayName: "Charlie - Chloe Floral",
        briefDescription: "A warm, floral-themed aesthetic with unique cursive and serif typography. The two-column layout (info panel often right) is refined with decorative accents.",
        colorPalette: ["Coral Orange (#FF7F50)", "Light Salmon (#FFA07A)", "PeachPuff (#FFDAB9)", "Warm Cream (#FFFBF5)", "Dark Brown Text (#5D4037)", "Gold Accent (#DAA520)"],
        bestSuitedForJobs: ["Event Planner", "Wedding Coordinator", "Floral Designer", "Boutique Owner", "Lifestyle Blogger", "Interior Decorator", "Pastry Chef", "Artisan Baker"]
    },
    {
        templateKey: "charlie",
        styleKey: "sophistication", // Updated from "corporate"
        displayName: "Charlie - Sophistication",
        briefDescription: "A highly polished and sophisticated design for professionals. Balances a strong header with a clean two-column structure, using refined colors and typography for an upscale look.",
        colorPalette: ["Charcoal Gray (#36454F)", "Off-White (#F8F8FF)", "Steel Blue (#4682B4)", "Silver Accent (#C0C0C0)", "Muted Gold (#B08D57)"],
        bestSuitedForJobs: ["Executive Assistant", "Chief Operating Officer (COO)", "Business Strategist", "Management Consultant", "Finance Director", "PR Manager", "Senior Consultant", "Chief of Staff"]
    },
    {
        templateKey: "charlie",
        styleKey: "elegant",
        displayName: "Charlie - Elegant Distinction",
        briefDescription: "A highly refined and graceful style, featuring delicate typography, subtle decorative lines, and a balanced layout. Perfect for conveying sophistication and attention to detail.",
        colorPalette: ["Dusty Rose (#D8BFD8)", "Ivory (#FFFFF0)", "Soft Gray (#B0B0B0)", "Rose Gold Accent (#B76E79)", "Charcoal Text (#4A4A4A)"],
        bestSuitedForJobs: ["Art Director", "Luxury Brand Manager", "Gallery Director", "High-End Retail Manager", "Publishing Editor", "Philanthropy Manager", "Personal Stylist", "Museum Registrar"]
    },
    {
        templateKey: "charlie",
        styleKey: "artisan",
        displayName: "Charlie - Artisan Craft",
        briefDescription: "A unique, handcrafted feel with artistic typography and natural textures or accents. Suited for creative individuals valuing originality and bespoke presentation.",
        colorPalette: ["Terracotta (#E2725B)", "Linen White (#FAF0E6)", "Olive Green (#808000)", "Copper Accent (#B87333)", "Graphite (#36454F)"],
        bestSuitedForJobs: ["Illustrator", "Jewelry Designer", "Craft Brewery Owner", "Bespoke Tailor", "Ceramic Artist", "Independent Author", "Furniture Maker", "Artisan Chocolatier"]
    },

    // --- Delta Template Styles ---
    {
        templateKey: "delta",
        styleKey: "traditional",
        displayName: "Delta - Traditional Harmony",
        briefDescription: "A classic and balanced design featuring a prominent header with photo/crest options, followed by a clean two-column layout. Uses serif fonts for a timeless appeal.",
        colorPalette: ["Forest Green (#228B22)", "Cream (#FFFDD0)", "Dark Brown (#5C4033)", "Antique Gold Accent (#B8860B)", "Beige (#F5F5DC)"],
        bestSuitedForJobs: ["Non-Profit Manager", "Historian", "Librarian", "Estate Manager", "Antiquarian Bookseller", "Genealogist", "Museum Collections Manager", "Archivist (Traditional)"]
    },
    {
        templateKey: "delta",
        styleKey: "contemporary",
        displayName: "Delta - Contemporary Blend",
        briefDescription: "A modern interpretation of the Delta structure, using sans-serif typography and a brighter, cleaner color palette while retaining the balanced header and two-column layout.",
        colorPalette: ["Slate Blue (#6A5ACD)", "White (#FFFFFF)", "Cool Gray (#A9A9A9)", "Silver Accent (#C0C0C0)", "Teal Highlight (#008080)"],
        bestSuitedForJobs: ["Marketing Manager", "Product Owner", "Urban Planner", "Communications Specialist", "Management Analyst", "UX Strategist", "Business Systems Analyst", "Digital Project Manager"]
    },
    {
        templateKey: "delta",
        styleKey: "compact",
        displayName: "Delta - Compact Professional",
        briefDescription: "A space-efficient version of the Delta template, optimizing content density without sacrificing professionalism. Ideal for fitting more information onto fewer pages.",
        colorPalette: ["Charcoal (#36454F)", "Light Gray (#D3D3D3)", "White (#FFFFFF)", "Muted Blue (#6495ED)", "Dark Teal (#006D6F)"],
        bestSuitedForJobs: ["Experienced Engineer", "Senior Project Manager", "Medical Doctor (CV)", "Consultant with multiple projects", "Academic with extensive publications", "Technical Lead", "Research Scientist (Summary)"]
    },
    {
        templateKey: "delta",
        styleKey: "growth",
        displayName: "Delta - Growth & Bloom",
        briefDescription: "Features subtle floral or nature-inspired decorative elements within the Delta structure. Conveys growth, creativity, and a fresh perspective. Uses warm, natural colors.",
        colorPalette: ["Warm Coral (#FF7F50)", "Sage Green (#9DC183)", "Creamy Beige (#F5F5DC)", "Soft Gold Accent (#FFEC8B)", "Earthy Brown Text (#8B4513)"],
        bestSuitedForJobs: ["Environmental Consultant", "Horticulturist", "Wellness Coach", "Sustainable Business Owner", "Landscape Architect", "Yoga Instructor", "Organic Farmer", "Holistic Nutritionist"]
    },
    {
        templateKey: "delta",
        styleKey: "balanced",
        displayName: "Delta - Balanced Symmetry",
        briefDescription: "Emphasizes visual symmetry and a harmonious layout. The distinctive header and two-column content are presented with clean lines and a professional, neutral palette.",
        colorPalette: ["Stone Gray (#808080)", "Off-White (#FAF9F6)", "Taupe (#483C32)", "Brushed Steel Accent (#BCC6CC)", "Deep Indigo Text (#4B0082)"],
        bestSuitedForJobs: ["Architect", "Financial Planner", "Operations Manager", "Supply Chain Analyst", "Quality Assurance Manager", "Technical Lead", "Industrial Designer", "Civil Engineer (Planning)"]
    },

    // --- Echo Template Styles ---
    {
        templateKey: "echo",
        styleKey: "innovative",
        displayName: "Echo - Innovative Edge",
        briefDescription: "A highly stylized and modern design featuring unique graphic flourishes and connectors. The central photo is a focal point. Ideal for making a bold, memorable statement.",
        colorPalette: ["Deep Purple (#4B0082)", "Electric Blue Accent (#00FFFF)", "Silver (#C0C0C0)", "Charcoal (#36454F)", "White (#FFFFFF)"],
        bestSuitedForJobs: ["Creative Director", "UX/UI Lead", "Game Designer", "Digital Artist", "Innovation Consultant", "Brand Evangelist", "Futurist", "Experiential Designer"]
    },
    {
        templateKey: "echo",
        styleKey: "memorable", // Updated from "balanced"
        displayName: "Echo - Memorable Artistry",
        briefDescription: "A distinctive and artistic take on the Echo structure, balancing unique graphic elements with a professional color palette and clear typography for a lasting impression.",
        colorPalette: ["Teal (#008080)", "Warm Gray (#808069)", "Cream (#FFFDD0)", "Copper Accent (#B87333)", "Dark Slate (#2F4F4F)"],
        bestSuitedForJobs: ["Architectural Designer", "Product Designer", "Marketing Strategist", "Frontend Developer with Design Focus", "Media Producer", "Information Architect", "Exhibition Curator"]
    },
    {
        templateKey: "echo",
        styleKey: "distinctive",
        displayName: "Echo - Distinctive Flair",
        briefDescription: "Emphasizes unique visual treatments for section headings and a strong overall brand presence. Uses a striking color combination to stand out.",
        colorPalette: ["Orange Red (#FF4500)", "Dark Teal (#005F5F)", "Off-White (#FAF0E6)", "Gold Accent (#FFD700)", "Graphite (#36454F)"],
        bestSuitedForJobs: ["Fashion Designer", "Event Experience Designer", "Advertising Art Director", "Visual Merchandiser", "Set Designer", "Brand Consultant", "Creative Entrepreneur"]
    },
    {
        templateKey: "echo",
        styleKey: "avant-garde",
        displayName: "Echo - Avant-Garde Vision",
        briefDescription: "Pushes the boundaries of resume design with bold graphic elements, unconventional typography, and a highly artistic layout. For roles where cutting-edge creativity is key.",
        colorPalette: ["Black (#000000)", "White (#FFFFFF)", "Neon Green Accent (#39FF14)", "Metallic Silver (#A8A9AD)", "Electric Purple (#BF00FF)"],
        bestSuitedForJobs: ["Experimental Artist", "Futurist", "AI Ethicist (with creative portfolio)", "Virtual Reality Designer", "Performance Artist", "Digital Nomad (Creative)", "Installation Artist"]
    },
    {
        templateKey: "echo",
        styleKey: "signature",
        displayName: "Echo - Signature Statement",
        briefDescription: "A sophisticated and personalized version of Echo, focusing on high-end typography and refined graphic elements. Creates a strong, unique personal brand identity.",
        colorPalette: ["Deep Indigo (#301934)", "Antique Gold (#AE9C45)", "Ivory (#FFFFF0)", "Bronze Accent (#CD7F32)", "Charcoal (#2C3539)"],
        bestSuitedForJobs: ["Luxury Brand Consultant", "Bespoke Service Provider", "High-End Event Planner", "Personal Stylist (celebrity/executive)", "Art Curator (Private Collections)", "Boutique Hotelier", "Fine Dining Chef"]
    },

    // --- Foxtrot Template Styles ---
    {
        templateKey: "foxtrot",
        styleKey: "minimal-serif",
        displayName: "Foxtrot - Minimal Serif Elegance",
        briefDescription: "Purely typographic single-column layout using classic serif fonts. Emphasizes readability and content with generous whitespace and understated elegance.",
        colorPalette: ["Black (#000000)", "White (#FFFFFF)", "Light Gray (#F0F0F0) for subtle lines, if any", "Dark Gray Text (#333333)"],
        bestSuitedForJobs: ["Academic Researcher", "Writer/Editor", "Historian", "Philosopher", "Classical Musician", "Legal Scholar", "Librarian (Research)", "Policy Analyst"]
    },
    {
        templateKey: "foxtrot",
        styleKey: "minimal-sans",
        displayName: "Foxtrot - Minimal Sans Clarity",
        briefDescription: "Clean and modern single-column design focusing on sans-serif typography. Offers a contemporary, uncluttered presentation for clarity and directness.",
        colorPalette: ["Dark Gray (#4A4A4A)", "White (#FFFFFF)", "Cool Light Gray (#E8E8E8)", "Charcoal Text (#212121)"],
        bestSuitedForJobs: ["Technical Writer", "Software Developer (minimalist preference)", "UX Writer", "Information Architect", "Librarian", "Journalist", "Content Strategist (Technical)", "Instructional Designer"]
    },
    {
        templateKey: "foxtrot",
        styleKey: "pure",
        displayName: "Foxtrot - Pure Content Focus",
        briefDescription: "An extremely stripped-down, text-centric single-column style. Maximum focus on the written word with impeccable typographic hierarchy.",
        colorPalette: ["Near Black (#1C1C1C)", "Off-White (#FCFCFC)", "Very Light Gray (#F5F5F5)"],
        bestSuitedForJobs: ["Novelist", "Poet", "Grant Writer", "Policy Analyst", "Copywriter", "Manuscript Editor", "Academic Author", "Legal Brief Writer"]
    },
    {
        templateKey: "foxtrot",
        styleKey: "essential",
        displayName: "Foxtrot - Essential Readability",
        briefDescription: "A minimalist single-column layout optimized for effortless reading. Uses a highly legible font and careful spacing to ensure content is easily digestible.",
        colorPalette: ["Dark Slate (#2F4F4F)", "Paper White (#FEFEFE)", "Soft Gray (#DCDCDC)"],
        bestSuitedForJobs: ["Instructional Designer", "Medical Writer", "Curriculum Developer", "Research Analyst", "Legal Secretary/Paralegal", "Technical Editor", "Documentation Specialist"]
    },
    {
        templateKey: "foxtrot",
        styleKey: "typographic-focus",
        displayName: "Foxtrot - Typographic Masterpiece",
        briefDescription: "A single-column design where typography itself is the primary aesthetic element. Showcases beautiful font pairings and meticulous spacing for a refined, sophisticated look.",
        colorPalette: ["Deep Charcoal (#343434)", "Antique White (#FAEBD7)", "Warm Gray (#8C8C8C)"],
        bestSuitedForJobs: ["Typographer", "Book Designer", "Publishing Professional", "Brand Identity Designer (text-focused)", "Copy Editor (senior)", "Art Magazine Editor", "Calligrapher (CV)"]
    },

    // --- Golf Template Styles ---
    {
        templateKey: "golf",
        styleKey: "corporate-blue",
        displayName: "Golf - Corporate Blue Chip",
        briefDescription: "A professional two-column layout with a wide main content area and a narrow sidebar. Uses a classic blue and gray palette for a corporate, trustworthy feel.",
        colorPalette: ["Navy Blue (#000080)", "White (#FFFFFF)", "Light Gray (#D3D3D3)", "Steel Blue Accent (#4682B4)", "Charcoal Text (#36454F)"],
        bestSuitedForJobs: ["Financial Advisor", "Management Trainee", "Corporate Trainer", "Sales Executive", "Business Consultant", "Bank Officer", "Account Manager", "Insurance Agent"]
    },
    {
        templateKey: "golf",
        styleKey: "executive-gray",
        displayName: "Golf - Executive Slate",
        briefDescription: "A sophisticated and authoritative two-column design using shades of gray with a sharp accent. Conveys precision and a strong executive presence.",
        colorPalette: ["Charcoal Gray (#36454F)", "White (#FFFFFF)", "Silver (#C0C0C0)", "Dark Red Accent (#8B0000)", "Black Text (#000000)"],
        bestSuitedForJobs: ["Chief Executive Officer (CEO)", "VP of Finance", "Senior Partner (Law Firm)", "Board Director", "Investment Manager", "Business Strategist", "Chief Technology Officer (CTO)"]
    },
    {
        templateKey: "golf",
        styleKey: "boardroom",
        displayName: "Golf - Boardroom Classic",
        briefDescription: "A highly polished and formal two-column style, designed for top-tier corporate roles. Features meticulous grid alignment and premium typography.",
        colorPalette: ["Deep Navy (#001A33)", "Cream (#FFFDD0)", "Graphite (#404040)", "Bronze Accent (#CD7F32)", "Off-Black Text (#1A1A1A)"],
        bestSuitedForJobs: ["C-Suite Executives (CFO, CIO, CMO)", "Managing Director", "Corporate Secretary", "Senior Legal Counsel", "Head of Department", "Investment Portfolio Manager", "Chairman of the Board"]
    },
    {
        templateKey: "golf",
        styleKey: "metropolitan",
        displayName: "Golf - Metropolitan Pro",
        briefDescription: "A sleek, urban take on the professional two-column layout. Uses a contemporary color scheme and clean lines for a modern, business-savvy look.",
        colorPalette: ["Dark Teal (#005F5F)", "Bright White (#FFFFFF)", "Cool Gray (#708090)", "Orange Accent (#FFA500)", "Dark Slate Text (#2F4F4F)"],
        bestSuitedForJobs: ["Urban Planner", "Real Estate Developer", "Marketing Director", "City Manager", "Business Development Lead (Tech)", "Architect (Commercial)", "Management Consultant (Urban Sector)"]
    },
    {
        templateKey: "golf",
        styleKey: "precision",
        displayName: "Golf - Precision Grid",
        briefDescription: "Emphasizes strong grid alignment and a structured, data-driven feel within its two columns. Perfect for roles requiring analytical skills and attention to detail.",
        colorPalette: ["Steel Blue (#4682B4)", "Off-White (#F8F8FF)", "Light Steel Gray (#D1D0CE)", "Green Accent (#2E8B57)", "Dark Gray Text (#2F2F2F)"],
        bestSuitedForJobs: ["Data Analyst", "Business Intelligence Analyst", "Engineer (Civil/Mechanical)", "Quality Assurance Manager", "Logistics Coordinator", "Statistician", "Financial Modeler", "Actuary"]
    },

    // --- Hotel Template Styles ---
    {
        templateKey: "hotel",
        styleKey: "classic-cv",
        displayName: "Hotel - Classic Curriculum Vitae",
        briefDescription: "A traditional single-column CV format, prioritizing comprehensive detail and formal serif typography. Ideal for extensive academic or research histories.",
        colorPalette: ["Black (#000000)", "White (#FFFFFF)", "Ivory (#FFFFF0)", "Dark Blue (#00008B) for subtle headings", "Gray (#808080) for lines"],
        bestSuitedForJobs: ["University Lecturer", "Senior Researcher", "Medical Doctor (Academic CV)", "Historian (CV)", "Museum Director", "Archivist (Senior)", "Librarian (Head)", "Philosopher (Academic)"]
    },
    {
        templateKey: "hotel",
        styleKey: "modern-cv",
        displayName: "Hotel - Modern Curriculum Vitae",
        briefDescription: "A clean, contemporary single-column CV layout using sans-serif fonts for enhanced readability while still accommodating extensive information. Good for modern academic fields.",
        colorPalette: ["Dark Gray (#333333)", "White (#FFFFFF)", "Light Blue Gray (#B0C4DE)", "Teal Accent (#008080)", "Charcoal (#222222)"],
        bestSuitedForJobs: ["PhD Candidate (STEM)", "Research Scientist (Biotech)", "Data Scientist (Academic)", "Postdoctoral Researcher (Computational Fields)", "Grant Writer (Scientific)", "Medical Researcher", "Think Tank Analyst"]
    },
    {
        templateKey: "hotel",
        styleKey: "scholarly",
        displayName: "Hotel - Scholarly Document",
        briefDescription: "A CV style focused on formal presentation of publications, grants, and academic achievements. Uses classic typography and clear sectioning for scholarly rigor.",
        colorPalette: ["Deep Burgundy (#800000)", "Cream (#FFF8DC)", "Dark Brown Text (#5D4037)", "Old Gold Accent (#CFB53B)", "Light Tan (#D2B48C) for dividers"],
        bestSuitedForJobs: ["Tenured Professor", "Head of Research Department", "Journal Editor", "Academic Dean", "Think Tank Fellow", "Literary Scholar", "Art Historian (Senior)"]
    },
    {
        templateKey: "hotel",
        styleKey: "researcher-detailed",
        displayName: "Hotel - Researcher's Detailed Record",
        briefDescription: "A single-column CV optimized for presenting extensive research experience, methodologies, and findings with clarity and precision.",
        colorPalette: ["Graphite (#464646)", "Off-White (#FAFAFA)", "Muted Teal (#487C7A)", "Silver Gray Accent (#BDBDBD)", "Dark Slate Text (#2E2E2E)"],
        bestSuitedForJobs: ["Clinical Researcher", "Social Scientist", "Market Researcher (PhD)", "Scientific Consultant", "R&D Specialist", "Epidemiologist", "Policy Researcher"]
    },
    {
        templateKey: "hotel",
        styleKey: "erudite-formal",
        displayName: "Hotel - Erudite Formal CV",
        briefDescription: "A highly formal and sophisticated CV layout, suitable for esteemed academics or professionals in traditional fields. Employs classic fonts and a very structured, text-heavy format.",
        colorPalette: ["Black (#000000)", "Ivory White (#FFFFF0)", "Charcoal Gray (#36454F)", "Deep Blue (#00008B) for borders", "Silver Gray (#C0C0C0) for lines"],
        bestSuitedForJobs: ["Judge", "Senior Diplomat", "University President", "Theologian", "Classical Studies Professor", "Chief Librarian (National Library)", "Museum Director (Esteemed Institution)"]
    },

    // --- India Template Styles ---
    {
        templateKey: "india",
        styleKey: "artistic-vibrant",
        displayName: "India - Artistic Vibrant Flow",
        briefDescription: "A creative and visually engaging design using bold colors, asymmetrical elements, and distinctive typography to make a strong, memorable impression.",
        colorPalette: ["Turquoise (#40E0D0)", "Magenta (#FF00FF)", "Yellow Accent (#FFFF00)", "Dark Purple (#301934)", "White (#FFFFFF)"],
        bestSuitedForJobs: ["Graphic Designer", "Brand Identity Specialist", "Illustrator", "Fashion Stylist", "Creative Agency Art Director", "Multimedia Artist", "Visual Artist"]
    },
    {
        templateKey: "india",
        styleKey: "geometric-subtle",
        displayName: "India - Geometric Subtle Shift",
        briefDescription: "An unconventional layout incorporating subtle geometric patterns or shapes. Balances creativity with a clean, modern aesthetic and a more reserved color palette.",
        colorPalette: ["Cool Gray (#778899)", "White (#FFFFFF)", "Light Blue Accent (#ADD8E6)", "Charcoal (#36454F)", "Mint Green (#98FF98)"],
        bestSuitedForJobs: ["Architect", "UI Designer", "Industrial Designer", "Web Designer (creative focus)", "Data Visualization Specialist", "Urban Designer", "Interior Architect"]
    },
    {
        templateKey: "india",
        styleKey: "dynamic-asymmetric",
        displayName: "India - Dynamic Asymmetry",
        briefDescription: "Embraces an intentionally asymmetrical layout for a dynamic and modern feel. Uses strong visual lines and blocks of color to guide the eye.",
        colorPalette: ["Deep Teal (#008080)", "Off-White (#FAF0E6)", "Orange Accent (#FFA500)", "Dark Gray (#4A4A4A)", "Light Aqua (#AFEEEE)"],
        bestSuitedForJobs: ["Motion Graphics Designer", "Advertising Creative", "Exhibition Designer", "Digital Media Artist", "Startup Marketing Lead", "Interaction Designer", "Experiential Marketer"]
    },
    {
        templateKey: "india",
        styleKey: "gallery-showcase",
        displayName: "India - Gallery Showcase",
        briefDescription: "A visually rich style that allows for integration of portfolio thumbnails or strong visual branding elements. Ideal for artists and visual communicators.",
        colorPalette: ["Charcoal Black (#222222)", "White (#FFFFFF)", "Vibrant Red Accent (#FF0000)", "Medium Gray (#888888)", "Silver (#C0C0C0)"],
        bestSuitedForJobs: ["Photographer", "Fine Artist", "Videographer", "Portfolio-driven Web Designer", "Multimedia Artist", "Textile Designer", "Animator (Portfolio Focus)"]
    },
    {
        templateKey: "india",
        styleKey: "vivid-impression",
        displayName: "India - Vivid Impressionist",
        briefDescription: "Uses a bold and expressive color palette combined with unique typographic treatments to create a lasting, energetic impression. For creatives who want to stand out.",
        colorPalette: ["Electric Blue (#007FFF)", "Bright Yellow (#FFFF00)", "Black (#000000)", "White (#FFFFFF)", "Hot Pink Accent (#FF69B4)"],
        bestSuitedForJobs: ["Pop Artist", "Streetwear Designer", "Music Video Director", "Festival Organizer", "Experiential Marketer", "Graffiti Artist (Professional)", "DJ/Producer (Visual Branding)"]
    },

    // --- Juliet Template Styles ---
    {
        templateKey: "juliet",
        styleKey: "clean-modern",
        displayName: "Juliet - Clean Modern Harmony",
        briefDescription: "A balanced two-column layout with a contemporary feel. Features clean sans-serif fonts, ample whitespace, and subtle color accents for a stylish yet professional look.",
        colorPalette: ["Cool Gray (#778899)", "White (#FFFFFF)", "Light Blue Accent (#ADD8E6)", "Dark Slate Text (#2F4F4F)", "Silver (#BEBEBE)"],
        bestSuitedForJobs: ["UX Designer", "Product Manager", "Marketing Specialist", "Software Engineer", "Business Analyst", "Content Manager", "Technical Communicator", "Project Coordinator"]
    },
    {
        templateKey: "juliet",
        styleKey: "soft-professional",
        displayName: "Juliet - Soft Professional Grace",
        briefDescription: "A gentle and approachable two-column design. Uses a softer color palette and rounded elements (if any) to create a professional but friendly impression.",
        colorPalette: ["Dusty Rose (#D8BFD8)", "Cream (#FFFACD)", "Warm Gray (#8C8C8C)", "Muted Teal Accent (#5F9EA0)", "Soft Brown Text (#795548)"],
        bestSuitedForJobs: ["HR Manager", "Therapist/Counselor", "Teacher", "Customer Service Lead", "Non-Profit Coordinator", "Healthcare Administrator", "Librarian", "Social Worker"]
    },
    {
        templateKey: "juliet",
        styleKey: "contemporary-chic",
        displayName: "Juliet - Contemporary Chic",
        briefDescription: "A stylish and modern two-column resume, featuring elegant typography and a sophisticated color palette. Perfect for roles in design-savvy industries.",
        colorPalette: ["Charcoal (#36454F)", "Off-White (#FAF9F6)", "Blush Pink Accent (#FFC0CB)", "Gold Metallic Detail (#B08D57)", "Soft Gray (#B0B0B0)"],
        bestSuitedForJobs: ["Interior Designer", "Fashion Merchandiser", "Brand Manager (Luxury)", "Public Relations Specialist", "Event Planner (High-End)", "Beauty Editor", "Art Consultant"]
    },
    {
        templateKey: "juliet",
        styleKey: "urban-sleek",
        displayName: "Juliet - Urban Sleek Profile",
        briefDescription: "A modern, minimalist two-column design with a focus on sharp lines and a sophisticated, urban color palette. Conveys efficiency and contemporary style.",
        colorPalette: ["Graphite Gray (#464646)", "Crisp White (#FFFFFF)", "Electric Blue Accent (#007FFF)", "Matte Black Text (#1C1C1C)", "Silver Details (#C0C0C0)"],
        bestSuitedForJobs: ["Architect (Modern)", "Urban Planner", "Tech Startup Founder", "Digital Strategist", "Management Consultant (Tech Sector)", "Industrial Designer (Consumer Tech)", "Venture Capital Analyst"]
    },
    {
        templateKey: "juliet",
        styleKey: "balanced-focus",
        displayName: "Juliet - Balanced Focus",
        briefDescription: "A well-proportioned two-column layout that ensures both sidebar and main content are clearly presented. Uses a neutral palette with a clear accent for focus.",
        colorPalette: ["Stone Gray (#808080)", "White (#FFFFFF)", "Forest Green Accent (#228B22)", "Dark Gray Text (#333333)", "Light Beige (#F5F5DC)"],
        bestSuitedForJobs: ["Project Coordinator", "Operations Analyst", "Technical Support Manager", "Supply Chain Specialist", "Research Associate", "Administrative Manager", "Data Entry Supervisor"]
    },

    // --- Kilo Template Styles ---
    {
        templateKey: "kilo",
        styleKey: "dark-mode-tech",
        displayName: "Kilo - Dark Mode Tech",
        briefDescription: "A sleek dark-theme resume, often two-column, using monospace fonts and neon-like accents. Perfect for developers and tech enthusiasts who prefer a modern, code-editor aesthetic.",
        colorPalette: ["Dark Charcoal (#1E1E1E)", "Light Cyan (#56B6C2)", "Bright Green Accent (#98C379)", "Medium Gray (#ABB2BF)", "Orange Keyword (#D19A66)"],
        bestSuitedForJobs: ["Backend Developer", "DevOps Engineer", "Cybersecurity Specialist", "Game Developer", "System Administrator", "Full-Stack Developer", "Network Security Engineer", "Cloud Engineer"]
    },
    {
        templateKey: "kilo",
        styleKey: "light-code",
        displayName: "Kilo - Light Code Interface",
        briefDescription: "A light-themed tech resume inspired by modern IDEs. Features clean monospace for key info and sans-serif for readability, with syntax-highlighting-like color accents.",
        colorPalette: ["Off-White (#F8F9FA)", "Dark Blue (#2E3440)", "Purple Accent (#B48EAD)", "Green Comment (#A3BE8C)", "Orange String (#D08770)"],
        bestSuitedForJobs: ["Frontend Developer", "UI Engineer", "Technical Writer (Software)", "Data Analyst (Python/R)", "Cloud Solutions Architect", "Mobile App Developer (iOS/Android)", "Software Tester"]
    },
    {
        templateKey: "kilo",
        styleKey: "matrix-dark",
        displayName: "Kilo - Matrix Dark Terminal",
        briefDescription: "A futuristic dark theme with glowing green or blue text accents, reminiscent of classic hacker interfaces. Monospace fonts enhance the digital, code-heavy feel.",
        colorPalette: ["Near Black (#0D0D0D)", "Matrix Green (#39FF14)", "Dark Gray (#2A2A2A)", "White (for key info)", "Dimmed Green (#28A745)"],
        bestSuitedForJobs: ["Penetration Tester", "Ethical Hacker", "Security Researcher", "Network Engineer (Security Focus)", "Cryptographer", "Reverse Engineer", "Malware Analyst"]
    },
    {
        templateKey: "kilo",
        styleKey: "syntax-light",
        displayName: "Kilo - Syntax Light Pro",
        briefDescription: "A bright and clean tech-focused style that uses colors similar to light-themed code syntax highlighting. Emphasizes clarity and a modern, organized presentation.",
        colorPalette: ["White (#FFFFFF)", "Dark Purple (#4C566A)", "Blue Function (#81A1C1)", "Red Keyword (#BF616A)", "Green String (#A3BE8C)"],
        bestSuitedForJobs: ["Web Developer (Full Stack)", "Mobile App Developer", "Software Quality Assurance Engineer", "Technical Product Manager", "API Developer", "Database Developer", "Scrum Master"]
    },
    {
        templateKey: "kilo",
        styleKey: "developer-console",
        displayName: "Kilo - Developer Console",
        briefDescription: "A style mimicking the look of a developer console or terminal. Uses monospace fonts extensively with a focus on structured, command-line like presentation of information.",
        colorPalette: ["Black (#000000)", "White (#FFFFFF)", "Amber/Orange Prompt (#FFBF00)", "Gray Output Text (#AAAAAA)", "Blue Directory (#007ACC)"],
        bestSuitedForJobs: ["Linux System Administrator", "Command Line Interface (CLI) Tool Developer", "Automation Engineer", "Site Reliability Engineer (SRE)", "Build Engineer", "Network Operations Center (NOC) Engineer", "Mainframe Programmer"]
    },

    // --- Lima Template Styles ---
    {
        templateKey: "lima",
        styleKey: "infographic-light",
        displayName: "Lima - Infographic Light Clarity",
        briefDescription: "A bright and engaging two-column style that uses infographic-like elements (e.g., conceptual skill bars, icons) and a clean color palette to present data visually.",
        colorPalette: ["White (#FFFFFF)", "Light Teal (#A0D2DB)", "Orange Accent (#F9A825)", "Medium Gray (#607D8B)", "Sky Blue (#87CEEB)"],
        bestSuitedForJobs: ["Data Visualization Specialist", "Marketing Analyst", "Business Intelligence Developer", "UX Designer (Data-Driven)", "Project Manager (Visual Reporting)", "Information Graphics Designer", "Market Researcher"]
    },
    {
        templateKey: "lima",
        styleKey: "infographic-dark",
        displayName: "Lima - Infographic Dark Mode",
        briefDescription: "A modern dark-theme resume incorporating infographic elements. Uses vibrant accents on a dark background for a striking visual presentation of skills and achievements.",
        colorPalette: ["Dark Blue-Gray (#34495E)", "Bright Cyan (#4DD0E1)", "Yellow Accent (#FFEB3B)", "Light Gray Text (#CFD8DC)", "Orange Highlight (#FF9800)"],
        bestSuitedForJobs: ["Data Scientist", "Financial Modeler", "Game Data Analyst", "Information Designer", "Digital Analytics Manager", "Business Strategist (Data Focus)", "AI Visualization Engineer"]
    },
    {
        templateKey: "lima",
        styleKey: "data-visual-pro",
        displayName: "Lima - Data Visual Professional",
        briefDescription: "A sophisticated and professional take on the infographic style, focusing on clear charts (conceptual) and clean data blocks. Uses a corporate-friendly palette.",
        colorPalette: ["Navy Blue (#001f3f)", "White (#FFFFFF)", "Silver Gray (#B0BEC5)", "Green Accent (#4CAF50) (for positive data)", "Red Accent (#F44336) (for attention)"],
        bestSuitedForJobs: ["Management Consultant (Data-heavy projects)", "Chief Data Officer", "Quantitative Analyst", "Economist", "Market Research Manager", "Financial Forecaster", "Supply Chain Optimizer"]
    },
    {
        templateKey: "lima",
        styleKey: "metrics-highlight",
        displayName: "Lima - Metrics Highlight Reel",
        briefDescription: "Designed to draw attention to quantifiable achievements and key metrics. Uses visual cues like callout boxes or highlighted numbers alongside infographic elements.",
        colorPalette: ["Charcoal (#263238)", "Off-White (#ECEFF1)", "Bright Orange Accent (#FF7043)", "Cool Blue (#42A5F5)", "Light Gray (#CFD8DC)"],
        bestSuitedForJobs: ["Sales Performance Analyst", "E-commerce Manager", "Operations Analyst", "Growth Hacker", "Performance Marketing Specialist", "Digital Campaign Manager", "Business Development Analyst"]
    },
    {
        templateKey: "lima",
        styleKey: "impact-dashboard",
        displayName: "Lima - Impact Dashboard",
        briefDescription: "A resume styled like a personal performance dashboard. Uses clean sections, progress indicators (conceptual), and key performance indicators (KPIs) prominently displayed.",
        colorPalette: ["Dark Slate (#37474F)", "White (#FFFFFF)", "Vibrant Blue (#1E88E5)", "Lime Green Accent (#7CB342)", "Medium Gray (#90A4AE)"],
        bestSuitedForJobs: ["Business Performance Manager", "Digital Project Manager", "Productivity Consultant", "Startup Operations Lead", "Analytics Team Lead", "Key Account Manager (KPI Focus)", "Process Improvement Specialist"]
    },

    // --- Mike Template Styles ---
    {
        templateKey: "mike",
        styleKey: "formal-times",
        displayName: "Mike - Formal Times New Roman",
        briefDescription: "A highly traditional single-column resume using Times New Roman or similar classic serif font. Emphasizes formality, convention, and readability for conservative fields.",
        colorPalette: ["Black (#000000)", "White (#FFFFFF)", "Cream (#FFF8DC) (subtle background if any)", "Dark Gray (#696969) for lines"],
        bestSuitedForJobs: ["Lawyer (Traditional Firm)", "Judge", "Senior Government Official", "Academic (Humanities - very formal)", "Diplomat", "Clergy (Formal Roles)", "Classical Scholar"]
    },
    {
        templateKey: "mike",
        styleKey: "formal-garamond",
        displayName: "Mike - Formal Garamond Classic",
        briefDescription: "A classic and elegant single-column layout featuring Garamond or a similar old-style serif font. Conveys a sense of heritage, intellect, and refined professionalism.",
        colorPalette: ["Off-Black (#1B1B1B)", "Ivory (#FFFFF0)", "Dark Sepia (#704214) for accents", "Light Gray (#DCDCDC) for subtle dividers"],
        bestSuitedForJobs: ["University Dean", "Museum Director (Classical Arts)", "Historian (Published)", "Literary Agent", "Antiquarian Specialist", "Genealogist", "Philosopher (Tenured)"]
    },
    {
        templateKey: "mike",
        styleKey: "classic-legal",
        displayName: "Mike - Classic Legal Document",
        briefDescription: "A meticulously structured and formal single-column resume tailored for the legal profession. Uses clear serif typography and adheres to traditional legal document aesthetics.",
        colorPalette: ["Black (#000000)", "Bright White (#FFFFFF) (Paper)", "Dark Blue (#000080) (for firm name or subtle header)", "Gray (#A9A9A9) for lines"],
        bestSuitedForJobs: ["Attorney", "Paralegal", "Judge's Clerk", "Legal Consultant", "Corporate Counsel", "Public Prosecutor", "Law Professor"]
    },
    {
        templateKey: "mike",
        styleKey: "heritage-executive",
        displayName: "Mike - Heritage Executive CV",
        briefDescription: "A distinguished and traditional single-column format for senior executives in established industries. Uses premium serif fonts and a layout that speaks of experience and authority.",
        colorPalette: ["Deep Charcoal (#2E2E2E)", "Cream White (#FFFDD0)", "Burgundy Accent (#800020)", "Silver Gray Lines (#B0B0B0)", "Dark Navy Text (#000036)"],
        bestSuitedForJobs: ["CEO (Established Corporation)", "Bank President", "Non-Profit Executive Director (Large Org)", "University Chancellor", "Senior Statesperson", "Board Chairman", "Foundation President"]
    },
    {
        templateKey: "mike",
        styleKey: "establishment-formal",
        displayName: "Mike - Establishment Formal CV",
        briefDescription: "The epitome of formal, conservative resume design. Single-column, classic serif, minimal styling, focusing entirely on the substance of extensive credentials.",
        colorPalette: ["Black (#000000)", "High-Quality Paper White (#FFFFFF)", "Dark Gray (#696969) (subtle section lines)"],
        bestSuitedForJobs: ["Ambassador", "Federal Judge Nominee", "Chief Justice", "Head of a Royal Society", "Senior Clergy", "University Provost", "Head of State (Formal CV)"]
    },

    // --- November Template Styles ---
    {
        templateKey: "november",
        styleKey: "skills-focused-modern",
        displayName: "November - Modern Skills Focus",
        briefDescription: "A clean, contemporary layout (single or two-column) that prominently features the skills section. Uses modern sans-serif typography and clear visual grouping for competencies.",
        colorPalette: ["Teal (#008080)", "White (#FFFFFF)", "Light Gray (#F0F0F0)", "Dark Slate Gray Text (#2F4F4F)", "Orange Accent (#FFA500)"],
        bestSuitedForJobs: ["UX/UI Designer (Career Changer)", "Digital Marketer (Skills-based)", "IT Consultant", "Freelance Web Developer", "Project Manager (Agile/Scrum focus)", "Data Analyst (Tool Proficiency)", "Technical Recruiter"]
    },
    {
        templateKey: "november",
        styleKey: "functional-classic",
        displayName: "November - Classic Functional",
        briefDescription: "A more traditional take on the skills-first resume. Uses classic fonts and a structured layout to emphasize transferable skills and core capabilities over strict chronology.",
        colorPalette: ["Navy Blue (#000080)", "Cream (#FFFDD0)", "Medium Gray (#BEBEBE)", "Maroon Accent (#800000)", "Dark Gray Text (#333333)"],
        bestSuitedForJobs: ["Career Transitioner (to Management)", "Military Veteran (Transitioning to Civilian)", "Parent Returning to Workforce", "Non-Profit Program Manager (Skills-based)", "Technical Trainer", "Vocational Instructor", "Customer Service Professional (Emphasizing Skills)"]
    },
    {
        templateKey: "november",
        styleKey: "competency-showcase",
        displayName: "November - Competency Showcase",
        briefDescription: "Highlights core competencies and skills with visual emphasis, possibly using distinct blocks or columns for different skill sets. Modern and direct.",
        colorPalette: ["Electric Blue (#007FFF)", "White (#FFFFFF)", "Charcoal (#36454F)", "Lime Green Accent (#32CD32)", "Silver Gray (#C0C0C0)"],
        bestSuitedForJobs: ["Software Engineer (Specialized Tech Stack)", "Data Analyst (Tool Proficiency)", "Cybersecurity Expert (Specific Certifications/Skills)", "Technical Sales Engineer", "Cloud Architect", "Machine Learning Specialist", "DevOps Specialist"]
    },
    {
        templateKey: "november",
        styleKey: "talent-forward",
        displayName: "November - Talent-Forward Design",
        briefDescription: "A dynamic and engaging style that puts talents and key skills at the forefront. May use icons or subtle graphics to categorize skills.",
        colorPalette: ["Purple (#800080)", "Light Lavender (#E6E6FA)", "White (#FFFFFF)", "Yellow Accent (#FFD700)", "Dark Gray (#4A4A4A)"],
        bestSuitedForJobs: ["Creative Professional (Portfolio Summary)", "Freelance Consultant (Service Offerings)", "Startup Employee (Versatile Roles)", "Product Innovator", "Marketing Campaign Manager", "Game Designer (Skill-based)", "Multimedia Producer"]
    },
    {
        templateKey: "november",
        styleKey: "expertise-centric",
        displayName: "November - Expertise-Centric Layout",
        briefDescription: "A clean, professional design where areas of expertise and specialized skills are detailed prominently, followed by supporting experience. Conveys deep knowledge.",
        colorPalette: ["Forest Green (#228B22)", "Off-White (#FAF0E6)", "Tan Accent (#D2B48C)", "Dark Brown Text (#5D4037)", "Light Moss Green (#8FBC8F)"],
        bestSuitedForJobs: ["Subject Matter Expert (SME)", "Senior Consultant (Specialized Field)", "Medical Specialist", "Scientific Advisor", "Niche Technical Expert", "University Researcher (Specialized)", "Legal Specialist"]
    },

    // --- Oscar Template Styles ---
    {
        templateKey: "oscar",
        styleKey: "project-showcase-tech",
        displayName: "Oscar - Tech Project Showcase",
        briefDescription: "A layout designed to detail technical projects extensively. Features clear sections for project descriptions, technologies used, and outcomes. Modern and organized.",
        colorPalette: ["Dark Blue-Gray (#34495E)", "Light Cyan (#E0FFFF)", "Orange Accent (#F39C12)", "Medium Gray Text (#7F8C8D)", "White (#FFFFFF)"],
        bestSuitedForJobs: ["Software Developer", "Data Scientist (Portfolio Projects)", "Machine Learning Engineer", "Game Developer (Indie/Portfolio)", "Robotics Engineer", "Full-Stack Engineer", "Embedded Systems Developer"]
    },
    {
        templateKey: "oscar",
        styleKey: "portfolio-creative",
        displayName: "Oscar - Creative Portfolio Focus",
        briefDescription: "A visually appealing style for showcasing creative projects. Allows space for project visuals (conceptually, via links) and uses engaging typography and layout.",
        colorPalette: ["Charcoal (#2C3E50)", "Bright Yellow Accent (#F1C40F)", "White (#FFFFFF)", "Light Gray (#ECF0F1)", "Teal Highlight (#1ABC9C)"],
        bestSuitedForJobs: ["Graphic Designer", "UX/UI Designer (Project-based)", "Architect (Portfolio Summary)", "Illustrator", "Industrial Designer (Product Showcase)", "Videographer", "Animator"]
    },
    {
        templateKey: "oscar",
        styleKey: "folio-tech",
        displayName: "Oscar - Tech Folio Professional",
        briefDescription: "A clean, professional format emphasizing a portfolio of technical projects. Each project entry is structured for clarity on role, tech stack, and impact.",
        colorPalette: ["Steel Blue (#4682B4)", "White (#FFFFFF)", "Light Gray (#BDC3C7)", "Green Accent (#2ECC71)", "Dark Slate Text (#2D3E50)"],
        bestSuitedForJobs: ["Full-Stack Developer", "Mobile App Developer", "DevOps Engineer (Project Contributions)", "Cloud Solutions Architect (Implementations)", "Embedded Systems Engineer", "AI Developer (Projects)", "Technical Lead"]
    },
    {
        templateKey: "oscar",
        styleKey: "creator-showcase",
        displayName: "Oscar - Creator's Showcase",
        briefDescription: "A dynamic style for creators to highlight their key projects and contributions. Uses modern typography and a layout that draws attention to project details.",
        colorPalette: ["Deep Purple (#8E44AD)", "Off-White (#FDFEFE)", "Lime Green Accent (#27AE60)", "Medium Gray (#95A5A6)", "Orange Highlight (#E67E22)"],
        bestSuitedForJobs: ["Content Creator (YouTube/Podcast Portfolio)", "Independent Filmmaker", "Music Producer", "Game Modder/Developer", "3D Artist (Project-based)", "Digital Storyteller", "Interactive Media Developer"]
    },
    {
        templateKey: "oscar",
        styleKey: "impact-driven-projects",
        displayName: "Oscar - Impact-Driven Projects",
        briefDescription: "Focuses on the results and impact of each project. Layout provides space for quantifiable achievements and problem-solution narratives within project descriptions.",
        colorPalette: ["Forest Green (#27AE60)", "Cream (#F9FBE7)", "Burnt Orange Accent (#D35400)", "Dark Brown Text (#3E2723)", "Light Beige (#F5EFE6)"],
        bestSuitedForJobs: ["Management Consultant (Case Studies)", "Product Manager (Feature Launches)", "Non-Profit Project Lead (Impact Stories)", "Business Analyst (Process Improvements)", "Marketing Manager (Campaign Results)", "Social Entrepreneur", "Sustainability Project Manager"]
    },

    // --- Papa Template Styles ---
    {
        templateKey: "papa",
        styleKey: "bold-statement",
        displayName: "Papa - Bold Statement Maker",
        briefDescription: "An impactful single-column design with strong, oversized headlines and assertive typography. Uses a high-contrast palette to make a confident statement.",
        colorPalette: ["Black (#000000)", "White (#FFFFFF)", "Bright Red Accent (#FF0000)", "Dark Gray (#333333)", "Silver (#C0C0C0)"],
        bestSuitedForJobs: ["Sales Director", "Marketing Executive", "Startup CEO", "Public Relations Director", "Lead Negotiator", "Business Development Executive", "Keynote Speaker (Motivational)"]
    },
    {
        templateKey: "papa",
        styleKey: "color-block-impact",
        displayName: "Papa - Color Block Impact",
        briefDescription: "A modern single-column layout that utilizes bold color blocks for headers or key sections, combined with clean typography for a striking, contemporary look.",
        colorPalette: ["Deep Teal (#008080)", "White (#FFFFFF)", "Bright Orange Accent (#FFA500)", "Charcoal Text (#36454F)", "Light Gray Background (#F0F0F0)"],
        bestSuitedForJobs: ["Brand Manager", "Creative Agency Director", "Product Launch Manager", "Advertising Manager", "Design Lead", "UX Lead (Bold Style)", "Digital Campaign Manager"]
    },
    {
        templateKey: "papa",
        styleKey: "vanguard-impact",
        displayName: "Papa - Vanguard Impact",
        briefDescription: "A forward-thinking, impactful single-column style with dynamic typography and a focus on strong visual hierarchy. Conveys leadership and innovation.",
        colorPalette: ["Electric Blue (#007FFF)", "Black (#121212)", "White (#FFFFFF)", "Yellow Accent (#FFD700)", "Graphite Gray (#404040)"],
        bestSuitedForJobs: ["Chief Innovation Officer", "Tech Evangelist", "Futurist Speaker", "Head of R&D", "Disruptive Technology Lead", "Startup Visionary", "Venture Capitalist (Tech Focus)"]
    },
    {
        templateKey: "papa",
        styleKey: "headline-driven",
        displayName: "Papa - Headline Driven Focus",
        briefDescription: "Emphasizes powerful section headlines and a clear, direct message. The single-column layout ensures focus on key achievements and impactful statements.",
        colorPalette: ["Charcoal Gray (#2F4F4F)", "Off-White (#FAFAFA)", "Strong Gold Accent (#B8860B)", "Dark Slate Text (#212121)", "Light Stone Gray (#D3D3D3)"],
        bestSuitedForJobs: ["Journalist (Investigative/Editor)", "Political Campaign Manager", "Communications Director", "Copywriting Lead", "Keynote Speaker", "Policy Advocate", "Senior Editor"]
    },
    {
        templateKey: "papa",
        styleKey: "assertive-profile",
        displayName: "Papa - Assertive Profile",
        briefDescription: "A confident and modern single-column resume that uses bold typography and clear structure to project authority and expertise. Ideal for making a strong first impression.",
        colorPalette: ["Midnight Blue (#191970)", "Crisp White (#FFFFFF)", "Red-Orange Accent (#FF4500)", "Medium Gray Text (#696969)", "Silver Detail (#A9A9A9)"],
        bestSuitedForJobs: ["Business Development Director", "Senior Consultant", "Executive Coach", "Turnaround Specialist", "Venture Capitalist", "Sales Team Leader", "Chief Strategy Officer"]
    },

    // --- Quebec Template Styles ---
    {
        templateKey: "quebec",
        styleKey: "elegant-sidebar",
        displayName: "Quebec - Elegant Sidebar",
        briefDescription: "A refined two-column layout featuring a full-height sidebar impression. Emphasizes classic typography, generous whitespace, and timeless sophistication.",
        colorPalette: ["Deep Blue (#002060)", "Cream (#FFF8DC)", "Charcoal Gray Text (#343434)", "Old Gold Accent (#CFB53B)", "Light Beige (#F5F5DC)"],
        bestSuitedForJobs: ["University Professor (Arts/Humanities)", "Museum Curator", "Art Historian", "Luxury Goods Manager", "Diplomat", "Senior Editor (Publishing)", "Foundation Director", "Classical Musician (CV)"]
    },
    {
        templateKey: "quebec",
        styleKey: "classic-executive",
        displayName: "Quebec - Classic Executive",
        briefDescription: "A distinguished two-column design for senior executives. Uses premium serif fonts, a balanced layout with a prominent sidebar, and a formal, authoritative tone.",
        colorPalette: ["Black (#000000)", "Ivory White (#FFFFF0)", "Dark Gray (#4A4A4A)", "Silver Accent (#C0C0C0)", "Deep Burgundy Highlight (#800020)"],
        bestSuitedForJobs: ["CEO", "Board Member", "Chief Financial Officer", "Legal Partner (Senior)", "Non-Profit President", "Ambassador", "University President", "Medical Director"]
    },
    {
        templateKey: "quebec",
        styleKey: "prestige-folio",
        displayName: "Quebec - Prestige Folio",
        briefDescription: "A high-end, polished two-column CV style. Features exquisite typography, ample whitespace, and subtle decorative elements for a premium, meticulously crafted feel.",
        colorPalette: ["Charcoal (#2C3E50)", "Antique White (#FAEBD7)", "Muted Gold Accent (#BDA55D)", "Slate Gray Text (#708090)", "Soft Cream Sidebar (#FFF9E6)"],
        bestSuitedForJobs: ["Architect (Principal)", "Art Gallery Director", "Philanthropy Advisor", "Bespoke Service Consultant", "Private Equity Partner", "Luxury Hotel General Manager", "Fine Art Appraiser"]
    },
    {
        templateKey: "quebec",
        styleKey: "sophisticate-pro",
        displayName: "Quebec - Sophisticate Professional",
        briefDescription: "An elegant and understated two-column resume combining classic readability with modern design principles. Ideal for professionals in esteemed fields.",
        colorPalette: ["Forest Green (#228B22)", "Off-White (#FAF0E6)", "Bronze Accent (#CD7F32)", "Dark Brown Text (#5D4037)", "Light Tan Background (#D2B48C)"],
        bestSuitedForJobs: ["Investment Analyst", "Management Consultant (Senior)", "University Department Head", "Librarian (Director)", "Medical Specialist (Private Practice)", "Senior Policy Advisor", "Chief Editor"]
    },
    {
        templateKey: "quebec",
        styleKey: "timeless-columnar",
        displayName: "Quebec - Timeless Columnar",
        briefDescription: "A classic two-column structure with a full-height sidebar effect, emphasizing clarity and traditional typographic excellence. Conveys stability and enduring quality.",
        colorPalette: ["Dark Navy (#000033)", "Crisp White (#FFFFFF)", "Light Gray Sidebar (#EFEFEF)", "Silver-Blue Accent (#6495ED)", "Charcoal Text (#333333)"],
        bestSuitedForJobs: ["Financial Controller", "Legal Advisor", "Academic Administrator", "Archivist Manager", "Classical Musician (CV)", "Bank Director", "Insurance Executive (Senior)"]
    },

    // --- Romeo Template Styles ---
    {
        templateKey: "romeo",
        styleKey: "vertical-timeline",
        displayName: "Romeo - Vertical Timeline Flow",
        briefDescription: "A modern design centered around a clear vertical timeline that visually guides through career progression and educational milestones. Clean and easy to follow.",
        colorPalette: ["Blue-Gray (#607D8B)", "White (#FFFFFF)", "Orange Accent (#FF9800)", "Dark Gray Text (#424242)", "Light Blue Highlight (#B3E5FC)"],
        bestSuitedForJobs: ["Project Manager", "Product Manager", "Operations Manager", "Event Coordinator", "Supply Chain Specialist", "Construction Manager", "Logistics Manager", "Program Manager"]
    },
    {
        templateKey: "romeo",
        styleKey: "horizontal-events",
        displayName: "Romeo - Horizontal Events (Conceptual)",
        briefDescription: "A unique take, conceptually using horizontal timeline elements or date bracketing for roles/studies. Emphasizes duration and sequence with a distinct visual flow.",
        colorPalette: ["Teal (#009688)", "Light Gray Background (#F5F5F5)", "Yellow Accent (#FFEB3B)", "Dark Slate Text (#37474F)", "White (#FFFFFF)"],
        bestSuitedForJobs: ["Consultant (Project-based)", "Freelancer (Portfolio of Gigs)", "Researcher (Study Durations)", "Contractor", "Interim Manager", "Event Producer (Multiple Events)", "Film Production Manager"]
    },
    {
        templateKey: "romeo",
        styleKey: "career-trajectory",
        displayName: "Romeo - Career Trajectory Visual",
        briefDescription: "Focuses on visually showcasing upward movement and career development. The timeline element highlights promotions and increasing responsibilities clearly.",
        colorPalette: ["Forest Green (#4CAF50)", "Cream (#FFFDE7)", "Gold Accent (#FFC107)", "Dark Brown Text (#4E342E)", "Light Green Nodes (#A5D6A7)"],
        bestSuitedForJobs: ["Sales Professional (Career Growth)", "Manager (Promotions)", "Engineer (Path to Senior/Lead)", "HR Business Partner (Career Path)", "Anyone showing clear advancement", "Retail Area Manager", "Hospitality Director"]
    },
    {
        templateKey: "romeo",
        styleKey: "chronicle-flow",
        displayName: "Romeo - Chronicle Narrative Flow",
        briefDescription: "A narrative-driven timeline style, where each entry flows smoothly into the next, telling a clear chronological story of one's professional journey.",
        colorPalette: ["Deep Burgundy (#8D2626)", "Antique White (#FAEBD7)", "Copper Accent (#B87333)", "Charcoal Text (#3E2723)", "Soft Beige Timeline (#F5EFE6)"],
        bestSuitedForJobs: ["Historian", "Biographer (CV)", "Journalist (Long-form)", "Genealogist", "Archivist (Narrative Focus)", "Museum Exhibit Writer", "Documentary Researcher"]
    },
    {
        templateKey: "romeo",
        styleKey: "milestone-visual",
        displayName: "Romeo - Milestone Visual Highlights",
        briefDescription: "Uses distinct visual markers or icons on the timeline to highlight key achievements, projects, or educational milestones. Engaging and informative.",
        colorPalette: ["Purple (#673AB7)", "Light Gray (#F0F0F0)", "Yellow Star/Icon Accent (#FFD600)", "Dark Gray Text (#424242)", "Lavender Timeline (#D1C4E9)"],
        bestSuitedForJobs: ["Product Launch Manager", "Research Scientist (Key Discoveries)", "Event Manager (Major Events)", "Software Developer (Key Releases)", "PhD Graduate (Thesis Milestones)", "Campaign Manager (Political/Marketing)", "Lead Architect (Major Buildings)"]
    },

    // --- Sierra Template Styles ---
    {
        templateKey: "sierra",
        styleKey: "compact-onepage",
        displayName: "Sierra - Compact One-Page Pro",
        briefDescription: "A highly optimized layout (single or two-column) designed to fit extensive experience onto a single page. Uses smaller fonts and tight spacing without sacrificing clarity.",
        colorPalette: ["Dark Gray (#4A4A4A)", "White (#FFFFFF)", "Light Blue Accent (#5CACEE)", "Charcoal Text (#212121)", "Very Light Gray Background (#F8F8F8)"],
        bestSuitedForJobs: ["Senior Executive (One-page summary)", "Experienced Professional (Networking)", "Consultant (Concise overview)", "Academic (Conference Bio)", "Board Candidate", "Tech Lead (Quick Summary)", "Sales Manager (Key Metrics)"]
    },
    {
        templateKey: "sierra",
        styleKey: "dense-cv",
        displayName: "Sierra - Dense CV Professional",
        briefDescription: "A multi-page CV format that maximizes information density per page. Ideal for academics or researchers with numerous publications and extensive details.",
        colorPalette: ["Black (#000000)", "White (#FFFFFF)", "Medium Gray (#808080) for lines", "Subtle Dark Blue Headings (#00008B)"],
        bestSuitedForJobs: ["Professor (Full CV)", "Research Scientist (Grant Applications)", "Medical Doctor (Extensive Credentials)", "Legal Scholar (Publications List)", "Senior Engineer (Patents & Papers)", "Published Author (Bibliography)", "Think Tank Senior Fellow"]
    },
    {
        templateKey: "sierra",
        styleKey: "executive-summary",
        displayName: "Sierra - Executive Summary Impact",
        briefDescription: "A compact, professional style focused on quickly conveying top-level achievements and leadership experience, often aiming for a single impactful page.",
        colorPalette: ["Navy Blue (#001f3f)", "Crisp White (#FFFFFF)", "Gold Accent (#B8860B)", "Charcoal Text (#36454F)", "Light Silver Gray (#D1D0CE)"],
        bestSuitedForJobs: ["CEO (Briefing Document)", "VP (Internal Promotion)", "Consultant (Proposal Intro)", "Board Nominee (Summary)", "Keynote Speaker Bio", "Investor Pitch Deck (Personal Bio)", "Entrepreneur (Funding Round)"]
    },
    {
        templateKey: "sierra",
        styleKey: "condensed-professional",
        displayName: "Sierra - Condensed Professional",
        briefDescription: "A clean, space-saving design that maintains a high level of professionalism. Uses efficient formatting to present a lot of information clearly.",
        colorPalette: ["Charcoal (#343A40)", "Off-White (#F8F9FA)", "Teal Accent (#20C997)", "Dark Gray Text (#495057)", "Light Gray Dividers (#CED4DA)"],
        bestSuitedForJobs: ["Project Manager (Multiple Projects)", "IT Specialist (Many Certs/Skills)", "Experienced Administrator", "Operations Coordinator", "Technical Sales (Broad Product Line)", "Logistics Manager (Complex Systems)", "Healthcare Administrator"]
    },
    {
        templateKey: "sierra",
        styleKey: "info-rich-concise",
        displayName: "Sierra - Info-Rich & Concise",
        briefDescription: "Balances information density with readability, using smart typography and layout to present a comprehensive yet concise overview. Perfect for experienced individuals.",
        colorPalette: ["Dark Slate Blue (#483D8B)", "White (#FFFFFF)", "Orange Accent (#FFA500)", "Medium Gray Text (#6C757D)", "Light Periwinkle Background (#E6E6FA)"],
        bestSuitedForJobs: ["Senior Software Architect", "Medical Researcher (CV Summary)", "Financial Director", "Lead Product Designer", "University Department Chair (Overview)", "Chief Engineer", "Senior Policy Analyst"]
    },

    // --- Tango Template Styles ---
    {
        templateKey: "tango",
        styleKey: "europass-inspired",
        displayName: "Tango - Europass Inspired",
        briefDescription: "A structured, comprehensive CV format often favored in Europe. Features clear sections for personal details, work experience, education, and language skills. (Note: Photo not part of base data).",
        colorPalette: ["Standard Blue (#003399)", "White (#FFFFFF)", "Light Gray Sections (#EEEEEE)", "Dark Gray Text (#333333)", "Yellow Stars (#FFCC00) (Conceptual for Europass logo)"],
        bestSuitedForJobs: ["Applying for EU Institutions", "Academic Positions in Europe", "International NGO Roles", "Jobs requiring standardized CV format (Europe)", "Multilingual Professionals", "Translator/Interpreter", "International Relations Specialist"]
    },
    {
        templateKey: "tango",
        styleKey: "global-professional",
        displayName: "Tango - Global Professional Standard",
        briefDescription: "A clean, universally understood CV layout that is professional and adaptable for international job applications. Focuses on clarity and comprehensive information.",
        colorPalette: ["Charcoal Gray (#36454F)", "White (#FFFFFF)", "Teal Accent (#008080)", "Medium Gray Text (#696969)", "Light Blue-Gray Background (#E0E5E9)"],
        bestSuitedForJobs: ["International Business Development Manager", "Diplomat/Foreign Service Officer", "Export Manager", "Global Marketing Manager", "Supply Chain Manager (International)", "International Aid Worker", "Global Mobility Specialist"]
    },
    {
        templateKey: "tango",
        styleKey: "international-standard",
        displayName: "Tango - International Standard CV",
        briefDescription: "A widely accepted and clear CV format, suitable for applications across different countries. Emphasizes straightforward presentation of qualifications.",
        colorPalette: ["Dark Navy (#001A33)", "Crisp White (#FFFFFF)", "Silver Gray Lines (#BCC6CC)", "Black Text (#000000)", "Muted Blue Headings (#4682B4)"],
        bestSuitedForJobs: ["Engineer (International Projects)", "Scientist (Collaborative Research)", "Management Consultant (Global Firm)", "Finance Professional (Multinational Corp)", "IT Specialist (Global Operations)", "Maritime Officer", "Aviation Professional (International)"]
    },
    {
        templateKey: "tango",
        styleKey: "vitae-global",
        displayName: "Tango - Vitae Global Academic",
        briefDescription: "A comprehensive and well-organized CV style designed for international academics and researchers. Accommodates detailed lists of publications, conferences, and grants.",
        colorPalette: ["Deep Burgundy (#5D001E)", "Cream (#FFFDD0)", "Dark Brown Text (#3B2F2F)", "Gold Accent Lines (#B8860B)", "Light Beige Sections (#F5EFE0)"],
        bestSuitedForJobs: ["University Professor (International)", "Research Fellow (Global Institutes)", "Medical Researcher (International Trials)", "Policy Advisor (International Organizations)", "Linguist/Translator (Academic)", "Archaeologist (International Digs)", "Curator (International Exhibitions)"]
    },
    {
        templateKey: "tango",
        styleKey: "continental-formal",
        displayName: "Tango - Continental Formal CV",
        briefDescription: "A formal and structured CV layout reflecting European professional standards. Clear typography and sectioning for a polished, internationally-minded presentation.",
        colorPalette: ["Black (#000000)", "White (#FFFFFF)", "Medium Blue Accent (#005A9C)", "Dark Gray Text (#4A4A4A)", "Light Gray Background (#E8E8E8)"],
        bestSuitedForJobs: ["Legal Counsel (International Law)", "Banking Executive (Europe)", "Senior Civil Servant (EU)", "Architect (European Competitions)", "Pharmaceutical Manager (Global)", "Import/Export Director", "International Trade Specialist"]
    },

    // --- Uniform Template Styles ---
    {
        templateKey: "uniform",
        styleKey: "grid-modular",
        displayName: "Uniform - Modular Grid Design",
        briefDescription: "A modern, highly structured layout using a CSS grid to arrange content in distinct modules. Visually balanced and organized, ideal for showcasing diverse information blocks.",
        colorPalette: ["Dark Slate Gray (#2F4F4F)", "White (#FFFFFF)", "Bright Orange Accent (#FF8C00)", "Light Gray Modules (#F0F0F0)", "Charcoal Text (#36454F)"],
        bestSuitedForJobs: ["UX/UI Designer (Grid Systems)", "Architect (Modular Design)", "Frontend Developer (Component-based)", "Information Designer", "Technical Illustrator", "Urban Designer (Grid Planning)", "Exhibition Designer (Modular)"]
    },
    {
        templateKey: "uniform",
        styleKey: "block-info",
        displayName: "Uniform - Info Block Structure",
        briefDescription: "Uses clearly defined blocks or tiles within a grid to present information. Offers a contemporary, organized feel with a focus on easy scannability of different sections.",
        colorPalette: ["Teal Blue (#008080)", "Light Cream (#FFFACD)", "Yellow Accent (#FFD700)", "Dark Gray Text (#4A4A4A)", "Medium Gray Borders (#A9A9A9)"],
        bestSuitedForJobs: ["Product Manager (Feature Blocks)", "Data Analyst (KPI Blocks)", "Marketing Strategist (Campaign Blocks)", "Instructional Designer (Module Overview)", "System Architect (Component Diagram Style)", "Content Curator (Thematic Blocks)", "Business Process Modeler"]
    },
    {
        templateKey: "uniform",
        styleKey: "matrix-blocks",
        displayName: "Uniform - Matrix Block Layout",
        briefDescription: "A structured grid layout where information sections are presented as interconnected blocks, creating a matrix-like visual. Modern and analytical.",
        colorPalette: ["Deep Indigo (#4B0082)", "Off-White (#FAF9F6)", "Lime Green Accent (#32CD32)", "Cool Gray Text (#778899)", "Dark Gray Grid Lines (#696969)"],
        bestSuitedForJobs: ["Data Scientist (Matrix/Table Focus)", "Business Intelligence Analyst", "Software Engineer (System Design)", "Operations Research Analyst", "Logistics Planner", "Financial Modeler (Complex Systems)", "Network Architect"]
    },
    {
        templateKey: "uniform",
        styleKey: "structured-panel",
        displayName: "Uniform - Structured Panel View",
        briefDescription: "A grid-based design that organizes content into clear panels or cards. Provides a modern, dashboard-like feel with excellent information separation.",
        colorPalette: ["Charcoal (#36454F)", "Light Gray Panels (#D3D3D3)", "White Text (on dark panels)", "Blue Accent (#007BFF)", "Medium Gray Text (#6C757D)"],
        bestSuitedForJobs: ["Project Portfolio Manager", "IT Consultant (Service Blocks)", "Freelancer (Skill/Service Panels)", "UX Researcher (Persona Cards Style)", "Content Strategist (Topic Blocks)", "Service Designer", "Knowledge Manager"]
    },
    {
        templateKey: "uniform",
        styleKey: "precision-grid-layout",
        displayName: "Uniform - Precision Grid",
        briefDescription: "Emphasizes meticulous alignment and a highly organized visual structure through its grid system. Conveys precision, order, and a modern aesthetic.",
        colorPalette: ["Graphite (#3B3B3B)", "White (#FFFFFF)", "Red Accent (#DC143C)", "Dark Gray Text (#212121)", "Light Silver Grid Lines (#E0E0E0)"],
        bestSuitedForJobs: ["Engineer (CAD/Precision)", "Financial Analyst (Spreadsheet-like clarity)", "Quality Control Manager", "Technical Drafter", "Scientific Programmer", "Cartographer", "Database Architect"]
    },

    // --- Victor Template Styles ---
    {
        templateKey: "victor",
        styleKey: "ultra-minimal",
        displayName: "Victor - Ultra Minimalist",
        briefDescription: "The epitome of minimalism. Starkly simple single-column layout, relying entirely on typography and whitespace. Content is king, with zero distractions.",
        colorPalette: ["Black (#000000)", "White (#FFFFFF)"],
        bestSuitedForJobs: ["Academic (Pure Text CV)", "Writer (Submissions)", "Philosopher", "Mathematician", "Minimalist Designer (Conceptual)", "Poet (Submissions)", "Theoretical Physicist"]
    },
    {
        templateKey: "victor",
        styleKey: "stark-content",
        displayName: "Victor - Stark Content Focus",
        briefDescription: "An extremely direct and unembellished single-column design. High-quality typography and generous negative space ensure maximum focus on the written content.",
        colorPalette: ["Charcoal Black (#1A1A1A)", "Bright White (#FFFFFF)", "Very Dark Gray (#2D2D2D) for Headings"],
        bestSuitedForJobs: ["Technical Author", "Editor (Literary)", "Legal Scholar (Formal Submissions)", "Researcher (Text-heavy)", "Poet", "Screenwriter", "Copyeditor (Scholarly)"]
    },
    {
        templateKey: "victor",
        styleKey: "pure-text",
        displayName: "Victor - Pure Textual Form",
        briefDescription: "A single-column resume where only text and its typographic treatment convey information. No lines, no boxes, just pure, unadulterated content hierarchy.",
        colorPalette: ["Off-Black (#101010)", "Paper White (#FDFDFD)"],
        bestSuitedForJobs: ["Copywriter", "Screenwriter", "Proofreader", "Content Editor", "Linguist", "Lexicographer", "Technical Documentation Specialist"]
    },
    {
        templateKey: "victor",
        styleKey: "essentialist-focus",
        displayName: "Victor - Essentialist Focus",
        briefDescription: "A minimalist design that strips away all non-essential visual elements. Focuses on the core message through clean typography and strategic use of space.",
        colorPalette: ["Dark Gray (#333333)", "White (#FFFFFF)", "Light Gray (#E0E0E0) (for subtle hierarchy if needed)"],
        bestSuitedForJobs: ["Management Consultant (Concise Bio)", "Executive Summary Writer", "Policy Analyst (Briefs)", "Technical Communicator", "Philosophical Writer", "Grant Proposal Reviewer", "Journalist (Op-Ed)"]
    },
    {
        templateKey: "victor",
        styleKey: "monochrome-minimal",
        displayName: "Victor - Monochrome Minimal",
        briefDescription: "A starkly beautiful single-column design using only shades of black, white, and gray. Typography and layout are meticulously crafted for clarity and impact.",
        colorPalette: ["Black (#000000)", "White (#FFFFFF)", "Various Grays (#505050, #A0A0A0, #D0D0D0) for hierarchy and subtle separation"],
        bestSuitedForJobs: ["Architect (Minimalist Style)", "Fine Art Photographer (Monochrome)", "Curator (Modern Art)", "Designer (Bauhaus Influence)", "Serious Journalist", "Industrial Designer (Minimalist Products)", "Typographic Artist"]
    },

    // --- Whiskey Template Styles ---
    {
        templateKey: "whiskey",
        styleKey: "friendly-rounded",
        displayName: "Whiskey - Friendly Rounded Corners",
        briefDescription: "A warm and approachable design (single or two-column) featuring soft, rounded corners for containers and visual elements, creating a welcoming feel.",
        colorPalette: ["Warm Gray (#8C7B70)", "Cream (#FFF5E1)", "Soft Teal Accent (#77BFA3)", "Brown Text (#6D4C41)", "Light Peach (#FFDAB9)"],
        bestSuitedForJobs: ["Customer Service Manager", "HR Generalist", "Teacher (Elementary)", "Therapist", "Non-Profit Volunteer Coordinator", "Community Manager", "Librarian (Public)", "Social Worker"]
    },
    {
        templateKey: "whiskey",
        styleKey: "soft-palette",
        displayName: "Whiskey - Soft Palette Professional",
        briefDescription: "Utilizes a gentle and inviting color palette (e.g., muted pastels, earthy tones) combined with clear typography for a professional yet personable impression.",
        colorPalette: ["Dusty Rose (#D8BFD8)", "Light Beige (#F5F5DC)", "Sage Green Accent (#9DC183)", "Warm Gray Text (#797979)", "Off-White (#FAF0E6)"],
        bestSuitedForJobs: ["Counselor", "Social Worker", "Healthcare Professional (Patient-facing)", "Librarian (Children's)", "Early Childhood Educator", "Life Coach", "Occupational Therapist", "Veterinarian"]
    },
    {
        templateKey: "whiskey",
        styleKey: "welcoming-aura",
        displayName: "Whiskey - Welcoming Aura Design",
        briefDescription: "A design focused on creating an open and inviting first impression. Uses clean, readable fonts and a balanced layout with a warm, approachable color scheme.",
        colorPalette: ["Soft Yellow (#FFFACD)", "Creamy White (#FFFFF0)", "Light Orange Accent (#FFCC99)", "Medium Brown Text (#8B5A2B)", "Pale Green (#90EE90)"],
        bestSuitedForJobs: ["Receptionist/Front Desk Manager", "Hospitality Manager", "Public Relations Officer", "Student Advisor", "Brand Ambassador", "Retail Store Manager", "Patient Care Coordinator"]
    },
    {
        templateKey: "whiskey",
        styleKey: "organic-professional",
        displayName: "Whiskey - Organic Professional",
        briefDescription: "Blends a professional structure with organic design touches, like natural color palettes or subtly rounded elements. Approachable yet competent.",
        colorPalette: ["Olive Green (#808000)", "Linen White (#FAF0E6)", "Terracotta Accent (#E2725B)", "Dark Brown Text (#5D4037)", "Sandstone (#C19A6B)"],
        bestSuitedForJobs: ["Sustainability Consultant", "Wellness Product Manager", "Holistic Health Practitioner", "Organic Farm Manager", "Eco-Tourism Operator", "Nutritionist", "Yoga Studio Owner"]
    },
    {
        templateKey: "whiskey",
        styleKey: "personable-touch",
        displayName: "Whiskey - Personable Touch",
        briefDescription: "A resume style designed to highlight interpersonal skills and a friendly demeanor. Uses clear, inviting typography and a warm, balanced layout.",
        colorPalette: ["Light Peach (#FFDAB9)", "Off-White (#FFF9F0)", "Coral Accent (#FF7F50)", "Soft Gray Text (#888888)", "Mint Green Highlight (#BDFCC9)"],
        bestSuitedForJobs: ["Sales Associate (Retail)", "Account Manager (Client-facing)", "Recruiter", "Training Specialist", "Customer Experience Manager", "Flight Attendant", "Tour Guide"]
    },

    // --- Xray Template Styles ---
    {
        templateKey: "xray",
        styleKey: "analytical-sharp",
        displayName: "Xray - Analytical Sharpness",
        briefDescription: "A precise and data-driven design with clean lines, structured information blocks, and sharp sans-serif typography. Conveys analytical prowess and attention to detail.",
        colorPalette: ["Cool Blue (#4682B4)", "White (#FFFFFF)", "Dark Gray Text (#333333)", "Silver Accents (#C0C0C0)", "Light Gray Background (#F0F8FF)"],
        bestSuitedForJobs: ["Data Analyst", "Business Intelligence Analyst", "Financial Analyst", "Statistician", "Engineer (Systems/Data)", "Research Scientist (Quantitative)", "Market Researcher", "Operations Research Analyst"]
    },
    {
        templateKey: "xray",
        styleKey: "data-visual-clean",
        displayName: "Xray - Clean Data Visualization",
        briefDescription: "A minimalist and structured layout that conceptually supports clear presentation of data points and metrics using icons or clean visual cues. Modern and analytical.",
        colorPalette: ["Charcoal Gray (#36454F)", "White (#FFFFFF)", "Bright Blue Accent (#007BFF)", "Medium Gray Text (#6C757D)", "Light Steel Blue (#B0C4DE)"],
        bestSuitedForJobs: ["Data Engineer", "Market Researcher", "Operations Analyst", "Supply Chain Analyst", "UX Researcher (Quantitative Focus)", "Actuary", "Information Architect", "Business Systems Analyst"]
    },
    {
        templateKey: "xray",
        styleKey: "metrics-insight",
        displayName: "Xray - Metrics & Insight Focus",
        briefDescription: "A design focused on highlighting key performance indicators and quantifiable results. Uses a structured, analytical aesthetic with clear callouts for important data.",
        colorPalette: ["Dark Slate (#2F4F4F)", "Off-White (#FAFAFA)", "Green Accent (#2E8B57) (for metrics)", "Graphite Text (#404040)", "Light Gray Sections (#E8E8E8)"],
        bestSuitedForJobs: ["Performance Marketing Manager", "E-commerce Analyst", "Financial Controller", "Sales Operations Manager", "Business Process Analyst", "Logistics Analyst", "Digital Campaign Analyst"]
    },
    {
        templateKey: "xray",
        styleKey: "precision-dataflow",
        displayName: "Xray - Precision Dataflow",
        briefDescription: "Emphasizes clarity and logical flow of information, akin to a well-structured data report. Uses precise typography and a clean, organized layout.",
        colorPalette: ["Midnight Blue (#191970)", "White (#FFFFFF)", "Silver Accent (#A9A9A9)", "Dark Gray Text (#303030)", "Light Blue-Gray Background (#D6E0E8)"],
        bestSuitedForJobs: ["Database Administrator", "IT Auditor", "Risk Analyst", "Compliance Officer", "Technical Project Manager (Data-heavy projects)", "Systems Engineer", "Information Security Analyst"]
    },
    {
        templateKey: "xray",
        styleKey: "structured-analytics-pro",
        displayName: "Xray - Structured Analytics Pro",
        briefDescription: "A highly professional and structured design for analytics experts. Features clean data tables (conceptual), sharp typography, and a precise, no-nonsense layout.",
        colorPalette: ["Black (#000000)", "White (#FFFFFF)", "Teal Accent (#008080)", "Medium Gray Text (#707070)", "Light Gray Dividers (#D0D0D0)"],
        bestSuitedForJobs: ["Chief Analytics Officer", "Senior Data Scientist", "Quantitative Researcher", "Econometrician", "Financial Engineer", "Machine Learning Lead", "AI Research Scientist"]
    },

    // --- Yankee Template Styles ---
    {
        templateKey: "yankee",
        styleKey: "classic-modern-serif",
        displayName: "Yankee - Classic Modern Serif",
        briefDescription: "Blends timeless serif typography with clean, modern layout principles. Offers a sophisticated and highly readable presentation, suitable for a wide range of professions.",
        colorPalette: ["Deep Navy (#001F3F)", "Cream White (#FFF9E6)", "Charcoal Text (#333333)", "Muted Gold Accent (#B08D57)", "Light Gray (#EAEAEA)"],
        bestSuitedForJobs: ["Lawyer", "University Professor", "Editor/Writer", "Finance Manager", "Management Consultant", "Non-Profit Director", "Senior Administrator", "Publisher"]
    },
    {
        templateKey: "yankee",
        styleKey: "contemporary-sans",
        displayName: "Yankee - Contemporary Sans",
        briefDescription: "A modern interpretation of a classic structure, using clean sans-serif fonts for a fresh, accessible look. Maintains professionalism with balanced whitespace and clear sectioning.",
        colorPalette: ["Dark Slate Gray (#2F4F4F)", "White (#FFFFFF)", "Bright Blue Accent (#007ACC)", "Medium Gray Text (#666666)", "Light Steel Blue (#B0C4DE)"],
        bestSuitedForJobs: ["Marketing Director", "Product Manager", "HR Director", "Business Analyst", "Operations Lead", "Communications Specialist", "IT Project Manager", "Urban Planner"]
    },
    {
        templateKey: "yankee",
        styleKey: "heritage-contemporary",
        displayName: "Yankee - Heritage Contemporary",
        briefDescription: "Combines traditional serif fonts for body text with modern sans-serifs for headings, achieving a balance between established quality and current design trends.",
        colorPalette: ["Forest Green (#228B22)", "Antique White (#FAEBD7)", "Bronze Accent (#CD7F32)", "Dark Brown Text (#5D4037)", "Light Beige (#F5F5DC)"],
        bestSuitedForJobs: ["Architect (Heritage Projects)", "Museum Curator (Historical)", "Senior Academic", "Publishing Executive", "Foundation Director", "Librarian (Special Collections)", "Art Historian"]
    },
    {
        templateKey: "yankee",
        styleKey: "timeless-professional",
        displayName: "Yankee - Timeless Professional",
        briefDescription: "An enduring and professional style that balances classic structure with modern clarity. Uses a refined color palette and impeccable typography for a lasting impression.",
        colorPalette: ["Charcoal (#343A40)", "Off-White (#F8F9FA)", "Burgundy Accent (#800020)", "Dark Gray Text (#495057)", "Silver Gray Lines (#ADB5BD)"],
        bestSuitedForJobs: ["Investment Banker", "Corporate Attorney", "Medical Doctor", "Senior Manager", "Financial Controller", "University Administrator", "Chief Operating Officer (COO)", "Management Consultant (Traditional Firms)"]
    },
    {
        templateKey: "yankee",
        styleKey: "neo-classic-standard",
        displayName: "Yankee - Neo-Classic Standard",
        briefDescription: "A robust single-column or clear two-column layout that uses classic serif fonts for readability and a sense of establishment, updated with modern spacing and clean lines.",
        colorPalette: ["Black (#000000)", "Crisp White (#FFFFFF)", "Steel Blue Accent (#4682B4)", "Medium Gray Text (#696969)", "Light Gray Background (#F0F0F0)"],
        bestSuitedForJobs: ["Civil Engineer", "Accountant (CPA)", "Government Administrator", "Librarian (Director)", "Insurance Executive", "Bank Branch Manager", "School Principal"]
    },

    // --- Zebra Template Styles ---
    {
        templateKey: "zebra",
        styleKey: "high-contrast-bw",
        displayName: "Zebra - High-Contrast B&W",
        briefDescription: "A striking and bold design using a pure black and white palette for maximum visual impact and clarity. Modern, minimalist, and highly memorable.",
        colorPalette: ["Black (#000000)", "White (#FFFFFF)"],
        bestSuitedForJobs: ["Graphic Designer (Minimalist)", "Architect (Modernist)", "Photographer (B&W Specialist)", "Art Director (High Fashion)", "UX Designer (Clean Interfaces)", "Industrial Designer (Minimalist)", "Typographer (Experimental)"]
    },
    {
        templateKey: "zebra",
        styleKey: "monochrome-accent",
        displayName: "Zebra - Monochrome + Accent",
        briefDescription: "A sophisticated black and white design, punctuated by a single, vibrant accent color for key elements. Creates a dramatic and stylish impression.",
        colorPalette: ["Black (#000000)", "White (#FFFFFF)", "Bright Red Accent (#FF0000)", "Dark Gray (#333333)", "Light Gray (#CCCCCC)"],
        bestSuitedForJobs: ["Brand Strategist", "Creative Director", "Fashion Designer", "Marketing Manager (Bold Campaigns)", "Interior Designer (Modern)", "Advertising Copywriter (Impactful)", "Visual Artist (Conceptual)"]
    },
    {
        templateKey: "zebra",
        styleKey: "impact-monochrome",
        displayName: "Zebra - Impact Monochrome",
        briefDescription: "A powerful and assertive style using strong typography and sharp lines within a black and white framework. Conveys confidence and a modern edge.",
        colorPalette: ["Jet Black (#0A0A0A)", "Pure White (#FFFFFF)", "Graphite Gray (#383838)"],
        bestSuitedForJobs: ["Startup Founder", "Tech Innovator", "Advertising Creative Lead", "Product Designer (Cutting-edge)", "Keynote Speaker (Tech/Design)", "Venture Capitalist (Disruptive Tech)", "UX Architect"]
    },
    {
        templateKey: "zebra",
        styleKey: "bold-graphic-bw",
        displayName: "Zebra - Bold Graphic B&W",
        briefDescription: "Utilizes strong graphic elements, bold typography, and a strict black and white palette for a visually arresting and contemporary resume.",
        colorPalette: ["Black (#000000)", "White (#FFFFFF)", "Dark Gray (#222222) (for large shapes/backgrounds)"],
        bestSuitedForJobs: ["Visual Designer", "Motion Graphics Artist", "Exhibition Designer (Modern Art)", "Digital Artist", "Brand Identity Designer (Bold Style)", "Set Designer (Film/Theater)", "UI Artist (Games)"]
    },
    {
        templateKey: "zebra",
        styleKey: "dynamic-accent-contrast",
        displayName: "Zebra - Dynamic Accent Contrast",
        briefDescription: "A high-energy design playing with sharp black and white contrasts and a dynamic accent color. Modern, memorable, and full of personality.",
        colorPalette: ["Black (#000000)", "White (#FFFFFF)", "Vibrant Yellow (#FFFF00) (or Neon Pink/Green) Accent"],
        bestSuitedForJobs: ["Event Promoter", "Music Industry Professional", "Streetwear Brand Manager", "Social Media Influencer (Creative)", "Game UI Designer", "DJ/Music Producer", "Pop Culture Journalist"]
    }
];

// Make data available globally
if (typeof window !== 'undefined') {
    window.ResumeForgeStyleTheories = styleTheories;
}