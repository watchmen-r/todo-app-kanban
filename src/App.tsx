import React, { useEffect, useState } from "react";

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

  useEffect(() => {
    const localTodos = localStorage.getItem("localTodos");
    const localProgress = localStorage.getItem("localProgress");
    const localCompleted = localStorage.getItem("localCompleted");

    if(localTodos !== null) setTodos(JSON.parse(localTodos));
    if(localProgress !== null) setProgressTasks(JSON.parse(localProgress));
    if(localCompleted !== null) setCompletedTasks(JSON.parse(localCompleted))

  }, [])

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
    // resultにDroppableで設定したdrappableIdが入っているので、
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

    // 移動元の配列を操作
    if (source.droppableId === "TodosList") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else if (source.droppableId === "ProgressList") {
      add = progress[source.index];
      progress.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    // 移動先の配列を操作
    if (destination.droppableId === "TodosList") {
      active.splice(destination.index, 0, add);
    } else if (destination.droppableId === "ProgressList") {
      progress.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }

    setTodos(active);
    setProgressTasks(progress);
    setCompletedTasks(complete);

    localStorage.setItem("localTodos", JSON.stringify(active));
    localStorage.setItem("ProgressList", JSON.stringify(progress));
    localStorage.setItem("localCompleted", JSON.stringify(complete));
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
          completedTasks={completedTasks}
          setCompletedTasks={setCompletedTasks}
        />
      </DragDropContext>
    </>
  );
}

export default App;
