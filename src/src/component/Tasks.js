import React from 'react';
import Task from './Task';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

class Tasks extends React.Component {
  render() {
    if (this.props.tasks.length > 0) {
      return (
        <DragDropContext onDragEnd={this.props.onDragEnd}>
          <Droppable droppableId="tasks">
            {(provided) => (
              <div className="tasks" {...provided.droppableProps} ref={provided.innerRef}>
                <div className="tasks-body">
                  <div className="tasks-cards">
                    {this.props.tasks.map((data, index) => (
                      <Draggable key={data.id} draggableId={data.id.toString()} index={index}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="task-card"
                          >
                            <Task
                              task={data}
                              onModalDelete={this.props.onModalDelete}
                              onModalShare={this.props.onModalShare}
                              onModalEdit={this.props.onModalEdit}
                            />
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                </div>
              </div>
            )}
          </Droppable>
        </DragDropContext>
      );
    } else {
      return (
        <div className="tasks">
          <div className="tasks-body">
            <div className="tasks-info">
              <h1>No tasks</h1>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Tasks;
