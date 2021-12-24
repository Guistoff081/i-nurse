import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import { Typography, Box } from '@material-ui/core'

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
		<Box mx="auto">
			<Container maxWidth='xlg'>
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
							<Typography variant="body2" className={classes.text}>-Atividades Básicas
							- Suporte Ventilatório
							- Suporte Cardiovascular
							-
							</Typography>
						</Paper>
					</Grid>
				</Grid>
			</Container>
		</Box>
	)
}

export default HomePage
