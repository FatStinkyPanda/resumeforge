// public/js/showcase.js

document.addEventListener('DOMContentLoaded', () => {
    // --- Data ---
    const TEMPLATE_CONFIG = { // Ensure this uses your updated style names
        alpha: { name: "Alpha", styles: ["classic", "modern", "bold", "executive", "contemporary"]},
        beta: { name: "Beta", styles: ["professional", "creative", "tech", "corporate", "sleek"]},
        charlie: { name: "Charlie", styles: ["academic", "chloe", "sophistication", "elegant", "artisan"]},
        delta: { name: "Delta", styles: ["traditional", "contemporary", "compact", "growth", "balanced"]},
        echo: { name: "Echo", styles: ["innovative", "memorable", "distinctive", "avant-garde", "signature"]},
        foxtrot: { name: "Foxtrot", styles: ["minimal-serif", "minimal-sans", "pure", "essential", "typographic-focus"]},
        golf: { name: "Golf", styles: ["corporate-blue", "executive-gray", "boardroom", "metropolitan", "precision"]},
        hotel: { name: "Hotel", styles: ["classic-cv", "modern-cv", "scholarly", "researcher-detailed", "erudite-formal"]},
        india: { name: "India", styles: ["artistic-vibrant", "geometric-subtle", "dynamic-asymmetric", "gallery-showcase", "vivid-impression"]},
        juliet: { name: "Juliet", styles: ["clean-modern", "soft-professional", "contemporary-chic", "urban-sleek", "balanced-focus"]},
        kilo: { name: "Kilo", styles: ["dark-mode-tech", "light-code", "matrix-dark", "syntax-light", "developer-console"]},
        lima: { name: "Lima", styles: ["infographic-light", "infographic-dark", "data-visual-pro", "metrics-highlight", "impact-dashboard"]},
        mike: { name: "Mike", styles: ["formal-times", "formal-garamond", "classic-legal", "heritage-executive", "establishment-formal"]},
        november: { name: "November", styles: ["skills-focused-modern", "functional-classic", "competency-showcase", "talent-forward", "expertise-centric"]},
        oscar: { name: "Oscar", styles: ["project-showcase-tech", "portfolio-creative", "folio-tech", "creator-showcase", "impact-driven-projects"]},
        papa: { name: "Papa", styles: ["bold-statement", "color-block-impact", "vanguard-impact", "headline-driven", "assertive-profile"]},
        quebec: { name: "Quebec", styles: ["elegant-sidebar", "classic-executive", "prestige-folio", "sophisticate-pro", "timeless-columnar"]},
        romeo: { name: "Romeo", styles: ["vertical-timeline", "horizontal-events", "career-trajectory", "chronicle-flow", "milestone-visual"]},
        sierra: { name: "Sierra", styles: ["compact-onepage", "dense-cv", "executive-summary", "condensed-professional", "info-rich-concise"]},
        tango: { name: "Tango", styles: ["europass-inspired", "global-professional", "international-standard", "vitae-global", "continental-formal"]},
        uniform: { name: "Uniform", styles: ["grid-modular", "block-info", "matrix-blocks", "structured-panel", "precision-grid-layout"]},
        victor: { name: "Victor", styles: ["ultra-minimal", "stark-content", "pure-text", "essentialist-focus", "monochrome-minimal"]},
        whiskey: { name: "Whiskey", styles: ["friendly-rounded", "soft-palette", "welcoming-aura", "organic-professional", "personable-touch"]},
        xray: { name: "Xray", styles: ["analytical-sharp", "data-visual-clean", "metrics-insight", "precision-dataflow", "structured-analytics-pro"]},
        yankee: { name: "Yankee", styles: ["classic-modern-serif", "contemporary-sans", "heritage-contemporary", "timeless-professional", "neo-classic-standard"]},
        zebra: { name: "Zebra", styles: ["high-contrast-bw", "monochrome-accent", "impact-monochrome", "bold-graphic-bw", "dynamic-accent-contrast"]},
    };

    const templateTheories = window.ResumeForgeTemplateTheories || [];
    const styleTheoriesData = window.ResumeForgeStyleTheories || [];

    // --- DOM Elements ---
    const searchInput = document.getElementById('showcase-search-input');
    const gallery = document.getElementById('showcase-gallery');
    
    const stylePreviewModal = document.getElementById('style-preview-modal');
    const stylePreviewImage = document.getElementById('style-preview-image');
    const stylePreviewModalTitle = document.getElementById('style-preview-modal-title');
    const stylePreviewModalClose = stylePreviewModal.querySelector('.modal-close-button');
    const galleryPrevButton = document.getElementById('gallery-prev-button');
    const galleryNextButton = document.getElementById('gallery-next-button');
    const galleryPageIndicator = document.getElementById('style-preview-page-indicator');

    const styleInfoModal = document.getElementById('style-details-info-modal');
    const styleInfoModalTitle = document.getElementById('style-info-modal-title');
    const styleInfoModalBody = document.getElementById('style-info-modal-body');
    const styleInfoModalClose = styleInfoModal.querySelector('.modal-close-button');
    
    const placeholderImage = 'assets/images/showcase-placeholder.png';

    // --- Gallery State ---
    let currentGalleryStyle = {
        templateKey: null,
        styleKey: null,
        styleName: null,
        images: [],
        currentIndex: 0,
        totalImages: 0
    };

    // --- Helper Functions ---
    function debounce(func, delay) {
        let timeout;
        return function(...args) {
            const context = this;
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(context, args), delay);
        };
    }

    function simpleMarkdownToHtml(md) {
        if (!md || typeof md !== 'string') return '';
        let html = md;
        html = html.replace(/^###### (.*$)/gim, '<h6>$1</h6>');
        html = html.replace(/^##### (.*$)/gim, '<h5>$1</h5>');
        html = html.replace(/^#### (.*$)/gim, '<h4>$1</h4>');
        html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
        html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
        html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
        html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/__(.*?)__/g, '<strong>$1</strong>');
        html = html.replace(/\*(.*?)\*/g, '<em>$1</em>').replace(/_(.*?)_/g, '<em>$1</em>');
        
        let inList = false;
        html = html.split('\n').map(line => {
            if (line.match(/^[\-\*]\s+(.*)/)) {
                const itemContent = line.replace(/^[\-\*]\s+/, '');
                if (!inList) {
                    inList = true;
                    return '<ul><li>' + itemContent + '</li>';
                }
                return '<li>' + itemContent + '</li>';
            } else {
                if (inList) {
                    inList = false;
                    return '</ul>' + line;
                }
                return line;
            }
        }).join('\n');
        if (inList) html += '</ul>';

        html = html.replace(/(\r\n|\r|\n){2,}/g, '</p><p>');
        html = html.replace(/(\r\n|\r|\n)/g, '<br>');
        if (!html.match(/^<(h[1-6]|ul|p|div|pre|blockquote)/i) && html.trim() !== '') {
            html = '<p>' + html + '</p>';
        }
        html = html.replace(/<p><\/p>/g, '').replace(/<p><br><\/p>/g, '').replace(/<br><\/p>/g, '</p>');
        return html;
    }

    // --- Modal Logic ---
    function openModal(modalElement) {
        modalElement.classList.remove('hidden');
        setTimeout(() => modalElement.classList.add('visible'), 10); 
    }

    function closeModal(modalElement) {
        modalElement.classList.remove('visible');
        setTimeout(() => modalElement.classList.add('hidden'), 300); 
    }

    stylePreviewModalClose.addEventListener('click', () => closeModal(stylePreviewModal));
    styleInfoModalClose.addEventListener('click', () => closeModal(styleInfoModal));

    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            if (stylePreviewModal.classList.contains('visible')) closeModal(stylePreviewModal);
            if (styleInfoModal.classList.contains('visible')) closeModal(styleInfoModal);
        }
    });

    stylePreviewModal.addEventListener('click', (event) => {
        if (event.target === stylePreviewModal) closeModal(stylePreviewModal);
    });
    styleInfoModal.addEventListener('click', (event) => {
        if (event.target === styleInfoModal) closeModal(styleInfoModal);
    });

    // --- Gallery Navigation Logic ---
    function updateGalleryNavigation() {
        galleryPrevButton.disabled = currentGalleryStyle.currentIndex === 0;
        galleryNextButton.disabled = currentGalleryStyle.currentIndex >= currentGalleryStyle.totalImages - 1;
        galleryPageIndicator.textContent = `Page ${currentGalleryStyle.currentIndex + 1} / ${currentGalleryStyle.totalImages}`;
        
        if (currentGalleryStyle.images.length > 0) {
            stylePreviewImage.src = currentGalleryStyle.images[currentGalleryStyle.currentIndex];
        } else {
            stylePreviewImage.src = placeholderImage; // Fallback if no images found
        }
    }

    galleryPrevButton.addEventListener('click', () => {
        if (currentGalleryStyle.currentIndex > 0) {
            currentGalleryStyle.currentIndex--;
            updateGalleryNavigation();
        }
    });

    galleryNextButton.addEventListener('click', () => {
        if (currentGalleryStyle.currentIndex < currentGalleryStyle.totalImages - 1) {
            currentGalleryStyle.currentIndex++;
            updateGalleryNavigation();
        }
    });

    // --- Rendering Logic ---
    function renderGallery(templatesToDisplay, searchTerm = '') {
        gallery.innerHTML = ''; 
        if (!templatesToDisplay || templatesToDisplay.length === 0) {
            gallery.innerHTML = '<p class="no-results-message">No templates match your search.</p>';
            return;
        }

        const fragment = document.createDocumentFragment();
        templatesToDisplay.forEach(templateTheory => {
            const card = document.createElement('div');
            card.className = 'template-card';
            card.dataset.templateKey = templateTheory.key;

            const descriptionHtml = simpleMarkdownToHtml(templateTheory.descriptionMD);
            let stylesHtml = '';
            const templateConfig = TEMPLATE_CONFIG[templateTheory.key];

            if (templateConfig && templateConfig.styles && templateConfig.styles.length > 0) {
                const stylesList = templateConfig.styles.map(styleKey => {
                    const styleTheory = styleTheoriesData.find(st => st.templateKey === templateTheory.key && st.styleKey === styleKey);
                    const styleDisplayName = styleTheory ? styleTheory.displayName.split(' - ').pop() : (styleKey.charAt(0).toUpperCase() + styleKey.slice(1));
                    
                    let chipClass = 'style-chip';
                    let chipTitle = `Click for details. Hover to preview images for ${styleDisplayName}.`;

                    if (searchTerm && styleTheory) {
                        const isMatch = styleTheory.displayName.toLowerCase().includes(searchTerm) ||
                                      styleTheory.styleKey.toLowerCase().includes(searchTerm) ||
                                      styleTheory.briefDescription.toLowerCase().includes(searchTerm) ||
                                      (styleTheory.colorPalette || []).join(' ').toLowerCase().includes(searchTerm) ||
                                      (styleTheory.bestSuitedForJobs || []).join(' ').toLowerCase().includes(searchTerm);
                        if (isMatch) {
                            chipClass += ' matched-by-search';
                        }
                    }

                    return `<li><span class="${chipClass}" 
                                      data-template-key="${templateTheory.key}" 
                                      data-style-key="${styleKey}"
                                      data-style-name="${styleDisplayName}"
                                      title="${chipTitle}">
                                      ${styleDisplayName}
                                </span></li>`;
                }).join('');

                stylesHtml = `
                    <div class="template-card-styles-section">
                        <h4>Available Styles:</h4>
                        <ul class="template-card-styles-list">
                            ${stylesList}
                        </ul>
                    </div>
                `;
            }

            card.innerHTML = `
                <div class="template-card-header">
                    <h3 class="template-card-name">${templateTheory.displayName}</h3>
                    <span class="template-card-key">${templateTheory.key}</span>
                </div>
                <p class="template-card-tagline">${templateTheory.tagline}</p>
                <div class="template-card-description">${descriptionHtml}</div>
                ${stylesHtml}
            `;
            fragment.appendChild(card);
        });
        gallery.appendChild(fragment);
    }

    async function showStylePreview(templateKey, styleKey, styleName) {
        stylePreviewModalTitle.textContent = `Preview: ${styleName}`;
        
        const styleData = styleTheoriesData.find(s => s.templateKey === templateKey && s.styleKey === styleKey);
        const numPages = (styleData && styleData.numPages > 0) ? styleData.numPages : 1;

        currentGalleryStyle.templateKey = templateKey;
        currentGalleryStyle.styleKey = styleKey;
        currentGalleryStyle.styleName = styleName;
        currentGalleryStyle.images = [];
        currentGalleryStyle.currentIndex = 0;
        currentGalleryStyle.totalImages = 0;

        // Attempt to load images sequentially
        for (let i = 1; i <= numPages; i++) {
            const imagePath = `assets/previews/${templateKey}/${styleKey}-p${i}.png`;
            // Simple check: assume image exists if numPages says so.
            // For a more robust solution, you might ping the image or use an IntersectionObserver
            // but that adds complexity for a hover effect. The `onerror` on the img tag will handle missing ones.
            currentGalleryStyle.images.push(imagePath);
        }
        currentGalleryStyle.totalImages = currentGalleryStyle.images.length;
        
        if (currentGalleryStyle.totalImages === 0) { // If no images were even attempted (e.g. numPages was 0 or undefined)
            currentGalleryStyle.images.push(placeholderImage); // Show placeholder
            currentGalleryStyle.totalImages = 1;
        }

        stylePreviewImage.onerror = () => {
            // If a specific page image fails, try to show placeholder,
            // but ideally, if numPages is accurate, this won't be hit often.
            // If it's the *first* image that fails and we have others, this logic might need refinement.
            // For now, if any image in the sequence fails, we might show placeholder.
            // A better approach if an image in a sequence is missing, is to remove it from the `images` array.
            // However, `onerror` here is on the single `stylePreviewImage` element.
            console.warn(`Image not found: ${stylePreviewImage.src}. Showing placeholder.`);
            stylePreviewImage.src = placeholderImage;
            stylePreviewImage.alt = `Preview for ${styleName} not available.`;
            // Potentially disable next/prev if this was the only image and it failed.
            // This part can be complex; for now, rely on numPages from style_theory.js
        };
        
        updateGalleryNavigation();
        openModal(stylePreviewModal);
    }

    function showStyleInfo(templateKey, styleKey) {
        const styleData = styleTheoriesData.find(s => s.templateKey === templateKey && s.styleKey === styleKey);

        if (!styleData) {
            styleInfoModalTitle.textContent = "Style Details Not Found";
            styleInfoModalBody.innerHTML = "<p>Detailed information for this style is currently unavailable.</p>";
        } else {
            styleInfoModalTitle.textContent = styleData.displayName;
            let bodyHtml = `
                <p><strong>Template Structure:</strong> ${templateKey.charAt(0).toUpperCase() + templateKey.slice(1)}</p>
                <h5>Brief Description:</h5>
                <p>${styleData.briefDescription || 'N/A'}</p>
            `;
            if (styleData.colorPalette && styleData.colorPalette.length > 0) {
                bodyHtml += `<h5>Color Palette:</h5><ul class="color-palette-list">${styleData.colorPalette.map(c => `<li>${c}</li>`).join('')}</ul>`;
            }
            if (styleData.bestSuitedForJobs && styleData.bestSuitedForJobs.length > 0) {
                bodyHtml += `<h5>Best Suited For Jobs:</h5><ul>${styleData.bestSuitedForJobs.map(j => `<li>${j}</li>`).join('')}</ul>`;
            }
            styleInfoModalBody.innerHTML = bodyHtml;
        }
        openModal(styleInfoModal);
    }

    // --- Event Listeners ---
    const handleSearch = debounce(() => {
        const searchTerm = searchInput.value.toLowerCase().trim();
        if (!searchTerm) {
            renderGallery(templateTheories);
            return;
        }

        const matchedTemplateKeys = new Set();

        templateTheories.forEach(theory => {
            if (
                theory.displayName.toLowerCase().includes(searchTerm) ||
                theory.key.toLowerCase().includes(searchTerm) ||
                theory.tagline.toLowerCase().includes(searchTerm) ||
                theory.descriptionMD.toLowerCase().includes(searchTerm)
            ) {
                matchedTemplateKeys.add(theory.key);
            }
        });

        styleTheoriesData.forEach(styleTheory => {
            if (
                styleTheory.displayName.toLowerCase().includes(searchTerm) ||
                styleTheory.styleKey.toLowerCase().includes(searchTerm) ||
                styleTheory.briefDescription.toLowerCase().includes(searchTerm) ||
                (styleTheory.colorPalette || []).join(' ').toLowerCase().includes(searchTerm) ||
                (styleTheory.bestSuitedForJobs || []).join(' ').toLowerCase().includes(searchTerm)
            ) {
                matchedTemplateKeys.add(styleTheory.templateKey);
            }
        });

        const filteredTemplates = templateTheories.filter(theory => matchedTemplateKeys.has(theory.key));
        renderGallery(filteredTemplates, searchTerm);
    }, 300);

    searchInput.addEventListener('input', handleSearch);

    let hoverTimeout;
    gallery.addEventListener('mouseover', (event) => {
        const styleChip = event.target.closest('.style-chip');
        if (styleChip) {
            clearTimeout(hoverTimeout); 
            hoverTimeout = setTimeout(() => {
                // Only show preview modal on hover if info modal is not already open for this chip
                if (styleInfoModal.classList.contains('hidden') || 
                    styleInfoModalTitle.textContent !== (styleChip.dataset.styleName || styleChip.textContent)) {
                    
                    const templateKey = styleChip.dataset.templateKey;
                    const styleKey = styleChip.dataset.styleKey;
                    const styleName = styleChip.dataset.styleName || styleChip.textContent;
                    showStylePreview(templateKey, styleKey, styleName);
                }
            }, 500); // Adjusted delay for hover preview
        }
    });

    gallery.addEventListener('mouseout', (event) => {
        const styleChip = event.target.closest('.style-chip');
        if (styleChip) {
            clearTimeout(hoverTimeout);
             // Close preview modal only if it was opened by hover and not clicked for info
            if (stylePreviewModal.classList.contains('visible') && 
                styleInfoModal.classList.contains('hidden')) { // Only close if info modal is not active
                
                // Check if mouse is moving to another chip or outside gallery
                const related = event.relatedTarget;
                if (!related || !gallery.contains(related) || !related.closest('.style-chip')) {
                   // closeModal(stylePreviewModal); // More aggressive closing, might be too quick
                }
            }
        }
    });
    
    gallery.addEventListener('click', (event) => {
        const styleChip = event.target.closest('.style-chip');
        if (styleChip) {
            clearTimeout(hoverTimeout); // Prevent hover from triggering after click
            const templateKey = styleChip.dataset.templateKey;
            const styleKey = styleChip.dataset.styleKey;
            showStyleInfo(templateKey, styleKey); // Show detailed info on click
            
            // If preview modal is open for a different style, close it.
            // Or, update it to the clicked style. For now, let's allow separate interaction.
            // If you want click to also update the preview modal:
            // const styleName = styleChip.dataset.styleName || styleChip.textContent;
            // showStylePreview(templateKey, styleKey, styleName);
        }
    });


    // --- Initial Render ---
    if (templateTheories.length > 0) {
        renderGallery(templateTheories);
    } else {
        gallery.innerHTML = '<p class="loading-message">Template information not found. Please ensure template_theory.js is loaded.</p>';
    }
});