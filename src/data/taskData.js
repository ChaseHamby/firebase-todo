import axios from 'axios';

import apiKeys from '../../db/apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getTasksFromDb = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/tasks.json`)
    .then((result) => {
      // problem:  result is an object and I need it to be an array
      const tasksObject = result.data;
      const tasksArray = [];
      if (tasksObject != null) {
        Object.keys(tasksObject).forEach((task) => {
          const newTask = tasksObject[task];
          newTask.id = task;
          tasksArray.push(newTask);
        });
      }
      console.log('tasks?', tasksArray);
      resolve(tasksArray);
    })
    .catch((err) => {
      reject(err);
    });
});

const getSingleTaskFromDb = taskId => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/tasks/${taskId}.json`)
    .then((result) => {
      const singleTask = result.data;
      singleTask.id = taskId;
      resolve(singleTask);
    })
    .catch((error) => {
      reject(error);
    });
});

const deleteTask = taskId => axios.delete(`${baseUrl}/tasks/${taskId}.json`);

const addNewTask = taskObject => axios.post(`${baseUrl}/tasks.json`, JSON.stringify(taskObject));

const updateTask = (taskObject, taskId) => axios.put(`${baseUrl}/tasks/${taskId}.json`, JSON.stringify(taskObject));

export default {
  getTasksFromDb,
  getSingleTaskFromDb,
  deleteTask,
  addNewTask,
  updateTask,
};
