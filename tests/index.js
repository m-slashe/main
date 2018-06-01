import 'babel-polyfill';
import config from '../src/config';
import MainCtrl from '../src/main/controller';

import 'jquery';
import angular from 'angular';
import '@progress/kendo-ui/js/kendo.ui.core';
import '@progress/kendo-ui/js/kendo.combobox';

import '@progress/kendo-ui/js/kendo.angular';
import 'angular-ui-router';

angular.module('main', ['ui.router'])
    .config(config)
    .controller('MainCtrl', MainCtrl);

import 'angular-mocks';
import '../src/main/controller.spec';