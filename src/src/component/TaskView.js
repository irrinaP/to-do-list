import React from "react"
import IconShare from "../icons/share.png"
import IconInfo from "../icons/i.png"
import IconEdit from "../icons/edit.png"

class TaskView extends React.Component {
    render() {
        return (
            <div className="task-action">
                <button type="button" onClick={() => this.props.onModalShare(this.props.task)}>
                    <img src={IconShare} alt="" />
                </button>
                <button type="button">
                    <img src={IconInfo} alt="" />
                </button>
                <button type="button" onClick={() => this.props.onModalEdit(this.props.taskId)}>
                    <img src={IconEdit} alt="" />
                </button>
            </div>
        )
    }
}

export default TaskView