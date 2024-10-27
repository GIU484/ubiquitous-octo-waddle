import React, { useState, useEffect } from 'react';

function ViewShortcuts() {
    const [shortcuts, setShortcuts] = useState([]);

    useEffect(() => {
        // Fetch the shortcuts from storage and set them
        const storedShortcuts = [
            { id: 1, shortcut: 'brb', text: 'Be right back!' },
            { id: 2, shortcut: 'ty', text: 'Thank you!' }
        ];
        setShortcuts(storedShortcuts);
    }, []);

    const handleDelete = (id) => {
        // Add logic to delete the shortcut by id
        setShortcuts(shortcuts.filter(shortcut => shortcut.id !== id));
    };

    return (
        <div>
            <h2>View Shortcuts</h2>
            <ul>
                {shortcuts.map(({ id, shortcut, text }) => (
                    <li key={id}>
                        {shortcut} - {text}
                        <button onClick={() => handleDelete(id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ViewShortcuts;