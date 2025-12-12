# FAQ

This page collects frequently asked questions and answers about using <!--@include: @/.vitepress/snippets/app-name.md-->. If you can't find the answer to your question here, feel free to [contact us](/en/about/contact) for technical support.

## Installation & Configuration

### What system permissions does <!--@include: @/.vitepress/snippets/app-name.md--> require?

<!--@include: @/.vitepress/snippets/app-name.md--> may require the following permissions:

- **Notification Permission** - To display notifications about script execution results
- **File Access Permission** - To read and process files

The system will automatically request these permissions when needed. Please grant them as prompted.

### How do I uninstall <!--@include: @/.vitepress/snippets/app-name.md-->?

1. Quit <!--@include: @/.vitepress/snippets/app-name.md--> (`Command + Q`)
2. Drag `/Applications/Hassan.app` to the Trash
3. Empty the Trash

To completely remove all data:

```bash
# Delete task directory
rm -rf <!--@include: @/.vitepress/snippets/path-app-support-bash.md-->

# Delete preferences
defaults delete <!--@include: @/.vitepress/snippets/bundle-id.md-->
```

::: tip Tip
If you've set up file associations, we recommend clicking "Restore Defaults" in <!--@include: @/.vitepress/snippets/app-name.md--> Settings before uninstalling.
:::

## Usage Issues

### Why is there no response after executing a script?

Possible causes and solutions:

1. **Check script permissions**
   ```bash
   ls -l <!--@include: @/.vitepress/snippets/path-tasks-script-bash.md-->
   ```
   Ensure the script has execute permissions (`-rwxr-xr-x`)

2. **Check script syntax**
   Manually execute the script in terminal to check for errors:
   ```bash
   bash <!--@include: @/.vitepress/snippets/path-tasks-script-bash.md--> "/path/to/test/file"
   ```

3. **Check shebang line**
   Ensure the first line of the script has a correct shebang:
   ```bash
   #!/bin/bash
   ```

4. **Check interpreter configuration**
   - Open <!--@include: @/.vitepress/snippets/app-name.md--> Settings
   - Switch to the "Interpreters" tab
   - Ensure the interpreter used by the script is in the list
      - If not present, refer to [Interpreter Configuration](/en/advanced/script-execution#interpreter-configuration) to add an interpreter

### What if "Copy Relative Path" can't identify my project root correctly?

<!--@include: @/.vitepress/snippets/app-name.md--> detects the project root directory in the following priority order:

1. `.xcworkspace`
2. `Tuist/` + (`mise.toml` or `Workspace.swift`)
3. `.git`
4. `.xcodeproj`

If detection is incorrect, please verify:

1. Is the file located within the project directory?
2. Does the project contain any of the above identifier files/directories?
3. Are there multiple nested project structures? (<!--@include: @/.vitepress/snippets/app-name.md--> will choose the nearest one)

## Script Writing

### How do I get the file path in a script?

<!--@include: @/.vitepress/snippets/app-name.md--> passes the file's absolute path as the first argument to the script:

```bash
#!/bin/bash
file_path="$1"  # The first argument is the file path

echo "Processing file: $file_path"
```

### How can I display a friendlier name for my script?

Use metadata comments. See [Script Metadata](/en/advanced/task-management#script-metadata) for details.

### How do I debug a script?

See [Debugging Scripts](/en/advanced/custom-scripts#debugging-scripts) for details.

## Have Other Questions?

If you can't find the answer to your question here, feel free to [contact us](/en/about/contact) for assistance.
