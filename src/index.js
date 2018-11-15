import firebase from 'firebase/app';
import 'bootstrap';
import apiKeys from '../db/apiKeys.json';
import './index.scss';
import createNavbar from './components/Navbar/navbar';

const initializeApp = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  createNavbar();
};

initializeApp();
