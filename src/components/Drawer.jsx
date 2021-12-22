import React, { useState } from 'react'
import {
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemText,
	makeStyles,
} from '@material-ui/core'
import { Menu as MenuIcon } from '@material-ui/icons'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(() => ({
	link: {
		textDecoration: 'none',
		color: 'blue',
		fontSize: '20px',
	},
	icon: {
		color: 'white',
	},
}))

function DrawerComponent() {
	const classes = useStyles()
	const [openDrawer, setOpenDrawer] = useState(false)
	return (
		<>
			<Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
				<List>
					<ListItem onClick={() => setOpenDrawer(false)}>
						<ListItemText>
							<Link to="/" className={classes.link} >Home</Link>
						</ListItemText>
					</ListItem>
					<ListItem onClick={() => setOpenDrawer(false)}>
						<ListItemText>
							<Link to="/about" className={classes.link} >About</Link>
						</ListItemText>
					</ListItem>
					<ListItem onClick={() => setOpenDrawer(false)}>
						<ListItemText>
							<Link to="/contact" className={classes.link} >Contact</Link>
						</ListItemText>
					</ListItem>
				</List>
			</Drawer>
			<IconButton edge="start" onClick={() => setOpenDrawer(!openDrawer)} aria-label="open drawer">
				<MenuIcon className={classes.icon} />
			</IconButton>
		</>
	)
}
export default DrawerComponent
