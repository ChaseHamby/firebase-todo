import $ from 'jquery';
import firebase from 'firebase/app';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      $('#tasks').show();
      $('#auth').hide();
      $('#navbar-button-auth').hide();
      $('#navbar-button-tasks').show();
      $('#navbar-button-logout').show();
    } else {
      $('#tasks').hide();
      $('#auth').show();
      $('#navbar-button-auth').show();
      $('#navbar-button-tasks').hide();
      $('#navbar-button-logout').hide();
    }
  });
};

const getCurrentUid = () => firebase.auth().currentUser.uid;

export default { checkLoginStatus, getCurrentUid };
