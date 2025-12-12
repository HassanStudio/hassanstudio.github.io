# Task Management

<!--@include: @/.vitepress/snippets/app-name.md--> provides a comprehensive task management system that makes organizing and managing your scripts effortless.

## Task Directory

<!--@include: @/.vitepress/snippets/app-name.md--> automatically scans for scripts in the following directory:

```
<!--@include: @/.vitepress/snippets/path-tasks.md-->
```

On first launch, <!--@include: @/.vitepress/snippets/app-name.md--> automatically creates this directory and copies the [built-in scripts](/en/guide/getting-started#built-in-scripts) to it.

## Task Organization

### Hierarchical Structure

You can organize scripts using folders, and <!--@include: @/.vitepress/snippets/app-name.md--> will display them in a tree structure:

::: info Folders are Groups!
Use directory structures to organize your scripts—<!--@include: @/.vitepress/snippets/app-name.md--> automatically recognizes them and displays them in a tree view.
:::

```
<!--@include: @/.vitepress/snippets/path-tasks.md-->
├── Builtin/                       # Built-in scripts directory (created by default on installation)
│   ├── _common.sh                 # Built-in utility scripts
│   ├── copy-absolute-path.sh
│   ├── copy-relative-path.sh
│   └── open-in-finder.sh
└── Custom/                        # Custom scripts directory (example)
    ├── development/
    │   ├── format-code.sh
    │   └── run-tests.sh
    └── utilities/
        ├── convert-format.py
        └── analyze-file.swift
```

::: warning Note
Folder grouping cannot currently be disabled. <!--@include: @/.vitepress/snippets/app-name.md--> strictly follows the directory structure under the `Tasks` folder when displaying scripts.
:::

### Script Metadata

You can add metadata to your scripts using comments, and <!--@include: @/.vitepress/snippets/app-name.md--> will parse and display them:

```bash
#!/bin/bash
# @title: Format Code
# @description: Format Swift code using SwiftFormat
# @author: Rakuyo
# @version: 1.0

# Script content...
```

**Supported metadata tags**:
- `@title:` - Display title for the script
- `@description:` - Detailed description of the script
- `@author:` - Script author
- `@version:` - Script version
<!-- - `@fileTypes:` - File types this script applies to (multiple values separated by commas) -->

::: warning Important
- Metadata must be in the comment section at the beginning of the file; parsing stops when a non-comment line is encountered
- Currently only `#` and `//` comment symbols are supported
- Metadata tags must use the `@key: value` format—**the colon is required**
:::

### Script Modularity

<!--@include: @/.vitepress/snippets/app-name.md--> supports interdependencies between scripts and modular components, allowing you to create shared script libraries that can be called by other scripts.

#### Shared Scripts

You can create script files starting with `.` or `_` as shared modules. These files **will not appear in the task list** but can be referenced by other scripts:

**Naming conventions**:
- Start with `.`: such as `.common.sh`, `.utils.py`
- Start with `_`: such as `_helpers.sh`, `_config.rb`

**Usage example**:

Create a shared script `.common.sh`:
```bash
# .common.sh - Common function library
function log_info() {
    echo "[INFO] $1"
}

# More functions...
```

Reference it in other scripts:
```bash
# format-code.sh

#!/bin/bash
# @title: Format Code
# @description: Format Swift code using SwiftFormat
# @author: Rakuyo
# @version: 1.0

# Source the shared script
source "$(dirname "$0")/.common.sh"

log_info "Starting code formatting..."
# Additional logic...
```
