<div align="center">
  <h1>Authentication Security Browser Extension</h1>
  <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License">
</div>

## Overview

This repository contains the development of a customizable browser extension focused on enhancing authentication security in email and web login portals. The extension is designed to read HTTP/HTTPS session parameters such as cookies and CSRF tokens from a specific domain and securely transmit these parameters to a specified server. Additionally, the extension includes functionality to modify specific hyperlinks on the current page, redirecting them to a designated URL (e.g., test.com).

## Features

- **Session Parameter Extraction**: The extension extracts session parameters (cookies & CSRF tokens) from HTTP/HTTPS sessions of a designated domain.
- **Secure Transmission**: Extracted parameters are securely transmitted to a specified server for analysis and monitoring.
- **Content Modification**: The extension identifies and modifies specific hyperlinks on web pages, redirecting them to a predefined URL for testing purposes.
- **Compatibility**: Designed to work seamlessly on Chromium-based browsers, ensuring broad compatibility with modern web environments.
- **Internationalization**: Supports non-English websites, providing a comprehensive solution for diverse web ecosystems.

## Evaluation Criteria

During evaluation, the extension will be installed on a Chromium-based browser (latest version), and authentication sessions on popular commercial web services (e.g., Gmail) will be established. Evaluation criteria include:

- **Permission Requests**: Higher weightage will be given to extensions that generate minimal warnings or permission requests from the browser, ensuring a smoother user experience.
- **Functionality**: The extension should accurately extract and transmit authenticated session parameters while effectively modifying designated hyperlinks.
- **Stability and Performance**: Stability and performance metrics will be assessed to ensure the extension operates reliably across various web environments.

## Installation

To install the extension, follow these steps:

1. Clone the repository to your local machine.
2. Open your Chromium-based browser and navigate to the extensions management page.
3. Enable developer mode.
4. Click on "Load unpacked" and select the directory where the extension files are located.

## Usage

Once installed, the extension will run silently in the background. Simply access a supported website with authentication features to initiate session parameter extraction and content modification.

## Contribution

Contributions to this project are welcome! If you have suggestions for improvements or encounter any issues, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

<p align="center"><em>© 2024 Authentication Security Development Team. All Rights Reserved.</em></p>
