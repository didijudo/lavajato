import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {xfetch} from '../commons/Commons';
import {Table, Label} from 'semantic-ui-react';

type LCState = {
	clients: Array,
	isLoading: boolean,
}

class ListClient extends React.Component<{}, LCState> {
	initialState: LCState
	constructor(props) {
		super(props);
		this.initialState = {
			clients: [],
			isLoading: false,
		};
		this.state = this.initialState;
	}

	componentDidMount() {
		this.setState({isLoading: true});
		// xfetch é um método criado usando a biblioteca fetch para facilitar o trabalho
		// Olhar em commons/Commons.js
		xfetch('/clients', {}, 'get')
			.then(res => res.json())
			.then(data => this.setState({clients: data, isLoading: false}));
	}

	render() {
		const {clients, isLoading} = this.state;

		if(isLoading) {
			return <div> Carregando <i className="fa fa-spinner fa-spin"/> </div>;
		}

		return (
			<div className="col-12 text-center">
				<Table celled>
					<Table.Header>
						<Table.Row>
							<Table.HeaderCell>Nome</Table.HeaderCell>
							<Table.HeaderCell>Telefone</Table.HeaderCell>
							<Table.HeaderCell>Carro</Table.HeaderCell>
							<Table.HeaderCell>Acao</Table.HeaderCell>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						{clients.map((v, k) => {
							return (
								<Table.Row key={k}>
									<Table.Cell>
										<Label ribbon>{v.name}</Label>
									</Table.Cell>
									<Table.Cell>{v.phone}</Table.Cell>
									<Table.Cell>{v.car}</Table.Cell>
									<Table.Cell>
										<Link to={'/wash/'+v.id}> 
											<span title='Novo Servico' className="fa fa-plus"/>
										</Link>
										&nbsp;|&nbsp;
										<Link to={'/detail/'+v.id}> 
											<span title='Informações' className="fa fa-info"/>
										</Link>
									</Table.Cell>
								</Table.Row>
							);
						})}
					</Table.Body>
				</Table>
			</div>
		);
	}
}

export default ListClient;
