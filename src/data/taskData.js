import axios from 'axios';

const loadTasks = () => axios.get('http://localhost:3003/tasks');

export default loadTasks;
