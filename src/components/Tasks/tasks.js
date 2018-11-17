import 'bootstrap';
import $ from 'jquery';
import './tasks.scss';
import getTasksfromDb from '../../data/taskData';

const displayTasks = (tasks) => {
  let newString = '';
  tasks.forEach((task) => {
    newString += `
      <div id="task-card" class="col-sm-2">
       <div class="saved-task" style="width: 18rem">
        <h3 class="placeholder">"${task.task}"</h3>
        <div class="placeholder">
          <img class="card-img" src="${task.imageUrl}">
        </div>
        <div class="placeholder">
          <h5 class="task-completed">"${task.isCompleted}"</h5>
        </div>
       </div>
      </div>
    `;
  });
  $('#tasks').append(newString);
};

const initializeTasks = () => {
  getTasksfromDb()
    .then((data) => {
      displayTasks(data);
    }).catch((error) => {
      console.error(error);
    });
};

const taskButton = () => {
  $('#navbar-button-tasks').on('click', () => {
    console.log('work?');
    initializeTasks();
  });
};

export default { taskButton };
