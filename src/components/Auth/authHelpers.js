import firebase from 'firebase/app';
import 'firebase/auth';
import $ from 'jquery';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      $('#tasks').show();
      $('#auth').hide();
      $('#navbar-button-auth').hide();
      $('#navbar-button-tasks').show();
      $('#navbar-button-friends').show();
      $('#navbar-button-logout').show();
      $('#extra').show();
    } else {
      $('#friends').hide();
      $('#tasks').hide();
      $('#auth').show();
      $('#navbar-button-auth').show();
      $('#navbar-button-tasks').hide();
      $('#navbar-button-friends').hide();
      $('#navbar-button-logout').hide();
      $('#google-auth').hide();
      $('#extra').hide();
    }
  });
};

export default checkLoginStatus;
