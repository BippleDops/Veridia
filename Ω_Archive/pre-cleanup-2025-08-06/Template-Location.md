---
type: location
tags: [location]
aliases: []
created: <% tp.date.now("YYYY-MM-DD HH:mm") %>
modified: <% tp.date.now("YYYY-MM-DD HH:mm") %>
location_type: ""
parent_location: ""
sub_locations: []
notable_npcs: []
available_services: []
dangers: []
secrets: []
---

~~~ai-context
When generating content for this location, consider:
- Setting: {{campaign_setting}}
- Tone: {{campaign_tone}}
- Connected elements: [[<% tp.file.title %>]]
~~~

# <% tp.file.title %>

> [!infobox]
> | | |
> | --- | --- |
> | **Type** | |
> | **Parent Location** | |

---

## 🗺️ Description

~~~ai-context
When generating a location description, consider:
- Type: {{location_type}}
- Parent Location: {{parent_location}}
- Key Features: {{key_features}}
~~~

> [!NOTE] AI-Generated Description
> *Click button to generate a location description.*
> `BUTTON[generateLocationDescription]`

---

## 👥 Notable NPCs

*A list of notable NPCs who reside in or frequent this location.*

---

## 🏪 Available Services

*A list of services available at this location, such as shops, inns, and temples.*

---

## 🎲 Plot Hooks

*Potential adventure hooks related to this location.*

---

## 📝 DM Notes

*Private notes, secrets, and hidden details about this location.*
