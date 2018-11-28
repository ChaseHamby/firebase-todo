/* eslint-disable import/no-cycle */
import $ from 'jquery';
import firebase from 'firebase/app';
import 'firebase/auth';
import googleImage from './google.png';
import './auth.scss';
import taskData from '../../data/taskData';
import forms from '../Tasks/addTasks';
import checkLoginStatus from './authHelpers';

const printTask = (dataArray) => {
  let domString = '';
  dataArray.forEach((data) => {
    domString += `
    <div id="${data.id}"class="card m-5 deleteThis editThis">
    <div class="card-body">
        <p class="card-text">${data.task}</p>
        <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Completed</label>
            <button id="task-del-but"type="button" class="btn btn-danger">X</button>
            <button id ="edit-task-but" type="button" class="btn">EDIT</button>
            </div>
    </div>
</div>
    `;
  });
  $('#tasks').html(domString);
};

const printTaskSecond = () => {
  taskData.getTasksFromDb()
    .then((data) => {
      printTask(data);
    })
    .catch((error) => {
      console.error('error in getting one friend', error);
    });
};

const printSingleTask = () => {
  taskData.getTasksFromDb()
    .then((data) => {
      printTask(data);
    })
    .catch((error) => {
      console.error('error in getting one friend', error);
    });
};

const showTasks = () => {
  taskData.getTasksFromDb()
    .then((data) => {
      printTask(data);
      forms.newLocationFunction();
    })
    .catch((error) => {
      console.error('error in getting one friend', error);
    });
};

const loginButton = () => {
  const domString = `
  <button id="google-auth" class="btn btn-secondary">
  <img src="${googleImage}"/>
  </button>
  `;
  $('#auth').html(domString);
  $('#google-auth').on('click', () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
    checkLoginStatus();
    showTasks();
  });
};

export default {
  printTask,
  printTaskSecond,
  printSingleTask,
  loginButton,
  showTasks,
};
