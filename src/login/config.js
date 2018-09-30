/*eslint-disable*/
import loginTemplate from './template.html';

function config($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('login', {
			url: '/login',
			template: loginTemplate,
			controller: 'LoginCtrl',
			controllerAs: 'login',
		});

	$urlRouterProvider.otherwise('/login');
}

config.$inject = ['$stateProvider', '$urlRouterProvider'];
export default config;
