import React from "react";
import "./TaskList.css";
import PropTypes from "prop-types";

import plusIcon from "../../img/plus-icon.svg";
import TaskItem from "../TaskItem/TaskItem";

/*props -> obj javascript que recebe todos os parâmetros da funcao*/
export default function TaskList({
  title,
  taskState,
  onAddTasks,
  tasks,
  onTaskUpdate,
  onDeleteTask
}) {
  const addTask = () => {
    onAddTasks("Nova Tarefa", taskState);
  };

  return (
    <div className="tasklist">
      {/*as chaves indicam codigo em js passados no react*/}
      <div className="title">{title}</div>
      <div className="content">
        {tasks.map((task) => {
          return (
            <TaskItem
              key={task.id}
              id={task.id}
              title={task.title}
              taskState={task.state}
              onTaskUpdate={onTaskUpdate}
              onDeleteTask={onDeleteTask}
            />
          );
        })}
        {tasks.length === 0 && <div className="empty-list">Lista vazia</div>}
        <button className="btn" onClick={addTask}>
          <img src={plusIcon} alt="plus" />
          Adicionar Tarefa
        </button>
      </div>
    </div>
  );
}

/*definir o tipo das props (title esta dentro das props) para que nao corra o risco de passar tipos diferentes*/
TaskList.PropTypes = {
  title: PropTypes.string.isRequired,
  onAddTasks: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
  onTaskUpdate: PropTypes.func.isRequired
};
