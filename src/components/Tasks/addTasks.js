import 'bootstrap';
import $ from 'jquery';
import './tasks.scss';
import taskStuff from './tasks';

const addForm = () => {
  const emptyTask = {
    task: '',
  };
  let domString = '<h2>Add New Task</h2>';
  domString += taskStuff.inputField(emptyTask);
  domString += '<button id="add-task">Save New Task</button>';
  $('#add-edit-task').html(domString).show();
  $('#tasks').hide();
};

export default addForm;
