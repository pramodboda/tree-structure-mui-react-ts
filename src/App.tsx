import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'


import { CssBaseline, Container, Typography } from '@mui/material';
import { FolderTreeView } from './components/FolderTreeView';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Container>
      <CssBaseline />
      <Typography variant="h5" sx={{ my: 2 }}>
        📁 MUI TreeView – Flat to Tree
      </Typography>
      <FolderTreeView />
    </Container>
    </>
  )
}

export default App
