# Custom Scripts

The power of <!--@include: @/.vitepress/snippets/app-name.md--> lies in its extensibility. By writing custom scripts, you can create automation tools tailored to your workflow. This guide will teach you how to write and manage custom scripts.

## Script Basics

### Script Location

All scripts should be placed in <!--@include: @/.vitepress/snippets/app-name.md-->'s task directory:

```
<!--@include: @/.vitepress/snippets/path-tasks.md-->
```

You can quickly open this directory by:
1. Opening the <!--@include: @/.vitepress/snippets/app-name.md--> settings window (`Command + ,`)
2. Switching to the "Tasks" tab
3. Clicking the "Show in Finder" button

### Basic Script Structure

A complete <!--@include: @/.vitepress/snippets/app-name.md--> script consists of the following parts:

```bash
#!/bin/bash
# @title Script Title
# @description Detailed description of the script
# @author Your Name

# Script content
# $1 = Absolute path to the file

echo "Processing file: $1"
```

**Required Parts**:
- **Shebang line** (`#!/bin/bash`) - Tells the system which interpreter to use
- **Script content** - The actual processing logic

**Optional Parts**:
- **Metadata comments** - Add title, description, and author information to the script

### File Permissions

After creating a script, you need to set executable permissions:

```bash
chmod +x <!--@include: @/.vitepress/snippets/path-tasks-script-bash.md-->
```

Or in Finder:
1. Right-click the script file
2. Select "Get Info"
3. In the "Sharing & Permissions" section, ensure you have "Read & Write" permissions

## Writing Your First Script

Let's start with a simple example.

### Example 1: Copy Filename

Create a script that copies the filename (without path) to the clipboard.

```bash
#!/bin/bash
# @title Copy Filename
# @description Copy the filename (without path and extension) to clipboard
# @author Your Name

# Get file path
file_path="$1"

# Extract filename (without path)
filename=$(basename "$file_path")

# Extract filename (without extension)
filename_without_ext="${filename%.*}"

# Copy to clipboard
echo -n "$filename_without_ext" | pbcopy
```

**Usage Steps**:
1. Save the code above as `copy-filename.sh`
2. Move it to `<!--@include: @/.vitepress/snippets/path-tasks.md-->`
3. Set executable permissions: `chmod +x copy-filename.sh`
4. Use it in <!--@include: @/.vitepress/snippets/app-name.md-->

### Example 2: Processing JSON with Python

<!--@include: @/.vitepress/snippets/app-name.md--> supports multiple scripting languages. This example uses Python to process JSON files.

```python
#!/usr/bin/env python3
# @title Format JSON
# @description Format JSON file and overwrite the original
# @author Your Name

import sys
import json
import subprocess
import os

def send_notification(title, message, is_error=False):
    """Send macOS system notification"""
    sound = "Basso" if is_error else "Glass"
    script = f'display notification "{message}" with title "{title}" sound name "{sound}"'
    subprocess.run(['osascript', '-e', script])

def format_json(file_path):
    try:
        # Read JSON file
        with open(file_path, 'r', encoding='utf-8') as f:
            data = json.load(f)

        # Format and write back
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2, ensure_ascii=False)

        filename = os.path.basename(file_path)
        send_notification("JSON Formatted", f"Successfully formatted\n{filename}")
        return True
    except Exception as e:
        filename = os.path.basename(file_path)
        send_notification("Formatting Failed", f"{filename}\nError: {str(e)}", is_error=True)
        return False

if __name__ == '__main__':
    if len(sys.argv) > 1:
        format_json(sys.argv[1])
    else:
        send_notification("Parameter Error", "No file path provided", is_error=True)
```

## Advanced Tips

### Using Environment Variables

<!--@include: @/.vitepress/snippets/app-name.md--> scripts can access system environment variables provided by macOS.

#### Available System Environment Variables

Since <!--@include: @/.vitepress/snippets/app-name.md--> is a GUI application (launched by launchd), scripts can access the following system-level environment variables:

| Variable | Description | Example Value |
|----------|-------------|---------------|
| `$HOME` | User home directory | `/Users/your_name` |
| `$USER` | Current username | `rakuyo` |
| `$TMPDIR` | Temporary directory | `/var/folders/...` |
| `$PATH` | System default path | `/usr/bin:/bin:/usr/sbin:/sbin` |
| `$SHELL` | Default shell | `/bin/zsh` |
| `$LOGNAME` | Login name | `your_name` |
| `$LANG` | Language setting | `zh_CN.UTF-8` |

