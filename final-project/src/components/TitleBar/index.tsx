import { AppBar , Toolbar, Typography, IconButton , Container} from "@mui/material"
interface props {
  title: string;
}

export default function TitleBar(params: props) {
  return (
    <AppBar 
      position="static" 
      sx={{ 
        display: 'flex', 
        justifyContent: 'center',  
        backgroundColor: 'transparent', 
        boxShadow: 1,
        minHeight: '1.8rem',
      }}>
      <Container maxWidth="xl">
        <Typography
          variant="h6"
          noWrap
          component="p"
          sx={{
            fontFamily: 'monospace',
            fontWeight: 500,
            letterSpacing: '0.1rem',
            color: 'royalblue',
            fontSize: 14
          }}>
            {params.title}
          </Typography>
      </Container>
    </AppBar>
  )
}

  