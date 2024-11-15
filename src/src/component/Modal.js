import React from "react";
import ModalShare from "./ModalShare";
import ModalEdit from "./ModalEdit";
import ModalDelete from "./ModalDelete";

class Modal extends React.Component {
    render() {
        return (
            <div className="modal" onClick={(e) => { if (e.target.getAttribute("class") === "modal" || e.target.getAttribute("class") === "modal-body") this.props.onCloseModal()}}>
                <div className="modal-body">
                    {this.props.onDelete && <ModalDelete onDeleteTask={this.props.onDeleteTask} onEditTaskId={this.props.onEditTaskId} onCloseModal={this.props.onCloseModal} />}
                    {this.props.onShare && <ModalShare onCloseModal={this.props.onCloseModal} onShareTask={this.props.onShareTask} />}
                    {this.props.onEdit && <ModalEdit onEditTask={this.props.onEditTask} onEditTaskId={this.props.onEditTaskId} onCloseModal={this.props.onCloseModal} />}
                </div>
            </div>
        )
    }
}

export default Modal