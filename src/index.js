import firebase from 'firebase/app';
import 'bootstrap';
import apiKeys from '../db/apiKeys.json';
import './index.scss';
import createNavbar from './components/Navbar/navbar';
import authStuff from './components/Auth/auth';
import showTasks from './components/Tasks/addTasks';

const initializeApp = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  createNavbar();
  authStuff.loginButton();
  authStuff.showTasks();
  showTasks.buildAddForm();
};

initializeApp();
