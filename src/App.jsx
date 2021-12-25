import React, {  } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Contact from './components/Contact'
import Home from './components/Home'
import About from './components/About'
import BottomAppBar from './components/Appbar'
import Navbar from './components/Navbar'
import { useMediaQuery, useTheme } from '@material-ui/core'
import { ThemeProvider, createTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

const themeLight = createTheme({
	palette: {
		type: 'light',
	},
})

function App() {

	const theme = useTheme()
	const isMobile = useMediaQuery(theme.breakpoints.down('md'))

	return (
		<Router>
			<ThemeProvider theme={themeLight}>
				<CssBaseline />
				{isMobile ? (<BottomAppBar />) : (<Navbar />)}
			</ThemeProvider>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</Router>
	)
}

export default App
