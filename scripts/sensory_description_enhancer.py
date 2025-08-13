#!/usr/bin/env python3
"""
Phase 3 Step 43: Sensory Description Integration
Adds atmospheric sensory details to location files for immersion
"""

import os
import re
import json
import random
from datetime import datetime

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DRY_RUN = os.environ.get('DRY_RUN', '0') == '1'

# Sensory templates by environment type
SENSORY_TEMPLATES = {
    'aquabyssos': {
        'visual': [
            'bioluminescent patterns dancing along coral walls',
            'filtered sunlight creating shifting patterns through water',
            'crystalline structures refracting light into prismatic displays',
            'schools of luminous fish weaving between architectural elements',
            'pressure-glass windows offering distorted views of the depths',
            'kelp forests swaying rhythmically in deep currents'
        ],
        'auditory': [
            'the constant whisper of water currents',
            'distant whale songs echoing through the depths',
            'crystalline chimes resonating with pressure changes',
            'the subtle bubble-speech of aquatic conversation',
            'mechanical groaning of pressure-adapted architecture',
            'the soft splash of displaced water with movement'
        ],
        'tactile': [
            'the ever-present embrace of water pressure',
            'smooth coral surfaces worn by countless tides',
            'the cool touch of metal adapted for underwater use',
            'currents tugging at clothing and hair',
            'the weightless sensation of underwater movement',
            'dampness that permeates everything despite magical protection'
        ],
        'olfactory': [
            'salt and minerals carried on the current',
            'the organic scent of living coral and kelp',
            'metallic undertones from pressure-forged materials',
            'subtle magical ozone from protective enchantments',
            'the clean, crisp scent of deep, pure water',
            'faint traces of exotic spices from trade goods'
        ],
        'atmospheric': [
            'an otherworldly tranquility broken only by distant sounds',
            'the constant awareness of vast depths above and below',
            'a sense of being cradled by ancient, living waters',
            'the feeling that every movement creates ripples of consequence',
            'an intimate connection to the rhythm of tides and currents',
            'the humbling presence of an environment adapted to pressure'
        ]
    },
    'aethermoor': {
        'visual': [
            'crystal formations catching and amplifying wind-carried light',
            'sweeping vistas of cloudscapes and distant floating islands',
            'wind-carved stone formations creating natural archways',
            'prismatic displays as sunlight strikes crystal spires',
            'constantly shifting patterns of cloud shadows',
            'the brilliant gleam of polished metal surfaces'
        ],
        'auditory': [
            'the constant whisper and howl of wind through structures',
            'crystalline resonances as wind passes through formations',
            'the distant call of aerial creatures riding thermals',
            'the creak and groan of wind-adapted architecture',
            'harmonic tones created by wind-carved stone',
            'the sharp crack of wind-stressed materials'
        ],
        'tactile': [
            'constant air currents tugging at clothing and hair',
            'the cool, thin atmosphere at high altitude',
            'smooth crystal surfaces polished by endless winds',
            'the vertigo-inducing sense of vast open spaces',
            'wind-chill that cuts through protective garments',
            'the electric tension that precedes weather changes'
        ],
        'olfactory': [
            'clean, crisp air with hints of ozone from storms',
            'the metallic scent of wind-polished crystal',
            'faint traces of exotic pollens carried on air currents',
            'the fresh scent of rain from distant cloudbursts',
            'subtle magical energies carried on the wind',
            'the sharp, clear scent of high-altitude atmosphere'
        ],
        'atmospheric': [
            'a sense of boundless freedom and infinite sky',
            'the exhilarating rush of wind and open heights',
            'an awareness of weather patterns as living forces',
            'the feeling of being suspended between earth and stars',
            'the invigorating energy of constant movement and change',
            'an intimate connection to the rhythm of wind and storm'
        ]
    },
    'underground': {
        'visual': [
            'flickering torchlight creating dancing shadows',
            'crystalline formations glowing with inner light',
            'the gleam of metal veins running through stone',
            'mysterious depths disappearing into darkness',
            'carved stone surfaces worn smooth by age',
            'pools of still water reflecting available light'
        ],
        'auditory': [
            'the constant drip of water echoing through chambers',
            'footsteps echoing off stone surfaces',
            'the distant rumble of underground streams',
            'whispers of air moving through hidden passages',
            'the scrape and grind of shifting stone',
            'an oppressive, tomb-like silence'
        ],
        'tactile': [
            'cool, damp stone surfaces beaded with moisture',
            'the chill of underground air on exposed skin',
            'rough-hewn surfaces that catch at clothing',
            'the claustrophobic press of low ceilings',
            'smooth, water-worn stone paths underfoot',
            'air that feels thick and still'
        ],
        'olfactory': [
            'musty, earthy scents of deep stone and soil',
            'the mineral smell of underground water',
            'faint metallic traces from ore deposits',
            'the organic decay of things long buried',
            'stale air that has been trapped for ages',
            'subtle traces of rare minerals and gems'
        ],
        'atmospheric': [
            'a sense of ancient weight and timeless patience',
            'the feeling of being embraced by the living earth',
            'an awareness of hidden depths and secret passages',
            'the comforting security of solid stone protection',
            'connection to the deep, slow rhythms of geological time',
            'the mystique of forgotten places and buried secrets'
        ]
    },
    'urban': {
        'visual': [
            'the bustling movement of crowds through busy streets',
            'architectural details showing cultural influences',
            'the interplay of natural and artificial lighting',
            'colorful market stalls and merchant displays',
            'the contrast between old and new construction',
            'signs and decorations in multiple languages'
        ],
        'auditory': [
            'the constant murmur of crowd conversation',
            'vendors calling out their wares',
            'the clatter of cart wheels on cobblestone',
            'church bells and public announcement systems',
            'the sounds of various trades and crafts',
            'music drifting from taverns and entertainment venues'
        ],
        'tactile': [
            'worn cobblestones smooth under foot',
            'the press of crowds and jostling movement',
            'various textures from building materials and decorations',
            'the warmth of bodies and cooking fires',
            'different elevations and steps between districts',
            'the gritty feel of urban dust and debris'
        ],
        'olfactory': [
            'cooking aromas from restaurants and food stalls',
            'the mix of perfumes, spices, and trade goods',
            'smoke from chimneys and workshop fires',
            'the organic scents of people and animals',
            'waste and industrial odors from less pleasant districts',
            'incense from temples and cultural centers'
        ],
        'atmospheric': [
            'the energy and excitement of constant activity',
            'a sense of opportunity and danger around every corner',
            'the feeling of being part of something larger',
            'cultural diversity creating a rich tapestry of experience',
            'the rhythm of daily commerce and social interaction',
            'an awareness of the stories behind countless faces'
        ]
    }
}

