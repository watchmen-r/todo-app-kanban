import React, { useState } from 'react';

import { Header } from './components/Header';
import TodoBox from './components/TodoBox';
import { DragDropContext, DropResult } from "react-beautiful-dnd";

function App() {

  const [todos, setTodos] = useState([]);
  const [progresTasks, setprogresTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  

  // アイテムがドロップされた時に呼び出される
  // ここでstateを更新する
  const onDragEnd = (result: DropResult) => {
    console.log(result);
  }

  return (
    <>
      <Header />
      <DragDropContext onDragEnd={onDragEnd} >
        <TodoBox />
      </DragDropContext>
    </>
  );
}

export default App;
