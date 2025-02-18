# Moodle CopyPaste Fix Extension

This extension enables **right-click** and **copy-paste** functionality in **Moodle** LMS. It allows users to bypass restrictions on right-clicking, copying, cutting, pasting, and selecting text.

## Features

- **Enable Right-Click**: Right-click functionality is enabled on Moodle pages.
- **Enable Copy-Paste**: Users can copy, cut, and paste text freely.
- **Toggle**: A toggle switch is available to turn the feature on or off.
- **Auto-Reload**: If you disable the feature, the page will automatically reload with the restrictions removed.

## Installation

1. Download or clone this repository to your local machine.
2. Open **Chrome** or **Edge** browser and navigate to `chrome://extensions/` (or `edge://extensions/`).
3. Enable **Developer Mode** by toggling the switch in the top-right corner.
4. Click on **Load unpacked** and select the folder where the extension files are located.
5. The extension will now be installed and active.

## Usage

1. After installation, you will see the extension icon in the browser's extension bar.
2. Click the extension icon to open the **popup**.
3. The popup contains a **toggle switch**:
   - **Enabled**: Right-click and copy-paste will be allowed.
   - **Disabled**: Right-click and copy-paste will be restricted.
4. When you toggle the switch to disable the feature, the page will automatically **reload**, and an alert will inform you that the feature has been disabled.

### Example

- **Enable**: When the switch is enabled, you can right-click and use copy-paste freely.
- **Disable**: When the switch is disabled, right-click and copy-paste are blocked, and the page will reload.

## Permissions

This extension requires the following permissions:

- **scripting**: To inject scripts into the web page.
- **activeTab**: To interact with the active tab.
- **storage**: To save user preferences (enabled/disabled state).

## How It Works

1. The extension injects a **content script** into all pages (by default).
2. The script listens for actions like **right-click** and **copy-paste** and overrides the restrictions.
3. A toggle button is provided in the extension's popup to enable or disable these features.

## Contributing

Feel free to fork this project and submit pull requests. Any improvements, fixes, or suggestions are welcome!

1. Fork this repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.

## License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.
