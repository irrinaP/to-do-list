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
                <input type="text" onChange={(e) => this.setState({title: e.target.value})} />
                <textarea type="text" onChange={(e) => this.setState({text: e.target.value})}></textarea>
                <div className="modal-buttons">
                    <button type="button" onClick={() => this.props.onCloseModal()}>Cancel</button>
                    <button type="button" onClick={() => {
                        this.taskEdit = {
                            title: this.state.title,
                            text: this.state.text
                        }
                        if (this.props.task)
                            this.taskEdit.id = this.props.task.id
                        this.props.onEditTask(this.taskEdit)
                        }}>Save</button>
                </div>
            </div>
        )
    }
}

export default ModalEdit