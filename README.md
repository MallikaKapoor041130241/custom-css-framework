# Custom CSS Framework for Valentine's Gift Suggestion

## Overview

This project provides a **custom CSS framework** that offers an interactive and vibrant user experience for a **Valentine's gift suggestion app**. The app features a **personalized quiz** to help users find the perfect gifts for their partners efficiently.

The framework is built using **Sass** for better organization, customization, and maintainability. It includes **utility classes** for styling elements like buttons, forms, headings, and more. The framework is also **responsive** and highly customizable using **CSS Variables**.

## Features

- 💖 **Custom Theme**: Predefined styles for headings, lists, buttons, forms, inputs, and tables.
- 🎭 **Interactive Buttons & Animations**: Hover effects and smooth animations enhance the user experience.
- 🎨 **CSS Variables**: Easily modify colors, fonts, and styles via `_variables.scss`.
- 📏 **Utility Classes**: Quick styles for margin, padding, colors, and font sizes.
- 📱 **Responsive Design**: Ensures seamless experience across all devices.

---

## Technologies Used

- **Sass**: CSS preprocessing with variables, partials, and mixins.
- **CSS Variables**: For easy customization of colors, fonts, and visual properties.
- **Google Fonts**: **Poppins** for a modern and clean look.
- **Calligraphy Fonts**: Added for a romantic and elegant touch.
- **Animations**: Smooth animations for an interactive experience.

---

## Installation

### 1️⃣ Clone the Repository
```sh
 git clone https://github.com/your-repo/custom-css-framework.git
 cd custom-css-framework
```

### 2️⃣ Install Dependencies (if using npm for Sass)
```sh
 npm install
```

### 3️⃣ Compile SCSS to CSS
```sh
 npm run build
```
Or manually compile with:
```sh
 sass scss/main.scss css/main.css --watch
```

## Usage
### Include the Compiled CSS in Your HTML
```html
<link rel="stylesheet" href="css/main.css">
```

### Example Usage
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Valentine’s Gift Quiz</title>
    <link rel="stylesheet" href="css/main.css">
</head>
<body>
    <div class="center-content">
        <h1 class="text-primary">Find the Perfect Gift!</h1>
        <p class="text-center">Take our quiz to find a thoughtful present for your loved one.</p>
        <button class="btn">Start Quiz</button>
        <div class="quiz-container">
            <div class="quiz-row">
                <div class="quiz-option choice" data-choice="Flowers">
                    <img src="images/flowers.jpg" alt="Flowers">
                    <p>Flowers</p>
                </div>
                <div class="quiz-option choice" data-choice="Teddy Bear">
                    <img src="images/teddy.jpg" alt="Teddy Bear">
                    <p>Teddy Bear</p>
                </div>
            </div>
            <div class="quiz-row">
                <div class="quiz-option choice" data-choice="Sweets">
                    <img src="images/sweets.jpg" alt="Sweets">
                    <p>Sweets</p>
                </div>
                <div class="quiz-option choice" data-choice="Candles">
                    <img src="images/candles.jpg" alt="Candles">
                    <p>Candles</p>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
```

### Use Utility Classes
```html
<div class="text-center padding-small text-primary">Hello World!</div>
```

## File Structure
```
📁 CUSTOM-CSS-FRAMEWORK
│── 📁 scss
│   ├── _variables.scss  # Define colors, fonts, spacing
│   ├── _base.scss       # Basic HTML element styling
│   ├── _buttons.scss    # Button styling
│   ├── _animations.scss # Animations (heartbeat, hover effects)
│   ├── _utilities.scss  # Utility classes (margin, padding, text color)
│   ├── main.scss        # Imports all partials, compiles to main.css
│── 📁 css
│   ├── main.css         # Compiled CSS file
│   ├── main.css.map     # CSS Source Map
│── 📁 images            # Quiz images
│── index.html           # Sample HTML file using the framework
│── package.json         # For npm-based Sass compilation
│── README.md            # This file
```

## Customization
Modify `_variables.scss` to change:
- **Primary and Secondary Colors**
- **Font Family and Sizes**
- **Spacing Units**

Then recompile using:
```sh
npm run build
```

## License
MIT License © 2025
