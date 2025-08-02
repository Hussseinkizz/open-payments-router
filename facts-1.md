# OPR Project: Documentation and Code Style Facts

This file summarizes key facts and preferences for documentation, code organization, and project standards, based on recent feedback and requirements.

---

## Documentation Style & Structure

- **Section Headings:**
  - Use H2 (`##`) for all major sections.
  - Headings should be clear, descriptive, and relevant to the content.

- **Step-by-Step Instructions:**
  - Use numbered steps for setup or usage instructions.
  - Each step should be bolded and followed by a colon, then a code block or explanation.
  - Separate steps and code blocks with blank lines for readability.

- **Code Blocks:**
  - Use fenced code blocks with the correct language (e.g., `ts`, `json`).
  - Code samples should be minimal, accurate, and copy-paste ready.

- **Examples:**
  - Provide full, working examples in their own sections.
  - Examples should be complete and ready to use.

- **Notes and Next Steps:**
  - Use dedicated sections for special notes (e.g., ES Modules) and next steps.
  - Notes should be concise and only cover what is implemented.
  - Next steps should be a simple bulleted list.

- **Whitespace and Readability:**
  - Use blank lines generously between sections, steps, and code blocks.
  - Avoid unnecessary horizontal rules or decorations.

- **Scope:**
  - Only document features that are actually implemented and production-ready.
  - Do not mention unimplemented features, TODOs, or future plans unless absolutely necessary for safety or clarity.

---

## Code & Implementation

- **Handler Consistency:**
  - All environment-specific handlers (Hono, Express, etc.) must have consistent logic, naming, and API.
  - Use the same function name (e.g., `handleIPN`) across environments for clarity.

- **Production-Ready Only:**
  - Code and docs must not include placeholders, TODOs, or comments about missing features unless required for safety.
  - Only production-ready, tested features should be present in the codebase and documentation.

- **Minimal Comments:**
  - Comments should only clarify non-obvious logic or usage.
  - Avoid comments that suggest future work or incomplete features.

---

## General Project Organization

- **Read Before Write:**
  - Always read the latest version of a file before making updates, especially if notified of recent changes.
  - Preserve the user's formatting, structure, and style in all updates.

- **Consistency:**
  - Ensure consistency between code, documentation, and examples at all times.

---

_Last updated: 2025-08-01_
