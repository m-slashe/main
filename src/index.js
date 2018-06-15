import config from './config';
import MainCtrl from './main/controller';
import AnotherCtrl from './another/another.controller';

import 'font-awesome/css/font-awesome.min.css';

import 'jquery';

import angular from 'angular';

import '@progress/kendo-ui/js/kendo.ui.core';

import '@progress/kendo-ui/js/kendo.combobox';

import '@progress/kendo-ui/css/web/kendo.common.min.css';
import '@progress/kendo-ui/css/web/kendo.metroblack.min.css';

import '@progress/kendo-ui/js/kendo.angular';
import 'angular-ui-router';

import loginModule from '../login/index';

angular.module('main', ['ui.router', loginModule.default])
	.config(config)
	.controller('MainCtrl', MainCtrl)
	.controller('AnotherCtrl', AnotherCtrl);

angular.bootstrap(window.document, ['main']);