# Time-based sensory variations
TIME_VARIATIONS = {
    'dawn': {
        'lighting': 'soft, golden light filtering through',
        'activity': 'the quiet stirrings of early activity',
        'atmosphere': 'a sense of peaceful beginning and fresh possibilities'
    },
    'midday': {
        'lighting': 'bright, clear illumination revealing every detail',
        'activity': 'the full bustle of peak activity',
        'atmosphere': 'vibrant energy and purposeful movement'
    },
    'dusk': {
        'lighting': 'warm, amber light creating long shadows',
        'activity': 'the gradual winding down of daily routines',
        'atmosphere': 'a contemplative mood as day transitions to night'
    },
    'night': {
        'lighting': 'artificial illumination creating pools of light and shadow',
        'activity': 'the hushed sounds of nighttime activities',
        'atmosphere': 'mystery and intimacy in the enveloping darkness'
    }
}

def find_location_files():
    """Find all location files in the vault"""
    location_files = []
    
    for root, dirs, files in os.walk(ROOT_DIR):
        # Skip certain directories
        if any(skip_dir in root for skip_dir in ['/.git', '/08_Archive', '/09_Performance', '/vault_backup']):
            continue
            
        for file in files:
            if file.endswith('.md'):
                filepath = os.path.join(root, file)
                try:
                    with open(filepath, 'r', encoding='utf-8') as f:
                        content = f.read()
                    
                    # Check if file has type: Location or is in Places directory
                    is_location = (
                        re.search(r'^type:\s*Location\s*$', content, re.MULTILINE | re.IGNORECASE) or
                        '/Places/' in filepath or
                        '/Locations/' in filepath
                    )
                    
                    if is_location:
                        location_files.append(filepath)
                        
                except Exception as e:
                    print(f"Error reading {filepath}: {e}")
    
    return location_files

