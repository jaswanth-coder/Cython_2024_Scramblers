![image](https://github.com/jaswanth-coder/Cython_2024_Scramblers/assets/75730218/4fc45075-353c-4e12-beae-cb4aea424a3f)


![image](https://github.com/jaswanth-coder/Cython_2024_Scramblers/assets/75730218/db9b62b4-0a56-45ec-8e0c-cbd8a3333622)


<div align="center">
  <h1 style="color: #0eff00; font-family: 'Courier New', Courier, monospace;">Authentication Security Browser Extension</h1>
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

## Award-Winning Solution

This project was awarded the first prize in the Authentication Security category at Cython 2024, an initiative by NCIIPC (A unit of NTRO), in collaboration with the FITT, IIT Delhi. Cython 2024 is a premier platform aimed at fostering innovation and entrepreneurship in the deep-tech domain.

Cython 2024 serves as a catalyst for translating groundbreaking ideas into tangible solutions by providing participants with the necessary resources, mentorship, and networking opportunities.

Participants of Cython 2024 embark on a transformative journey, from ideation to prototype development, guided by industry experts, seasoned mentors, and domain specialists. The program offers a unique blend of workshops, hands-on sessions, expert talks, and networking events, culminating in a grand showcase of innovative solutions.

Cython 2024 is not just a hackathon; it's a launchpad for aspiring techpreneurs to transform their ideas into impactful ventures. Join us in shaping the future of technology and making a meaningful difference in society. Let's unleash the power of deep-tech innovation together at Cython 2024!.

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
