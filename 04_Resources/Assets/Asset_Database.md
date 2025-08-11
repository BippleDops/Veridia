# Asset Database

Fields:
- id, type, name, prompt, aspect, resolution, style, lighting, mood, negative, seed, alt_text
- tags, sourceDoc, crossRefs

Naming:
- {type}-{slug(name)}-{seed}.ext

Formats:
- Portraits 1:1 @ 2048x2048 (PNG/SVG)
- Scenes 16:9 @ 2560x1440 (PNG/SVG)
- Maps 16:9 @ 2560x1440 (PNG)
- Vector Symbols: SVG

Versioning:
- keep JSON sidecars in Generated/metadata with prompt and seed

Licensing:
- track source (AI/local), model, seed, and usage rights in sidecar
