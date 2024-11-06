import React from "react";
import Header from "./component/Header";
import Tasks from "./component/Tasks";
import Modal from "./component/Modal";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            onModal: {
                onView: false,
                onShare: false,
                onEdit: false,
            },
            tasks: []
        }

        this.addTask = this.addTask.bind(this)
        this.deleteTask = this.deleteTask.bind(this)
        this.editTask = this.editTask.bind(this)
        this.openModalShare = this.openModalShare.bind(this)
        this.openModalEdit = this.openModalEdit.bind(this)
        this.closeModal = this.closeModal.bind(this)
    }

    render() {
        return (
            <div className='wrapper-body'>
                {this.state.onModal.onView && <Modal onShare={this.state.onModal.onShare} onEdit={this.state.onModal.onEdit}  onCloseModal={this.closeModal} onEditTask={this.editTask} />}
                <Header onAddTask={this.addTask} />
                <Tasks tasks={this.state.tasks} onDelete={this.deleteTask} onModalShare={this.openModalShare} onModalEdit={this.openModalEdit} />
            </div>
        )
        
    }

    addTask(task) {
        const id = this.state.tasks.length + 1
        this.setState({tasks: [...this.state.tasks, {id, ...task}]})
    }

    deleteTask(id) {
        this.setState({
            tasks: this.state.tasks.filter((el) => el.id !== id)
        })
    }

    editTask(task) {
        console.log(task)
    }

    openModalShare() {
        this.setState({onModal: {onView: !this.state.onModal.onView, onShare: !this.state.onModal.onShare}})
    }

    openModalEdit() {
        this.setState({onModal: {onView: !this.state.onModal.onView, onEdit: !this.state.onModal.onEdit}})
    }

    closeModal() {
        this.setState({onModal: {onView: !this.state.onModal.onView, onShare: false, onEdit: false}})
    }
}

export default App