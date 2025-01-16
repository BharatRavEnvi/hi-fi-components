# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

** structure of projects files **
src/
├── assets/ # Static assets (images, icons, etc.)
├── components/ # Reusable UI components (common components)
│ ├── shared/ # Shared components that can be used globally
│ ├── layout/ # Layout-related components (e.g., header, footer)
│ ├── ui/ # Small UI elements like buttons, inputs, cards, etc.
│ ├── forms/ # Reusable form components (inputs, selectors, etc.)
│ ├── notifications/ # Shared notification-related components
│ ├── modals/ # Reusable modal/dialog components
│ ├── loaders/ # Loader and spinner components
│ └── (more categories...) # Additional shared components as needed
├── pages/ # Pages or Views of the app (these usually include page-specific components)
│ ├── Home/ # Components specific to the Home page
│ ├── About/ # Components specific to the About page
│ └── (other pages...) # More pages
├── utils/ # Utility functions, helpers, or hooks
└── (other folders...) # Additional project folders (e.g., services, styles, etc.)