def determine_environment_type(content, filepath):
    """Determine the environment type of a location"""
    content_lower = content.lower()
    
    # Check for world designation
    if re.search(r'world:\s*aquabyssos', content_lower):
        return 'aquabyssos'
    elif re.search(r'world:\s*aethermoor', content_lower):
        return 'aethermoor'
    
    # Check content for environmental clues
    if any(word in content_lower for word in ['underwater', 'depths', 'coral', 'tide', 'current', 'pressure']):
        return 'aquabyssos'
    elif any(word in content_lower for word in ['sky', 'wind', 'crystal', 'heights', 'aerial', 'storm']):
        return 'aethermoor'
    elif any(word in content_lower for word in ['underground', 'cave', 'tunnel', 'mine', 'cavern']):
        return 'underground'
    elif any(word in content_lower for word in ['city', 'town', 'district', 'market', 'street']):
        return 'urban'
    
    # Default based on path
    if 'aquabyssos' in filepath.lower():
        return 'aquabyssos'
    elif 'aethermoor' in filepath.lower():
        return 'aethermoor'
    
    return 'urban'  # Default fallback

def generate_sensory_description(env_type, location_name):
    """Generate comprehensive sensory description for a location"""
    template = SENSORY_TEMPLATES.get(env_type, SENSORY_TEMPLATES['urban'])
    time_period = random.choice(['dawn', 'midday', 'dusk', 'night'])
    time_data = TIME_VARIATIONS[time_period]
    
    description_parts = []
    
    # Opening atmospheric statement
    description_parts.append(f"*{location_name} {time_data['atmosphere']}*")
    description_parts.append("")
    
    # Visual elements
    visual_elements = random.sample(template['visual'], min(2, len(template['visual'])))
    description_parts.append("**Visual**: " + f"{time_data['lighting']}, {visual_elements[0]}")
    if len(visual_elements) > 1:
        description_parts.append(f"and {visual_elements[1]}.")
    else:
        description_parts.append(".")
    description_parts.append("")
    
    # Auditory elements
    audio_element = random.choice(template['auditory'])
    description_parts.append(f"**Auditory**: {time_data['activity']} blend with {audio_element}.")
    description_parts.append("")
    
    # Tactile sensations
    tactile_element = random.choice(template['tactile'])
    description_parts.append(f"**Tactile**: Visitors experience {tactile_element}, ")
    description_parts.append(f"enhanced by {random.choice(template['atmospheric'])}.")
    description_parts.append("")
    
    # Olfactory details
    scent_elements = random.sample(template['olfactory'], min(2, len(template['olfactory'])))
    description_parts.append(f"**Scents**: The air carries {scent_elements[0]}")
    if len(scent_elements) > 1:
        description_parts.append(f" mingled with {scent_elements[1]}.")
    else:
        description_parts.append(".")
    
    return "\n".join(description_parts)

def has_sensory_section(content):
    """Check if location already has sensory descriptions"""
    sensory_indicators = [
        'visual:', 'auditory:', 'tactile:', 'scents:', 'atmosphere:',
        'bioluminescent', 'crystalline chimes', 'pressure', 'currents',
        'the air carries', 'visitors experience', 'sound of', 'scent of'
    ]
    
    return any(indicator in content.lower() for indicator in sensory_indicators)

