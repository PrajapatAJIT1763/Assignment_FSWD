import React, { useState } from 'react';

function PackingList() {
  const [items, setItems] = useState([
    { id: 1, name: 'Toothbrush', isPacked: false },
  ]);
  const [newItem, setNewItem] = useState('');

  // Add item
  const handleAddItem = () => {
    if (newItem.trim() === '') return;
    const newItemObj = {
      id: Date.now(),
      name: newItem.trim(),
      isPacked: false,
    };
    setItems([...items, newItemObj]);
    setNewItem('');
  };

  // Toggle packed status
  const togglePacked = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, isPacked: !item.isPacked } : item
    );
    setItems(updatedItems);
  };

  // Delete item
  const deleteItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  return (
    <div>
      {/* Input Area */}
      <input
        type="text"
        placeholder="Add item..."
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={handleAddItem} style={{marginLeft:'10px'}}>Add</button>

      <ul style={{ listStyle: 'none', paddingLeft: 0, marginTop: '20px' }}>
        {items.map((item) => (
          <li key={item.id} style={{ marginBottom: '10px' }}>
            <span
              onClick={() => togglePacked(item.id)}
              style={{
                textDecoration: item.isPacked ? 'line-through' : 'none',
                color: item.isPacked ? 'gray' : 'black',
                cursor: 'pointer',
                marginRight: '10px',
              }}
            >
              {item.isPacked ? '✔️' : '☐'} {item.name}
            </span>
            <button onClick={() => deleteItem(item.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PackingList;
