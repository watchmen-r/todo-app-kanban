import React, { useState } from "react";

import { Header } from "./components/Header";
import TodoBox from "./components/TodoBox";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

interface Todo {
  id: number;
  todo: string;
  isDone: boolean;
}

function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Array<Todo>>([]);
  const [progressTasks, setProgressTasks] = useState<Array<Todo>>([]);
  const [completedTasks, setCompletedTasks] = useState<Array<Todo>>([]);

  const handleTodo = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      // TODO IDの管理はUIDを使いたい
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  // アイテムがドロップされた時に呼び出される
  // ここでstateを更新する
  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;
    // resultにdrogableで設定したdraggableIdが入っているので、
    // これを用いてデータを操作する
    console.log(result);

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    let add;
    let active = todos;
    let progress = progressTasks;
    let complete = completedTasks;
    // Source Logic
    if (source.droppableId === "TodosList") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    // Destination Logic
    if (destination.droppableId === "ProgressList") {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }

    setCompletedTasks(complete);
    setTodos(active);
  };

  return (
    <>
      <Header todo={todo} setTodo={setTodo} handleTodo={handleTodo} />
      <DragDropContext onDragEnd={onDragEnd}>
        <TodoBox
          todos={todos}
          setTodos={setTodos}
          progressTasks={progressTasks}
          setProgressTasks={setProgressTasks}
        />
      </DragDropContext>
    </>
  );
}

export default App;
