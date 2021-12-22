import React from 'react'
import {
	AppBar,
	Toolbar,
	CssBaseline,
	Typography,
	makeStyles,
} from '@material-ui/core'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
	navlinks: {
		marginLeft: theme.spacing(5),
		display: 'flex',
	},
	logo: {
		flexGrow: '1',
		cursor: 'pointer',
	},
	link: {
		textDecoration: 'none',
		color: 'white',
		fontSize: '20px',
		marginLeft: theme.spacing(10),
		'&:hover': {
			color: 'yellow',
			borderBottom: '1px solid white',
		},
	},
}))

function Navbar() {
	const classes = useStyles()

	return (
		<AppBar position="static">
			<CssBaseline />
			<Toolbar>
				<Typography variant="h4" className={classes.logo}>
          i-Nursing
				</Typography>
				<div className={classes.navlinks}>
					<Link to="/" className={classes.link}>
              Home
					</Link>
					<Link to="/about" className={classes.link}>
              Sobre
					</Link>
					<Link to="/contact" className={classes.link}>
              Contato
					</Link>
				</div>
			</Toolbar>
		</AppBar>
	)
}
export default Navbar
