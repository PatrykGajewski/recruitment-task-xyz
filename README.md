# Recruitment Task XYZ

A React-based web application built with Vite, featuring a sortable table component for displaying user accounts. This project demonstrates component reusability, TypeScript usage, and unit testing.

## What is inside

- **Sortable Table Component**: Displays user data with support for ascending/descending sorting on columns.
- **TypeScript Support**: Fully typed components and utilities for better code reliability.
- **Unit Tests**: Comprehensive tests for sorting utilities using Vitest.
- **Responsive Design**: Basic styling for a clean user interface.

## Project Structure
``` recruitment-task-xyz/
├── vite-project/
│ ├── src/
│ │ ├── components/
│ │ │ └── Table/
│ │ │ ├── Table.tsx # Main table component
│ │ │ └── types.ts
│ │ ├── hooks/ # Custom React hooks
│ │ ├── pages/
│ │ │ └── user-accounts-list/
│ │ │ ├── utils.ts # Sorting utility functions
│ │ │ └── utils.test.ts # Unit tests for utils
│ │ ├── services/ # API services and data fetching logic
│ │ └── main.tsx # App entry point
│ ├── vite.config.ts # Vite configuration
│ ├── package.json # Dependencies and scripts
│ └── index.html # HTML template
└── README.md # This file
```
## Installation
1. Clone the repository:
    - git clone https://github.com/your-username/recruitment-task-xyz.git
    - cd recruitment-task-xyz/vite-project

2. Install dependencies:
```npm install```

## Running the Project

1. Start the development server:
```npm run dev```

2. Open your browser and navigate to `http://localhost:5173` to view the application ( by default if the specific port is free ).

## Running Tests

Tests are written using Vitest. To run them:
```npm run test```

## Technologies Used
- React: UI library
- Vite: Build tool and dev server
- TypeScript: Type safety
- Vitest: Testing framework
- jsdom: Test environment for DOM simulation
- CSS3: Styling purpose

## Contributing
Feel free to submit issues or pull requests for improvements. 