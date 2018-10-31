import React from 'react';
import {xfetch} from '../commons/Commons';

type NCSState = {
	services: Array,
	client: object,
	inserted: boolean,
	isLoading: boolean,
}

class NewClientService extends React.Component<{}, NCSState> {
	initialState: NCSState
	constructor(props: NCSProps) {
		super(props);
		this.initialState = {
			client: {},
			services: [],
			serviceSelected: '',
			inserted: false,
			isLoading: false,
		};
		this.state = this.initialState;
	}

	componentDidMount() {
		this.setState({isLoading: true});
		xfetch('/client/'+this.props.match.params.clientId, {}, 'get')
			.then(resp => resp.json())
			.then(data => this.setState({client: data, isLoading: false})); 

		xfetch('/services', {}, 'get')
			.then(resp => resp.json())
			.then(data => this.setState({services: data, isLoading: false})); 
	}

	handleSubmit = (e: SynteticEvent<>) => {
		e.preventDefault();
		const data = {
			clientId: this.props.match.params.clientId,
			serviceId: this.state.serviceSelected,
		};

		/*xfetch('/wash/new', data, 'post')
			.then(res => res.json())
			.then(d => this.setState({inserted: true}));*/

	}

	handleChange = (e: SynteticEvent<>) => {
		console.log(e.target);
		this.setState({[e.target.name]: e.target.value})
	}

	render() {
		const {client, isLoading, services, inserted} = this.state;
		let resp = <div/>;
		if (inserted) {
			resp = (
				<div className='col-12 text-center'> 
					<label className='alert alert-success'>
						Cliente inserido com sucesso
					</label>
				</div>
			);
		}
		if(isLoading) {
			return ( 
				<div className="text-center col-12"> 
					Carregando 
					<i className="fa fa-spinner fa-spin"/>
				</div>
			);
		}
		return (
			<div className="col-12 text-center">
				{resp}
				<div className="col-12">
					<form onSubmit={this.handleSubmit}>
						<div className="form-row">
							<div className="col-12">
								<label className="form-control"disabled>
									{client.name + ' - '+ client.car }
								</label>

							</div>
							<div className="col-12">
								<select name='serviceSelected' className="form-control" onChange={this.handleChange}>
									<option/>
									{services.map((v, k) => {
										return (
											<option value={v.id} key={k}> {v.name} </option>
										);
									})}
								</select>
							</div>
							<div className="col" style={({margin: '20px'})}>
								<button className="btn btn-success"> Cadastrar </button>
							</div>
						</div>
					</form>	
				</div>
			</div>
		);
	}
}

export default NewClientService;
