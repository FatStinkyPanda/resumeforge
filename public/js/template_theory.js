// resumeforge/template_theory.js
/**
 * @fileoverview Provides a structured overview of all available resume templates,
 * including their design philosophy, key features, and best use cases.
 * This data can be used to inform template selection for different client needs.
 */

const templateTheories = [
    {
        key: "alpha",
        displayName: "Alpha",
        tagline: "Traditional, Clear, Impactful Single-Column",
        descriptionMD: `
# Alpha - Template Description

**Design Philosophy:**
The Alpha template offers a traditional, straightforward, and impactful single-column layout. It's designed for clarity and directness, making it easy for recruiters to scan. The "Bold" style variation, in particular, emphasizes strength and a commanding presence through strong typography and clear sectioning.

**Key Features:**
*   **Single-Column Layout:** Classic and easy-to-follow structure.
*   **Clear Header:** Name and title are prominent, with contact details neatly organized, often on the opposite side.
*   **Optional Summary Highlight:** The summary section can be styled with an accent background (as seen in "Bold" style) to draw attention.
*   **Structured Sections:** Well-defined sections for all standard resume content (Experience, Education, Skills, etc.).
*   **Versatile Styling:** Supports styles ranging from classic to modern to bold, adapting to different professional needs.

**Best Suited For:**
*   A wide range of professions where a clear, traditional, and strong presentation is valued.
*   Individuals who prefer a linear, chronological flow of information.
*   Roles requiring a direct and unambiguous communication style.

**Customization Notes:**
*   The header layout (name/title vs. contact block placement) can be adjusted with CSS flexbox properties in specific styles.
*   Font choices and border styles are key differentiators between Alpha's style variations.
*   The summary section's background color can be easily customized using CSS variables in style sheets that implement this feature (e.g., \`--summary-bg-color\`).
        `
    },
    {
        key: "beta",
        displayName: "Beta",
        tagline: "Modern, Organized Two-Column with Sidebar",
        descriptionMD: `
# Beta - Template Description

**Design Philosophy:**
The Beta template provides a modern and highly popular two-column layout. It effectively separates personal branding and secondary information (sidebar) from the main chronological and detailed content (main column). This structure allows for a visually organized and scannable resume.

**Key Features:**
*   **Two-Column Layout:** Typically features a sidebar (often on the left) for contact information, photo/crest, skills, and other concise sections, with a wider main column for detailed experience and education.
*   **Prominent Personal Branding:** The sidebar usually starts with a strong presentation of the name, title, and optional photo/crest.
*   **Timeline Effect:** Main content sections like Experience and Education often use a visual timeline (e.g., a line with dots) to enhance readability and flow.
*   **Adaptable Styles:** Designed to be highly versatile, with styles catering to professional/corporate (e.g., "Professional"), creative (e.g., "Creative"), and technical (e.g., "Tech") fields.
*   **Clear Section Headings:** Headings are distinct in both columns to guide the reader.

**Best Suited For:**
*   Most professions, due to its adaptability through different style variations.
*   Individuals who want to highlight key skills and contact information prominently in a sidebar.
*   Resumes where a clear visual distinction between summary/contact info and detailed experience is beneficial.
*   Designers, developers, marketers, and corporate professionals.

**Customization Notes:**
*   The width ratio of the sidebar to the main column can be adjusted in the CSS (e.g., \`flex: 0 0 33%;\` for the sidebar).
*   Color palettes and typography are the primary differentiators between styles like "Professional," "Creative," and "Tech."
*   The "timeline" effect on experience/education items is a common design element that can be customized or removed via CSS.
        `
    },
    {
        key: "charlie",
        displayName: "Charlie",
        tagline: "Elegant, Sophisticated with Artistic Flair",
        descriptionMD: `
# Charlie - Template Description

**Design Philosophy:**
The Charlie template is designed for elegance and sophistication, often incorporating artistic or refined visual elements. It typically features a distinctive full-width header followed by a two-column layout for the main content, allowing for a blend of impactful introduction and organized details. The "Chloe" style, for example, embodies a warm, floral-themed aesthetic with unique typography.

**Key Features:**
*   **Full-Width Header Block:** Often used for prominent display of name, title, and visual elements like a personal picture and/or crest.
*   **Two-Column Main Content:** Below the header, content is usually split into two columns. Style variations (like "Chloe") might reverse the visual order of these columns using CSS (e.g., info panel on the right).
*   **Decorative Accents:** Commonly employs subtle lines, flourishes, or unique section dividers to enhance visual appeal.
*   **Focus on Typography:** Styles often feature distinctive font pairings, including serif, sans-serif, and cursive/script fonts for different elements (e.g., name vs. body text).
*   **Space for Visuals:** The header and overall layout are conducive to including a personal picture and/or crest effectively.

**Best Suited For:**
*   Academic professionals (CVs).
*   Artistic and creative fields.
*   Executive and leadership roles where a polished and distinguished presentation is important.
*   Individuals seeking a resume that is both professional and visually memorable.

**Customization Notes:**
*   The \`flex-direction\` property on the \`.charlie-two-column-wrapper\` can be used to control which column appears first visually.
*   Colors for decorative elements (lines, flourishes) are key to style variations and can be managed with CSS variables.
*   Font choices significantly impact the feel of Charlie styles; ensure selected fonts are web-safe or properly embedded/linked.
*   The background patterns or subtle textures sometimes used should be print-friendly and have \`print-color-adjust: exact;\` applied.
        `
    },
    {
        key: "delta",
        displayName: "Delta",
        tagline: "Harmonious Blend of Traditional & Modern Design",
        descriptionMD: `
# Delta - Template Description

**Design Philosophy:**
The Delta template aims for a harmonious blend of traditional professionalism and modern, slightly artistic design elements. It often features a prominent, full-width header that includes space for a central personal picture and optional dual crests, creating a strong initial impression. The main content is then typically organized into a clean two-column layout.

**Key Features:**
*   **Distinctive Full-Width Header:** Designed to accommodate a central personal picture, with potential for crests on either side of the name/title area.
*   **Two-Column Content Layout:** Below the header, information is usually split into a sidebar (often for contact, skills, etc.) and a main content area.
*   **Decorative Dividers/Accents:** May incorporate subtle floral or geometric dividers (as seen in the "Growth" style's header/footer) to add a touch of elegance without overwhelming the content.
*   **Balanced Typography:** Often pairs a classic serif for headings with a clean sans-serif for body text, aiming for readability and a professional feel.
*   **Visual Symmetry:** The header design, with its central photo and flanking crests, often lends itself to a sense of balance.

**Best Suited For:**
*   Professionals who want a resume that is both substantial and visually appealing, without being overly flashy.
*   Roles where a strong personal brand and a touch of sophistication are beneficial.
*   Individuals in fields like marketing, consulting, or management.

**Customization Notes:**
*   The visibility and content of the dual crests in the header are controlled by the template's JavaScript based on \`clientData\`.
*   The style of decorative dividers (e.g., \`delta-floral-divider\`) can be significantly altered with CSS background images or SVG.
*   The "Growth" style uses a warm, natural color palette; other styles can adapt this structure to different color schemes.
*   Ensure the central picture container and crest containers are styled to handle absence of images gracefully (e.g., \`display: none;\` via JS).
        `
    },
    {
        key: "echo",
        displayName: "Echo",
        tagline: "Stylized, Distinctive with Unique Graphic Elements",
        descriptionMD: `
# Echo - Template Description

**Design Philosophy:**
The Echo template is characterized by its highly stylized and distinctive design, often emphasizing a strong visual hierarchy through unique graphic elements and layout choices. It aims to be memorable and impactful, suitable for individuals who want their resume to stand out.

**Key Features:**
*   **Ornate/Complex Header:** Typically features a central personal photo integrated with decorative elements, and space for name, title, and potentially dual crests, creating a focal point.
*   **Decorative Flourishes & Connectors:** Often uses SVG or CSS-based flourishes at corners and unique "connector" elements that visually link the header or columns, adding to its distinctive look.
*   **Two-Column Layout:** The main content is usually presented in a two-column format, with clear differentiation between a sidebar and a main content area.
*   **Stylized Section Headings:** Section headings are often designed with unique visual treatments beyond simple text.
*   **Emphasis on Visual Branding:** The layout provides ample opportunity for strong visual branding through the interplay of graphic elements, typography, and color.

**Best Suited For:**
*   Creative professionals, designers, and individuals in fields where a unique and visually striking presentation is an asset.
*   Those who want their resume to make a strong, memorable first impression.
*   Situations where a less traditional resume format is appropriate.

**Customization Notes:**
*   The SVG flourishes and connectors are key to Echo's identity and can be customized (color, shape, complexity) via CSS or by modifying the SVG data in the HTML/CSS.
*   The central photo and crest integration in the header is a defining feature; ensure these elements are well-styled and handle missing images gracefully.
*   Color palettes for Echo styles can range from vibrant and bold to more subdued but still graphically interesting.
*   Due to its stylized nature, ensure that readability is not compromised by overly complex decorative elements. \`pdf-generator.js\` has specific intelligence for Echo to help preserve its complex layout.
        `
    },
    {
        key: "foxtrot",
        displayName: "Foxtrot",
        tagline: "Minimalist, Typography-Focused Single-Column",
        descriptionMD: `
# Foxtrot - Template Description

**Design Philosophy:**
The Foxtrot template embodies minimalism and a strong focus on typography. It utilizes a clean, single-column layout where content hierarchy is primarily established through font size, weight, and subtle spacing, rather than heavy graphical elements or complex structures.

**Key Features:**
*   **Single-Column, Streamlined Layout:** Presents information in a direct, linear fashion.
*   **Typography-Centric:** Relies on excellent font choices and a well-defined typographic scale to guide the reader.
*   **Generous Whitespace:** Employs ample whitespace to create a calm, uncluttered reading experience and improve scannability.
*   **Minimal Decorative Elements:** Avoids borders, background colors, or complex graphics, focusing purely on the content.
*   **Focus on Readability:** Optimized for clear and effortless reading.

**Best Suited For:**
*   Academics, writers, researchers, and professionals in fields where textual content is paramount.
*   Individuals who prefer a very clean, modern, and understated aesthetic.
*   Situations where a traditional, text-heavy CV format is appropriate.

**Customization Notes:**
*   The choice of primary and secondary fonts is critical to this template's success.
*   Spacing (margins, padding, line-height) should be carefully managed to maintain the minimalist feel.
*   Subtle color variations in text (e.g., dark gray for body, slightly darker for headings) can be used instead of relying on size/weight alone.
        `
    },
    {
        key: "golf",
        displayName: "Golf",
        tagline: "Corporate, Professional Two-Column with Grid Alignment",
        descriptionMD: `
# Golf - Template Description

**Design Philosophy:**
The Golf template is tailored for a corporate and highly professional presentation. It typically uses a two-column layout where the main content area is wide, and a narrower sidebar is used for metadata, dates, or secondary information, creating a strong sense of order and grid alignment.

**Key Features:**
*   **Two-Column (Wide Main, Narrow Sidebar):** The primary focus is on the main content, with the sidebar providing contextual or supplementary details.
*   **Strong Grid Alignment:** Elements are meticulously aligned to an underlying grid, conveying structure and precision.
*   **Clear Visual Hierarchy:** Professional typography and distinct sectioning guide the reader efficiently.
*   **Subtle Color Accents:** Often uses a reserved color palette with one or two subtle accent colors for headings or key elements.
*   **Space for Branding:** Header area typically allows for a clean display of name, title, and contact information, possibly with a discreet logo/crest.

**Best Suited For:**
*   Corporate roles, finance, management, consulting, and legal professions.
*   Individuals seeking a resume that looks organized, authoritative, and easy to navigate.
*   Situations requiring a formal and polished presentation.

**Customization Notes:**
*   The width of the narrow sidebar is crucial; it should be just enough for its content without distracting from the main column.
*   Consistent use of borders or subtle lines can reinforce the grid structure.
*   Font choices should be professional and highly readable (e.g., classic sans-serifs like Helvetica, Open Sans, or serifs like Garamond).
        `
    },
    {
        key: "hotel",
        displayName: "Hotel",
        tagline: "Academic/Research CV, Detail-Oriented Single-Column",
        descriptionMD: `
# Hotel - Template Description

**Design Philosophy:**
The Hotel template is designed for academic or research-oriented Curriculum Vitae (CVs). It typically features a single-column layout that can accommodate extensive detail, including sections for publications, grants, presentations, and professional affiliations. Readability and comprehensive information display are prioritized.

**Key Features:**
*   **Single-Column, Detail-Oriented:** Optimized for presenting a large amount of textual information clearly.
*   **Academic Sections:** Structure allows for easy inclusion of sections common in CVs (e.g., Publications, Research Experience, Teaching, Grants, Awards).
*   **Formal Typography:** Often uses classic serif fonts for body text and clear sans-serif or serif fonts for headings to maintain a formal and scholarly appearance.
*   **Clear Chronological Ordering:** Emphasizes dates and chronological progression within sections like Education and Experience.
*   **Minimal Graphics:** Focuses on content clarity, generally avoiding decorative graphics.

**Best Suited For:**
*   Academics, researchers, scientists, PhD candidates, and medical professionals.
*   Individuals needing to present a comprehensive history of their academic and professional achievements.
*   Situations where a multi-page CV is expected.

**Customization Notes:**
*   Line spacing and paragraph spacing are critical for readability with dense text.
*   Consistent formatting for citations (if publications are included) is important.
*   Templates may include specific styling for lists of publications or presentations.
        `
    },
    {
        key: "india",
        displayName: "India",
        tagline: "Creative, Asymmetrical, Visually Engaging",
        descriptionMD: `
# India - Template Description

**Design Philosophy:**
The India template embraces a creative and visually engaging approach, often utilizing an asymmetrical layout or unique structural elements. It's designed to be eye-catching and memorable, suitable for individuals in artistic or design-focused fields. While visually distinct, it aims to maintain a professional balance.

**Key Features:**
*   **Asymmetrical or Unique Layout:** May deviate from standard single or two-column structures, perhaps using overlapping elements, varied column widths, or unconventional section placement.
*   **Emphasis on Visual Appeal:** Often incorporates color, imagery (if appropriate for the role, e.g., portfolio links or subtle background graphics), and distinctive typography.
*   **Creative Sectioning:** Sections might be presented in non-traditional ways, e.g., skills as a visual chart or experience in a more narrative or project-based format.
*   **Space for Branding Elements:** Well-suited for integrating a unique personal logo, crest, or a strong visual identity.
*   **Modern Typography:** Likely uses contemporary font pairings that contribute to the overall design aesthetic.

**Best Suited For:**
*   Graphic designers, UX/UI designers, artists, photographers, marketers, and other creative professionals.
*   Individuals in startups or modern companies where a unique resume can be an advantage.
*   Portfolios that need a visually complementary resume.

**Customization Notes:**
*   The success of this template relies heavily on strong CSS skills to manage the asymmetrical or unique layout effectively across different content lengths.
*   Color choices and graphic elements should be carefully selected to enhance, not detract from, readability.
*   Ensure that despite the creative layout, key information remains easy to find and parse for recruiters.
        `
    },
    {
        key: "juliet",
        displayName: "Juliet",
        tagline: "Modern, Clean, Balanced Two-Column",
        descriptionMD: `
# Juliet - Template Description

**Design Philosophy:**
The Juliet template offers a modern, clean, and balanced two-column layout. It's designed for professionals who want a contemporary look that is both stylish and highly readable. It typically features a sidebar for key personal and contact information, with the main column dedicated to chronological details.

**Key Features:**
*   **Modern Two-Column Structure:** Usually a left or right sidebar for contact details, summary/profile, and skills, with a larger main column for experience and education.
*   **Clean Typography:** Employs clear, modern sans-serif fonts for excellent readability on screen and in print.
*   **Subtle Color Accents:** Uses a refined color palette, often with one or two accent colors for headings, borders, or icons to add visual interest without being distracting.
*   **Whitespace Management:** Utilizes whitespace effectively to create a breathable and uncluttered design.
*   **Optional Icons:** May incorporate subtle icons for contact information or section headings to enhance visual cues.

**Best Suited For:**
*   A wide range of modern professionals, including those in tech, marketing, project management, and business.
*   Individuals seeking a balance between contemporary design and professional clarity.
*   Resumes that benefit from a clear separation of "at-a-glance" info (sidebar) and detailed history (main column).

**Customization Notes:**
*   The accent color(s) can be easily changed via CSS variables to match personal branding.
*   The width of the sidebar can be adjusted to suit content density.
*   Iconography should be consistent and professional if used.
        `
    },
    {
        key: "kilo",
        displayName: "Kilo",
        tagline: "Tech-Focused, Dark Theme Option, Code-Inspired",
        descriptionMD: `
# Kilo - Template Description

**Design Philosophy:**
The Kilo template is designed with a tech-focused aesthetic, often featuring a dark theme option and elements styled to resemble code blocks or developer interfaces. It can be structured as a single or two-column layout, prioritizing clarity and a modern, digital feel.

**Key Features:**
*   **Tech-Inspired Visuals:** May use monospace fonts for certain elements, syntax highlighting-like color schemes, or UI-inspired sectioning.
*   **Dark Theme Option:** Often includes a well-executed dark mode style variation.
*   **Flexible Layout:** Can be implemented as a single, streamlined column or a two-column layout for better information organization.
*   **Code Block Styling:** Skills, projects, or technical proficiencies might be presented in a format reminiscent of code blocks or configuration files.
*   **Clear Information Hierarchy:** Despite the stylistic theme, it maintains a clear structure for easy parsing of technical information.

**Best Suited For:**
*   Software developers, engineers, data scientists, IT professionals, and cybersecurity experts.
*   Individuals in the tech industry who want a resume that reflects their field.
*   Situations where a slightly unconventional but still professional resume is appropriate.

**Customization Notes:**
*   The choice of monospace font for code-like sections is important for authenticity.
*   Color palettes in dark themes need careful attention to contrast for readability.
*   The level of "techiness" in styling can be scaled up or down based on the specific style variation.
        `
    },
    {
        key: "lima",
        displayName: "Lima",
        tagline: "Infographic-Inspired, Visually Engaging Data Presentation",
        descriptionMD: `
# Lima - Template Description

**Design Philosophy:**
The Lima template aims to incorporate infographic-inspired visual elements to present information in a more engaging and digestible way. While true data visualization is limited by the resume data structure, this template uses graphical representations for timelines, skill groupings, or section emphasis.

**Key Features:**
*   **Visually Rich Elements:** May use progress bar-like visuals for skills (conceptual, as proficiency levels aren't in data), custom icons for sections, or a graphical timeline for experience.
*   **Structured Layout:** Often two-column to balance visual elements with text.
*   **Color-Coding:** Might use distinct colors for different sections or types of information to aid visual parsing.
*   **Modern and Engaging:** Designed to be more visually stimulating than traditional text-heavy resumes.
*   **Clear Data Presentation:** Even with visual elements, the core information remains clear and accessible.

**Best Suited For:**
*   Individuals in fields where visual communication is valued (e.g., marketing, data analysis, project management with visual roadmaps).
*   Candidates applying to modern companies that appreciate creative presentations.
*   Resumes that need to make complex information (like diverse skill sets or project timelines) more immediately understandable.

**Customization Notes:**
*   Visual elements (like skill bars) are primarily for aesthetic effect and may not represent actual data proficiency unless the data structure is extended.
*   Requires careful balance to ensure visual elements enhance rather than clutter the resume.
*   Iconography and color choices are key to the effectiveness of the infographic style.
        `
    },
    {
        key: "mike",
        displayName: "Mike",
        tagline: "Highly Traditional, Formal Single-Column, Classic Serif",
        descriptionMD: `
# Mike - Template Description

**Design Philosophy:**
The Mike template adheres to a highly traditional and formal single-column layout. It prioritizes conventional structure, readability, and a conservative appearance, often utilizing classic serif fonts like Times New Roman or Garamond. It is designed for professions where utmost formality is expected.

**Key Features:**
*   **Strictly Single-Column:** Follows a classic, linear resume format.
*   **Formal Typography:** Employs traditional serif fonts for body text and headings.
*   **Conservative Formatting:** Uses standard section headings, bullet points, and date alignments.
*   **Minimal to No Graphics:** Avoids any decorative elements, icons, or color beyond black/dark gray text on a white background.
*   **Emphasis on Content Substance:** The design recedes to let the textual content take full prominence.

**Best Suited For:**
*   Legal professions, high-level government positions, traditional academic roles, and other fields requiring extreme formality.
*   Very experienced professionals who need to list extensive credentials in a straightforward manner.
*   Situations where any deviation from a highly traditional format might be perceived negatively.

**Customization Notes:**
*   Font choice is paramount – stick to well-established, highly readable serif fonts.
*   Margins and line spacing should be generous enough to prevent a cramped appearance, especially with dense text.
*   Any style variations would likely involve subtle changes in font size, heading weight, or margin adjustments, rather than significant design alterations.
        `
    },
    {
        key: "november",
        displayName: "November",
        tagline: "Skills-First/Functional Emphasis, Modern & Clean",
        descriptionMD: `
# November - Template Description

**Design Philosophy:**
The November template is designed with a "skills-first" or "functional" resume approach in mind. It places a strong emphasis on the skills section, often positioning it prominently at the top or in a highly visible area. The layout aims to immediately highlight the candidate's capabilities.

**Key Features:**
*   **Prominent Skills Section:** The skills section is a primary focal point, often larger or more detailed than in other templates.
*   **Visual Skill Grouping:** Skills might be grouped thematically and presented with clear subheadings or visual separators.
*   **Flexible Layout for Experience:** While skills are emphasized, the template still provides clear sections for experience and education, which might be more concise or follow the skills.
*   **Clear Call-to-Action (Implicit):** The design encourages recruiters to quickly assess core competencies.
*   **Modern and Clean:** Typically uses a clean, professional aesthetic to support the skills focus.

**Best Suited For:**
*   Career changers who want to emphasize transferable skills.
*   Individuals with diverse skill sets that may not be immediately apparent from job titles alone.
*   Technical professionals or freelancers whose service offerings are skill-based.
*   Situations where specific skills are the primary hiring criteria.

**Customization Notes:**
*   The structure of the skills section (e.g., columns, lists, tag clouds) is a key design element.
*   The template might use a single or two-column layout, with the skills section strategically placed.
*   Typography should ensure that skill categories and individual skills are easily distinguishable.
        `
    },
    {
        key: "oscar",
        displayName: "Oscar",
        tagline: "Project-Centric, Detailed Project Showcase",
        descriptionMD: `
# Oscar - Template Description

**Design Philosophy:**
The Oscar template is tailored for professionals whose work is best showcased through specific projects. It features a layout that gives prominence to a dedicated "Projects" section, allowing for detailed descriptions, roles, technologies used, and outcomes for each project.

**Key Features:**
*   **Project-Centric Structure:** A significant portion of the resume is dedicated to a detailed projects section.
*   **Detailed Project Entries:** Each project item allows space for a title, description, technologies/skills used, and key contributions or results.
*   **Clear Link to Experience (Optional):** Projects might be linked to or grouped under relevant professional experiences.
*   **Professional and Organized:** Maintains a clear, professional look suitable for showcasing technical or complex project work.
*   **Adaptable Layout:** Can be single or two-column, with the project section often taking a significant part of the main content area.

**Best Suited For:**
*   Software developers, engineers, designers, researchers, consultants, and freelancers.
*   Individuals whose accomplishments are better demonstrated through projects than traditional job descriptions.
*   Portfolios where the resume serves as a summary and pointer to more detailed project showcases.

**Customization Notes:**
*   The formatting of each project entry (headings, lists for technologies, paragraph for description) is crucial for readability.
*   Consider using subtle icons or tags for technologies used within each project.
*   If linked to experience, ensure a clear visual connection between the job role and the projects undertaken during that role.
        `
    },
    {
        key: "papa",
        displayName: "Papa",
        tagline: "Bold, Impactful Single-Column, Strong Headlines",
        descriptionMD: `
# Papa - Template Description

**Design Philosophy:**
The Papa template is designed to be bold, impactful, and modern. It often uses a single-column layout with strong headlines, clear sectioning, and potentially the use of color blocking or prominent visual accents to make a statement.

**Key Features:**
*   **Impactful Single-Column Layout:** Focuses attention and guides the eye linearly through strong visual cues.
*   **Strong Headlines:** Section headings are typically large, bold, and may use a distinct accent color or background.
*   **Color Blocking (Optional):** Style variations might use blocks of color for the header, summary, or to delineate sections.
*   **Modern Typography:** Employs contemporary sans-serif fonts that are clean and assertive.
*   **Clear Information Chunks:** Content within sections is well-organized and easy to digest, despite the bold styling.

**Best Suited For:**
*   Professionals in marketing, sales, leadership, or any field where a confident and assertive presentation is beneficial.
*   Individuals who want their resume to be immediately noticeable and memorable.
*   Modern companies that appreciate a bolder design aesthetic.

**Customization Notes:**
*   The effectiveness of color blocking depends on careful color choices to maintain professionalism and readability.
*   Typography (font weight, size, letter spacing for headings) plays a key role in achieving the "impactful" feel.
*   Whitespace is still important to prevent the bold elements from overwhelming the reader.
        `
    },
    {
        key: "quebec",
        displayName: "Quebec",
        tagline: "Elegant Two-Column, Full-Height Sidebar Impression, Refined",
        descriptionMD: `
# Quebec - Template Description

**Design Philosophy:**
The Quebec template embodies elegance and sophistication through a refined two-column layout, often featuring a full-height sidebar. It emphasizes high-quality typography, generous whitespace, and a classic, timeless appeal.

**Key Features:**
*   **Elegant Two-Column Layout:** Typically includes a distinct sidebar (which could run the full height of the page conceptually) for contact details, a brief profile, or skills, and a main content area.
*   **Refined Typography:** Often uses classic serif fonts for body text and elegant sans-serif or serif fonts for headings. Typographic details like ligatures or old-style figures might be considered in specific styles.
*   **Generous Whitespace:** Ample margins and spacing create a sense of luxury and improve readability.
*   **Subtle Decorative Elements:** May include fine lines as separators or a discreet monogram/crest.
*   **Focus on Professionalism:** Maintains a highly professional and polished appearance.

**Best Suited For:**
*   Executives, academics, legal professionals, and individuals in fields where a sophisticated and understated elegance is valued.
*   Candidates who want a resume that feels premium and meticulously crafted.
*   Multi-page CVs where the consistent sidebar provides excellent navigation.

**Customization Notes:**
*   The full-height sidebar effect is achieved through CSS and careful content balancing; \`pdf-generator.js\` will attempt to replicate this visual.
*   Color palettes are typically muted and classic (e.g., creams, grays, deep blues or burgundies as accents).
*   Typographic hierarchy must be impeccable.
        `
    },
    {
        key: "romeo",
        displayName: "Romeo",
        tagline: "Timeline-Centric, Visual Career Progression",
        descriptionMD: `
# Romeo - Template Description

**Design Philosophy:**
The Romeo template is timeline-centric, visually presenting experience and education along a chronological axis. This design helps to clearly illustrate career progression and the duration of roles or studies.

**Key Features:**
*   **Visual Timeline:** The core feature is a graphical timeline (vertical or horizontal, depending on the style) along which experience and education entries are placed.
*   **Clear Date Emphasis:** Dates (start and end) are prominently displayed and aligned with the timeline.
*   **Structured Entries:** Each entry on the timeline is clearly delineated, often with a distinct "node" or marker on the timeline itself.
*   **Balanced Information Display:** While the timeline is central, sufficient space is provided for job titles, company names, and key responsibilities/achievements.
*   **Modern or Classic Styling:** Can be styled to look modern and sleek or more traditional, depending on font and color choices.

**Best Suited For:**
*   Professionals who want to clearly showcase a strong, linear career progression.
*   Individuals with a consistent work history where the timeline visually reinforces their experience.
*   Project managers or roles where tracking time and duration is relevant.

**Customization Notes:**
*   The timeline can be styled in various ways (solid line, dashed line, with icons, etc.).
*   Color can be used to differentiate types of entries (e.g., work vs. education) or to highlight current roles.
*   Ensuring readability of text associated with each timeline point is crucial, especially if space is constrained.
        `
    },
    {
        key: "sierra",
        displayName: "Sierra",
        tagline: "Compact, Information-Dense, Single-Page Focus",
        descriptionMD: `
# Sierra - Template Description

**Design Philosophy:**
The Sierra template is designed for compactness and information density. It aims to fit a substantial amount of content onto a single page (or fewer pages for longer CVs) without appearing overly cluttered, making it ideal for experienced professionals with extensive histories.

**Key Features:**
*   **Content-Dense Layout:** Utilizes space efficiently, often with slightly smaller font sizes, tighter line spacing, and narrower margins (where appropriate for print).
*   **Clear Prioritization:** While compact, it maintains a clear visual hierarchy to ensure key information is still scannable.
*   **Multi-Column or Optimized Single-Column:** May use a two-column layout where both columns are actively used for primary content, or a highly optimized single-column structure.
*   **Concise Formatting:** Employs formatting that minimizes wasted space (e.g., dates aligned to the right of job titles, concise bullet points).
*   **Professional Aesthetic:** Despite its density, it strives for a clean and professional appearance.

**Best Suited For:**
*   Experienced professionals with a long work history who need to condense it effectively.
*   Academics or researchers with many publications or presentations to list.
*   Situations where a one-page resume is strongly preferred despite extensive experience.

**Customization Notes:**
*   Readability is paramount; font choices must be very clear even at slightly smaller sizes.
*   Careful management of whitespace, even if reduced, is key to avoiding a cramped look.
*   Section order and content conciseness are critical for this template to be effective.
        `
    },
    {
        key: "tango",
        displayName: "Tango",
        tagline: "International/European CV Style, Comprehensive",
        descriptionMD: `
# Tango - Template Description

**Design Philosophy:**
The Tango template is designed with an international or European CV style in mind. It may include sections or formatting conventions common in international contexts, such as a dedicated "Personal Details" section if the client data were to support it (e.g., date of birth, nationality - note: current \`clientData\` doesn't include these). It aims for a comprehensive and globally understood format.

**Key Features:**
*   **Globally Recognized Structure:** Often follows a clear, logical flow that is common in international CVs.
*   **Space for Comprehensive Details:** Layout accommodates more extensive personal information or sections if needed.
*   **Clear Typography:** Uses highly readable and professional fonts.
*   **Professional and Uncluttered:** Maintains a clean and straightforward appearance.
*   **Optional Photo Placement:** Often designed to gracefully incorporate a professional headshot if desired and appropriate for the target region.

**Best Suited For:**
*   Individuals applying for international positions or to multinational companies.
*   Candidates in fields or regions where a more comprehensive CV format is standard.
*   Academic or research roles with international collaboration.

**Customization Notes:**
*   While the current \`clientData\` structure is fixed, the template's design can be made flexible to show/hide certain personal detail sub-sections based on data presence.
*   Date formatting might need to be explicitly \`DD/MM/YYYY\` or \`MM/DD/YYYY\` depending on the style variation and target audience, though \`formatDisplayMonthYear\` provides locale-aware month names.
*   Section naming can be adapted (e.g., "Work Experience" vs. "Professional Experience").
        `
    },
    {
        key: "uniform",
        displayName: "Uniform",
        tagline: "Grid-Based, Modular, Structured, Modern",
        descriptionMD: `
# Uniform - Template Description

**Design Philosophy:**
The Uniform template utilizes a grid-based layout to arrange sections in a modular and highly structured manner. This approach offers a modern, organized, and visually balanced presentation of information, appealing to those who appreciate precision and clarity.

**Key Features:**
*   **Grid-Based Structure:** Content sections are arranged within a defined CSS Grid, creating a tiled or modular appearance.
*   **Visual Balance and Alignment:** The grid enforces strong alignment and visual harmony between different content blocks.
*   **Modern Aesthetic:** Conveys a contemporary and organized feel.
*   **Flexible Content Modules:** Different sections can occupy different grid areas, allowing for varied emphasis.
*   **Clear Readability:** Despite the modularity, the flow of information within each section remains clear.

**Best Suited For:**
*   Professionals in design, architecture, tech, or fields where structure and organization are key.
*   Individuals who prefer a non-linear but highly organized resume presentation.
*   Resumes that need to showcase diverse types of information (e.g., skills, projects, experience) in equally weighted blocks.

**Customization Notes:**
*   The definition of \`grid-template-columns\`, \`grid-template-rows\`, and \`grid-template-areas\` in the CSS is fundamental to this template.
*   The size and placement of each section within the grid can be customized for different style variations.
*   Responsive handling of the grid for smaller screens (though the primary output is fixed-width PDF) needs consideration if an HTML version were ever viewed directly.
        `
    },
    {
        key: "victor",
        displayName: "Victor",
        tagline: "Ultra-Minimalist, Typography-Driven, Stark Simplicity",
        descriptionMD: `
# Victor - Template Description

**Design Philosophy:**
The Victor template is the epitome of minimalism, bordering on stark. It focuses almost exclusively on the content and typography, stripping away virtually all decorative elements. The design prioritizes extreme clarity, directness, and a sense of sophisticated simplicity.

**Key Features:**
*   **Ultra-Minimalist Design:** Avoids borders, background colors, icons, and complex graphical elements.
*   **Typography as the Primary Design Element:** Relies entirely on font choice, size, weight, and spacing to create hierarchy and visual appeal.
*   **Single-Column (Usually):** Typically a single-column layout to maintain the straightforward flow.
*   **Generous Whitespace:** Uses whitespace strategically to ensure readability and prevent the design from feeling empty despite its minimalism.
*   **Content-Forward:** The design recedes entirely, allowing the qualifications and experience of the candidate to be the sole focus.

**Best Suited For:**
*   Fields where substance is valued far above presentation (e.g., some highly technical or academic roles).
*   Individuals with very strong content who want it to speak for itself.
*   Minimalist design enthusiasts.
*   Situations where an extremely conservative and unembellished format is required.

**Customization Notes:**
*   Font selection is absolutely critical; a high-quality, highly readable font (serif or sans-serif) is essential.
*   The typographic scale (ratio between heading sizes, body text, etc.) must be perfectly executed.
*   Even minor adjustments to margins, padding, and line-height can significantly impact the overall feel.
        `
    },
    {
        key: "whiskey",
        displayName: "Whiskey",
        tagline: "Warm, Approachable, Friendly, Soft Design",
        descriptionMD: `
# Whiskey - Template Description

**Design Philosophy:**
The Whiskey template aims for a warm, approachable, and friendly design. It often uses rounded corners, softer color palettes, and clear, inviting typography to create a positive and personable impression.

**Key Features:**
*   **Soft and Approachable Aesthetic:** Utilizes design elements like rounded corners for containers or visual accents.
*   **Warm Color Palette:** Often employs earthy tones, muted pastels, or warm grays, with friendly accent colors.
*   **Readable and Friendly Typography:** Typically uses clean sans-serif fonts that feel open and accessible.
*   **Balanced Layout:** Can be single or two-column, with a focus on creating a harmonious and easy-to-navigate structure.
*   **Subtle Use of Icons or Illustrations (Optional):** May incorporate soft, friendly icons or very subtle illustrative elements if appropriate for the style.

**Best Suited For:**
*   Customer service, human resources, teaching, healthcare, and other people-oriented professions.
*   Individuals who want to convey a personable and welcoming demeanor.
*   Companies with a friendly and collaborative culture.

**Customization Notes:**
*   The choice of color palette significantly defines the "warmth" of the style.
*   Roundedness (\`border-radius\`) can be applied to various elements like picture frames, section containers, or skill tags.
*   Typography should be clean and legible, avoiding overly formal or stark fonts.
        `
    },
    {
        key: "xray",
        displayName: "Xray",
        tagline: "Data-Driven, Analytical, Precise, Structured",
        descriptionMD: `
# Xray - Template Description

**Design Philosophy:**
The Xray template is designed to convey a data-driven, analytical, and precise feel. It features clean lines, structured information blocks, and potentially the use of icons or subtle visual cues to represent data points or key metrics (conceptually, as the data structure doesn't directly support detailed metrics).

**Key Features:**
*   **Clean and Structured Layout:** Emphasizes order, precision, and clarity, often using a well-defined grid or columnar structure.
*   **Analytical Aesthetic:** Uses sharp lines, possibly fine borders, and a generally uncluttered appearance.
*   **Iconography for Data Points (Conceptual):** Could use icons to represent types of skills, contact methods, or section themes, enhancing scannability.
*   **Modern Sans-Serif Typography:** Prefers crisp, modern sans-serif fonts for a technical and clean look.
*   **Data-Centric Emphasis:** The design supports clear presentation of quantifiable achievements or technical specifications.

**Best Suited For:**
*   Data analysts, business intelligence professionals, engineers, researchers, and financial analysts.
*   Individuals in roles that require precision, analytical thinking, and clear presentation of data or technical details.
*   Resumes where quantifiable achievements are a key component.

**Customization Notes:**
*   The use of icons should be consistent and serve to clarify information rather than decorate.
*   Color palettes are often cool and analytical (e.g., blues, grays, with a single sharp accent color).
*   Charts or graphs are not directly supported by the data, but the layout can be made to feel "data-rich" through structured presentation of text and numbers.
        `
    },
    {
        key: "yankee",
        displayName: "Yankee",
        tagline: "Classic Structure with Modern Sensibilities, Timeless",
        descriptionMD: `
# Yankee - Template Description

**Design Philosophy:**
The Yankee template offers a blend of classic structure with modern design sensibilities. It typically uses a traditional serif font for readability and a sense of establishment, but pairs it with contemporary spacing, clean lines, and a well-organized layout, often single-column or a very clear two-column.

**Key Features:**
*   **Classic Typography with Modern Layout:** Often features a readable serif font (like Garamond, Georgia, or Merriweather) for body text, combined with modern sans-serifs for headings or vice-versa, within a contemporary layout.
*   **Balanced Whitespace:** Uses whitespace effectively to ensure readability and a professional, uncluttered appearance.
*   **Clear Sectioning:** Well-defined sections with clear headings.
*   **Professional and Timeless:** Aims for an aesthetic that is both established and current, suitable for a wide range of professional fields.
*   **Subtle Accents:** May use fine lines as separators or a discreet accent color for headings or names.

**Best Suited For:**
*   A broad range of professionals seeking a resume that is both traditional and up-to-date.
*   Law, finance, academia, and corporate management roles.
*   Individuals who appreciate classic readability combined with modern design clarity.

**Customization Notes:**
*   The pairing of serif and sans-serif fonts is a key element of this template's style.
*   The accent color should be chosen to complement the classic feel (e.g., deep blue, burgundy, or a sophisticated gray).
*   Layout can be a robust single column or a two-column setup where the sidebar contains contact/summary and the main column lists chronological entries.
        `
    },
    {
        key: "zebra",
        displayName: "Zebra",
        tagline: "High-Contrast, Striking Black & White, Bold",
        descriptionMD: `
# Zebra - Template Description

**Design Philosophy:**
The Zebra template is characterized by its high-contrast design, often utilizing a stark black and white palette with the potential for a single, very strong accent color. It aims to be striking, memorable, and exceptionally clear, making a bold statement.

**Key Features:**
*   **High-Contrast Palette:** Primarily black and white, or very dark gray and white, to maximize readability and visual impact.
*   **Strong Accent Color (Optional):** A single, vibrant accent color might be used sparingly for key elements like the name, section headings, or call-to-action elements.
*   **Clean and Bold Typography:** Often uses strong sans-serif fonts for headings and clear, legible fonts for body text.
*   **Structured Layout:** Can be single or two-column, but always with a focus on sharp lines and clear delineation between sections.
*   **Minimalist with Impact:** Avoids clutter, focusing on the power of contrast and strong typography to make an impression.

**Best Suited For:**
*   Creative fields, marketing, branding, and design roles where a bold statement is appreciated.
*   Individuals wanting a resume that is visually distinct and modern.
*   Situations where a resume needs to stand out from a pile of more traditional ones.

**Customization Notes:**
*   The choice of accent color (if used) is critical and should be used very intentionally.
*   Negative space (white space) is extremely important in a high-contrast design to prevent it from feeling overwhelming.
*   Font weights and sizes must be carefully managed to leverage the contrast effectively for hierarchy.
        `
    }
];

// If this file were part of a module system, you might export it:
// export default templateTheories;

// For direct use in a browser environment (like ResumeForge seems to be structured):
if (typeof window !== 'undefined') {
    window.ResumeForgeTemplateTheories = templateTheories;
}