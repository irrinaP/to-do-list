import React from 'react';
import Header from './component/Header';
import Tasks from './component/Tasks';
import Modal from './component/Modal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onModal: {
        onView: false,
        onDelete: false,
        onShare: false,
        onEdit: false,
      },
      tasks: [], // Задачи храним в состоянии
      shareTask: [],
      editTaskId: '',
    };

    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.editTask = this.editTask.bind(this);
    this.openModalDelete = this.openModalDelete.bind(this);
    this.openModalShare = this.openModalShare.bind(this);
    this.openModalEdit = this.openModalEdit.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  componentDidMount() {
    // Загружаем задачи из localStorage
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    this.setState({ tasks: storedTasks });
  }

  componentDidUpdate(prevProps, prevState) {
    // Если задачи обновились, сохраняем их в localStorage
    if (prevState.tasks !== this.state.tasks) {
      localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
    }
  }

  addTask(task) {
    const id = this.state.tasks.length + 1;
    const newTask = { id, ...task };
    const updatedTasks = [...this.state.tasks, newTask];
    this.setState({ tasks: updatedTasks });
  }

  deleteTask(id) {
    const updatedTasks = this.state.tasks.filter((el) => el.id !== id);
    this.setState({ tasks: updatedTasks });
    this.closeModal();
  }

  editTask(task) {
    const updatedTasks = [...this.state.tasks];
    updatedTasks[task.id - 1] = task;
    this.setState({ tasks: updatedTasks });
  }

  openModalDelete(taskId) {
    this.setState({
      onModal: { onView: true, onDelete: true, onShare: false, onEdit: false },
      editTaskId: taskId,
    });
  }

  openModalShare(task) {
    this.setState({
      onModal: { onView: true, onDelete: false, onShare: true, onEdit: false },
      shareTask: task,
    });
  }

  openModalEdit(taskId) {
    this.setState({
      onModal: { onView: true, onDelete: false, onShare: false, onEdit: true },
      editTaskId: taskId,
    });
  }

  closeModal() {
    this.setState({
      onModal: { onView: false, onDelete: false, onShare: false, onEdit: false },
      editTaskId: '',
    });
  }

  onDragEnd(result) {
    const { destination, source } = result;

    // Если элемент не переместился, ничего не делаем
    if (!destination) return;

    const tasks = Array.from(this.state.tasks);
    const [reorderedTask] = tasks.splice(source.index, 1);
    tasks.splice(destination.index, 0, reorderedTask);

    this.setState({ tasks });
  }

  render() {
    return (
      <div className="wrapper-body">
        {this.state.onModal.onView && (
          <Modal
            onDelete={this.state.onModal.onDelete}
            onShare={this.state.onModal.onShare}
            onEdit={this.state.onModal.onEdit}
            onCloseModal={this.closeModal}
            onDeleteTask={this.deleteTask}
            onShareTask={this.state.shareTask}
            onEditTask={this.editTask}
            onEditTaskId={this.state.editTaskId}
          />
        )}
        <Header onAddTask={this.addTask} />
        <Tasks
          tasks={this.state.tasks} // Передаем задачи как пропс
          onModalDelete={this.openModalDelete}
          onModalShare={this.openModalShare}
          onModalEdit={this.openModalEdit}
          onDragEnd={this.onDragEnd}
        />
      </div>
    );
  }
}

export default App;
