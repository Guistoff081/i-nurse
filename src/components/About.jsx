import React from 'react'
import { Typography, Container, Grid, Paper } from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles' 

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
		marginBottom: '16px'
	},
	section: {
		height: '100%'
	}
}))

function AboutPage() {

	const classes = useStyles()

	return (
		<div style={{marginBottom: '80px', marginTop: '25px', height: '100vh'}}>
			<Container maxWidth='xl' >
				<Grid 
					container
					spacing={3}
					direction='column'
					alignItems='center'
					justifyContent='center'
					style={{ minHeight: '100vh'}}

				>
					<Grid item xs={12} >
						<Paper className={classes.paper}>
							<Typography variant="h4" className={classes.title}>Sobre Nós</Typography>
							<Typography variant="body1" className={classes.text}>O i-Nursing foi desenvolvido com a proposta de ser uma solução para auxiliar no dimensionamento da carga de trabalho da equipe de enfermagem na Unidade de Terapia Intensiva pelo uso da metodologia Nursing Activities Score (NAS).</Typography>
							<Typography variant="body1" className={classes.text}>O Aplicativo Foi idealizado por 3 acadêmicas de enfermagem com a ajuda da orientadora Claudinalle com a ajuda da orientadora Claudinalle e co-orientadora Letícia Moura Mulatinho, com o objetivo de ser implementado nas UTIs do Complexo Hospitalar - UPE.</Typography>
							<Typography variant="body1" className={classes.text}>O desenvolvimento desta Aplicação foi feito em conjunto pelas 3 acadêmicas e um programador voluntário</Typography>
						</Paper>
					</Grid>
				</Grid>
			</Container>
		</div>
	) 
}

export default AboutPage
