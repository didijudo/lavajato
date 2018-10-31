import React, { Component } from 'react';
import ListClient from './ListClient';

class Home extends Component<> {

  render() {
    return (
			<div>
				<div className="col-12 text-center">
					<div>		
						<h3> Lista de clientes </h3>
					</div>
				</div>
				<div className="col-12 text-center">
					<div> <hr/> </div>
					<ListClient />
				</div>
			</div>
    );
  }
}

export default Home;
