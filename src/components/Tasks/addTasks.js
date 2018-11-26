/* eslint-disable import/no-cycle */
import 'bootstrap';
import $ from 'jquery';
import './tasks.scss';
// import taskStuff from './tasks';
import taskData from '../../data/taskData';
import taskStuff from '../Auth/auth';

const formForTask = () => {
  const domString = `
  <div class="form-row">
  <div class="form-group">
    <label  for="form-task-id"></label>
    <input type="text" class="form-control" id="form-task-id" placeholder="TaskId">
    <label for="form-task-complete"></label>
    <input type="text" class="form-control" id="form-task-complete" placeholder="Task Complete true or false">
    <label for="form-task-name"></label>
    <input type="text" class="form-control" id="form-task-name" placeholder="Your Task">
  <button id="addButtons" class="btn btn-primary">Add Task</button>
  </div>
  </div>
  `;
  return domString;
};

const formForTask2 = (task) => {
  const domString = `
  <div class="form-row2">
  <div class="form-group2">
    <label  for="form-task-id"></label>
    <input type="text" class="form-control" value="${task.uid}" id="form-task-id" placeholder="Taskid">
    <label for="form-task-complete"></label>
    <input type="text" class="form-control" value="${task.isCompleted}" id="form-task-complete" placeholder="Task Complete true or false">
    <label for="form-task-name"></label>
    <input type="text" class="form-control" value="${task.task}" id="form-task-name" placeholder="Your Task">
  </div>
  </div>
  `;
  return domString;
};

const form2Task = () => {
  const taskFromForm = {
    uid: $('#form-task-id').val(),
    isCompleted: $('#form-task-complete').val(),
    task: $('#form-task-name').val(),
  };
  return taskFromForm;
};

const addNewTasks = () => {
  const newTask = form2Task();
  taskData.addNewTask(newTask)
    .then(() => {
      console.log('???', newTask);
      taskStuff.printTaskSecond();
    })
    .catch((error) => {
      console.error('error', error);
    });
};

const deleteTask = (idToDelete) => {
  taskData.deleteTask(idToDelete)
    .then(() => {
      console.log('Delete button is wokring');
      taskStuff.printTaskSecond();
    })
    .catch((error) => {
      console.error('error in deleting task', error);
    });
};

// SHOW THE FORM

const editTask = (idToEdit) => {
  taskData.getSingleTaskFromDb(idToEdit)
    .then((singleTask) => {
      let domString = '<h2>Edit Task</h2>';
      domString += formForTask2(singleTask);
      domString += `<button id="save-edit-task" data-single-edit-id=${singleTask.id}>Save Task</button>`;
      $('#add-edit-task').html(domString).show();
      $('.form-row').hide();
    })
    .catch((error) => {
      console.error('error in getting single for edit', error);
    });
};

// FUNC TO UPDATE
const updateTask = (taskId) => {
  const updatedTask = form2Task();
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
  $('body').on('click', '#addButtons', () => { addNewTasks(); });
  $('body').on('click', '#task-del-but', (e) => { const idNeeded = $(e.target).closest('.deleteThis'); const idNeeded2 = idNeeded[0].id; deleteTask(idNeeded2); });
  $('body').on('click', '#edit-task-but', (e) => { const idNeeded = $(e.target).closest('.editThis'); const idNeeded2 = idNeeded[0].id; editTask(idNeeded2); });
  $('body').on('click', '#save-edit-task', () => { const idNeeded = $('#save-edit-task').data('single-edit-id'); updateTask(idNeeded); });
};

export default { formForTask, formForTask2, newLocationFunction };
