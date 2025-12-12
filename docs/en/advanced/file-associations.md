# File Association Management

<!--@include: @/.vitepress/snippets/app-name.md--> provides powerful file association management, allowing you to batch configure default applications for file types.

## Why File Associations Matter

To use <!--@include: @/.vitepress/snippets/app-name.md--> in Xcode, you need to set <!--@include: @/.vitepress/snippets/app-name.md--> as the default editor for certain file types. This way, when you right-click a file in Xcode and select "Open with External Editor," the system will launch <!--@include: @/.vitepress/snippets/app-name.md-->.

::: info Automatic Association
<!--@include: @/.vitepress/snippets/app-name.md--> automatically associates itself with common file types like `.swift` after installation. Manual configuration is typically unnecessary. If you encounter issues with launching, refer to this page for configuration guidance.
:::

## Configuring File Associations

### Via Settings Window

1. Launch <!--@include: @/.vitepress/snippets/app-name.md-->
2. Open Settings using `Command + ,` or by clicking "Preferences..." in the menu bar
3. Switch to the "File Associations" tab
4. Here you can:
   - **View File Types** - See all supported file extensions and their current association status
   - **Set Associations** - Check the file extensions you want to associate (such as `.swift`, `.h`, `.m`, etc.)
   - **Apply Settings** - Click the "Apply Settings" button to make changes effective

::: warning Important
Configuring file associations will modify the default application for these file types. <!--@include: @/.vitepress/snippets/app-name.md--> remembers the original settings, and you can revert them anytime using "Restore Defaults."
:::

::: tip Tip
We recommend starting with a few commonly-used file types like `.swift`. You can always come back to add or remove file types later.
:::

### Quick Management via Menu Bar

<!--@include: @/.vitepress/snippets/app-name.md-->'s menu bar provides quick management features:

1. Click the <!--@include: @/.vitepress/snippets/app-name.md--> icon (🔨) in the menu bar
2. Select the "File Associations" submenu
3. Click any file extension (like `.swift`) to toggle its association status
4. Click "Configure Extensions..." to open the File Associations page in Settings

::: tip Tip
The menu bar allows you to quickly toggle association status for common file types without opening the Settings window.
:::

## Custom File Extensions

If you need to associate other file types:

### Adding Custom Extensions

1. Open Settings (`Command + ,`)
2. Switch to the "File Associations" tab
3. Click the `+` button
4. Enter the file extension (without the dot, e.g., enter `log` instead of `.log`)
5. Check the newly added extension
6. Click "Apply Settings"

### Removing Custom Extensions

1. Open Settings (`Command + ,`)
2. Switch to the "File Associations" tab
3. Select the file type you want to remove
4. Click the `-` button
5. Click "Apply Settings"

## Restore Defaults

<!--@include: @/.vitepress/snippets/app-name.md--> saves the original settings when applying file associations. You can restore them anytime:

1. Open Settings
2. Switch to the "File Associations" tab
3. Click the "Restore Defaults" button
4. All file associations will revert to their state before <!--@include: @/.vitepress/snippets/app-name.md--> was associated

::: tip Tip
The restore operation reverts all file types' default editors to what they were before association, ensuring your normal workflow remains unaffected.
:::

::: info Important Note
Hassan can only track the original editor for **file associations set through Hassan**.

**Example Scenario**:
1. A file type's default editor is originally **Editor A**
2. You change it to **Hassan** via Hassan's Settings (Hassan records the original editor as A)
3. Later, you manually change it to **Editor B** in Finder
4. When you click "Restore Defaults" in Hassan, it will restore to **Editor A** (not B)

This is because Hassan saved the original editor information (Editor A) in step 2 when applying the association, and cannot track subsequent manual changes made in the system.
:::

## Troubleshooting

### Cannot Restore Original Editor

If clicking "Restore Defaults" doesn't restore the original editor:

1. Locate a file of the corresponding type in Finder
2. Right-click → Get Info
3. Select your desired editor in "Open with"
4. Click "Change All..."
