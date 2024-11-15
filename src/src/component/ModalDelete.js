import React from "react";

class ModalDelete extends React.Component {
    render() {
        return (
            <div className="modal-delete">
                <p>Delete this task?</p>
                <div className="modal-buttons">
                    <button type="button" onClick={() => this.props.onDeleteTask(this.props.onEditTaskId)}>Yes</button>
                    <button type="button" onClick={() => this.props.onCloseModal()}>No</button>
                </div>
            </div>
        )
    }
}

export default ModalDelete