# App Privacy Policy

> If you have any questions, feel free to [contact us](/en/about/contact)

<!--@include: @/.vitepress/snippets/app-name.md--> takes your privacy and data security very seriously. This privacy policy explains how <!--@include: @/.vitepress/snippets/app-name.md--> handles user information.

## TL;DR

**<!--@include: @/.vitepress/snippets/app-name.md--> does not collect, upload, or share any user data. All operations are performed locally on your device.**

## Data Collection

### We Collect No Data

<!--@include: @/.vitepress/snippets/app-name.md--> is a completely local application. We:

- [x] **Do not collect** any usage statistics
- [x] **Do not collect** any crash reports
- [x] **Do not collect** any analytics data
- [x] **Do not collect** any personal information
- [x] **Do not collect** your files or script contents
- [x] **Do not collect** your system information

## Local Processing

All <!--@include: @/.vitepress/snippets/app-name.md--> features run locally on your device:

- **Script Execution**: Scripts run locally on your Mac and are never sent to any server
- **File Processing**: All file operations are performed locally
- **Configuration Management**: All settings are stored on your Mac
- **Task Management**: Task lists are scanned and managed locally only

## Network Connectivity

**<!--@include: @/.vitepress/snippets/app-name.md--> does not require internet access**:

- <!--@include: @/.vitepress/snippets/app-name.md--> does not initiate any network connections
- <!--@include: @/.vitepress/snippets/app-name.md--> does not send data to any servers
- <!--@include: @/.vitepress/snippets/app-name.md--> does not check for updates (unless you manually trigger it)
- <!--@include: @/.vitepress/snippets/app-name.md--> works perfectly in a completely offline environment

## Permissions

<!--@include: @/.vitepress/snippets/app-name.md--> may request the following system permissions to function properly:

### 1. Notification Permission

**Purpose**: Display notifications about script execution results

**Details**:
- Used to inform you whether a script executed successfully or failed
- Notifications only contain execution results, no sensitive information
- Notifications are generated locally only and never sent to any server
- You can disable notifications in System Settings at any time

### 2. File Access Permission

**Purpose**: Read and process files you select

**Details**:
- Only accesses files you explicitly select in Xcode
- Used to pass file paths when executing scripts
- Does not automatically access your other files
- Complies with macOS sandbox security mechanisms

### 3. Accessibility Permission (Optional)

**Purpose**: Required for certain advanced script features

**Details**:
- Only requested if your custom scripts require it
- Used for scripts to perform system-level operations
- Can be revoked in System Settings at any time

## Data Storage

<!--@include: @/.vitepress/snippets/app-name.md--> stores the following data on your Mac:

### Tasks Directory
```
<!--@include: @/.vitepress/snippets/path-tasks.md-->
```
- Stores your custom scripts and built-in scripts
- Completely under your local control
- You can add, modify, or delete at any time

### Preferences
```
<!--@include: @/.vitepress/snippets/path-preferences.md-->
```
- Stores your app settings and configurations
- Includes quick tasks, file associations, interpreter configurations, etc.
- Uses macOS standard preferences storage mechanism

### Application Support Files
```
<!--@include: @/.vitepress/snippets/path-app-support.md-->
```
- Stores support files required for app operation
- Includes backups of built-in scripts, etc.

**All this data is stored on your Mac and is never synced to the cloud or sent to any server.**

## Third-Party Services

**<!--@include: @/.vitepress/snippets/app-name.md--> does not use any third-party services**:

- ❌ No third-party analytics services (such as Google Analytics)
- ❌ No crash reporting services (such as Crashlytics)
- ❌ No advertising services
- ❌ No cloud storage services
- ❌ No other third-party services

### About Third-Party Code Libraries

While <!--@include: @/.vitepress/snippets/app-name.md--> does not use any third-party services, we do use some excellent open source code libraries to provide a better development experience and code quality.

**Important Notes**:
- These libraries all run **locally** on your device
- **No data collection** or network transmission involved
- All dependencies are **open source projects** with publicly available code for review
- <!--@include: @/.vitepress/snippets/app-name.md--> complies with all dependency library open source license requirements

For a complete list of third-party open source libraries and license information, please see [Third-Party Open Source Licenses](/en/about/licenses).

## Script Execution Security

### Your Scripts

- Your custom scripts are completely under your control
- Scripts execute on your Mac with your user permissions
- <!--@include: @/.vitepress/snippets/app-name.md--> does not modify, upload, or share your scripts
- Script execution is entirely local

### Built-in Scripts

Built-in scripts provided by <!--@include: @/.vitepress/snippets/app-name.md--> (copy path, reveal in Finder, etc.) have publicly available source code that you can review in the `<!--@include: @/.vitepress/snippets/path-tasks.md-->Builtin/` folder.

## Data Security

<!--@include: @/.vitepress/snippets/app-name.md--> takes the following measures to protect your data security:

1. **Local Processing**: All data processing is done locally and never leaves your device
2. **Sandbox Isolation**: Complies with macOS sandbox mechanisms to protect system security
3. **Minimal Permissions**: Only requests necessary permissions
4. **No Network Connections**: Does not establish any network connections, eliminating data breach risks

## Your Rights

As a <!--@include: @/.vitepress/snippets/app-name.md--> user, you have the following rights:

### 1. Right to Access Data
You can access all data stored by <!--@include: @/.vitepress/snippets/app-name.md--> at any time:
- Task scripts are located at `<!--@include: @/.vitepress/snippets/path-tasks.md-->`
- Configuration files are located at `<!--@include: @/.vitepress/snippets/path-preferences.md-->`

### 2. Right to Delete Data
You can delete all data at any time:
```bash
# Delete tasks directory
rm -rf <!--@include: @/.vitepress/snippets/path-app-support-bash.md-->

# Delete preferences
defaults delete <!--@include: @/.vitepress/snippets/bundle-id.md-->
```

### 3. Right to Revoke Permissions
You can revoke permissions granted to <!--@include: @/.vitepress/snippets/app-name.md--> in macOS System Settings at any time:
- System Settings → Privacy & Security → Notifications
- System Settings → Privacy & Security → Files and Folders

### 4. Complete Control
- You have complete control over all data accessed by <!--@include: @/.vitepress/snippets/app-name.md-->
- You can view, modify, or delete any data at any time
- You can uninstall <!--@include: @/.vitepress/snippets/app-name.md--> at any time

## Privacy Policy Updates

We may update this privacy policy from time to time. Updated policies will be published on this page, with the last update date noted at the bottom of the documentation.

For significant changes, we will publish announcements on our website and App Store release page.

## Compliance Statement

<!--@include: @/.vitepress/snippets/app-name.md--> complies with the following privacy regulations:

- **GDPR** (General Data Protection Regulation): Since we collect no data, <!--@include: @/.vitepress/snippets/app-name.md--> naturally complies with GDPR requirements
- **CCPA** (California Consumer Privacy Act): We do not sell or share any personal information
- **Apple App Store Privacy Requirements**: <!--@include: @/.vitepress/snippets/app-name.md--> fully complies with Apple's privacy guidelines

## Summary

<!--@include: @/.vitepress/snippets/app-name.md-->'s privacy commitment:

- [x] **Zero Data Collection** - We collect no data
- [x] **Local Processing** - All operations are performed on your device
- [x] **No Network Connections** - No internet required, no data uploads
- [x] **User Control** - You have complete control over all data

Your privacy and data security are our top priorities.
