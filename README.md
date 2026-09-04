# Holo Dark

<p align="center">
   <img src="./images/icon.png" alt="Holo Dark Theme Icon" width="240">
   <br />
  <img src="docs/colors/121314.png" width="14"/> <img src="docs/colors/6A8759.png" width="14"/> <img src="docs/colors/CC8242.png" width="14"/> <img src="docs/colors/FFC66D.png" width="14"/> <img src="docs/colors/7A9EC2.png" width="14"/> <img src="docs/colors/9E7BB0.png" width="14"/> <img src="docs/colors/CCCCCC.png" width="14"/>
   <br />
</p>

<p align="center">
  <a href="./LICENSE"><img src="https://img.shields.io/github/license/pasquale95/holo-dark-theme" alt="License"></a>
  <a href="https://github.com/pasquale95/holo-dark-theme/actions/workflows/publish.yml"><img src="https://github.com/pasquale95/holo-dark-theme/actions/workflows/publish.yml/badge.svg" alt="Publish status"></a>
</p>

Visual Studio Code theme combining the **JetBrains Dark** code palette with the **Dark 2026** workbench: Dark 2026's darker, layered backgrounds; JetBrains colors for every code token, git decoration and terminal ANSI color.

Built for comprehensive token coverage — including injected grammars (Jinja inside Ansible YAML) and semantic tokens from language servers — so no code section is left unstyled.

## Preview

<p align="center">
  <img src="./images/typescript_sample.png" alt="TypeScript sample" width="800">
</p>
<p align="center">
  <img src="./images/python_sample.png" alt="Python sample" width="800">
</p>
<p align="center">
  <img src="./images/ansible_sample.png" alt="Ansible playbook with Jinja expressions" width="800">
</p>
<p align="center">
  <img src="./images/java_sample.png" alt="Java sample" width="800">
</p>
<p align="center">
  <img src="./images/makefile_sample.png" alt="Makefile diff and edge cases" width="800">
</p>

## Install

Download the latest `.vsix` from the [releases page](https://github.com/pasquale95/holo-dark-theme/releases) and run:

```shell
code --install-extension holo-dark-theme-<version>.vsix
```

Or install from the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=pasquale95.holo-dark-theme) and pick `Holo Dark` from `Preferences -> Color Theme`.

## Palette

| Role                          | Color                                                                                           | Hex                   |
| ----------------------------- | ----------------------------------------------------------------------------------------------- | --------------------- |
| Editor background (Dark 2026) | ![bg](docs/colors/121314.png "background")                                                      | `#121314`             |
| Editor foreground             | ![fg](docs/colors/A9B7C6.png "foreground")                                                      | `#A9B7C6`             |
| Comment                       | ![comment](docs/colors/707070.png "comment")                                                    | `#707070`             |
| String                        | ![string](docs/colors/6A8759.png "string")                                                      | `#6A8759`             |
| Keyword / storage             | ![keyword](docs/colors/CC8242.png "keyword")                                                    | `#CC8242`             |
| Number / type                 | ![type](docs/colors/7A9EC2.png "type")                                                          | `#7A9EC2`             |
| Function / tag                | ![function](docs/colors/FFC66D.png "function")                                                  | `#FFC66D`             |
| Property / constant           | ![property](docs/colors/9E7BB0.png "property")                                                  | `#9E7BB0`             |
| JSON key                      | ![json](docs/colors/9876AA.png "json")                                                          | `#9876AA`             |
| Operator / punctuation        | ![operator](docs/colors/CCCCCC.png "operator")                                                  | `#CCCCCC`             |
| CSS value                     | ![css](docs/colors/A5C261.png "css")                                                            | `#A5C261`             |
| Git modified                  | ![modified](docs/colors/6897BB.png "modified")                                                  | `#6897BB`             |
| Git untracked / deleted       | ![untracked](docs/colors/D5756C.png "untracked") / ![deleted](docs/colors/6C6C6C.png "deleted") | `#D5756C` / `#6C6C6C` |
| Git ignored                   | ![ignored](docs/colors/848504.png "ignored")                                                    | `#848504`             |

## Build

No build step is required: `themes/holo-dark-color-theme.json` is the source of truth. Package the extension into a `.vsix` with:

```shell
npx @vscode/vsce package
```

## Test

1. Open the repo in VS Code and press **F5** (`Run -> Start Debugging`). This launches an _Extension Development Host_ with the theme loaded, opening `fixtures/` as the workspace.
2. Pick `Holo Dark` from `Preferences -> Color Theme` in that window if it is not the default.
3. Browse the fixture files — they cover every audited language, including both comment styles per language (`//` and `/* */`, `#` and `=begin`, `--` and `--[[ ]]`, ...), Ansible playbooks with Jinja expressions, and diff/Makefile edge cases.
4. To inspect a specific token, run `Developer: Inspect Editor Tokens and Scopes` from the Command Palette (`Cmd+Shift+P`) and hover the token: it shows the scope stack and the resolved color.

## Notes

- `semanticHighlighting` is **on**. A complete semantic-token map keeps LSP tokens in the palette above; Ansible keys stay yellow (`property:ansible`) and playbook keywords orange (`keyword:ansible`).
