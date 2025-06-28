import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [task, setTask] = useState({
    title: '',
    description: '',
    priority: 'Low',
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.title.trim()) return;
    addTask(task);
    setTask({ title: '', description: '', priority: 'Low' });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        name="title"
        placeholder="Task Title"
        value={task.title}
        onChange={handleChange}
        required
        style={{ width: '97.5%', padding: '5px', borderRadius: '5px', backgroundColor: '#f0f0f0',color: 'blue' }}
      />
      <br />
      <textarea
        name="description"
        placeholder="Description"
        value={task.description}
        onChange={handleChange}
        style={{marginTop: '10px', width: '98.5%', height: '60px',backgroundColor: '#f0f0f0', borderRadius: '5px',color: 'blue' }}
      />
      <br />
      <select name="priority" value={task.priority} onChange={handleChange} style={{marginTop: '10px', width: '100%', padding: '5px', borderRadius: '5px'}}>
        <option style={{color:'pink'}}>Low</option>
        <option style={{color:'yellowgreen'}}>Medium</option>
        <option style={{color:'brown'}}>High</option>
      </select>
      <br />
      <button type="submit" style={{marginTop:'10px',color:'goldenrod'}}>Add Task</button>
    </form>
  );
}

export default TaskForm;
