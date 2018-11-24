import axios from 'axios';

import apiKeys from '../../db/apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getTasksFromDb = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/tasks.json`)
    .then((result) => {
      // problem:  result is an object and I need it to be an array
      const allTasksObject = result.data;
      const allTasksArray = [];
      if (allTasksObject != null) {
        Object.keys(allTasksObject).forEach((task) => {
          const newTask = allTasksObject[task];
          newTask.id = task;
          allTasksArray.push(newTask);
        });
      }
      resolve(allTasksArray);
    })
    .catch((err) => {
      reject(err);
    });
});

export default getTasksFromDb;
