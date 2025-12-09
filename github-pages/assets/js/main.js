// 从外部文件导入图片数据
let galleryData = [];

// 全局变量
let currentFilter = 'all';
let filteredData = [];

// DOM元素
const gallery = document.getElementById('gallery');
const searchInput = document.getElementById('searchInput');
const loading = document.getElementById('loading');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalCategory = document.getElementById('modalCategory');
const modalPrompt = document.getElementById('modalPrompt');
const closeModal = document.querySelector('.close');

// 异步加载图片数据
async function loadGalleryData() {
    try {
        // 尝试从外部JSON文件加载数据
        const response = await fetch('assets/js/gallery_data.js');
        if (response.ok) {
            const scriptText = await response.text();
            // 执行脚本以获取数据
            eval(scriptText);
            galleryData = window.galleryData || [];
        } else {
            throw new Error('无法加载外部数据文件');
        }
    } catch (error) {
        console.log('使用内置示例数据...');
        // 如果无法加载外部数据，使用示例数据
        galleryData = [
            {
                id: 1,
                title: "外泌体生物发生和分子组成",
                category: "mechanism",
                categoryName: "机制图解",
                image: "https://tycloud-eos-beijing-1.dftianyi.com/upload/20251126/3e17d909f1aada739245f12c11dc3125.png",
                prompt: "创建一个全面的细胞生物学插图，展示外泌体的生物发生和分子组成..."
            }
        ];
    }

    // 初始化过滤数据
    filteredData = [...galleryData];

    // 渲染画廊
    renderGallery();

    // 更新统计信息
    updateStats();
}

// 更新统计信息
function updateStats() {
    const imageCount = document.getElementById('imageCount');
    const promptCount = document.getElementById('promptCount');

    if (imageCount) {
        imageCount.textContent = galleryData.length; // 精选图片数量
    }
    if (promptCount) {
        promptCount.textContent = galleryData.length + '+'; // 专业提示词数量
    }
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    loadGalleryData();
    setupEventListeners();
});

// 设置事件监听器
function setupEventListeners() {
    // 搜索功能
    searchInput.addEventListener('input', handleSearch);

    // 过滤按钮
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', handleFilter);
    });

    // 导航链接
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', handleNavClick);
    });

    // 模态框
    closeModal.addEventListener('click', closeModalHandler);
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModalHandler();
        }
    });

    // ESC键关闭模态框
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModalHandler();
        }
    });
}

// 渲染画廊
function renderGallery() {
    if (!gallery || galleryData.length === 0) return;

    loading.classList.remove('hidden');
    gallery.innerHTML = '';

    // 模拟异步加载
    setTimeout(() => {
        filteredData.forEach(item => {
            const galleryItem = createGalleryItem(item);
            gallery.appendChild(galleryItem);
        });
        loading.classList.add('hidden');
    }, 300);
}

// 创建画廊项目
function createGalleryItem(item) {
    const div = document.createElement('div');
    div.className = 'gallery-item fade-in';
    div.innerHTML = `
        <img src="${item.image}" alt="${item.title}" class="gallery-image" loading="lazy"
             onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+CiAgPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPuekuuS+i+WNoOeUqOaIt+WPuumdhzwvdGV4dD4KPC9zdmc+';">
        <div class="gallery-content">
            <h3 class="gallery-title">${item.title}</h3>
            <span class="gallery-category">${item.categoryName}</span>
            <p class="gallery-prompt">${item.prompt.substring(0, 150)}...</p>
        </div>
    `;

    div.addEventListener('click', () => openModal(item));
    return div;
}

// 搜索功能
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();

    if (searchTerm === '') {
        filteredData = currentFilter === 'all'
            ? [...galleryData]
            : galleryData.filter(item => item.category === currentFilter);
    } else {
        filteredData = galleryData.filter(item =>
            item.title.toLowerCase().includes(searchTerm) ||
            item.prompt.toLowerCase().includes(searchTerm) ||
            item.categoryName.toLowerCase().includes(searchTerm)
        );
    }

    renderGallery();
}

// 过滤功能
function handleFilter(e) {
    const filter = e.currentTarget.dataset.filter;
    currentFilter = filter;

    // 更新按钮状态
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    e.currentTarget.classList.add('active');

    // 过滤数据
    if (filter === 'all') {
        filteredData = [...galleryData];
    } else {
        filteredData = galleryData.filter(item => item.category === filter);
    }

    renderGallery();
}

// 导航点击
function handleNavClick(e) {
    const href = e.target.getAttribute('href');
    if (href && href.startsWith('#')) {
        e.preventDefault();
        const categoryMap = {
            '#mechanism': 'mechanism',
            '#inflammation': 'inflammation',
            '#liver': 'liver',
            '#heart': 'heart',
            '#others': 'others'
        };

        const category = categoryMap[href];
        if (category) {
            // 找到对应的过滤按钮并点击
            const btn = document.querySelector(`[data-filter="${category}"]`);
            if (btn) {
                btn.click();
            }
        }
    }
}

// 打开模态框
function openModal(item) {
    modalImage.src = item.image;
    modalTitle.textContent = item.title;
    modalCategory.textContent = item.categoryName;
    modalPrompt.textContent = item.prompt;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// 关闭模态框
function closeModalHandler() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// 复制提示词
function copyPrompt() {
    const promptText = modalPrompt.textContent;

    navigator.clipboard.writeText(promptText).then(() => {
        showToast('提示词已复制到剪贴板！');
    }).catch(() => {
        // 降级方案
        const textArea = document.createElement('textarea');
        textArea.value = promptText;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showToast('提示词已复制到剪贴板！');
    });
}

// 显示提示消息
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast show';
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            if (document.body.contains(toast)) {
                document.body.removeChild(toast);
            }
        }, 300);
    }, 3000);
}

// 显示关于信息
function showAbout() {
    alert(`科研AI绘图图库

本网站展示了基于AI生成的高质量科研图像示例。

功能特点：
• ${galleryData.length}张精选科研图像
• 详细的提示词参考
• 分类浏览和搜索功能
• 响应式设计

所有图片来源于科研AI绘图平台。

© 2025 科研AI绘图图库`);
}

// 图片懒加载优化
function lazyLoad() {
    const images = document.querySelectorAll('.gallery-image[loading="lazy"]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.classList.add('fade-in');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// 监听DOM变化以应用懒加载
const observer = new MutationObserver(() => {
    lazyLoad();
});

if (gallery) {
    observer.observe(gallery, {
        childList: true
    });
}