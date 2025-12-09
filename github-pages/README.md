# 科研AI绘图图库 - GitHub Pages

一个展示科研AI生成图片的现代化响应式网站，包含详细的提示词和分类浏览功能。

## 🚀 官方平台链接

- **专业科研绘图平台**: [https://pro.nanobanana-free.top](https://pro.nanobanana-free.top)
- **永久导航链接**: [https://link3.cc/maynorai](https://link3.cc/maynorai)
- **GitHub 项目仓库**: [https://github.com/xianyu110/awesome-keyan-nanobananapro](https://github.com/xianyu110/awesome-keyan-nanobananapro)
- **快捷访问页面**: [快捷访问.html](快捷访问.html)

## 🌟 功能特点

- **响应式设计** - 完美适配桌面和移动设备
- **图片分类** - 按研究领域分类展示
- **搜索功能** - 支持标题和提示词搜索
- **模态框预览** - 点击图片查看大图和完整提示词
- **复制提示词** - 一键复制图片生成提示词
- **懒加载优化** - 提升页面加载性能

## 📊 内容统计

- **77张精选图片** - 高质量科研图像生成示例
- **5个研究领域** - 机制图解、炎症与脓毒症、肝脏研究、心脏研究、其他研究
- **详细提示词** - 每张图片都有完整的英文提示词

## 🚀 快速开始

### 在线访问
- **图库主页**: [index.html](index.html) - 浏览77+精选科研图像
- **平台截图**: [本地图片展示.html](本地图片展示.html) - 查看平台界面展示
- **快捷访问**: [快捷访问.html](快捷访问.html) - 快速跳转到官方平台
- **GitHub 仓库**: [xianyu110/awesome-keyan-nanobananapro](https://github.com/xianyu110/awesome-keyan-nanobananapro) - 项目源码

直接访问 GitHub Pages 部署的网站

### 本地运行
```bash
# 克隆仓库
git clone <repository-url>

# 进入目录
cd github-pages

# 使用任意HTTP服务器运行
# Python 3
python -m http.server 8000

# Node.js (需要安装 http-server)
npx http-server

# 或者使用 VS Code Live Server 插件
```

然后在浏览器中访问 `http://localhost:8000`

## 📁 项目结构

```
github-pages/
├── index.html              # 主图库页面
├── 本地图片展示.html         # 平台截图展示页
├── 快捷访问.html            # 快速跳转页面
├── assets/
│   ├── css/
│   │   └── style.css       # 样式文件
│   └── js/
│       └── main.js          # JavaScript 功能
├── images/                 # 本地图片（平台截图）
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions 部署配置
├── README.md               # 项目说明
├── DEPLOYMENT.md           # 部署指南
└── ...
```

## 🎨 技术栈

- **HTML5** - 语义化标记
- **CSS3** - 现代样式和动画
- **JavaScript (ES6+)** - 原生 JavaScript
- **Font Awesome** - 图标库
- **Intersection Observer** - 懒加载 API

## 🔧 自定义配置

### 添加新图片

编辑 `assets/js/main.js` 文件中的 `galleryData` 数组：

```javascript
{
    id: 唯一ID,
    title: "图片标题",
    category: "分类代码",
    categoryName: "中文分类名",
    image: "图片URL",
    prompt: "提示词内容"
}
```

### 修改分类

在 `assets/js/main.js` 中更新 `galleryData` 和 `handleNavClick` 函数中的分类映射。

### 自定义样式

编辑 `assets/css/style.css` 文件：

- **颜色主题**：修改 CSS 变量或直接修改颜色值
- **字体**：更新 `font-family` 属性
- **布局**：调整 Grid 和 Flexbox 参数

## 📱 响应式断点

- **桌面**：> 768px
- **平板**：≤ 768px
- **手机**：≤ 480px

## 🌐 浏览器支持

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📞 联系方式

如有问题或建议，请通过 GitHub Issues 联系。

---

*© 2025 科研AI绘图图库. 所有图片来源于科研AI绘图平台。*