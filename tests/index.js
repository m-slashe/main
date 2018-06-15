import 'babel-polyfill';

import 'font-awesome/css/font-awesome.min.css';
import 'jquery';

import 'angular';
import 'angular-mocks';
import config from '../src/config';
import MainCtrl from '../src/main/controller';
import '@progress/kendo-ui/js/kendo.ui.core';
import '@progress/kendo-ui/js/kendo.combobox';
import '@progress/kendo-ui/css/web/kendo.common.min.css';
import '@progress/kendo-ui/css/web/kendo.metroblack.min.css';
import '@progress/kendo-ui/js/kendo.angular';
import 'angular-ui-router';
import loginModule from '../login/index';

angular.module('main', ['ui.router', loginModule])
    .config(config)
    .controller('MainCtrl', MainCtrl);

angular.bootstrap(window.document, ['main']);

const context = require.context('../src', true, /\.spec\.js$/);
context.keys().forEach(context);