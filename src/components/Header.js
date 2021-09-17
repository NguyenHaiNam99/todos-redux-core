import React, { useState } from "react";

const Header = (props) => {
  const [text, setText] = useState("");

  const handleChange = (e) => setText(e.target.value);

  const handleKeyDown = (e) => {
    const trimmedText = text.trim();
    if (e.which === 13 && trimmedText) {
      props.todoAdded(trimmedText);
      setText("");
    }
  };

  return (
    <header className="header">
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </header>
  );
};

export default Header;
