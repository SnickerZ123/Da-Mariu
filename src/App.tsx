import React from 'react'
import { ChakraProvider, extendTheme, type ThemeConfig } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Menu from './pages/Menu'
import About from './pages/About'
import Contact from './pages/Contact'

// Custom theme configuration
const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

// Custom theme
const theme = extendTheme({
  config,
  fonts: {
    heading: "'Playfair Display', serif",
    body: "'Lato', sans-serif",
  },
  colors: {
    olive: {
      50: '#f8f9f3',
      100: '#e8ebd3',
      200: '#d4d9b4',
      300: '#bfc595',
      400: '#aab176',
      500: '#959d57',
      600: '#767c46',
      700: '#575c34',
      800: '#383b22',
      900: '#1a1b10',
    },
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.800',
      },
    },
  },
})

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </ChakraProvider>
  )
}

export default App 