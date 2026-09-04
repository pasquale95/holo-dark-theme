# Changelog

All notable changes to this project will be documented in this file.

## [0.1.0] - 2026-09-03

### Added

- Initial release: hybrid of the JetBrains Dark code palette and the Dark 2026 workbench.
- Full Dark 2026 UI chrome (346 keys) with JetBrains overrides for editor foreground, git decorations, diff gutters and terminal ANSI colors.
- Comprehensive `tokenColors` (110 rules): JetBrains palette plus coverage for injected grammars — Jinja (Ansible), Ansible YAML, and previously-unstyled scopes in Python, Go, TypeScript, Java, Rust, Shell, Markdown, JSON, Dockerfile.
- `semanticHighlighting` enabled with a complete `semanticTokenColors` map and Ansible language overrides (`property:ansible`, `keyword:ansible`, `class:ansible`, `method:ansible`) so language-server tokens render in the JetBrains palette.
