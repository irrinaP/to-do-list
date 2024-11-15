import React from "react";

class ModalEdit extends React.Component {
    taskEdit = {}
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            text: ""
        }
    }
    render() {
        return (
            <div className="modal-edit">
                <input type="text" placeholder="Mini input..." onChange={(e) => this.setState({title: e.target.value})} />
                <textarea type="text" placeholder="Mini input..." onChange={(e) => this.setState({text: e.target.value})}></textarea>
                <div className="modal-buttons">
                    <button type="button" onClick={() => this.props.onCloseModal()}>Cancel</button>
                    <button type="button" onClick={() => {
                        this.taskEdit = {
                            title: this.state.title,
                            text: this.state.text
                        }
                        if (this.props.onEditTaskId)
                            this.taskEdit.id = this.props.onEditTaskId
                        this.props.onEditTask(this.taskEdit)
                        this.props.onCloseModal()
                        }}>Save</button>
                </div>
            </div>
        )
    }
}

export default ModalEdit