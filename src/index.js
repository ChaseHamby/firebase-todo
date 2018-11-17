import firebase from 'firebase/app';
import 'bootstrap';
import apiKeys from '../db/apiKeys.json';
import './index.scss';
import createNavbar from './components/Navbar/navbar';
import loginButton from './components/Auth/auth';
import showTasks from './components/Tasks/tasks';
import getTasksFromDb from './data/taskData';

const initializeApp = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  createNavbar();
  loginButton();
  showTasks.taskButton();
  // showTasks.initializeTasks();
  getTasksFromDb();
};

initializeApp();
