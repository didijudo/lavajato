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
			<Grid style={({margin: '15px'})} textAlign='center'>
				<Grid.Column width={16}>
					<Header as='h2' icon textAlign='center'>
						<Icon name='car' circular />
						<Header.Content>
							Nosso Lava Jato
						</Header.Content>
					</Header>
				</Grid.Column>
				<Grid witdth={16}>
					<Link to='/'> Home </Link>
					<Link to='/client/new'> Novo Cliente </Link>
					<Link to='/wash/new'> Nova Lavagem </Link>
				</Grid>
			</Grid>
    );
  }
}

export default Top;
