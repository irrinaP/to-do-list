import React from "react";
import AddTask from "./AddTask";

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="header-body">
                    <AddTask onAddTask={this.props.onAddTask} />
                </div>
            </div>
        )
    }
}

export default Header