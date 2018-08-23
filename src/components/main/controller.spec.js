/* global inject */
/* eslint no-magic-numbers: 0 */
import angular from 'angular';

describe('Main', () => {
	beforeEach(angular.mock.module('main'));

	beforeEach(inject(function ($rootScope, $controller, $timeout) {
		const $scope = $rootScope.$new();
		this.$timeout = $timeout;

		this.controller = $controller('MainCtrl', {
			$scope,
		});
	}));

	it('Titulo deve ser HelloWorld', function () {
		expect(this.controller.title).toBe('HelloWorld!!!');
	});

	it('Deve suportar async await', async function () {
		await new Promise(resolve => this.$timeout(resolve, 1000));
	});
});
