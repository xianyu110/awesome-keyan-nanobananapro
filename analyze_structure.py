#!/usr/bin/env python3
import re
import json
from collections import defaultdict

# Read the HTML file
with open('/Users/chinamanor/Downloads/cursor编程/keyan-nanobananapro/demo.txt', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract main sections
sections = {
    'header': '',
    'categories': [],
    'gallery_items': [],
    'footer': ''
}

# Find the main content area
main_match = re.search(r'<main[^>]*id="main"[^>]*>(.*?)</main>', content, re.DOTALL)
if main_match:
    main_content = main_match.group(1)

    # Extract category buttons
    category_pattern = r'<button[^>]*class="[^"]*relative flex cursor-pointer[^"]*"[^>]*>([^<]*)</button>'
    category_matches = re.findall(category_pattern, main_content)
    sections['categories'] = [cat.strip() for cat in category_matches if cat.strip()]

    # Extract gallery items with more details
    gallery_pattern = r'<div[^>]*class="[^"]*group bg-white rounded-xl[^"]*"[^>]*>.*?</div></div>'
    gallery_matches = re.findall(gallery_pattern, main_content, re.DOTALL)

    for gallery_item in gallery_matches[:10]:  # Process first 10 for analysis
        # Extract image URL
        img_match = re.search(r'<img[^>]*src="([^"]*)"[^>]*alt="([^"]*)"', gallery_item)
        if img_match:
            img_url = img_match.group(1)
            alt_text = img_match.group(2).replace('&quot;', '"').replace('&lt;', '<').replace('&gt;', '>').replace('&amp;', '&')

            # Extract description from p tag
            desc_match = re.search(r'<p[^>]*class="[^"]*text-sm text-gray-800[^"]*"[^>]*>([^<]*)</p>', gallery_item)
            description = desc_match.group(1) if desc_match else ''

            sections['gallery_items'].append({
                'image_url': img_url,
                'alt_text': alt_text,
                'description': description
            })

# Count different types of content
image_urls = re.findall(r'src="([^"]*\.(png|jpg|jpeg|gif|svg))"', content, re.IGNORECASE)
total_images = len([url for url, ext in image_urls if 'log.svg' not in url])

# Find the platform info
platform_info = {
    'title': '科研AI绘图平台',
    'user': '李胜',
    'remaining_credits': 1,
    'categories_found': sections['categories']
}

# Save analysis results
analysis_result = {
    'platform_info': platform_info,
    'content_stats': {
        'total_unique_images': total_images,
        'number_of_categories': len(sections['categories']),
        'categories': sections['categories']
    },
    'sample_gallery_items': sections['gallery_items']
}

with open('/Users/chinamanor/Downloads/cursor编程/keyan-nanobananapro/content_analysis.json', 'w', encoding='utf-8') as f:
    json.dump(analysis_result, f, ensure_ascii=False, indent=2)

# Print summary
print("=== Content Structure Analysis ===\n")
print(f"Platform: {platform_info['title']}")
print(f"User: {platform_info['user']}")
print(f"Categories found ({len(platform_info['categories_found'])}):")
for i, cat in enumerate(platform_info['categories_found'], 1):
    print(f"  {i}. {cat}")

print(f"\nTotal unique images: {total_images}")
print(f"\nSample gallery items:")
for i, item in enumerate(sections['gallery_items'][:3], 1):
    print(f"\n{i}. Image: {item['image_url'].split('/')[-1]}")
    print(f"   Description: {item['alt_text'][:200]}..." if len(item['alt_text']) > 200 else f"   Description: {item['alt_text']}")