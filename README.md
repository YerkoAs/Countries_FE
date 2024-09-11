# Countries Frontend Application

This project is a frontend for viewing countries and their information, built using React. It allows users to search for countries, view population data, and explore neighboring countries with charts and additional details. It fetches country data from a backend API.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Starting the Development Server](#starting-the-development-server)
- [Running the Build](#running-the-build)
- [Environment Variables](#environment-variables)
- [Testing the Application](#testing-the-application)
- [Project Structure](#project-structure)
- [Usage](#usage)
  ## Prerequisites

Ensure you have the following installed on your local machine:

- **Node.js** (version 18 or higher recommended)
- **npm** or **yarn** (for managing dependencies)

## Installation

Follow these steps to set up and run the project locally:

1. Clone the repository:

    ```bash
    git clone https://https://github.com/YerkoAs/Countries_FE.git
    ```
2. Navigate to the project directory:

    ```bash
    cd countries-fe
    ```
3. Install the dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```
    ## Starting the Development Server

To run the application in development mode:

```bash
npm run dev
```
The server will start at [http://localhost:5173](http://localhost:5173) by default. You can access the application via your browser at this address.
## Running the Build

To create a production build of the project:

```bash
npm run build
```
## Environment Variables

The frontend requires the backend API URL to fetch data. Make sure you set the correct base URL in the `useFetch` hook located in the `hooks/useFetch.js` file.

By default, the `baseUrl` is set to:

```js
const baseUrl = 'http://localhost:8080/api/v1';
```
You can update this based on the backend server location.

## Testing the Application

To test the responsiveness and basic functionality of the app, simply visit [http://localhost:5173](http://localhost:5173) in various screen sizes or use your browser's dev tools to simulate mobile screens.

## Project Structure

Here is a brief overview of the project's file structure:

```bash
countries-fe/
├── src/
│   ├── components/                # Contains reusable components
│   │   ├── countryInfo/           # Components for the CountryInfo page (Charts, Border)
│   │   └── homePage/              # Components for the HomePage (CountryList)
│   ├── hooks/                     # Contains custom hooks (e.g., useFetch)
│   ├── pages/                     # Application pages (HomePage, CountryInfo)
│   └── styles/                    # CSS files for styling components
├── public/                        # Public assets (index.html, etc.)
├── .eslintrc.js                   # ESLint configuration
├── package.json                   # Project dependencies and scripts
└── vite.config.js                 # Vite configuration for development
```
## Usage

### Searching for Countries

On the homepage, you can search for countries using the search bar. Type the name of the country and the results will filter as you type.

### Viewing Country Information

Click on any country from the list to see more details about it, including the flag, population data (displayed in charts), and neighboring countries.

### Neighboring Countries

On the country information page, you'll see a list of neighboring countries. Clicking on any neighboring country will update the displayed data to show information about that specific country.


    
