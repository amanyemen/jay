import { useState } from "react"
import { Box, Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";



function App() {


  const [darkMode, setDarkMode] = useState(false);
  const palleteType = darkMode ? 'dark' : 'light'
  const theme = createTheme({
    palette: {
      mode: palleteType,
      background: {
        default: (palleteType === 'light') ? '#fdce06' : '#ffffff'
      }
    }
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }



  



  return (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <NavBar  toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
    <Box
     sx={{
      minHeight: '100vh',
      background: darkMode 
      ? 'radial-gradient(circle, #606060, #121212)'
      : 'radial-gradient(circle, #ffffff,hsl(198, 45.50%, 91.40%))',
      py: 6

     }} 
    >

        <Container maxWidth='xl' sx={{mt: 14}}>

          <Outlet />

        </Container>

     </Box>
    
  </ThemeProvider>
  )
}

export default App