#### Accessing Custom Environment Variables

**Important Note**: <!--@include: @/.vitepress/snippets/app-name.md--> scripts **cannot directly access** custom environment variables defined in `.zshrc` or `.bash_profile`, as these configurations only take effect in terminal shells.

If you need to use custom environment variables, there are two approaches:

##### Approach 1: Directly Load Shell Configuration Files

::: warning Note
`.zshrc` may contain interactive commands (such as `ls` aliases, prompt configurations, etc.), which may produce unnecessary output or errors when sourced, or even cause script failures.
:::

```bash
#!/bin/bash
# @title Load Shell Configuration
# @description Directly load environment variables from .zshrc

# Load zsh configuration (if exists)
if [ -f "$HOME/.zshrc" ]; then
    source "$HOME/.zshrc"
fi

# Now you can use environment variables defined in .zshrc
echo "PATH: $PATH"
```

##### Approach 2: Create a Dedicated Environment Variable File (Recommended)

**Step 1**: Create an environment variable configuration file `~/.hassan_env`

```bash
# ~/.hassan_env
export MY_PROJECT_PATH="$HOME/Projects/MyApp"
export CUSTOM_TOOL_PATH="/opt/local/bin"
export MY_API_KEY="your-api-key"

# Extend PATH
export PATH="/opt/homebrew/bin:$PATH"
```

**Step 2**: Load the configuration file in your script

```bash
#!/bin/bash
# @title Use Custom Environment Variables
# @description Demonstrate how to load custom environment variables

# Load custom environment variables
if [ -f "$HOME/.hassan_env" ]; then
    source "$HOME/.hassan_env"
fi

# Now you can use custom variables
echo "Project path: $MY_PROJECT_PATH"
echo "Tool path: $CUSTOM_TOOL_PATH"

# Use tools from custom PATH
which some-custom-tool
```

### Displaying macOS Notifications

Use `osascript` to display system notifications:

```bash
#!/bin/bash

# Display notification
osascript -e 'display notification "Operation completed" with title "Hassan" sound name "Glass"'

# Notification with details
osascript -e 'display notification "Copied 3 files" with title "Hassan" subtitle "Copy Operation"'
```

### Conditional Execution

When "Quick Mode" is enabled, only one script can be executed at a time. However, you can perform different operations for different file types as shown below:

```bash
#!/bin/bash
# @title Smart Processing
# @description Execute different operations based on file type

file_path="$1"
file_ext="${file_path##*.}"

case "$file_ext" in
    swift)
        echo "Processing Swift file"
        # Swift-specific processing
        ;;
    json)
        echo "Processing JSON file"
        # JSON-specific processing
        ;;
    md)
        echo "Processing Markdown file"
        # Markdown-specific processing
        ;;
    *)
        echo "Unknown file type: $file_ext"
        ;;
esac
```

## Organizing Scripts

### Using Directory Groups

Use subdirectories to organize your scripts:

```
<!--@include: @/.vitepress/snippets/path-tasks.md-->
├── Builtin/                       # Built-in scripts
│   ├── _common.sh
│   ├── copy-absolute-path.sh
│   ├── copy-relative-path.sh
│   └── open-in-finder.sh
└── Custom/                        # Custom scripts root directory
    ├── development/               # Development tools
    │   ├── format-swift.sh
    │   ├── run-swiftlint.sh
    │   └── count-lines.sh
    ├── utilities/                 # Utilities
    │   ├── copy-filename.sh
    │   ├── convert-encoding.sh
    │   └── compress-image.py
    └── git/                       # Git-related
        ├── git-blame.sh
        └── git-history.sh
```

<!--@include: @/.vitepress/snippets/app-name.md--> will display these groups in a tree structure, making it easy to quickly find the scripts you need.

## Debugging Scripts

**Method 1: Test in Terminal (Recommended)**
```bash
bash <!--@include: @/.vitepress/snippets/path-tasks-script-bash.md--> "/path/to/test/file"
```

::: info More Rigorous Approach
You can use the absolute path of the interpreter instead of `bash` to get more accurate execution results.
:::

**Method 2: Output to File**
```bash
#!/bin/bash

file_path="$1"
log_file="/tmp/hassan-debug.log"

echo "Processing file: $file_path" >> "$log_file"
echo "Time: $(date)" >> "$log_file"

# Your script logic...
```
