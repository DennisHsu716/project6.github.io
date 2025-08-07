# Exchange Rate Calculator
[Project Page](https://dennishsu716.github.io/project6.github.io/project5/project5.html)
## Summary
Using HTML in conjunction with a real-time exchange rate API as the foundation, develop an intuitive and practical currency query and conversion application. By leveraging the ExchangeRate-API, implement real-time exchange rate updates and conversion functions for multiple currencies, enabling users to quickly access accurate exchange rate information.
The implementation of the project is divided into three main components: page structure design, data interaction, and functionality expansion. First, use HTML to create the basic structure of the page, incorporating simple and intuitive input fields, a dropdown menu for selecting currencies, and a results display area. Enhance the page's aesthetic appeal with CSS to ensure a user-friendly experience and an attractive interface. Secondly, JavaScript plays a crucial role in this project, handling requests to the API and processing the returned JSON data. After the user inputs an amount and selects a currency, the system promptly requests the latest data from the exchange rate API, performs the necessary calculations, and updates the results area to provide immediate feedback.
## Environment
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
## Usage
![image](https://github.com/DennisHsu716/project6.github.io/blob/main/image/1.png)

In this exchange rate, we have support more than fifty country for use  

![image](https://github.com/DennisHsu716/project6.github.io/blob/main/image/3.png)

## About the future plans
In the future, some real-time chart tickets can be added to add some real-time K-line charts to make it easier for users to see, or it can be combined with stocks and virtual currencies so that users can see all the information they want to see on a single web page.


# 💱 Exchange Rate Calculator
[Project Page](https://dennishsu716.github.io/project6.github.io/project5/project5.html)   

A real-time, multi-currency exchange rate calculator built using HTML, CSS, and JavaScript. This project leverages the [ExchangeRate-API](https://open.exchangerate-api.com/v6/latest) to deliver up-to-date exchange rates across 50+ countries, providing fast and accurate currency conversion for users in a clean and responsive web interface.

---

## 📌 Summary
This web application enables users to:
- Enter an amount
- Select a base and target currency
- Instantly convert using real-time exchange rate data from the ExchangeRate-API

The application is structured into three core components:
1. **Page Structure (HTML)** – Includes input fields, currency dropdowns, and a results display section.
2. **Styling (CSS)** – Delivers a clean, responsive, and user-friendly interface.
3. **Functionality (JavaScript)** – Handles API calls, processes JSON data, performs calculations, and dynamically updates the result.

---

## 🌐 Environment

- **Frontend**: HTML5, CSS3, JavaScript ES6+
- **API**: [ExchangeRate-API](https://open.exchangerate-api.com/v6/latest)
- **Icons**: Font Awesome 6.5.2 CDN  
  ```html
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">  

---

## 📸 Usage Screenshots 
| Feature                               | Preview                        |
| ------------------------------------- | ------------------------------ |
| User selects currency & inputs amount | ![image](https://github.com/DennisHsu716/project6.github.io/blob/main/image/1.png) |
| More than 50 supported currencies     | ![image](https://github.com/DennisHsu716/project6.github.io/blob/main/image/3.png)|  

## 🧠 Features
* Real-time exchange rates using public API
* Supports over 50 currencies globally
* Dynamic UI updates without reloading
* Responsive layout for desktop and mobile
* Clean error-handling for API failure or invalid inputs

## 🛣️ Future Plans
* 📊 Add real-time K-line (candlestick) charts to visualize currency trends
* 🔁 Combine with stock prices and cryptocurrency for an all-in-one financial dashboard
* 📱 Mobile-first UI redesign with tabbed views for currencies, charts, and watchlists
* 💾 Add localStorage support for user preferences

## 🧩 Folder Structure
Exchange-Rate-Calculator/  
├── index.html  
├── style.css  
├── script.js  
├── images/  
│   ├── currency_input.jpg  
│   ├── currency_list.jpg  
│   └── ...  
└──  README.md   

## 🚀 How to Run
1. Clone the repo:
``` git clone https://github.com/yourusername/exchange-rate-calculator.git ```
2. Open ```index.html``` in your browser.
3. Make sure you have internet access to fetch API data.
