import React, { useState } from "react";

const AddTask = ({ onAddTask }) => {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    const handleAddTask = () => {
        if (onAddTask) {
            onAddTask({ title, text });
        }
        setTitle(""); 
        setText(""); 
    };

    return (
        <form>
            <div className="header-inputs">
                <input 
                    type="text" 
                    placeholder="Title..." 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} 
                />
                <input 
                    type="text" 
                    placeholder="About..." 
                    value={text}
                    onChange={(e) => setText(e.target.value)} 
                />
            </div>
            <div className="header-buttons">
                <button 
                    type="button" 
                    onClick={handleAddTask}
                >
                    <span className="material-symbols-outlined">add</span>
                </button>
            </div>
        </form>
    );
};

export default AddTask;
