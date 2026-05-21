# Getting Started

::: warning TODO
Add a note on data layer dependency here (and how to configure its endpoint)
:::

This guide will help you get Valeros up and running on your local machine.

## Prerequisites

- Node.js 18+ and npm
- Basic understanding of JSON configuration files

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/view-a-LOD/Valeros-NDE.git
cd Valeros-NDE
npm install
```

## Running the Application

Start the development server:

```bash
npm start
```

Navigate to `http://localhost:4200/` to see the application in action.

## Project Structure

```
Valeros-NDE/
├── src/
│   ├── app/
│   │   ├── features/
│   │   │   ├── search/        # Search functionality
│   │   │   └── details/       # Detail page
│   │   └── shared/
│   │       └── widgets/       # Widget library
│   │           └── library/   # Built-in widgets
│   └── ...
└── ...
```

## Configuration Files

::: warning TODO
Centralize config for better dev experience?
:::

Widget configurations are located in:

- `src/app/features/search/config/widgets/` - Widgets for search results
- `src/app/features/details/config/widgets.config.ts` - Widgets for detail pages

View configurations are in:

- `src/app/features/search/config/views.config.ts` - View layouts

## Next Steps

- Learn about the [widget system](/guide/widget-system)
- Explore [built-in widgets](/guide/built-in-widgets)
- Configure [view layouts](/guide/view-configurations)
