#!/usr/bin/env python3
import re
import json

# Read the HTML file
with open('/Users/chinamanor/Downloads/cursor编程/keyan-nanobananapro/demo.txt', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract all image URLs with their alt text and descriptions
gallery_pattern = r'<div[^>]*class="[^"]*group bg-white rounded-xl[^"]*"[^>]*>(.*?)</div></div>'
gallery_matches = re.findall(gallery_pattern, content, re.DOTALL)

all_images = []
seen_urls = set()

for i, gallery_item in enumerate(gallery_matches, 1):
    # Extract image URL and alt text
    img_match = re.search(r'<img[^>]*src="([^"]*)"[^>]*alt="([^"]*)"', gallery_item)
    if img_match:
        img_url = img_match.group(1)
        alt_text = img_match.group(2)

        # Skip logos
        if 'log.svg' in img_url:
            continue

        # Skip duplicates
        if img_url in seen_urls:
            continue
        seen_urls.add(img_url)

        # Clean up HTML entities
        alt_clean = alt_text.replace('&quot;', '"').replace('&lt;', '<').replace('&gt;', '>').replace('&amp;', '&')

        # Extract description paragraph
        desc_match = re.search(r'<p[^>]*class="[^"]*text-sm text-gray-800[^"]*"[^>]*>(.*?)</p>', gallery_item, re.DOTALL)
        description = desc_match.group(1).strip() if desc_match else ''

        # Determine category based on content
        category = '其他'
        if any(keyword in alt_clean.lower() for keyword in ['sepsis', 'septic', 'inflammatory', 'inflammation']):
            category = '炎症与脓毒症'
        elif any(keyword in alt_clean.lower() for keyword in ['kidney', 'renal', 'aki']):
            category = '肾脏研究'
        elif any(keyword in alt_clean.lower() for keyword in ['liver', 'hepatic', 'ali']):
            category = '肝脏研究'
        elif any(keyword in alt_clean.lower() for keyword in ['heart', 'cardiac', 'cardiomyopathy']):
            category = '心脏研究'
        elif any(keyword in alt_clean.lower() for keyword in ['exosome', '外泌体']):
            category = '外泌体研究'
        elif any(keyword in alt_clean for keyword in ['创建', '插图', '展示', '机制', '通路']):
            category = '机制图解'

        all_images.append({
            'id': i,
            'category': category,
            'url': img_url,
            'alt_text': alt_clean,
            'description': description,
            'filename': img_url.split('/')[-1].split('?')[0]
        })

# Group by category
categories = {}
for img in all_images:
    if img['category'] not in categories:
        categories[img['category']] = []
    categories[img['category']].append(img)

# Save full gallery data
with open('/Users/chinamanor/Downloads/cursor编程/keyan-nanobananapro/full_gallery.json', 'w', encoding='utf-8') as f:
    json.dump({
        'total_images': len(all_images),
        'categories': categories,
        'all_images': all_images
    }, f, ensure_ascii=False, indent=2)

# Create markdown with all images
with open('/Users/chinamanor/Downloads/cursor编程/keyan-nanobananapro/完整图库.md', 'w', encoding='utf-8') as f:
    f.write("# 科研AI绘图平台完整图库\n\n")
    f.write(f"总计图片数量: {len(all_images)}\n\n")
    f.write("## 分类索引\n\n")

    for cat, imgs in sorted(categories.items()):
        f.write(f"- [{cat}](#{cat.replace(' ', '-')}) ({len(imgs)}张)\n")

    f.write("\n---\n\n")

    for cat, imgs in sorted(categories.items()):
        f.write(f"## {cat}\n\n")
        for img in imgs:
            f.write(f"### {img['id']}. {img['filename']}\n\n")
            f.write(f"![{cat}]({img['url']})\n\n")
            f.write(f"**提示词**: {img['alt_text']}\n\n")
            if img['description']:
                f.write(f"**描述**: {img['description']}\n\n")
            f.write("---\n\n")

print(f"提取完成！共找到 {len(all_images)} 张图片")
print(f"分类统计:")
for cat, imgs in sorted(categories.items()):
    print(f"  {cat}: {len(imgs)}张")
print(f"\n文件已保存:")
print(f"  - full_gallery.json (完整数据)")
print(f"  - 完整图库.md (Markdown格式)")