import { TodoItem } from '@/types/todo-item';
import { Box, Typography, Checkbox } from '@mui/material'

interface props {
  item: TodoItem
  onComplete: (item: TodoItem) => void;
}

export default function TodoItem({ item, onComplete}: props) {
  return <>
    <Box sx={{
      // backgroundColor: 'lightgrey',
      // borderRadius: 1,
      padding: 0.5,
      display: 'flex',
      alignItems: 'center',
      mb: 1,
      borderBottom: 1,
      borderBottomColor: 'royalblue',
      minHeight: '1rem'
    }}>
      <Checkbox 
        sx={{
          transform: "scale(0.5)",
          width: 10,
        }}
        checked={item.completed}
        onChange={() => onComplete(item)}
      />
      <Typography 
        variant="h6"
        component="p"
        sx={{
          fontFamily: 'monospace',
          fontWeight: 300,
          fontSize: 12,
          ml: 1,
        }}>
          {item.name}:
      </Typography>
      { item.desc && 
      <Typography 
        variant="h6"
        component="p"
        sx={{
          fontFamily: 'monospace',
          fontWeight: 300,
          fontSize: 8,
          ml: 1
        }}>
          {item.desc}
      </Typography>
      }
    </Box>
  </>
}