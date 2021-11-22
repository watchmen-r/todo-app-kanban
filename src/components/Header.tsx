import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import InputBase from "@mui/material/InputBase";
import AddTaskIcon from "@mui/icons-material/AddTask";
import { useState } from "react";

const AddTask = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  width: "100%",
  display: 'flex',
  justifyContent: 'space-between',
  [theme.breakpoints.up("sm")]: {
    width: "auto",
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
    margin: 0
  }
}));

const AddTaskIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const AddTaskInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "auto",
    },
    [theme.breakpoints.down("md")]: {
      width: "10ch",
    }
  },
}));

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleTodo: (e: React.FormEvent) => void;
  handleClear: () => void;
}

export const Header: React.FC<Props> = ({
  todo,
  setTodo,
  handleTodo,
  handleClear,
}) => {
  // 日本語を入力時、変換のためのEnterで反応しないようにするための状態管理用変数
  const [isComposed, setIsComposed] = useState(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#6988A9" }}>
        <Toolbar sx={{ display: 'flex',
  justifyContent: 'space-between'}}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              display: { xs: "none", sm: "block" },
              ml: 10,
              fontWeight: 700,
            }}
          >
            かんばんアプリ
          </Typography>
          <AddTask>
            <AddTaskIconWrapper>
              <AddTaskIcon />
            </AddTaskIconWrapper>
            <AddTaskInputBase
              placeholder="タスク入力"
              inputProps={{ "aria-label": "search" }}
              value={todo}
              onCompositionEnd={() => setIsComposed(false)}
              onCompositionStart={() => setIsComposed(true)}
              onChange={(e) => setTodo(e.target.value)}
              onKeyDown={(e) => {
                if (isComposed) return;
                if (e.key === "Enter") {
                  handleTodo(e);
                }
              }}
            />
            <Box>
              <Button
                variant="text"
                sx={{ color: "#f1f1f1", pr: 0, pl: 0}}
                onClick={(e) => {
                  handleTodo(e);
                }}
              >
                登録
              </Button>
              <Button
                variant="text"
                sx={{ color: "#f1f1f1", pr: 0, pl: 0 }}
                onClick={(e) => {
                  handleClear();
                }}
              >
                クリア
              </Button>
            </Box>
          </AddTask>
          <Box sx={{width: 180, display: { xs: "none", sm: "block" }}}>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
