import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {xfetch} from '../commons/Commons';

type LSState = {
	services: Array,
	isLoading: boolean,
}

class ListService extends React.Component<{}, LSState> {
	initialState: LSState
	constructor(props) {
		super(props);
		this.initialState = {
			services: [],
			isLoading: false,
		};
		this.state = this.initialState;
	}

	componentDidMount() {
		this.setState({isLoading: true});
		// xfetch é um método criado usando a biblioteca fetch para facilitar o trabalho
		// Olhar em commons/Commons.js
		xfetch('/services', {}, 'get')
			.then(res => res.json())
			.then(data => this.setState({services: data, isLoading: false}));
	}

	render() {
		const {services, isLoading} = this.state;

		if(isLoading) {
			return <div> Carregando <i className="fa fa-spinner fa-spin"/> </div>;
		}

		return (
			<div className="col-12 text-center">
				<table className="table table-hover">
					<thead>
						<tr>
							<th> Nome </th>
							<th> Valor </th>
							<th> Acao </th>
						</tr>
					</thead>
					<tbody>
						{services.map((v, k) => {
							return (
								<tr key={k}>
									<td> {v.name} </td>
									<td> R$ {v.value} </td>
									<td>
										<Link to={'/service/edit'+v.id}> 
											<i className="fa fa-edit"/> 
										</Link>
										&nbsp;|&nbsp;
										<Link to={'/service/'+v.id}> 
											<i className="fa fa-info"/> 
										</Link>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		);
	}
}

export default ListService;
