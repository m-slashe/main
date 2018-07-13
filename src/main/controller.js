/*global $*/
import './main.css';
import Data from './data';

class MainControler {

	constructor($log) {
		this.title = 'HelloWorld!!!';
		$log.log('teste1');
		$('#teste').kendoComboBox({
			dataSource: {
				data: Data
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
				data: Data
			}
		};
	}

}

MainControler.$inject = ['$log'];
export default MainControler;