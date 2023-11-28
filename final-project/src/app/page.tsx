'use client' // make this a client rendered component
import TodoItem from "@/components/TodoItem";
import { Typography , Box, Button, TextField } from "@mui/material"
import { Dialog , DialogTitle, DialogActions, DialogContent} from "@mui/material"
import { EventHandler, SyntheticEvent, useState } from 'react'
import './globals.css'

interface todoItem {
  name: string;
  desc: string;
}

interface TextEvent<T = Element> extends SyntheticEvent<T> {
  text: string;
}

type TextEventHandler<T = Element> = EventHandler<TextEvent<T>>;

export default function Home() {
  const [items, setItems] = useState<todoItem[]>([]);
  const [open, setOpen] = useState(false);
  const [newName, setNewName] = useState('');
  const [newDesc, setNewDesc] = useState('');

  const itemList = [ // items to dynamically render
    {
      name: "Finish project",
      desc: "complete the project for COSC 102"
    },
    {
      name: "Complete lab report",
      desc: "lab report for EF 157. This should be completed by next wednesday"
    },
  ];

  // Create a new todo list item
  function createItem() {
    setOpen(true);
  }

  function closeDialog() {
    setOpen(false);
  }

  function addItem() {
    if (newName == '' || newDesc == '') {
      alert("An item needs both a name and a description");
    } else {
      const newItem = {
        name: newName,
        desc: newDesc
      };

      items.push(newItem);

      // Clear the name and description
      setNewName('');
      setNewDesc('');

      // items.push(newItem);
      closeDialog();
    }
  }

  const handleNameChange = event => {
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
            createItem()
          }}
          >
            New Item
        </Button>
      </Box>
  
      { // Render all the todo items
        items.map((item, key) => {
          return (
            <TodoItem key={key} name={item.name} desc={item.desc} />
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
              <Button onClick={addItem}>Save</Button>
            </DialogActions>
        </DialogContent>
      </Dialog>
    </Box>
  </main>
  );
}
