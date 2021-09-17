import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { useParams, useHistory } from 'react-router-dom';
const TaskForm = () => {
  const { addTask, tasks, updateTask } = useContext(GlobalContext);
  const history = useHistory();
  const params = useParams();
  const [task, setTask] = useState({
    id: '',
    title: '',
    description: '',
  });

  const handlechange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.id) {
      updateTask(task);
    } else {
      addTask(task);
    }

    history.push('/');
  };

  useEffect(() => {
    const taskFound = tasks.find((task) => task.id === params.id);

    if (taskFound) {
      setTask(taskFound);
    }
  }, [params.id, tasks]);

  return (
    <div className="flex justify-center items-center h-3/4">
      <form onSubmit={handleSubmit} className="bg-gray-900 p-10">
        <h2 className="mb-7 text-3x1">
          {task.id ? 'Editing a Task' : 'Creating a Task'}
        </h2>
        <div className="mb-5">
          <input
            type="text"
            name="title"
            placeholder="write a Title"
            onChange={handlechange}
            value={task.title}
            className="py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full"
          />
          <textarea
            className="py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full mt-7"
            name="description"
            placeholder="Write a Description"
            onChange={handlechange}
            value={task.description}
            rows="2"
          ></textarea>
        </div>
        <button className="bg-green-700 w-full hover:bg-green-300 py-2 px-4 mt-5">
          {task.id ? 'Edit ' : 'Create'} Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
