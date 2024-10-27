import React, { useState } from 'react';

function AddShortcut() {
    const [shortcut, setShortcut] = useState('');
    const [text, setText] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle the shortcut submission logic here
        console.log('Shortcut:', shortcut, 'Text:', text);
        // Reset fields
        setShortcut('');
        setText('');
    };

    return (
        <div>
            <h2>Add New Shortcut</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={shortcut}
                    onChange={(e) => setShortcut(e.target.value)}
                    placeholder="Enter shortcut"
                    required
                />
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter text for the shortcut"
                    required
                />
                <button type="submit">Add Shortcut</button>
            </form>
        </div>
    );
}

export default AddShortcut;