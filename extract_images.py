#!/usr/bin/env python3
import re
import json

# Read the HTML file
with open('/Users/chinamanor/Downloads/cursor编程/keyan-nanobananapro/demo.txt', 'r', encoding='utf-8') as f:
    content = f.read()

# Pattern to match image tags with src and alt
pattern = r'<img[^>]*src="([^"]*)"[^>]*alt="([^"]*)"[^>]*>'
matches = re.findall(pattern, content)

# Extract unique images (excluding logos)
images = {}
seen_urls = set()

for src, alt in matches:
    # Skip logo images
    if 'log.svg' in src:
        continue

    # Skip if we've already seen this URL
    if src in seen_urls:
        continue

    seen_urls.add(src)

    # Clean up the alt text (decode HTML entities)
    alt_clean = alt.replace('&quot;', '"').replace('&lt;', '<').replace('&gt;', '>').replace('&amp;', '&')

    # Truncate very long alt text for readability
    if len(alt_clean) > 500:
        alt_clean = alt_clean[:497] + '...'

    images[src] = alt_clean

# Convert to a more organized format
image_list = []
for idx, (url, description) in enumerate(images.items(), 1):
    image_list.append({
        'id': idx,
        'url': url,
        'description': description
    })

# Print summary
print(f"Found {len(image_list)} unique images")
print("\nFirst 10 images:")
for img in image_list[:10]:
    print(f"\n{img['id']}. {img['url']}")
    print(f"   Description: {img['description'][:100]}..." if len(img['description']) > 100 else f"   Description: {img['description']}")

# Save to JSON file
with open('/Users/chinamanor/Downloads/cursor编程/keyan-nanobananapro/extracted_images.json', 'w', encoding='utf-8') as f:
    json.dump(image_list, f, ensure_ascii=False, indent=2)

print(f"\nSaved {len(image_list)} images to extracted_images.json")