import React from 'react'
import { useNavigate } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import SearchIcon from '@material-ui/icons/Search'
import MoreIcon from '@material-ui/icons/MoreVert'
import DrawerComponent from './Drawer'


const useStyles = makeStyles(() => ({
	appBar: {
		top: 'auto',
		bottom: 0,
	},
	grow: {
		flexGrow: 1,
	},
	fabButton: {
		position: 'absolute',
		zIndex: 1,
		top: -30,
		left: 0,
		right: 0,
		margin: '0 auto',
	},
}))

export default function BottomAppBar() {
	const classes = useStyles()

	const navigate = useNavigate()

	const toNewChecklist = () => {
		let path = '/new-checklist'
		navigate(path)
	}

	return (

		<React.Fragment>
			<CssBaseline />
			<AppBar position="fixed" color="primary" className={classes.appBar}>
				<Toolbar>
					<DrawerComponent />
					<Fab color="secondary" aria-label="add" onClick={toNewChecklist} className={classes.fabButton}>
						<AddIcon />
					</Fab>
					<div className={classes.grow} />
					<IconButton color="inherit">
						<SearchIcon />
					</IconButton>
					<IconButton edge="end" color="inherit">
						<MoreIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
		</React.Fragment>

	)
}
