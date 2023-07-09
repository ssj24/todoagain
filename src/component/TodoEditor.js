import React from 'react';

function TodoEditor() {
  return (
    <div className="editorWrapper">
      <input placeholder="할 일을 입력해주세요" />
      <button>
        +
      </button>
    </div>
  );
}

export default TodoEditor;