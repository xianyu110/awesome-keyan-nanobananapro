// Internationalization configuration
window.i18n = {
    currentLang: localStorage.getItem('lang') || 'zh',

    translations: {
        zh: {
            title: "科研AI绘图图库 - Scientific AI Image Gallery",
            logo: "科研AI绘图图库",
            nav: {
                mechanism: "机制图解",
                inflammation: "炎症与脓毒症",
                liver: "肝脏研究",
                heart: "心脏研究",
                others: "其他研究",
                permanentNav: "永久导航",
                platform: "科研绘图平台"
            },
            search: {
                placeholder: "搜索图片..."
            },
            hero: {
                title: "高质量科研图像生成示例",
                description: "探索基于AI生成的科研图像，包含详细的提示词和生成参数",
                selectedImages: "精选图片",
                prompts: "专业提示词"
            },
            filters: {
                all: "全部",
                mechanism: "机制图解",
                inflammation: "炎症与脓毒症",
                liver: "肝脏研究",
                heart: "心脏研究",
                others: "其他"
            },
            categories: {
                mechanism: "机制图解",
                inflammation: "炎症与脓毒症",
                liver: "肝脏研究",
                heart: "心脏研究",
                others: "其他研究"
            },
            modal: {
                prompt: "提示词",
                copyPrompt: "复制提示词",
                copied: "提示词已复制到剪贴板！"
            },
            footer: {
                copyright: "© 2025 科研AI绘图图库. 所有图片来源于科研AI绘图平台.",
                platform: "专业科研绘图平台",
                permanent: "永久导航",
                repository: "项目仓库",
                about: "关于"
            },
            about: {
                title: "科研AI绘图图库",
                content: `本网站展示了基于AI生成的高质量科研图像示例。

功能特点：
• ${document.getElementById('imageCount')?.textContent || 77}张精选科研图像
• 详细的提示词参考
• 分类浏览和搜索功能
• 响应式设计

所有图片来源于科研AI绘图平台。`,
                footer: "© 2025 科研AI绘图图库"
            }
        },

        en: {
            title: "Scientific AI Image Gallery",
            logo: "Scientific AI Gallery",
            nav: {
                mechanism: "Mechanism",
                inflammation: "Inflammation",
                liver: "Liver Research",
                heart: "Heart Research",
                others: "Others",
                permanentNav: "Permanent Nav",
                platform: "AI Platform"
            },
            search: {
                placeholder: "Search images..."
            },
            hero: {
                title: "High-Quality Scientific AI Generated Images",
                description: "Explore AI-generated scientific images with detailed prompts and parameters",
                selectedImages: "Selected Images",
                prompts: "Professional Prompts"
            },
            filters: {
                all: "All",
                mechanism: "Mechanism",
                inflammation: "Inflammation",
                liver: "Liver",
                heart: "Heart",
                others: "Others"
            },
            categories: {
                mechanism: "Mechanism",
                inflammation: "Inflammation & Sepsis",
                liver: "Liver Research",
                heart: "Heart Research",
                others: "Other Research"
            },
            modal: {
                prompt: "Prompt",
                copyPrompt: "Copy Prompt",
                copied: "Prompt copied to clipboard!"
            },
            footer: {
                copyright: "© 2025 Scientific AI Image Gallery. All images from Scientific AI Drawing Platform.",
                platform: "Professional Platform",
                permanent: "Permanent Nav",
                repository: "Repository",
                about: "About"
            },
            about: {
                title: "Scientific AI Image Gallery",
                content: `This website showcases high-quality AI-generated scientific image examples.

Features:
• ${document.getElementById('imageCount')?.textContent || 77} selected scientific images
• Detailed prompt references
• Category browsing and search functionality
• Responsive design

All images from Scientific AI Drawing Platform.`,
                footer: "© 2025 Scientific AI Image Gallery"
            }
        }
    },

    t(key) {
        const keys = key.split('.');
        let value = this.translations[this.currentLang];
        for (const k of keys) {
            value = value?.[k];
        }
        return value || key;
    },

    setLang(lang) {
        this.currentLang = lang;
        localStorage.setItem('lang', lang);
        document.documentElement.setAttribute('data-lang', lang);
        this.updateUI();
    },

    updateUI() {
        // Update title
        document.title = this.t('title');

        // Update elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            element.textContent = this.t(key);
        });

        // Update elements with data-i18n-placeholder attribute
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            element.placeholder = this.t(key);
        });

        // Update HTML lang attribute
        document.documentElement.lang = this.currentLang;
    },

    init() {
        this.setLang(this.currentLang);
    }
};