import 'bootstrap';
import $ from 'jquery';
import './tasks.scss';
import getTasksfromDb from '../../data/taskData';

const displayTasks = (arrayOfTasks) => {
  let newString = '';
  arrayOfTasks.forEach((task) => {
    newString += `
      <div class="col-sm-2">
       <div class="saved-character" style="width: 18rem">
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
      displayTasks(data.data);
    }).catch((error) => {
      console.error(error);
    });
};

export default { initializeTasks };
