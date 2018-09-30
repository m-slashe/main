// @flow
import './main.css';
import { Controller } from '../../decorators';

declare var $: any;

class FatherController {
	$log: any;

	constructor(args: Array<any>, viewName: string) {
		this.$log.log(args);
		this.$log.log(viewName);
	}
}

/**
 * Teste
 * @constructor
 */
@Controller({ viewName: 'AnotherView' })
class MainController extends FatherController {
	value: number;

	$log: any;

	title: string;

	static $inject: Array<string>;

	onInit() {
		this.$log.log('TOOOOP');
		this.title = 'HelloWorld!!!';
		this.$log.log('teste1111111151');
		$('#teste').kendoComboBox({
			dataSource: {
				data: [-1, 0, 1],
			},
		});
	}

	static getFullName(user: {firstName: string, lastName: string}) {
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
				data: [-1, 0, 1],
			},
		};
	}
}

MainController.$inject = ['$log'];
export default MainController;
