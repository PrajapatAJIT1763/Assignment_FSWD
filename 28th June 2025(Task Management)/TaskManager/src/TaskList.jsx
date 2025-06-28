import React, { useState } from 'react';

function TaskList({ tasks, deleteTask, updateTask, changeStatus }) {
  const [editId, setEditId] = useState(null);
  const [editedTask, setEditedTask] = useState({});

  const startEditing = (task) => {
    setEditId(task.id);
    setEditedTask(task);
  };

  const handleEditChange = (e) => {
    setEditedTask({ ...editedTask, [e.target.name]: e.target.value });
  };

  const saveEdit = () => {
    updateTask(editedTask);
    setEditId(null);
  };

  return (
    <table border="1" cellPadding="10" style={{ width: '100%', marginTop: '20px', borderCollapse: 'collapse'}}>
      <thead>
        <tr style={{ color: 'goldenrod' }}>
          <th>Title</th>
          <th>Description</th>
          <th>Priority</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.length === 0 && (
          <tr>
            <td colSpan="5">No tasks available.</td>
          </tr>
        )}
        {tasks.map((task) => (
          <tr key={task.id}>
            <td>
              {editId === task.id ? (
                <input
                  name="title"
                  value={editedTask.title}
                  onChange={handleEditChange}
                />
              ) : (
                task.title
              )}
            </td>
            <td>
              {editId === task.id ? (
                <input
                  name="description"
                  value={editedTask.description}
                  onChange={handleEditChange}
                />
              ) : (
                task.description
              )}
            </td>
            <td>
              {editId === task.id ? (
                <select
                  name="priority"
                  value={editedTask.priority}
                  onChange={handleEditChange}
                >
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </select>
              ) : (
                task.priority
              )}
            </td>
            <td>
              <select
                value={task.status}
                onChange={(e) => changeStatus(task.id, e.target.value)}
              >
                <option>Pending</option>
                <option>In Progress</option>
                <option>Completed</option>
              </select>
            </td>
            <td>
              {editId === task.id ? (
                <>
                  <button onClick={saveEdit}>Save</button>
                  <button onClick={() => setEditId(null)}>Cancel</button>
                </>
              ) : (
                <>
                  <button onClick={() => startEditing(task)}>Edit</button>
                  <button onClick={() => deleteTask(task.id)} style={{marginLeft:'10px'}}>Delete</button>
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TaskList;
