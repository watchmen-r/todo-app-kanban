import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { Draggable } from 'react-beautiful-dnd';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Box, IconButton } from '@mui/material';

interface Todo {
  id: number;
  todo: string;
  isDone: boolean;
}

type Props = {
  index: number;
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TodoCard = ({ index, todo, todos, setTodos }: Props) => {
  // 削除アイコンを押した時
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  
  // Draggableは、draggableIdはユニークなものを入れる、そして関数で囲む
  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided, snapshot) => (
        <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} >
          <Card sx={{ minWidth: 275, backgroundColor: "#6988A9" }} >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                p: 1,
                m: 1,
                backgroundColor: "#6988A9" 
              }}
            >
              <Typography variant="h6" component="div" sx={{mt: 0.5, color: "#f1f1f1" }}>
                {todo.todo}
              </Typography>
                
              <IconButton className="icon" onClick={() => handleDelete(todo.id)}>
                <HighlightOffIcon />
              </IconButton>
            </Box>
          </Card>
        </div>
      )}
    </Draggable>
  )
}

export default TodoCard;