# Stahl Stock Trader

This is the repository of my Phase 1 final project for Flatiron School.

*This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)*

## Goal

The goal of this project is to leverage my knowledge of JavaScript, React, client-side routing, server-manipulation, and APIs to create a single-page application.

## Project Overview
This site prompts provides sample data for a stock portfolio. 

### `Home`
On the home page, the user will see all of the stocks currently in their portfolio. This will show some basic details about the stock, such as the name, ticker, number of shares held, stock type (domestic, international, cryptocurrency), and a favorite status. 

### `Favorites`
The "Favorites" page will show the user only the stocks that they have favorited. The favorite buttons are interactive and clicking on them will alter their favorite status on the server.

### `Allocations`
The "Allocations" page will allow the user to see a break-out of their allocations by investment type (domestic, international, cryptocurrency) within a pie chart.

### `New Order`
The "New Order" page will allow the user to either buy or sell stock. They have the choice to sell stock they have, buy more stock of what they already own, or buy a completely new stock. Depending on their choice, the page will only render applicable input fields for the user. The user will also be able to see the current stock price of that stock, which is aided through an API. After they make a decision, this will update the server and bring them back to the home page.

## Outline of Responsibilities
Here's a quick outline of the responsibilities for this project, henceforth known as the SHP (Stahl Holiday Picker):
- As the page loads, it will pull in the stocks from the db.json file and populate the sheet
  - The `Home`, `Favorites`, `Allocations`, and `New Order` tabs will all include this stock data
- If the user clicks on any one of the pages, it should render a specific component and route to it so that each component has it's own URL
- If the user clicks on the ♥ button next to any of the stocks, it will toggle the "Favorite" status on that stock. This will either remove or show it in the "Favorites" section and change the appearance of the button to appear either full or empty


## Potential Future Developments
- Since the API used only allows for a certain number of calls a minute/month, a good future development would be to refresh the stock prices on loading the home and allowing the user to manually pull in new prices
- I had the db.json file originally include datapoints around the holdings/purchases, such as the number of shares purchased, amount purchased, and date purchase. I had to simplify the scope due to the constraints of the API but this can definitely be added in the future
- Allow puchase of dollars instead of just number of shares (again, had to adjust functionality due to API constraints)



### Extras
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
