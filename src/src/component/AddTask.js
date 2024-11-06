import React from "react";

class AddTask extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            text: ""
        }
    }
    render() {
        return (
            <form ref={(el) => this.formAdd = el}>
                <div className="header-inputs">
                    <input type="text" placeholder="Title..." onChange={(e) => this.setState({title: e.target.value})} />
                    <input type="text" placeholder="About..." onChange={(e) => this.setState({text: e.target.value})} />
                </div>
                <div className="header-buttons">
                    <button type="button" onClick={() => {
                        this.formAdd.reset()
                        this.props.onAddTask({
                            title: this.state.title, 
                            text: this.state.text
                    })}}><span className="material-symbols-outlined">add</span></button>
                </div>
            </form>
        )
    }
}

export default AddTask