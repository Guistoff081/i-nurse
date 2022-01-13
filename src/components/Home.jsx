import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { Container, Typography } from '@material-ui/core'
import ActivitiesList from './ActivitiesList'

const useStyles = makeStyles((theme) => ({
	paper: {
		padding: theme.spacing(3),
		color: theme.palette.text.secondary,
	},
	title: {
		textAlign: 'left',
		marginBottom: '16px'
	},
	text: {
		color: theme.palette.text.secondary,
	}
}))

function HomePage() {
	const classes = useStyles()
	
	return (
		<div style={{marginBottom: '80px', marginTop: '25px'}}>
			<Container maxWidth='xl'>
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<Paper className={classes.paper}>
							<Typography variant="h5" className={classes.title}>O que é o i-Nursing?</Typography>
							<Typography variant="body1" className={classes.text}>É uma ferramenta que permite quantificar a proporção dos cuidados enfermeiro/paciente, identificando o processo de quantificação da carga de trabalho média, necessária para a assistência de cada paciente, assim identificando os casos graves e dimensionando o quantitativo de enfermeiros na UTI.</Typography>
						</Paper>
					</Grid>
					<Grid item xs={12} >
						<Paper className={classes.paper}>
							<Typography variant="h5" className={classes.title}>Escala Nursing Activities Score</Typography>
							<Typography variant="body1" className={classes.text}>O NAS é composto por 23 itens, dividido em 7 áreas de cuidado. As áreas de cuidado do NAS são:</Typography>
							<ActivitiesList/>
						</Paper>
					</Grid>
				</Grid>
			</Container>
		</div>
	)
}

export default HomePage
