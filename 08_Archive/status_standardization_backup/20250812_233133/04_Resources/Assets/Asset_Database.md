---
created: '2024-01-01'
updated: '2024-01-01T00:00:00+00:00'
---

# Asset Database

Fields: id, type, name, prompt, aspect, resolution, style, lighting, mood, negative, seed, alt_text, realm, tags, sourceDoc, crossRefs
Naming: {type}-{slug(name)}-{seed}.ext
Formats: Portraits 1:1@2048, Scenes 16:9@2560x1440, Maps 16:9@2560x1440, Symbols SVG
Versioning: keep JSON sidecars in Generated/metadata
Licensing: track source (AI/local), model, seed, rights in sidecar
