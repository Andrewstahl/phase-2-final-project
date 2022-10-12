# Stahl Stock Trader

This is the repository of my Phase 2 final project for Flatiron School.

*This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)*

## Goal

The goal of this project is to leverage my knowledge of JavaScript, React, client-side routing, server-manipulation, and APIs to create a single-page application.

## Getting Starting
Before you begin, you will want to run `npm install` to install the dependencies for this project and `npm run` to start the project.

## Project Overview
This site provides sample data for a stock portfolio. There are different links that will display data pertinent to aspects of the portfolio.

![](https://github.com/Andrewstahl/phase-2-final-project/blob/main/media/Stahl%20Stock%20Tracker.gif)

### **Home**
On the home page, the user will see all of the stocks currently in their portfolio. This will show some basic details about the stock, such as the name, ticker, number of shares held, stock type (domestic, international, crypto), and a favorite status. 

### **Favorites**
The "Favorites" page will show the user only the stocks that they have favorited. The favorite buttons are interactive and clicking on them will alter their favorite status on the server.

### **Allocations**
The "Allocations" page will allow the user to see a break-out of their allocations by investment type (domestic, international, cryptocurrency) within a pie chart.

### **New Order**
The "New Order" page will allow the user to either buy or sell stock. They have the choice to sell stock they have, buy more stock of what they already own, or buy a completely new stock. Depending on their choice, the page will only render applicable input fields for the user. The user will also be able to see the current stock price of that stock, which is aided through an API. After they make a decision, this will update the server and bring them back to the home page.

### **Stock Details**
There is a hidden "Stock Details" page that the user can navigate to if they append the stock ticker to the home URL. This will allow the user to see specific data around the stock.

## Outline of Responsibilities
Here's a quick outline of the responsibilities for this project:
- As the page loads, it will pull in the stocks from the db.json file and populate the sheet
  - The **Home**, **Favorites**, **Allocations**, and **New Order** tabs will all include this stock data
- If the user clicks on any one of the pages, it should render a specific component and route to it so that each component has it's own URL
- If the user clicks on the ♥ button next to any of the stocks, it will toggle the "Favorite" status on that stock. This will either remove or show it in the **Favorites** section and change the appearance of the button to appear either full or empty
- The **Allocations** page should show a graphic of the current break-out of allocations in your portfolio
- The **New Order** tab has the most logic to it and most interaction with the server and APIs
  - If the user selects ***Buy New***, it will prompt them to enter in the stock ticker and investment type (domestic, international, crypto) in the subsequent input fields
  - If the user selects ***Buy More***, it will allow them to select which stock they are looking to sell; this will pull in all of the available stock tickers from the database file into a subsequent input where the user selects which holding they are looking to sell
  - If the user selects ***Sell***, it will allow to select which stock they are looking to sell (same as ***Buy More***)
  - All three options will then allow the user to select the amount of shares they are looking to sell or purchase. If the user selects ***Sell***, there will also be a button for users to click called "Sell All" that will automatically put the total amount of shares that they have in this input box
  - Depending on their selection, the following fetch requests will be made to the server:
    - ***Buy New*** - POST request
    - ***Buy More*** - PATCH request
    - ***Sell*** - PATCH request if the user is selecting an amount under the total amount that they have or DELETE request if the user is selling everything they have
  - Upon submitting, the users request will be sent to the server and it will navigate back to the home screen, where the new holding will appear


## Potential Future Developments
- Since the API used only allows for a certain number of calls a minute/month, a good future development would be to refresh the stock prices on loading the home and allowing the user to manually pull in new prices
- I had the db.json file originally include datapoints around the holdings/purchases, such as the number of shares purchased, amount purchased, and date purchase. I had to simplify the scope due to the constraints of the API but this can definitely be added in the future
- Allow puchase of dollars instead of just number of shares (again, had to adjust functionality due to API constraints)
- Create a dynamic auto-complete dropdown if the user is buying new stock to show stock tickers (right now it's just a user input)
- Logic that prevents you from selling above the total amount you have in your portfolio
- Logic that prevents you from "Buying New" on a stock you already own

## Additional Posts
- [YouTube walkthrough of the project](https://youtu.be/S_coqhNVLxM)
- [Medium blog post about React Router crash course](https://medium.com/@andrewstahl96/react-router-dom-crash-course-9e61f4bfaaec)

## Resources
- [React-Router-Dom v6 Overview and Setup (React-Router-Dom Website)](https://reactrouter.com/docs/en/v6/getting-started/overview)
- [React Router Cheat Sheet (Codecademy)](https://www.codecademy.com/learn/learn-react-router/modules/learn-react-router/cheatsheet)