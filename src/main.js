import angular from 'angular';

import 'font-awesome/css/font-awesome.min.css';

import 'jquery';

import '@progress/kendo-ui/js/kendo.ui.core';

import '@progress/kendo-ui/js/kendo.combobox';

import '@progress/kendo-ui/css/web/kendo.common.min.css';
import '@progress/kendo-ui/css/web/kendo.metroblack.min.css';

import '@progress/kendo-ui/js/kendo.angular';
import 'angular-ui-router';

import config from './config';
import loginModule from '../login';
import AnotherController from './components/another/AnotherCtrl';
import MainController from './components/main/MainCtrl';

angular.module('main', ['ui.router', loginModule])
	.config(config)
	.controller('MainController', MainController)
	.controller('AnotherController', AnotherController);

// eslint-disable-next-line
angular.bootstrap(window.document, ['main']);
