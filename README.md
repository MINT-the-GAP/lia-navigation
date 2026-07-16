<!--
author:   MINT-the-GAP, Martin Lommatzsch, Jihad Hyadi
version:  0.0.1
language: en
edit: true
narrator: US English Female
comment:  Enhanced collapsible navigation with bookmarks and hierarchical TOC for LiaScript courses — replaces default navigation with a tree-based structure that supports expand/collapse, level-based styling, and persistent state.

script:   ./dist/index.js

-->

# LiaScript Navigation Plugin

          --{{0}}--
This plugin enhances LiaScript courses with a collapsible, hierarchical navigation tree. It replaces the default TOC with a bookmarked navigation system that supports expand/collapse functionality, level-based styling, automatic active highlighting, and persistent state storage.

__Try it on LiaScript:__
https://liascript.github.io/course/?https://raw.githubusercontent.com/MINT-the-GAP/lia-navigation/main/README.md

__See the project on GitHub:__
https://github.com/MINT-the-GAP/lia-navigation

           {{1}}
1. Load the macros via

   `import: https://raw.githubusercontent.com/MINT-the-GAP/lia-navigation/main/README.md`

   or pin to a specific version:

   `import: https://raw.githubusercontent.com/MINT-the-GAP/lia-navigation/0.0.1/README.md`

2. Copy the implementation block below directly into your course header

3. Clone this repository on GitHub and customize it for your needs

## Implementation

          --{{0}}--
If you prefer not to use `import:`, copy the following block directly into the header of your LiaScript document.

``` markdown
script:   https://cdn.jsdelivr.net/gh/MINT-the-GAP/lia-navigation@0.0.1/dist/index.js
```
