import React from "react";
import TaskView from "./TaskView"

class Task extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            actionView: false
        }
    }
    render() {
        return (
            <div className="task-card" key={this.props.task.id}>
                <div className="task-info" onClick={() => {this.setState({actionView: !this.state.actionView})}}>
                    <div className="task-text">
                        <h1>{this.props.task.title}</h1>
                        <p>{this.props.task.text}</p>
                    </div>
                    <div className="task-button">
                        <button type="button" onClick={() => this.props.onDelete(this.props.task.id)}><span className="material-symbols-outlined">add</span></button>
                    </div>
                </div>
                {this.state.actionView && <TaskView onModalShare={this.props.onModalShare} onModalEdit={this.props.onModalEdit}/>}
            </div>
        )
    }
}

export default Task