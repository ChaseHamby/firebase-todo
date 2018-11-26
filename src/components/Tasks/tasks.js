// import 'bootstrap';
// import $ from 'jquery';
// import './tasks.scss';
// import tasksData from '../../data/taskData';
// import authHelpers from '../Auth/authHelpers';

// const inputField = () => {
//   const inputString = `
//     <div class="input-group m-3">
//     <div class="input-group-prepend">
//       <span class="input-group-text" id="inputGroup-sizing-default">Add Task</span>
//     </div>
//     <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
//     </div>
//   `;
//   $('#input').html(inputString);
// };

// const displayTasks = (tasks) => {
//   let newString = '';
//   tasks.forEach((task) => {
//     newString += `
//       <div id="task-card" class="col-sm-2">
//        <div class="saved-task" style="width: 18rem">
//         <h3 class="placeholder">"${task.task}"</h3>
//         <div class="placeholder">
//           <img class="card-img" src="${task.imageUrl}">
//         </div>
//         <div class="placeholder">
//           <h5 class="task-completed">"${task.isCompleted}"</h5>
//         </div>
//        </div>
//       </div>
//     `;
//   });
//   $('#tasks').append(newString);
// };

// const initializeTasks = () => {
//   const uid = authHelpers.getCurrentUid();
//   tasksData.getTasksfromDb(uid)
//     .then((data) => {
//       inputField();
//       // getSingleTask();
//       displayTasks(data);
//     }).catch((error) => {
//       console.error(error);
//     });
// };

// const taskButton = () => {
//   $('#navbar-button-tasks').on('click', () => {
//     initializeTasks();
//   });
// };

// export default { taskButton };
