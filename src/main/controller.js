/*global $*/
import './main.css';

class MainControler {

	constructor() {
		this.title = 'HelloWorld!!!';
		console.log('teste');
		$('#teste').kendoComboBox({
			dataSource: {
				data: [1, 2, 3]
			}
		});

	}

	async teste() {
		return await new Promise(resolve => resolve('teste3'));
	}

	/**
	 * Retorna as opções do combo
	 * @returns {{dataSource: {data: number[]}}} - Opções do combo
	 */
	getComboOptions() {
		return {
			dataSource: {
				data: [1, 2, 3]
			}
		};
	}

}

export default MainControler;