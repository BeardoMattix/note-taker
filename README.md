

# <p align="center">Welcome to my Note Taker!</p> 
## <p align="center">A Heroku  application for taking notes.</p>

## Link to Deployed Site
[Note Taker](https://dry-garden-33434.herokuapp.com/)

## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Challenges](#challenges)
  * [Usage](#usage)
  * [License](#license)
  * [Questions](#questions)

## Description

This application allows the user to create and edit notes. It was built with JavaScript, Node.js, Express, and Heroku. When the user navigates to the application, they see a landing page with a "Get Started" button. From there, they can navigate to the note taking page and start creating notes. Only notes with a title and body can be saved. Once a note is created and saved, the user can click on it in the notes list to reopen and edit that note. 
 
## Technologies
* HTML
* CSS
* JavaScript
* Node.js
* Express
* UUID V4
* Heroku

## Functionality

This application uses Node.js, Express, and Heroku to connect the front-end and back end functionality. Express creates and maintains the database where all new notes are saved, updated, and deleted. The application is hosted through Heroku. The user clicks the "Get Started" button on the landing page, is taken to the note taking page, and can start creating notes by adding a title and body text to their note. Once a new note has a title and a body, a save icon appears and the note can be added to the notes list on the left hand side of the page. Users can delete notes that they no longer need by clicking on the trash can icon. 

![Screen Shot 2021-08-22 at 1 30 35 PM](https://user-images.githubusercontent.com/82903201/130364789-2c923bc9-3b81-4952-b278-43d73e2ec87a.png)
![Screen Shot 2021-08-22 at 1 30 24 PM](https://user-images.githubusercontent.com/82903201/130364791-7331b737-c8d6-4e64-904f-cbcadb58b41a.png)

## Demo
![Note-taker-demo](https://user-images.githubusercontent.com/82903201/130364783-39f483b9-d020-42bb-9e8f-4cab57e57dcb.gif)

## Challenges

* Creating the correct GET and POST requests for the database.
* Getting the saved notes to render in the right hand side of the page upon click.

## Usage
* Use this app to keep track of daily tasks.
* Use the code to understand the basics of Express routes.
* Use the code to understand how to create GET, POST, and DELETE requests. 

## Installation
* Install Node.js
* Enter 'npm init' in command line
* Enter 'npm i' in the command line
* Enter 'node server.js' in the command line

## Future Development
* Improve the overall appearance of the html page.
* Make the site more dynamic and allow users to share notes with other users and devices.

## Questions
* Take a look at my GitHub profile to see other projects: 
[My GitHub Profile](https://github.com/BeardoMattix)
* If you have any questions, please reach out via email: christopher.mattix@gmail.com

## License
[MIT](https://opensource.org/licenses/MIT)

![badge](https://img.shields.io/static/v1?label=License&message=MIT&color=success)