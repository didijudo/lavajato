let Commons = {
	server: 'localhost',
	port: '8080',
};
export default Commons;

let xfetch = (url: string, method: string, type: string) => {
	if (!type) {
		type = 'application/json';
	}
	return fetch('http://'+Commons.server+':'+Commons.port+url, 
		{
			method: method,
			headers: new Headers({'content-type': type})
		});
}

export {xfetch};