def enhance_location_with_sensory(filepath):
    """Add sensory descriptions to a location file"""
    
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Skip if already has sensory descriptions
        if has_sensory_section(content):
            print(f"Sensory descriptions already present in {os.path.basename(filepath)}")
            return False
        
        # Skip very short files (likely stubs)
        if len(content.split()) < 100:
            print(f"Skipping short file {os.path.basename(filepath)}")
            return False
        
        # Determine environment and location name
        env_type = determine_environment_type(content, filepath)
        location_name = re.search(r'^#\s*(.+)$', content, re.MULTILINE)
        location_name = location_name.group(1).strip() if location_name else os.path.basename(filepath)[:-3]
        
        # Generate sensory description
        sensory_desc = generate_sensory_description(env_type, location_name)
        
        # Create sensory section
        sensory_section = f"\n## Atmosphere & Sensory Details\n\n{sensory_desc}\n"
        
        # Find appropriate insertion point
        # Try to insert after Overview or Description section, before Notable Features
        insertion_patterns = [
            r'(##\s*Overview\s*$.*?)(?=##)',
            r'(##\s*Description\s*$.*?)(?=##)',
            r'(##\s*Geography\s*$.*?)(?=##)',
        ]
        
        inserted = False
        for pattern in insertion_patterns:
            if re.search(pattern, content, re.MULTILINE | re.DOTALL):
                new_content = re.sub(
                    pattern,
                    f'\\1{sensory_section}',
                    content,
                    flags=re.MULTILINE | re.DOTALL
                )
                inserted = True
                break
        
        if not inserted:
            # Insert before Adventure Hooks or at the end
            if '## Adventure Hooks' in content:
                new_content = content.replace('## Adventure Hooks', f"{sensory_section}\n## Adventure Hooks")
            else:
                # Add before final notes or at end
                if '---' in content:
                    new_content = content.replace('---', f"{sensory_section}\n---")
                else:
                    new_content = content + sensory_section
        else:
            new_content = new_content if 'new_content' in locals() else content
        
        # Write enhanced content
        if not DRY_RUN:
            # Create backup
            backup_path = filepath + '.backup'
            with open(backup_path, 'w', encoding='utf-8') as f:
                f.write(content)
            
            # Write enhanced content
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
        
        return True
        
    except Exception as e:
        print(f"Error enhancing {filepath}: {e}")
        return False

def main():
    print("=== Phase 3 Step 43: Sensory Description Integration ===")
    print(f"Working directory: {ROOT_DIR}")
    print(f"Dry run mode: {DRY_RUN}")
    
    # Find location files
    print("\nFinding location files...")
    location_files = find_location_files()
    print(f"Found {len(location_files)} location files")
    
    # Analyze environment types
    env_counts = {}
    for filepath in location_files:
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            env_type = determine_environment_type(content, filepath)
            env_counts[env_type] = env_counts.get(env_type, 0) + 1
        except:
            continue
    
    print("\nEnvironment distribution:")
    for env_type, count in sorted(env_counts.items()):
        print(f"  {env_type.title()}: {count} locations")
    
    # Process locations by priority (major locations first)
    prioritized_locations = []
    for filepath in location_files:
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Priority scoring based on content length and links
            word_count = len(content.split())
            link_count = len(re.findall(r'\[\[.*?\]\]', content))
            priority = word_count + (link_count * 10)
            
            prioritized_locations.append((filepath, priority))
        except:
            prioritized_locations.append((filepath, 0))
    
    # Sort by priority (highest first)
    prioritized_locations.sort(key=lambda x: x[1], reverse=True)
    
    print(f"\nTop 10 priority locations for sensory enhancement:")
    for i, (filepath, priority) in enumerate(prioritized_locations[:10]):
        name = os.path.basename(filepath)[:-3]
        print(f"  {i+1:2d}. {name} (priority: {priority})")
    
    # Enhance locations
    enhanced_count = 0
    target_count = min(25, len(prioritized_locations))
    
    print(f"\nEnhancing sensory descriptions for top {target_count} locations...")
    
    for filepath, priority in prioritized_locations[:target_count]:
        if priority > 100:  # Only process substantial locations
            location_name = os.path.basename(filepath)[:-3]
            print(f"Processing {location_name}...")
            
            if enhance_location_with_sensory(filepath):
                enhanced_count += 1
    
    # Generate report
    report_data = {
        'total_locations': len(location_files),
        'environment_distribution': env_counts,
        'enhanced_count': enhanced_count,
        'enhancement_timestamp': datetime.now().isoformat(),
        'sensory_templates_used': list(SENSORY_TEMPLATES.keys()),
        'dry_run': DRY_RUN
    }
    
    report_path = os.path.join(ROOT_DIR, 'reports', 'sensory_enhancement_report.json')
    os.makedirs(os.path.dirname(report_path), exist_ok=True)
    
    with open(report_path, 'w', encoding='utf-8') as f:
        json.dump(report_data, f, indent=2)
    
    print(f"\n=== Enhancement Report ===")
    print(f"Total locations found: {len(location_files)}")
    print(f"Locations enhanced: {enhanced_count}")
    print(f"Report saved to: reports/sensory_enhancement_report.json")
    
    if DRY_RUN:
        print("\nDry run mode - no files were modified")
    else:
        print(f"\n{enhanced_count} location files enhanced with atmospheric sensory descriptions")

if __name__ == '__main__':
    main()