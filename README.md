# GG Dashboard

This project is a responsive React+TS demo that features user listing with search and sort functionalities, a sidebar for navigation, and a simple styling using Material-UI components. The application was built using CRA.

## Features

- **User Listing**: Displays a list of users fetched from the https://jsonplaceholder.typicode.com/users REST API.
  - **Search**: Allows users to search by name.
  - **Sort**: Users can sort by last name or email, with toggleable ascending/descending functionality.
- **Responsive Design**: The app adapts to different screen sizes (mobile, tablet, desktop).
  - The search bar is displayed on its own row on mobile.
- **Sidebar Navigation**: A sidebar provides navigation between pages (ie. Home, Users, Settings).
- **Material-UI Integration**: Material-UI is used for buttons, cards, and other UI elements

## Dependencies

### Core Dependencies

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.

### Other Dependencies

- **Material-UI**: A popular React UI framework for building beautiful applications.
- **Sass (SCSS)**: A CSS preprocessor that allows for more structured and modular styles.
- **react-router-dom**: A library for routing and navigation in React applications.
- **react-icons**: Provides icons (used in the sidebar) for navigation links.

## Installation

Run the following command to install all necessary packages:

```bash
npm install
```

## FAQ

**Q: Why does the app fetch the user's IP address?**

A: Just to demonstrate dashboard personalisation and the use of external APIs

**Q: How would you optimize the performance of the app?**

A: By preventing unnecessary re-renders by using React hooks such as `useMemo` and `useCallback`

**Q: What does "GG" stand for?**

A: Good game, Get Gas, or Grotesque Garments. Pick your poison

**Q: Why did you mix pre-built elements with raw elements?**

A: It was 3am in the morning

## Contributions

Lol no