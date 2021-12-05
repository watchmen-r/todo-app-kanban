import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TodoCard from "./TodoCard";
import { Droppable } from "react-beautiful-dnd";

interface Todo {
  id: number;
  todo: string;
  isDone: boolean;
}

interface props {
  todos: Array<Todo>;
  setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
  progressTasks: Array<Todo>;
  setProgressTasks: React.Dispatch<React.SetStateAction<Array<Todo>>>;
  completedTasks: Array<Todo>;
  setCompletedTasks: React.Dispatch<React.SetStateAction<Array<Todo>>>;
}

const TodoBox: React.FC<props> = ({
  todos,
  setTodos,
  progressTasks,
  setProgressTasks,
  completedTasks,
  setCompletedTasks,
}) => {
  // Droppableの中は関数にして、refやスプレッド構文を下記のように追加しないといけない
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 3,
            width: 300,
            height: 300,
          },
        }}
      >
        <Droppable droppableId="TodosList">
          {(provided, snapshot) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <Paper elevation={3}>
                <Box sx={{ p: 1 }}>
                  <Typography
                    sx={{ fontSize: 20, m: 2, fontWeight: 700 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    未処理
                  </Typography>
                </Box>
                {todos.map((todo, index) => (
                  <Box sx={{ p: 1 }}>
                    <TodoCard
                      index={index}
                      todo={todo}
                      todos={todos}
                      setTodos={setTodos}
                    />
                  </Box>
                ))}
                {provided.placeholder}
              </Paper>
            </div>
          )}
        </Droppable>
        <Droppable droppableId="ProgressList">
          {(provided, snapshot) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <Paper elevation={3}>
                <Box sx={{ p: 1 }}>
                  <Typography
                    sx={{ fontSize: 20, m: 2, fontWeight: 700 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    進行中
                  </Typography>
                </Box>
                {progressTasks.map((progressTask, index) => (
                  <Box sx={{ p: 1 }}>
                    <TodoCard
                      index={index}
                      todo={progressTask}
                      todos={progressTasks}
                      setTodos={setProgressTasks}
                    />
                  </Box>
                ))}
                {provided.placeholder}
              </Paper>
            </div>
          )}
        </Droppable>
        <Droppable droppableId="CompletedList">
          {(provided, snapshot) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <Paper elevation={3}>
                <Box sx={{ p: 1 }}>
                  <Typography
                    sx={{ fontSize: 20, m: 2, fontWeight: 700 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    完了
                  </Typography>
                </Box>
                {completedTasks.map((completedTask, index) => (
                  <Box sx={{ p: 1 }}>
                    <TodoCard
                      index={index}
                      todo={completedTask}
                      todos={completedTasks}
                      setTodos={setCompletedTasks}
                    />
                  </Box>
                ))}
                {provided.placeholder}
              </Paper>
            </div>
          )}
        </Droppable>
      </Box>
    </>
  );
};

export default TodoBox;
