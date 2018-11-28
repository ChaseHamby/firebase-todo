/* eslint-disable import/no-cycle */
import 'bootstrap';
import $ from 'jquery';
import './tasks.scss';
// import taskStuff from './tasks';
import taskData from '../../data/taskData';
import taskStuff from '../Auth/auth';

const formForTask = (task) => {
  const domString = `
  <div class="form-row2 m-5">
  <div class="form-group2">
    <label  for="form-task-id"></label>
    <input type="text" class="form-control" value="${task.uid}" id="form-task-id" placeholder="Task Id">
    <label for="form-task-complete"></label>
    <input type="text" class="form-control" value="${task.isCompleted}" id="form-task-complete" placeholder="Is the task complete? True or False!">
    <label for="form-task-name"></label>
    <input type="text" class="form-control" value="${task.task}" id="form-task-name" placeholder="What is the task?">
  </div>
  </div>
  `;
  return domString;
};

const taskForm = () => {
  const taskFromForm = {
    uid: $('#form-task-id').val(),
    isCompleted: $('#form-task-complete').val(),
    task: $('#form-task-name').val(),
  };
  return taskFromForm;
};

const buildAddForm = () => {
  const emptyTask = {
    task: '',
    isCompleted: '',
    uid: '',
  };
  let domString = '<h3 class="pt-5">Add New Task</h3>';
  domString += formForTask(emptyTask);
  domString += '<button id="add-task">Save New Task</button>';
  $('#add-edit-task').html(domString).show();
  $('#tasks').hide();
};

const plusNewTask = () => {
  const newTask = taskForm();
  taskData.addNewTask(newTask)
    .then(() => {
      $('#add-edit-task').html('').hide();
      $('#tasks').show();
      taskStuff.printSingleTask();
    })
    .catch((error) => {
      console.error('error', error);
    });
};

const deleteTask = (idToDelete) => {
  taskData.deleteTask(idToDelete)
    .then(() => {
      taskStuff.printTaskSecond();
    })
    .catch((error) => {
      console.error('error in deleting task', error);
    });
};

// Displays the form

const editTask = (idToEdit) => {
  taskData.getSingleTaskFromDb(idToEdit)
    .then((singleTask) => {
      let domString = '<h2>Edit Task</h2>';
      domString += formForTask(singleTask);
      domString += `<button id="save-edit-task" data-single-edit-id=${singleTask.id}>Save Task</button>`;
      $('#add-edit-task').html(domString).show();
      $('.form-row').hide();
    })
    .catch((error) => {
      console.error('error in getting single for edit', error);
    });
};

const updateTask = (taskId) => {
  const updatedTask = taskForm();
  taskData.updateTask(updatedTask, taskId)
    .then(() => {
      $('#add-edit-task').html('').hide();
      $('.form-row').show();
      taskStuff.printTaskSecond();
    })
    .catch((error) => {
      console.error('error', error);
    });
};

const newLocationFunction = () => {
  // $('body').on('click', '#addButtons', () => { addNewTasks(); });
  $('body').on('click', '#add-task', plusNewTask); // Adds task
  $('body').on('click', '#task-del-but', (e) => { const idNeeded = $(e.target).closest('.deleteThis'); const idNeeded2 = idNeeded[0].id; deleteTask(idNeeded2); });
  $('body').on('click', '#edit-task-but', (e) => { const idNeeded = $(e.target).closest('.editThis'); const idNeeded2 = idNeeded[0].id; editTask(idNeeded2); });
  $('body').on('click', '#save-edit-task', () => { const idNeeded = $('#save-edit-task').data('single-edit-id'); updateTask(idNeeded); });
};

export default { newLocationFunction, buildAddForm };
