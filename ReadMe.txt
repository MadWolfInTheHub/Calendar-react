This is a Calendar React project written by Krivenko Serhii a citizen of Ukraine.

This calendar is devided into 4 main Components: Header, Calendar, Modal and Popup,

Header includes create button which helps to create a new event and opens the Modal Form, also it has navigation buttons 
witch help user to swich between the weeks.

Calendar has been devided into 3 component, Navigation(to whos user specific date according to the day of the week),
Sidebar(which shows user 24 hours timeframe), and Week(whitch renders time slots according to the day and its spesific hour).

Week component has a Day component inside to render 7 slots each for a specific day of the week. 

Day Component by itself renders Clock component (which looks like a red line and shows the current time in the cell of current day),
and Hour Component that renders hour cell nad filters existing events according to its date and time. 

Inside of an Hour component you will find an Event Component that renders filtered Event in the hour cell.


Usability: User can create an event by clicking on the create button im Header component, as well as clicking on the spesific hour cell,
by clicking on them user will see the Modal component with already filled date and time inputs(filled automaticly according to the spesific time and date of the cell).
User can delete the event by clicking on it(there will be a Popup element with delete button).

All the app states are being stored in the App Components.

Functions that are responsible for the connection to server are being located in gateway folder tasksGateway file.

All the neccesary dependencies are in packege.json file.

Calendar app is written according ES6 satndarts and uses babel to have an abbility to run on outdated Browsers.

Calendar app was written under airbnb config for eslint. See some extra rulles in the eslintrc.js.

To run the app use command "npm start" in the terminal, to build it run "rmp run build" command.

Link to the Calendar project on Netify  https://mellow-hummingbird-13d60b.netlify.app/
Link to the project on Github https://github.com/MadWolfInTheHub/Calendar-react
For more detailed info contect me via email esotericksv@gmail.com 