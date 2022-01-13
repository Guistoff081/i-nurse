import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Snackbar from '@material-ui/core/Snackbar'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'
import SendIcon from '@material-ui/icons/Send'

const useStyles = makeStyles((theme) => ({
	text: {
		padding: theme.spacing(2, 2, 0),
	},
	paper: {
		paddingBottom: 50,
	},
	list: {
		marginBottom: theme.spacing(2),
	},
	subheader: {
		backgroundColor: theme.palette.background.paper,
	},
	appBar: {
		top: 'auto',
		bottom: 0,
	},
	snackbar: {
		[theme.breakpoints.down('xs')]: {
			bottom: 90,
		},
	},
}))

const submitButton = (
	<Button
		variant="contained"
		color="primary"
		endIcon={<Icon><SendIcon /></Icon>}
	>
		Send
	</Button>
)

const Checklist = () => {
	const classes = useStyles()
	const [state, setState] = useState({
		checked1A: false,
		checked1B: false,
		checked1C: false,
		checked2: false,
		checkValue: 0,
		totalValue: 0
	})

	const { checked1A, checked1B, checked1C, checked2, checkValue, totalValue } = state

	const handleChange = (newState) => (event) => {
		setState({ [event.target.name]: event.target.checked, checkValue: event.target.value, ...newState })
		console.log(event.target.name)
	}

	return (<React.Fragment>
		<CssBaseline />
		<Paper square className={classes.paper}>
			<Typography className={classes.text} variant="h5" gutterBottom>
				i-Nursing
			</Typography>
			<form>
				<FormGroup>
					<List className={classes.list} >
						<React.Fragment>
							<ListSubheader>Atividades Básicas</ListSubheader>
							<ListItem>
								<FormControlLabel
									control={
										<Checkbox
											checked={checked1A}
											onChange={handleChange({ checkValue: 4.5, totalValue: !checked1A ? totalValue+4.5 : totalValue-4.5 })}
											name="checked1A"
											value={checkValue}
											color="primary"
										/>
									}
									label=""
								/>
								<ListItemText>Sinais vitais, cálculo e registro do balanço hídrico</ListItemText>
							</ListItem>
							<ListItem>
								<FormControlLabel
									control={
										<Checkbox
											checked={checked1B}
											onChange={handleChange({ checkValue: 12.1, totalValue: !checked1B ? totalValue+12.1 : totalValue-12.1 })}
											name="checked1B"
											value={checkValue}
											color="primary"
										/>
									}
									label=""
								/>
								<ListItemText>Presença à beira do leito e observação contínua ou ativa por 2 horas ou mais em algum plantão por razões de segurança, gravidade ou terapia</ListItemText>
							</ListItem>
							<ListItem>
								<FormControlLabel
									control={
										<Checkbox
											checked={checked1C}
											onChange={handleChange({ checkValue: 19.6, totalValue: !checked1C ? totalValue+19.6 : totalValue-19.6 })}
											name="checked1C"
											value={checkValue}
											color="primary"
										/>
									}
									label=""
								/>
								<ListItemText>Presença à beira do leito e observação contínua ou ativa por 4 horas ou mais em algum plantão por razões de segurança, gravidade ou terapia</ListItemText>
							</ListItem>
							<ListItem>
								<FormControlLabel
									control={
										<Checkbox
											checked={checked2}
											onChange={handleChange({ checkValue: 4.3, totalValue: !checked2 ? totalValue+4.3 : totalValue-4.3 })}
											name="checked2"
											value={checkValue}
											color="primary"
										/>
									}
									label=""
								/>
								<ListItemText>Sinais vitais, cálculo e registro do balanço hídrico</ListItemText>
							</ListItem>
						</React.Fragment>
					</List>
				</FormGroup>
				<Snackbar
					anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
					open={true}
					message={totalValue}
					action={submitButton}
					className={classes.snackbar}
				/>
			</form>

		</Paper>
	</React.Fragment>)
}

export default Checklist