import React from "react";
import Task from "./Task";

class Tasks extends React.Component {
    render() {
        if (this.props.tasks.length > 0) {
            return (
                <div className="tasks">
                    <div className="tasks-body">
                        <div className="tasks-cards">
                            {this.props.tasks.map((data) => (
                                <Task task={data} key={data.id} onDelete={this.props.onDelete} onModalShare={this.props.onModalShare} onModalEdit={this.props.onModalEdit} />
                            ))}
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className="tasks">
                    <div className="tasks-body">
                        <div className="tasks-info">
                            <h1>No tasks</h1>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default Tasks