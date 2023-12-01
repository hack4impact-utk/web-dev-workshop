'use client' // make this a client rendered component
import { Typography , Box, Button, TextField } from "@mui/material"
import { Dialog , DialogTitle, DialogActions, DialogContent} from "@mui/material"
import { EventHandler, SyntheticEvent, useState } from 'react'
import { TodoItem } from "@/types/todo-item";
import Item from "../TodoItem"


interface TextEvent<T = Element> extends SyntheticEvent<T> {
  text: string;
}

type TextEventHandler<T = Element> = EventHandler<TextEvent<T>>;



interface HomeViewProps {
  todoItems: TodoItem[];
  addItem: (item: TodoItem) => void;
  onComplete: (item: TodoItem) => void;
}

export default function HomeView({ todoItems, addItem, onComplete }: HomeViewProps) {
  const [open, setOpen] = useState(false);
  const [newName, setNewName] = useState('');
  const [newDesc, setNewDesc] = useState('');

  // Create a new todo list item
  function openDialog() {
    setOpen(true);
  }

  function closeDialog() {
    setOpen(false);
  }

  function createItem() {
    if (newName == '' || newDesc == '') {
      alert("An item needs both a name and a description");
    } else {
      const newItem = {
        name: newName,
        completed: false,
        desc: newDesc
      };

      addItem(newItem)


      // Clear the name and description
      setNewName('');
      setNewDesc('');

      // close the dialog
      closeDialog();
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleDescChange = event => {
    setNewDesc(event.target.value);
  }

  // Rendered on the page
  return (<main>
    <Box
      sx={{
        padding: 1
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          mb: 1
        }}>
        <Typography 
          variant="h6"
          component="h6"
          sx={{
            fontFamily: 'monospace',
            fontSize: 14,
            // mt: 2, 
            flexGrow: 10
          }}
        >
          Todo Items:
        </Typography>
        <Button 
          variant="contained"
          sx={{
            fontFamily: 'monospace'
            , fontSize: 8
            , flexGrow: 1
            , backgroundColor: 'royalblue'
          }}
          size="small"
          onClick={() => {
            openDialog()
          }}
          >
            New Item
        </Button>
      </Box>
  
      { // Render all the todo items
        todoItems.map((item, key) => {
          return (
            <Item key={key} item={item} onComplete={onComplete}/>
          )
        })
      }

      <Dialog open={open} onClose={closeDialog}>
        <DialogTitle>New Item</DialogTitle>
        <DialogContent 
          sx={{
            display: 'flex'
            , flexDirection: 'column'
          }}>
          <TextField
            autoFocus
            margin="dense"
            id="item-name"
            label="Item Name"
            type="text"
            variant="standard"
            onChange={handleNameChange}  
          />
          
          <TextField
            autoFocus
            margin="dense"
            id="item-desc"
            label="Item Desc"
            type="text"
            variant="standard"
            multiline
            onChange={handleDescChange}  
          />

            <DialogActions>
              <Button onClick={closeDialog}>Cancel</Button>
              <Button onClick={createItem}>Save</Button>
            </DialogActions>
        </DialogContent>
      </Dialog>
    </Box>
  </main>
  );
}

