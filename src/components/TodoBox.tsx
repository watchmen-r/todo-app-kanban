import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TodoCard from "./TodoCard";

interface props {}

const TodoBox: React.FC<props> = () => {
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
        <Paper elevation={3}>
          <Typography
            sx={{ fontSize: 20, m: 2 }}
            color="text.secondary"
            gutterBottom
          >
            未処理
          </Typography>
          <Box sx={{ m: 1 }}>
            <TodoCard />
          </Box>
          <Box sx={{ m: 1 }}>
            <TodoCard />
          </Box>
        </Paper>
        <Paper elevation={3}>
          <Typography
            sx={{ fontSize: 20, m: 2 }}
            color="text.secondary"
            gutterBottom
          >
            進行中
          </Typography>
          <TodoCard />
        </Paper>
        <Paper elevation={3}>
          <Typography
            sx={{ fontSize: 20, m: 2 }}
            color="text.secondary"
            gutterBottom
          >
            完了
          </Typography>
          <TodoCard />
        </Paper>
      </Box>
    </>
  );
};

export default TodoBox;
