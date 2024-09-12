# Bandha.js

**Bandha.js** is a TypeScript-based framework built on top of the Moddable SDK, designed to simplify IoT development by integrating the powerful features of Moddable with modern JavaScript tooling like **esbuild**. With Bandha.js, developers can leverage TypeScript's type safety and the fast, efficient build process of esbuild to streamline the development of IoT applications.

## Features

- **TypeScript Support**: Develop Moddable SDK applications with full TypeScript support, providing improved code readability and maintainability.
- **esbuild Integration**: Fast builds and bundling with esbuild, enabling efficient development and deployment workflows.
- **Moddable SDK Simplified**: Provides a layer of abstraction over the Moddable SDK, reducing boilerplate and making it easier to start IoT projects.
- **Lightweight & Performant**: Focused on keeping the framework lightweight and ensuring optimal performance for embedded devices.

## Installation

To get started with **Bandha.js**, follow the steps below.

1. **Initialize a New Project**:

   You can quickly generate a new project skeleton using the **Bandha.js** CLI tool:

   ```bash
   npx bandha init my-project
   ```

   This command will create a new project folder named `my-project` with all the necessary files.

2. **Navigate to Your Project Directory**:

   Once the project is initialized, navigate into the project folder:

   ```bash
   cd my-project
   ```

3. **Install Dependencies**:

   Run the following command to install all the necessary dependencies:

   ```bash
   npm install
   ```

## Quick Start

After setting up the project, you can build and flash the application to your Moddable-compatible device.

1. **Build and Flash the Application**:

   Use the following command to build the project and flash it directly to your device:

   ```bash
   npm run flash <device>
   ```

   Replace `<device>` with your specific target device (e.g., `esp32`, `esp8266`, etc.).

2. **Example**:

   If you are using an ESP32 or NodeMCU device, the command would look like this:

   ```bash
   npm run flash esp/nodemcu
   ```

   This will build your TypeScript code, bundle it using esbuild, and deploy the resulting JavaScript to your device.

## Configuration

Bandha.js provides several configuration options for the build and development process. You can customize the behavior of `esbuild` and other tools through configuration files provided in the project skeleton.

## Documentation

For detailed API documentation, please refer to the official Moddable SDK [documentation](https://github.com/Moddable-OpenSource/moddable) as **Bandha.js** extends many of its core features.
