/* eslint require-jsdoc: 0 */
import mainTemplate from './components/main/template.html';

function config($stateProvider) {
	$stateProvider
		.state('login.main', {
			url: '/main',
			template: mainTemplate,
			controller: 'MainCtrl',
			controllerAs: 'main',
		});
}

config.$inject = ['$stateProvider'];
export default config;
