---
name: Generated image composition
description: Verify output dimensions and framing rather than relying on panoramic generation prompts.
---

Image generation and editing have returned square outputs despite panoramic prompts, sometimes cropping devices at the frame edge.

**Why:** Both a new generation and reference-image edits ignored requested landscape framing; repeated reframing did not reliably fix the crop.

**How to apply:** Inspect actual image dimensions and composition before integration. Preserve high-resolution user references, and prefer targeted reconstruction/compositing when generated edits lose important framing. Do not assume requested resolution or aspect ratio was honored.
