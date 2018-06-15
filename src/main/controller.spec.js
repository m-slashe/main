/*global describe beforeEach inject it expect*/
import angular from 'angular';

describe('Main', function () {

	beforeEach(angular.mock.module('main'));

	beforeEach(inject(function ($rootScope, $controller) {
		let $scope = $rootScope.$new();

		this.controller = $controller('MainCtrl', {
			$scope
		});
	}));

	it('Titulo deve ser HelloWorld', function () {
		expect(this.controller.title).toBe('HelloWorld!!!');
	});

	it('Deve suportar async await', async function () {
		await new Promise(resolve => setTimeout(resolve, 1000));
	});

});