/* global $ */
// @flow
import './main.css';
import _ from 'lodash';
import Data from './data';

/**
 * Teste
 * @constructor
 */
class MainControler {
	value: number;

	$log: any;

	constructor(...args) {
		Object.assign(this, _.object(MainControler.$inject, args));
		this.title = 'HelloWorld!!!';
		this.$log.log('teste11111111');
		$('#teste').kendoComboBox({
			dataSource: {
				data: [-1, 0, 1],
			},
		});
	}

	static getFullName(user) {
		const { firstName, lastName } = user;
		return `${firstName} ${lastName}`;
	}

	static async teste() {
		return new Promise(resolve => resolve('teste3'));
	}

	/**
	 * Retorna as opções do combo
	 * @returns {{dataSource: {data: number[]}}} - Opções do combo
	 */
	static getComboOptions() {
		return {
			dataSource: {
				data: Data,
			},
		};
	}
}

MainControler.$inject = ['$log'];
export default MainControler;
