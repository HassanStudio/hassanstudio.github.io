# Basic Usage

Once <!--@include: @/.vitepress/snippets/app-name.md--> is installed, you're ready to start using it.

## Using Built-in Scripts

### Using in Xcode

Hassan works out of the box. Here's how to use it in Xcode:

1. Locate any file in the Xcode Project Navigator
2. Right-click on the file
3. Select "**Open with External Editor**"
4. A script task list will appear at your cursor position
5. Choose the script you want to execute

::: warning <!--@include: @/.vitepress/snippets/app-name.md--> doesn't launch after clicking "Open with External Editor"
<!--@include: @/.vitepress/snippets/app-name.md--> automatically associates itself with common file types like `.swift`. If this issue occurs, check out [File Association Management](/en/advanced/file-associations) to learn how to configure file associations.
:::

### Built-in Scripts Overview

<!--@include: @/.vitepress/snippets/app-name.md--> comes with three useful scripts ready to use:

#### 1. Copy Absolute Path

Copies the file's complete absolute path to the clipboard.

**Use Cases**:
- Referencing files in terminal commands
- Using full paths in scripts
- Sharing file locations with other tools

**Example Output**:
```
/Users/username/Projects/MyApp/Sources/AppDelegate.swift
```

#### 2. Copy Relative Path

Intelligently calculates and copies the file's path relative to your project root.

This script automatically identifies the project root directory. If you encounter issues, see [What if "Copy Relative Path" can't identify my project root correctly](/en/advanced/faq#what-if-copy-relative-path-can-t-identify-my-project-root-correctly).

::: info Implementation Details
For the logic to identify the project root directory, refer to the `find_project_root()` function in the built-in script `_common.sh`.
:::

**Use Cases**:
- Referencing files in configuration files
- Writing project documentation
- Configuring build scripts
- Sharing file locations with team members

**Example Output**:
```
Sources/AppDelegate.swift
```

#### 3. Reveal in Finder

Locates and selects the file in Finder.

**Use Cases**:
- Quickly finding file locations
- Renaming or moving files
- Viewing other contents in the file's folder

### Quick Tasks

The Quick Task feature lets you set a default script that executes automatically when opening files, eliminating manual selection and boosting efficiency for frequent operations.

#### Configuration Steps

1. Open Settings (`Command + ,`)
2. Go to the "General" tab and find "Quick Mode"
3. Check the "Enable" checkbox
4. Select your default script from the "Quick Task" dropdown (e.g., "Copy Relative Path")

#### How It Works

Once Quick Task is enabled:
- Using "Open with External Editor" will **directly execute** your selected default script
- The task selection menu won't appear, making the workflow faster

**Ideal For**:
- When you have one script you use most often
- When you want to minimize steps and quickly execute a specific task

::: warning Note
With Quick Task enabled, you'll need to disable "Quick Mode" or change the default script to execute other scripts.
:::

### Using from Menu Bar

<!--@include: @/.vitepress/snippets/app-name.md--> provides a menu bar icon for quick access to all features.

Click the <!--@include: @/.vitepress/snippets/app-name.md--> icon (🔨) in the menu bar to:

**Quick Task Management**
- Enable/disable Quick Task
- Select default script

**File Association Management**
- Quickly switch file type associations
- Open file association settings

**Other Features**
- Open Preferences (shortcut: `Command + ,`)
- Quit application (shortcut: `Command + Q`)

## Preferences Configuration

<!--@include: @/.vitepress/snippets/app-name.md--> offers extensive customization options. Open Settings with `Command + ,` or through the menu bar.

### General Settings

In the "General" tab, you can configure:

#### Appearance Mode

- **Light Mode** - Use light theme
- **Dark Mode** - Use dark theme
- **Follow System** - Automatically follow system appearance settings

#### Application Language

- **简体中文** - Use Chinese interface
- **English** - Use English interface
- **Follow System** - Automatically follow system language settings

#### Run in Background

When enabled, closing the Settings window keeps <!--@include: @/.vitepress/snippets/app-name.md--> running in the background instead of quitting the application.

#### Show Menu Bar Icon

Controls whether the <!--@include: @/.vitepress/snippets/app-name.md--> icon appears in the system menu bar.

## Next Steps

Now you're familiar with the basics of <!--@include: @/.vitepress/snippets/app-name.md-->! Here's what you can do next:

::: tip Pro Tip
Try using <!--@include: @/.vitepress/snippets/app-name.md-->'s built-in scripts in your daily development to get comfortable with how it works. Once you're ready, dive into writing your own custom scripts!
:::

- [Task Management](/en/advanced/task-management) - Organize and manage your scripts
- [Script Execution Engine](/en/advanced/script-execution) - Deep dive into script execution
- [File Association Management](/en/advanced/file-associations) - Batch set file type associations
- [Custom Scripts](/en/advanced/custom-scripts) - Learn how to write your own automation scripts
- [FAQ](/en/advanced/faq) - Common questions and answers
