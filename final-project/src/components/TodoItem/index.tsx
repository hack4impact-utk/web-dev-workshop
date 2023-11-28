import { Box, Typography, Checkbox } from '@mui/material'

interface props {
  name: string;
  desc: string;
}

export default function TodoItem(params: props) {
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
          {params.name}:
      </Typography>
      <Typography 
        variant="h6"
        component="p"
        sx={{
          fontFamily: 'monospace',
          fontWeight: 300,
          fontSize: 8,
          ml: 1
        }}>
          {params.desc}
      </Typography>
    </Box>
  </>
}