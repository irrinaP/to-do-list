import React, { useState } from "react";

const ModalEdit = ({ onCloseModal, onEditTask, onEditTaskId }) => {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    const handleSave = () => {
        const taskEdit = {
            title,
            text,
            ...(onEditTaskId && { id: onEditTaskId }) 
        };

        if (onEditTask) {
            onEditTask(taskEdit);
        }
        if (onCloseModal) {
            onCloseModal();
        }
    };

    return (
        <div className="modal-edit">
            <input 
                type="text" 
                placeholder="Mini input..." 
                value={title}
                onChange={(e) => setTitle(e.target.value)} 
            />
            <textarea 
                placeholder="Mini input..." 
                value={text}
                onChange={(e) => setText(e.target.value)} 
            />
            <div className="modal-buttons">
                <button 
                    type="button" 
                    onClick={onCloseModal}
                >
                    Cancel
                </button>
                <button 
                    type="button" 
                    onClick={handleSave}
                >
                    Save
                </button>
            </div>
        </div>
    );
};

export default ModalEdit;
