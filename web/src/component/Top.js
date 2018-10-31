import React, { Component } from 'react';
import {Grid, Header, Icon} from 'semantic-ui-react'
import { Link } from 'react-router-dom';

class Top extends Component<{}, any> {
	constructor(props) {
		super(props);
		this.state = {
			activeItem: 'home',
		};
	}

	handleItemClick = (e: SysteticEvent<>, {name, value}) => {
		this.setState({activeItem: name});
	}

  render() {
    return (
			<div>
				<Grid style={({margin: '15px'})} textAlign='center'>
					<Grid.Column width={16}>
						<Header as='h2' icon textAlign='center'>
							<Icon name='car' circular />
							<Header.Content>
								Nosso Lava Jato
							</Header.Content>
						</Header>
					</Grid.Column>
				</Grid>
				<div className='col-12 text-center' style={({margin: '20px'})}>
					<Link to='/' style={({margin: '10px'})}> Home </Link>
					<Link to='/client/new' style={({margin: '10px'})}> Novo Cliente </Link>
					<Link to='/service/new' style={({margin: '10px'})}> Criar Serviço </Link>
				</div>
			</div>
    );
  }
}

export default Top;
