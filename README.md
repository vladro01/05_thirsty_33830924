# 05_thirsty_33830924

This project is a **Node.js** and **Express.js** web application using **EJS templates** for dynamic content rendering.  
Its development is part of the coursework **(05_thirsty_33830924 – The Thirsty Student Shop)** which demonstrates building a modular Express app with routes, views, and forms.

## Features
- Dynamic EJS templates for reusable HTML views  
- Multiple pages: Home, About, Search, Register, and Survey  
- Form handling with POST and GET routes  
- Basic server-side rendering of user input  
- Public folder for static assets like CSS styling
- Clean file structure with modular router setup  

## Technologies Used
- Node.js - runtime environment  
- Express.js - lightweight web framework  
- EJS - templating engine for dynamic views  
- npm - package manager  
- VS Code - development environment  
- Git & GitHub - version control  

## Installation & Setup

## Cloning the repository
```bash
git clone https://github.com/vladro01 05_thirsty_33830924.git
cd 05_thirsty_33830924
```
## How do you install dependecies?
```bash
npm install
npm install express
npm install ejs 
```
## How do you run the app?
```bash
node index.js
```
# Example route usage
| Route            | Symbol              | Example Output|
|------------------|---------------------|-----------------------------------------------------------|
| Homepage         | `/`                 | Welcome to The Thirsty Student Shop                     |
| About            | `/about`            | Information about The Thirsty Student Shop              |
| Search           | `/search`           | Search for a drink by name  and category                 |
| Search Result    | `/search_result`    | You searched for "Beer" in "Soft Drinks"               |
| Register         | `/register`         | Registration form for first name, last name, and email |
| Registered       | `/registered`       | Hello Vlad! You are now registered successfully with the details appended        |
| Survey           | `/survey`           | Feedback form about your shopping experience           |
| Survey Results   | `/survey_results`   | Thank you for completing the survey and your answers!                   |