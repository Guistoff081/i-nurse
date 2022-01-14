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
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

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
		Salvar
	</Button>
)

const Checklist = () => {
	const classes = useStyles()
	const [state, setState] = useState({
		checked1A: false,
		checked1B: false,
		checked1C: false,
		checked2: false,
		checked3: false,
		checked4A: false,
		checked4B: false,
		checked4C: false,
		checked5: false,
		checked6A: false,
		checked6B: false,
		checked6C: false,
		checked7A: false,
		checked7B: false,
		checked8A: false,
		checked8B: false,
		checked8C: false,
		checked9: false,
		checked10: false,
		checked11: false,
		checked12: false,
		checked13: false,
		checked14: false,
		checked15: false,
		checked16: false,
		checked17: false,
		checked18: false,
		checked19: false,
		checked20: false,
		checked21: false,
		checked22: false,
		checked23: false,
		checkValue: 0,
		totalValue: 0
	})

	const [open, setOpen] = useState(false)

	const { checked1A, checked1B, checked1C, checked2, checked3, checked4A, checked4B, checked4C, checked5, checked6A, checked6B, checked6C, checked7A, checked7B,
		checked8A, checked8B, checked8C, checked9, checked10, checked11, checked12, checked13, checked14, checked15, checked16, checked17, checked18, checked19,
		checked20, checked21, checked22, checked23, checkValue, totalValue } = state

	const handleChange = (newState) => (event) => {
		setState({ ...state, [event.target.name]: event.target.checked, checkValue: event.target.value, ...newState })
		if (newState.totalValue >= 100) {
			setOpen(true)
		}
	}

	const handleClose = () => {
		setOpen(false)
	}

	return (<React.Fragment>
		<CssBaseline />
		<Paper square className={classes.paper}>
			<Typography className={classes.text} variant="h5" gutterBottom>
				i-Nursing
			</Typography>
			<form>
				<FormGroup>
					<List className={classes.list} subheader={<li />}>
						<React.Fragment>
							<ListSubheader disableSticky={true} >Atividades Básicas</ListSubheader>
							<ListItem>
								<FormControlLabel
									control={
										<Checkbox
											checked={checked1A}
											onChange={handleChange({ checkValue: 4.5, totalValue: !checked1A ? (totalValue * 10 + 4.5 * 10) / 10 : (totalValue * 10 - 4.5 * 10) / 10 })}
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
											onChange={handleChange({ checkValue: 12.1, totalValue: !checked1B ? (totalValue * 10 + 12.1 * 10) / 10 : (totalValue * 10 - 12.1 * 10) / 10 })}
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
											onChange={handleChange({ checkValue: 19.6, totalValue: !checked1C ? (totalValue * 10 + 19.6 * 10) / 10 : (totalValue * 10 - 19.6 * 10) / 10 })}
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
											onChange={handleChange({ checkValue: 4.3, totalValue: !checked2 ? (totalValue * 10 + 4.3 * 10) / 10 : (totalValue * 10 - 4.3 * 10) / 10 })}
											name="checked2"
											value={checkValue}
											color="primary"
										/>
									}
									label=""
								/>
								<ListItemText>Investigações Laboratoriais: Bioquímicas e Microbiológicas</ListItemText>
							</ListItem>
							<ListItem>
								<FormControlLabel
									control={
										<Checkbox
											checked={checked3}
											onChange={handleChange({ checkValue: 5.6, totalValue: !checked3 ? (totalValue * 10 + 5.6 * 10) / 10 : (totalValue * 10 - 5.6 * 10) / 10 })}
											name="checked3"
											value={checkValue}
											color="primary"
										/>
									}
									label=""
								/>
								<ListItemText>Medicação, Exceto Drogas Vasoativas</ListItemText>
							</ListItem>
							<Typography className={classes.text} variant='subtitle2'>Procedimentos de Higiene</Typography>
							<ListItem>
								<FormControlLabel
									control={
										<Checkbox
											checked={checked4A}
											onChange={handleChange({ checkValue: 4.1, totalValue: !checked4A ? (totalValue * 10 + 4.1 * 10) / 10 : (totalValue * 10 - 4.1 * 10) / 10 })}
											name="checked4A"
											value={checkValue}
											color="primary"
										/>
									}
									label=""
								/>
								<ListItemText>Realização de procedimentos de higiene, tais como: curativo de feridas e cateteres intravasculares, troca de roupa de cama, higiene corporal do paciente em situações especiais (incontinência, vômito, queimaduras, feridas com secreção, curativos cirúrgicos complexos com irrigação) e procedimentos especiais (p. ex.: isolamento)</ListItemText>
							</ListItem>
							<ListItem>
								<FormControlLabel
									control={
										<Checkbox
											checked={checked4B}
											onChange={handleChange({ checkValue: 16.5, totalValue: !checked4B ? (totalValue * 10 + 16.5 * 10) / 10 : (totalValue * 10 - 16.5 * 10) / 10 })}
											name="checked4B"
											value={checkValue}
											color="primary"
										/>
									}
									label=""
								/>
								<ListItemText>Realização de procedimentos de higiene que durem mais do que 2 horas em algum plantão</ListItemText>
							</ListItem>
							<ListItem>
								<FormControlLabel
									control={
										<Checkbox
											checked={checked4C}
											onChange={handleChange({ checkValue: 20.0, totalValue: !checked4C ? (totalValue * 10 + 20.0 * 10) / 10 : (totalValue * 10 - 20.0 * 10) / 10 })}
											name="checked4C"
											value={checkValue}
											color="primary"
										/>
									}
									label=""
								/>
								<ListItemText>Realização de procedimentos de higiene que durem mais do que 4 horas em algum plantão</ListItemText>
							</ListItem>
							<ListItem>
								<FormControlLabel
									control={
										<Checkbox
											checked={checked5}
											onChange={handleChange({ checkValue: 1.8, totalValue: !checked5 ? (totalValue * 10 + 1.8 * 10) / 10 : (totalValue * 10 - 1.8 * 10) / 10 })}
											name="checked5"
											value={checkValue}
											color="primary"
										/>
									}
									label=""
								/>
								<ListItemText>Cuidados com Drenos. Todos (Exceto Sonda Gástrica)</ListItemText>
							</ListItem>
							<Typography className={classes.text} variant='subtitle2'>Mobilização e Posicionamento</Typography>
							<ListItem>
								<FormControlLabel
									control={
										<Checkbox
											checked={checked6A}
											onChange={handleChange({ checkValue: 5.5, totalValue: !checked6A ? (totalValue * 10 + 5.5 * 10) / 10 : (totalValue * 10 - 5.5 * 10) / 10 })}
											name="checked6A"
											value={checkValue}
											color="primary"
										/>
									}
									label=""
								/>
								<ListItemText>Realização do(s) procedimento(s) até três vezes em 24 horas</ListItemText>
							</ListItem>
							<ListItem>
								<FormControlLabel
									control={
										<Checkbox
											checked={checked6B}
											onChange={handleChange({ checkValue: 12.4, totalValue: !checked6B ? (totalValue * 10 + 12.4 * 10) / 10 : (totalValue * 10 - 12.4 * 10) / 10 })}
											name="checked6B"
											value={checkValue}
											color="primary"
										/>
									}
									label=""
								/>
								<ListItemText>Realização do(s) procedimento(s) mais do que 3 vezes em 24 horas ou com 2 enfermeiros em qualquer frequência</ListItemText>
							</ListItem>
							<ListItem>
								<FormControlLabel
									control={
										<Checkbox
											checked={checked6C}
											onChange={handleChange({ checkValue: 17.0, totalValue: !checked6C ? (totalValue * 10 + 17.0 * 10) / 10 : (totalValue * 10 - 17.0 * 10) / 10 })}
											name="checked6C"
											value={checkValue}
											color="primary"
										/>
									}
									label=""
								/>
								<ListItemText>Realização do(s) procedimento(s) com 3 ou mais enfermeiros em qualquer frequência</ListItemText>
							</ListItem>
							<Typography className={classes.text} variant='subtitle2'>Suporte e Cuidados aos Familiares e Pacientes</Typography>
							<ListItem>
								<FormControlLabel
									control={
										<Checkbox
											checked={checked7A}
											onChange={handleChange({ checkValue: 4.0, totalValue: !checked7A ? (totalValue * 10 + 4.0 * 10) / 10 : (totalValue * 10 - 4.0 * 10) / 10 })}
											name="checked7A"
											value={checkValue}
											color="primary"
										/>
									}
									label=""
								/>
								<ListItemText>Suporte e cuidado aos familiares e pacientes que requerem dedicação exclusiva por cerca de 1 hora em algum plantão, tais como: explicar condições clínicas, lidar com a dor e angústia e lidar com circunstâncias familiares difíceis</ListItemText>
							</ListItem>
							<ListItem>
								<FormControlLabel
									control={
										<Checkbox
											checked={checked7B}
											onChange={handleChange({ checkValue: 32.0, totalValue: !checked7B ? (totalValue * 10 + 32.0 * 10) / 10 : (totalValue * 10 - 32.0 * 10) / 10 })}
											name="checked7B"
											value={checkValue}
											color="primary"
										/>
									}
									label=""
								/>
								<ListItemText>Suporte e cuidados aos familiares e pacientes que requerem dedicação exclusiva por 3 horas ou mais em algum plantão, tais como: morte, circunstâncias especiais (p. ex.: grande número de familiares, problemas de linguagem e familiares hostis)</ListItemText>
							</ListItem>
							<Typography className={classes.text} variant='subtitle2'>Tarefas Administrativas e Gerenciais</Typography>
							<ListItem>
								<FormControlLabel
									control={
										<Checkbox
											checked={checked8A}
											onChange={handleChange({ checkValue: 4.2, totalValue: !checked8A ? (totalValue * 10 + 4.2 * 10) / 10 : (totalValue * 10 - 4.2 * 10) / 10 })}
											name="checked8A"
											value={checkValue}
											color="primary"
										/>
									}
									label=""
								/>
								<ListItemText>Realização de tarefas de rotina, tais como: processamento de dados clínicos, solicitação de exames e troca de informações profissionais (p. ex.: passagem de plantão e visitas clínicas)</ListItemText>
							</ListItem>
							<ListItem>
								<FormControlLabel
									control={
										<Checkbox
											checked={checked8B}
											onChange={handleChange({ checkValue: 23.2, totalValue: !checked8B ? (totalValue * 10 + 23.2 * 10) / 10 : (totalValue * 10 - 23.2 * 10) / 10 })}
											name="checked8B"
											value={checkValue}
											color="primary"
										/>
									}
									label=""
								/>
								<ListItemText>Realização de tarefas administrativas e gerenciais que requerem dedicação integral por cerca de 2 horas em algum plantão, tais como: atividades de pesquisa, aplicação de protocolos, procedimentos de admissão e alta</ListItemText>
							</ListItem>
							<ListItem>
								<FormControlLabel
									control={
										<Checkbox
											checked={checked8C}
											onChange={handleChange({ checkValue: 30.0, totalValue: !checked8C ? (totalValue * 10 + 30.0 * 10) / 10 : (totalValue * 10 - 30.0 * 10) / 10 })}
											name="checked8C"
											value={checkValue}
											color="primary"
										/>
									}
									label=""
								/>
								<ListItemText>Realização de tarefas administrativas e gerenciais que requerem dedicação integral por cerca de 4 horas ou mais de tempo em algum plantão, tais como: morte e procedimentos de doação de órgãos, coordenação com outras disciplinas</ListItemText>
							</ListItem>
							<ListSubheader disableSticky={true} >Suporte Ventilatório</ListSubheader>
							<ListItem>
								<FormControlLabel
									control={
										<Checkbox
											checked={checked9}
											onChange={handleChange({ checkValue: 1.4, totalValue: !checked9 ? (totalValue * 10 + 1.4 * 10) / 10 : (totalValue * 10 - 1.4 * 10) / 10 })}
											name="checked9"
											value={checkValue}
											color="primary"
										/>
									}
									label=""
								/>
								<ListItemText>Qualquer Forma de Ventilação Mecânica/Ventilação Assistida Com ou Sem Pressão Expiratória Final Positiva, Com ou Sem Relaxantes Musculares; Respiração Espontânea Com ou Sem Pressão Expiratória Final Positiva (CPAP ou BIPAP), Com ou Sem Tubo Endotraqueal; Oxigênio Suplementar por Qualquer Método</ListItemText>
							</ListItem>
							<ListItem>
								<FormControlLabel
									control={
										<Checkbox
											checked={checked10}
											onChange={handleChange({ checkValue: 1.8, totalValue: !checked10 ? (totalValue * 10 + 1.8 * 10) / 10 : (totalValue * 10 - 1.8 * 10) / 10 })}
											name="checked10"
											value={checkValue}
											color="primary"
										/>
									}
									label=""
								/>
								<ListItemText>Cuidado com Vias Aéreas Artificiais. Tubo Endotraqueal ou Cânula de Traqueostomia</ListItemText>
							</ListItem>
							<ListItem>
								<FormControlLabel
									control={
										<Checkbox
											checked={checked11}
											onChange={handleChange({ checkValue: 4.4, totalValue: !checked11 ? (totalValue * 10 + 4.4 * 10) / 10 : (totalValue * 10 - 4.4 * 10) / 10 })}
											name="checked11"
											value={checkValue}
											color="primary"
										/>
									}
									label=""
								/>
								<ListItemText>Tratamento para Melhora da Função Pulmonar. Fisioterapia Torácica, Espirometria Estimulada, Terapia Inalatória e Aspiração Endotraqueal</ListItemText>
							</ListItem>
							<ListSubheader disableSticky={true} >Suporte Cardiovascular</ListSubheader>
							<ListItem>
								<FormControlLabel
									control={
										<Checkbox
											checked={checked12}
											onChange={handleChange({ checkValue: 1.2, totalValue: !checked12 ? (totalValue * 10 + 1.2 * 10) / 10 : (totalValue * 10 - 1.2 * 10) / 10 })}
											name="checked12"
											value={checkValue}
											color="primary"
										/>
									}
									label=""
								/>
								<ListItemText>Medicação Vasoativa, Independente do Tipo e Dose</ListItemText>
							</ListItem>
							<ListItem>
								<FormControlLabel
									control={
										<Checkbox
											checked={checked13}
											onChange={handleChange({ checkValue: 2.5, totalValue: !checked12 ? (totalValue * 10 + 2.5 * 10) / 10 : (totalValue * 10 - 2.5 * 10) / 10 })}
											name="checked13"
											value={checkValue}
											color="primary"
										/>
									}
									label=""
								/>
								<ListItemText>Reposição Intravenosa de Grandes Perdas de Fluídos, Independente do Tipo de Fluído Administrado</ListItemText>
							</ListItem>
							<ListItem>
								<FormControlLabel
									control={
										<Checkbox
											checked={checked14}
											onChange={handleChange({ checkValue: 1.7, totalValue: !checked14 ? (totalValue * 10 + 1.7 * 10) / 10 : (totalValue * 10 - 1.7 * 10) / 10 })}
											name="checked14"
											value={checkValue}
											color="primary"
										/>
									}
									label=""
								/>
								<ListItemText>Monitorização do Átrio Esquerdo. Cateter de Artéria Pulmonar Com ou Sem Medida do Débito Cardíaco</ListItemText>
							</ListItem>
							<ListItem>
								<FormControlLabel
									control={
										<Checkbox
											checked={checked15}
											onChange={handleChange({ checkValue: 7.1, totalValue: !checked15 ? (totalValue * 10 + 7.1 * 10) / 10 : (totalValue * 10 - 7.1 * 10) / 10 })}
											name="checked15"
											value={checkValue}
											color="primary"
										/>
									}
									label=""
								/>
								<ListItemText>Reanimação Cardiorrespiratória nas Últimas 24 Horas (Excluído Soco Precordial)</ListItemText>
							</ListItem>
							<ListSubheader disableSticky={true} >Suporte Renal</ListSubheader>
							<ListItem>
								<FormControlLabel
									control={
										<Checkbox
											checked={checked16}
											onChange={handleChange({ checkValue: 7.7, totalValue: !checked16 ? (totalValue * 10 + 7.7 * 10) / 10 : (totalValue * 10 - 7.7 * 10) / 10 })}
											name="checked16"
											value={checkValue}
											color="primary"
										/>
									}
									label=""
								/>
								<ListItemText>Técnicas de Hemofiltração/ Técnicas Dialíticas</ListItemText>
							</ListItem>
							<ListItem>
								<FormControlLabel
									control={
										<Checkbox
											checked={checked17}
											onChange={handleChange({ checkValue: 7.0, totalValue: !checked17 ? (totalValue * 10 + 7.0 * 10) / 10 : (totalValue * 10 - 7.0 * 10) / 10 })}
											name="checked17"
											value={checkValue}
											color="primary"
										/>
									}
									label=""
								/>
								<ListItemText>Reanimação Cardiorrespiratória nas Últimas 24 Horas (Excluído Soco Precordial)</ListItemText>
							</ListItem>
							<ListSubheader disableSticky={true} >Suporte Neurológico</ListSubheader>
							<ListItem>
								<FormControlLabel
									control={
										<Checkbox
											checked={checked18}
											onChange={handleChange({ checkValue: 1.6, totalValue: !checked18 ? (totalValue * 10 + 1.6 * 10) / 10 : (totalValue * 10 - 1.6 * 10) / 10 })}
											name="checked18"
											value={checkValue}
											color="primary"
										/>
									}
									label=""
								/>
								<ListItemText>Medida da Pressão Intracraniana (PIC)</ListItemText>
							</ListItem>
							<ListSubheader disableSticky={true} >Suporte Metabólico</ListSubheader>
							<ListItem>
								<FormControlLabel
									control={
										<Checkbox
											checked={checked19}
											onChange={handleChange({ checkValue: 1.3, totalValue: !checked19 ? (totalValue * 10 + 1.3 * 10) / 10 : (totalValue * 10 - 1.3 * 10) / 10 })}
											name="checked19"
											value={checkValue}
											color="primary"
										/>
									}
									label=""
								/>
								<ListItemText>Tratamento da Acidose/Alcalose Metabólica</ListItemText>
							</ListItem>
							<ListItem>
								<FormControlLabel
									control={
										<Checkbox
											checked={checked20}
											onChange={handleChange({ checkValue: 2.8, totalValue: !checked20 ? (totalValue * 10 + 2.8 * 10) / 10 : (totalValue * 10 - 2.8 * 10) / 10 })}
											name="checked20"
											value={checkValue}
											color="primary"
										/>
									}
									label=""
								/>
								<ListItemText>Nutrição Parenteral Total</ListItemText>
							</ListItem>
							<ListItem>
								<FormControlLabel
									control={
										<Checkbox
											checked={checked21}
											onChange={handleChange({ checkValue: 1.3, totalValue: !checked21 ? (totalValue * 10 + 1.3 * 10) / 10 : (totalValue * 10 - 1.3 * 10) / 10 })}
											name="checked21"
											value={checkValue}
											color="primary"
										/>
									}
									label=""
								/>
								<ListItemText>Alimentação Enteral por Sonda Gástrica ou Outra Via Gastrointestinal (p. ex.: Jejunostomia)</ListItemText>
							</ListItem>
							<ListSubheader disableSticky={true} >Intervenções Específicas</ListSubheader>
							<ListItem>
								<FormControlLabel
									control={
										<Checkbox
											checked={checked22}
											onChange={handleChange({ checkValue: 2.8, totalValue: !checked22 ? (totalValue * 10 + 2.8 * 10) / 10 : (totalValue * 10 - 2.8 * 10) / 10 })}
											name="checked22"
											value={checkValue}
											color="primary"
										/>
									}
									label=""
								/>
								<ListItemText>Intervenção(ões) Específica(s) na Unidade de Terapia Intensiva. Intubação Endotraqueal, Inserção de Marcapasso, Cardioversão, Endoscopias, Cirurgia de Emergência, Lavagem Gástrica, auxílio na passagem de cateter central pela equipe médica (em emergência), sondagem gástrica ou vesical, nas Últimas 24 Horas. Arteriais</ListItemText>
							</ListItem>
							<ListItem>
								<FormControlLabel
									control={
										<Checkbox
											checked={checked23}
											onChange={handleChange({ checkValue: 1.9, totalValue: !checked23 ? (totalValue * 10 + 1.9 * 10) / 10 : (totalValue * 10 - 1.9 * 10) / 10 })}
											name="checked23"
											value={checkValue}
											color="primary"
										/>
									}
									label=""
								/>
								<ListItemText>Intervenções Específicas Fora da Unidade de Terapia Intensiva</ListItemText>
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
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">{'Relatório de Score NAS'}</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						Você já atingiu 100% da pontuação de atividades diárias nesta medição, evite a sobrecarga de trabalho!
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary" autoFocus>
						OK
					</Button>
				</DialogActions>
			</Dialog>
		</Paper>
	</React.Fragment>)
}

export default Checklist