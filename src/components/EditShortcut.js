import React, { useState, useEffect } from 'react';

function EditShortcut({ id, originalShortcut, originalText, onSave }) {
    const [shortcut, setShortcut] = useState(originalShortcut);
    const [text, setText] = useState(originalText);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle the update logic here
        onSave(id, shortcut, text);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={shortcut}
                onChange={(e) => setShortcut(e.target.value)}
                required
            />
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                required
            />
            <button type="submit">Save Changes</button>
        </form>
    );
}

export default EditShortcut;