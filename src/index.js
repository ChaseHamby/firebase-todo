import firebase from 'firebase/app';
import 'bootstrap';
import apiKeys from '../db/apiKeys.json';
import './index.scss';
import createNavbar from './components/Navbar/navbar';
import loginButton from './components/Auth/auth';
import showTasks from './components/Tasks/tasks';
import login from './components/Auth/authHelpers';
import addForm from './components/Tasks/addTasks';

const initializeApp = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  createNavbar();
  loginButton();
  login.checkLoginStatus();
  showTasks.taskButton();
  addForm();
};

initializeApp();
