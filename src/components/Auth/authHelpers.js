import firebase from 'firebase/app';
import 'firebase/auth';
import $ from 'jquery';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      $('#tasks').show();
      $('add-edit-task').hide();
      $('#auth').hide();
      $('#navbar-button-auth').hide();
      $('#navbar-button-tasks').show();
      $('#navbar-button-logout').show();
      $('#extra').show();
    } else {
      $('add-edit-task').hide();
      $('#tasks').hide();
      $('#auth').show();
      $('#navbar-button-auth').show();
      $('#navbar-button-tasks').hide();
      $('#navbar-button-logout').hide();
      $('#google-auth').hide();
      $('#extra').hide();
    }
  });
};

export default checkLoginStatus;
