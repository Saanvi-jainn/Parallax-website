# 🚀 Parallax Website Project Documentation

## 📑 **1. Project Overview**
This project implements a **parallax scrolling effect** combined with **scroll-triggered animations**. Background layers and content sections move at different speeds as the user scrolls, creating an engaging visual experience.

---

## 📝 **2. Project Structure**

### **HTML:** Content & Structure
- **Parallax Banner Section:**
   - Multiple background images (`.bg-1`, `.bg-2`, etc.) create a depth effect.
   - A central `<h1>` title (`Parallax`) is displayed.
- **Intro Section (`.tab.intro`):**
   - Includes a heading, image, description, and button.
   - Scroll-triggered animations (`.animation-show`).
- **Library Section (`.tab.library`):**
   - Grid layout displaying images with captions.
   - Scroll-triggered animations.

### **CSS:** Styling & Animation
- **Parallax Effect:**
   - Backgrounds move independently with `translateY()` based on scroll.
- **Animation (`.animation-show`):**
   - Elements start with `translateY(50px)` and `opacity: 0`.
   - Transition to their final state when `.active` is applied.
- **Responsive Design:**
   - Adjusts grid layout and text sizes for smaller screens.

### **JavaScript:** Interaction & Animation Trigger
- **Parallax Background Movement:**
   - Layers (`.bg`) move at varying speeds using `translateY()`.
- **Scroll-triggered Animations:**
   - Adds `.active` to `.tab` sections when they enter the viewport.
   - Triggers CSS transitions on `.animation-show` elements.

---

## ⚙️ **3. How It Works**
1. **Parallax Scrolling:**
   - JavaScript calculates `scrollY` to move `.bg` layers and the banner title.
2. **Animation Trigger:**
   - Checks if `.tab` sections are within the viewport.
   - Adds `.active` class to enable animations.
3. **Smooth Animations:**
   - CSS transitions handle fade-in and slide-up effects.

---

## 🌟 **4. Key Features**
- **Parallax Scrolling:** Smooth background layer movement.
- **Scroll-triggered Animations:** Content animates into view.
- **Responsive Design:** Works on various screen sizes.

---

## 📊 **5. Workflow Summary**
1. Open the webpage.
2. Scroll down:
   - Backgrounds move at different speeds.
   - Content fades and slides into view as sections enter the viewport.
