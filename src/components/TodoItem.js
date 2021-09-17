import React from "react";

import { ReactComponent as TimesSolid } from "../images/times-solid.svg";

import { availableColors, capitalize } from "./colors";

const TodoListItem = (props) => {
  const {
    id,
    text,
    color,
    completed,
    todoToggled,
    colorSelected,
    todoDeleted
  } = props;

  const handleCompletedChanged = () => {
    todoToggled(id);
  };

  const handleColorChanged = (e) => {
    const color = e.target.value;
    colorSelected(id, color);
  };

  const onDelete = () => {
    todoDeleted(id);
  };

  const colorOptions = availableColors.map((c) => (
    <option key={c} value={c}>
      {capitalize(c)}
    </option>
  ));

  return (
    <li>
      <div className="view">
        <div className="segment label">
          <input
            className="toggle"
            type="checkbox"
            checked={completed}
            onChange={handleCompletedChanged}
          />
          <div className="todo-text">{text}</div>
        </div>
        <div className="segment buttons">
          <select
            className="colorPicker"
            value={color}
            style={{ color }}
            onChange={handleColorChanged}
          >
            <option value=""></option>
            {colorOptions}
          </select>
          <button className="destroy" onClick={onDelete}>
            <TimesSolid />
          </button>
        </div>
      </div>
    </li>
  );
};

export default TodoListItem;
