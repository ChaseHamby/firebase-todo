import firebase from 'firebase/app';
import 'bootstrap';
import apiKeys from '../db/apiKeys.json';
import './index.scss';
import createNavbar from './components/Navbar/navbar';
import loginButton from './components/Auth/auth';
import showTasks from './components/Tasks/tasks';
import checkLoginStatus from './components/Auth/authHelpers';

const initializeApp = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  createNavbar();
  loginButton();
  checkLoginStatus();
  showTasks.taskButton();
};

initializeApp();
