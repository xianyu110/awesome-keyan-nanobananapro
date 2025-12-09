# GitHub Pages 部署指南

本指南将帮助您将科研AI绘图图库部署到GitHub Pages。

## 🚀 方法一：使用GitHub Actions（推荐）

这是最简单且自动化的部署方式。

### 步骤 1：使用现有仓库

1. 访问现有仓库：[xianyu110/awesome-keyan-nanobananapro](https://github.com/xianyu110/awesome-keyan-nanobananapro)
2. 将 `github-pages` 文件夹的内容上传到仓库根目录
3. 或者直接Fork现有仓库

### 步骤 2：启用GitHub Pages

1. 进入仓库的 **Settings** 页面
2. 在左侧菜单中选择 **Pages**
3. 在 **Source** 部分选择 **GitHub Actions**

### 步骤 3：自动部署

- 推送代码到 `main` 分支会自动触发部署
- 部署完成后，访问 `https://[你的用户名].github.io/[仓库名名]`

## 🚀 方法二：手动部署

### 步骤 1：上传文件到GitHub

```bash
# 初始化Git仓库
git init
git add .
git commit -m "Initial commit"

# 添加远程仓库
git remote add origin https://github.com/[你的用户名]/[仓库名名].git
git branch -M main
git push -u origin main
```

### 步骤 2：配置GitHub Pages

1. 进入仓库的 **Settings** > **Pages**
2. 在 **Source** 中选择 **Deploy from a branch**
3. 选择 **main** 分支和 **/(root)** 文件夹
4. 点击 **Save**

### 步骤 3：访问网站

等待几分钟部署完成后，访问：
`https://[你的用户名].github.io/[仓库名名]`

## 🚀 方法三：本地预览

在部署之前，您可以在本地预览网站：

### 使用Python

```bash
# Python 3
cd github-pages
python -m http.server 8000
```

### 使用Node.js

```bash
# 安装http-server
npm install -g http-server

# 运行服务器
cd github-pages
http-server
```

### 使用VS Code

1. 安装 **Live Server** 扩展
2. 右键点击 `index.html`
3. 选择 **Open with Live Server**

## 📝 自定义域名

### 配置自定义域名

1. 在仓库根目录创建 `CNAME` 文件
2. 在文件中添加您的域名（例如：`gallery.yourdomain.com`）
3. 提交并推送 CNAME 文件
4. 配置您的DNS提供商

### CNAME 文件示例

```
gallery.yourdomain.com
```

## 🔧 故障排除

### 常见问题

1. **404 错误**
   - 确保文件路径正确
   - 检查仓库名称是否匹配

2. **样式不加载**
   - 检查 CSS 文件路径
   - 确保使用相对路径

3. **JavaScript 错误**
   - 检查浏览器控制台
   - 确保所有资源正确加载

4. **图片不显示**
   - 检查图片URL是否正确
   - 确保图片链接可访问

### 调试技巧

1. **使用浏览器开发者工具**
   - F12 打开开发者工具
   - 检查 Console 和 Network 标签

2. **检查GitHub Pages构建日志**
   - Settings > Pages > Build logs

3. **清除浏览器缓存**
   - Ctrl+Shift+R (Windows/Linux)
   - Cmd+Shift+R (Mac)

## 📊 性能优化建议

1. **图片优化**
   - 使用 WebP 格式
   - 实现图片懒加载
   - 压缩图片大小

2. **缓存策略**
   - 设置适当的缓存头
   - 使用 CDN 加速

3. **代码分割**
   - 分离 CSS 和 JavaScript
   - 压缩和最小化资源

## 🔄 更新内容

### 更新图片

1. 修改 `assets/js/main.js` 中的 `galleryData` 数组
2. 添加新的图片信息
3. 提交并推送更改

### 更新样式

1. 编辑 `assets/css/style.css`
2. 测试更改
3. 部署更新

### 批量导入图片

如果需要导入大量图片，可以使用脚本：

```javascript
// 批量添加图片的示例代码
const newImages = [
    {
        id: 100,
        title: "新图片标题",
        category: "category",
        categoryName: "分类名",
        image: "图片URL",
        prompt: "提示词"
    }
    // ... 更多图片
];

galleryData.push(...newImages);
```

## 📈 分析和监控

### Google Analytics

1. 在 `<head>` 中添加 Google Analytics 代码
2. 跟踪页面访问和用户行为

### GitHub Insights

1. 使用 GitHub 自带的流量分析
2. 查看访问者和页面浏览数据

## 🆘 获取帮助

如果遇到问题：

1. 查看 [GitHub Pages 官方文档](https://docs.github.com/en/pages)
2. 搜索 GitHub Community 论坛
3. 提交 Issue 到相关项目

---

*🎉 祝您部署成功！如有问题，请随时寻求帮助。*