import React from "react";
import ModalShare from "./ModalShare";
import ModalEdit from "./ModalEdit";

class Modal extends React.Component {
    render() {
        return (
            <div className="modal" onClick={(e) => { if (e.target.getAttribute("class") === "modal" || e.target.getAttribute("class") === "modal-body") this.props.onCloseModal()}}>
                <div className="modal-body">
                    {this.props.onShare && <ModalShare />}
                    {this.props.onEdit && <ModalEdit onEditTask={this.props.onEditTask} onCloseModal={this.props.onCloseModal} />}
                </div>
            </div>
        )
    }
}

export default Modal