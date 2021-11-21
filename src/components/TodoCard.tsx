import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Draggable } from 'react-beautiful-dnd';

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
  // Draggableは、draggableIdはユニークなものを入れる、そして関数で囲む
  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided, snapshot) => (
        <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} >
          <Card sx={{ minWidth: 275, backgroundColor: "#6988A9" }} >
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="#ffffff" gutterBottom>
                {todo.todo}
              </Typography>
            </CardContent>
          </Card>
        </div>
      )}
    </Draggable>
  )
}

export default TodoCard;