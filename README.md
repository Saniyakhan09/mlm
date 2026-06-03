# React + Tailwind CSS Project

A modern React application with Tailwind CSS styling, built with Vite for fast development and optimized production builds.

## Features

- ⚡ **Vite** - Lightning-fast build tool and dev server
- ⚛️ **React 18** - Latest React version with hooks
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 📦 **PostCSS** - CSS transformation with Autoprefixer
- 🔥 **Hot Module Replacement (HMR)** - Instant updates during development

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The app will open automatically at `http://localhost:5173`

### Build

Create an optimized production build:

```bash
npm run build
```

### Preview

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
├── src/
│   ├── App.jsx          # Main React component
│   ├── App.css          # Component styles
│   ├── main.jsx         # React entry point
│   └── index.css        # Global Tailwind styles
├── public/              # Static assets
├── index.html           # HTML template
├── package.json         # Project dependencies
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
└── postcss.config.js    # PostCSS configuration
```

## Customization

### Adding New Components

Create a new component in `src/components/`:

```jsx
// src/components/Button.jsx
export default function Button({ children, ...props }) {
  return (
    <button
      className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
      {...props}
    >
      {children}
    </button>
  );
}
```

### Tailwind CSS

Customize Tailwind in `tailwind.config.js`:

```js
export default {
  theme: {
    extend: {
      colors: {
        primary: "#your-color",
      },
    },
  },
};
```

## Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev)

## License

MIT
