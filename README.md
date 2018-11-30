# Firebase-ToDo

## Description
This is a to-do app with a list of tasks. When the user visits the app, the user can log in with Google authentication, and then create, edit, and delete tasks. This app makes full use of CRUD axios methods with Firebase.

## Screenshots
<img width="1376" alt="screen shot 2018-11-29 at 6 15 17 pm" src="https://user-images.githubusercontent.com/16019344/49260760-a6c86e80-f404-11e8-9a8c-f904b29b4963.png">
<img width="1374" alt="screen shot 2018-11-29 at 6 16 08 pm" src="https://user-images.githubusercontent.com/16019344/49260767-ab8d2280-f404-11e8-916b-72e7b69b7d18.png">
<img width="1376" alt="screen shot 2018-11-29 at 6 16 29 pm" src="https://user-images.githubusercontent.com/16019344/49260773-ae881300-f404-11e8-904d-8f86fdcd5ec7.png">

## Technologies Used
* Webpack
* Axios
* Firebase
* ES6 Modules
* SASS
* Bootstrap

## How to run this app
Note: To run this app you will need a firebase account and a new project.

### 1. Configure Firebase
1. Clone the repository to a local machine.
2. Run the following command in terminal to download the web dependencies: `npm install`
3. In the db folder, rename apiKeys.json.example to apiKeys.json.
4. In Firebase, create a new project.
5. Navigate to your config object, and copy the keys from Firebase into the apiKeys.json file.
6. Create a realtime databse in Firebase, and start in test mode.
7. Import the `./db/tasks.json` file into the database to seed data.

### 2. Serve up the app
* Run `npm start` in your terminal to initiate the app.