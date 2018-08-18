/* global inject */
/* eslint no-magic-numbers: 0 */
import angular from 'angular';

describe('Main', () => {
	beforeEach(angular.mock.module('main'));

	beforeEach(inject(function ($rootScope, $controller) {
		const $scope = $rootScope.$new();

		this.controller = $controller('MainCtrl', {
			$scope,
		});
	}));

	it('Titulo deve ser HelloWorld', function () {
		expect(this.controller.title).toBe('HelloWorld!!!');
	});

	it('Deve suportar async await', async () => {
		await new Promise(resolve => setTimeout(resolve, 1000));
	});
});
