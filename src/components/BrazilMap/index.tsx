import StateAcre from './state-acre'
import StateAmapa from './state-amapa'
import StateAmazonas from './state-amazonas'
import StateDF from './state-brasilia'
import StateGoias from './state-goias'
import StateMaranhao from './state-maranhao'
import StateMatoGrossoDoSul from './state-mato-grosso-do-sul'
import StatePara from './state-para'
import StatePernambuco from './state-pernambuco'
import StateRondonia from './state-rondonia'
import StateTocantins from './state-tocantins'
import StateSaoPaulo from './state-sao-paulo'
import StateMinasGerais from './state-minas-gerais'
import StateMatoGrosso from './state-mato-grosso'
import StateRioGrandeDoSul from './state-rio-grande-do-sul'
import StateSantaCatarina from './state-santa-catarina'
import StateParana from './state-parana'
import StateCeara from './state-ceara'
import StatePiaui from './state-piaui'
import StateAlagoas from './state-alagoas'
import StateBahia from './state-bahia'
import StateEspiritoSanto from './state-espirito-santo'
import StateParaiba from './state-paraiba-'
import StateRioGrandeDoNorte from './state-rio-grande-do-norte'
import StateSergipe from './state-sergipe'

export default function BrazilMap() {

	return (
		<svg baseProfile="tiny" fill="currentColor" height="auto" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5" version="1.2" viewBox="0 0 1000 921" width="auto" xmlns="http://www.w3.org/2000/svg">
			<StateAcre />
			<StateGoias />
			<StateAmazonas />
			<StatePernambuco />
			<StateMaranhao />
			<StatePara />
			<StateRondonia />
			<StateTocantins />
			<StateDF />
			<StateMatoGrossoDoSul />
			<StateAmapa />
			<StateSaoPaulo />
			<StateMinasGerais />
			<StateMatoGrosso />
			<StateRioGrandeDoSul />
			<StateSantaCatarina />
			<StateParana />
			<StateCeara />
			<StatePiaui />
			<StateAlagoas />
			<StateBahia />
			<StateEspiritoSanto />
			<StateParaiba />
			<StateRioGrandeDoNorte />
			<StateSergipe />
		</svg>
	)
}