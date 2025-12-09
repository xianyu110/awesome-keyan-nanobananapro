#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import json

# 读取完整的图库数据
with open('full_gallery.json', 'r', encoding='utf-8') as f:
    gallery_data = json.load(f)

# 分类映射
category_map = {
    "炎症与脓毒症": "inflammation",
    "机制图解": "mechanism",
    "肝脏研究": "liver",
    "心脏研究": "heart",
    "其他": "others"
}

# 生成JavaScript数组
js_data = []
image_id = 1

for category_name, images in gallery_data["categories"].items():
    category_code = category_map.get(category_name, "others")

    for img in images:
        # 创建标题（使用alt_text的前50个字符）
        title = img["alt_text"][:50] + "..." if len(img["alt_text"]) > 50 else img["alt_text"]

        js_item = {
            "id": image_id,
            "title": title,
            "category": category_code,
            "categoryName": category_name,
            "image": img["url"],
            "prompt": img["alt_text"]
        }

        js_data.append(js_item)
        image_id += 1

# 生成JavaScript代码
js_content = f"""// 图片数据 - 共{len(js_data)}张图片
const galleryData = {json.dumps(js_data, ensure_ascii=False, indent=4)};

// 导出数据供其他文件使用
if (typeof module !== 'undefined' && module.exports) {{
    module.exports = galleryData;
}}
"""

# 写入JavaScript文件
with open('github-pages/assets/js/gallery_data.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print(f"✅ 成功转换 {len(js_data)} 张图片数据到 gallery_data.js")
print("📁 文件已保存到: github-pages/assets/js/gallery_data.js")