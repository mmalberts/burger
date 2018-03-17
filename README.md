# EAT-DA-BURGER

Welcome to the Eat-Da-Burger app! This app allows the user to input the names of burgers they would like to eat and eat them by clicking the devour button.

## User Instructions

* When you open the app, you should see three burgers available for eating. Click the devour button to move them to the "Burgers You Devoured" section. Once a burger is eaten, it cannot be uneaten.

* To add more burgers, simply type in the name of the burger you would like to add and click the "Add Burger" button. This burger should appear in the "Uneaten Burgers" section.

## Developers

* This app utilizes MySQL, Express, ORM, and Handlebars. Incoming data (new burger names) are stored in the database, and the "Devour It" buttons manipulate data in the database. The page is re-rendered every time data is added or manipulated to reflect the changes.