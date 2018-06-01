import config from './config';
import MainCtrl from './main/controller';

import(/* webpackChunkName: "font-awesome"*/ 'font-awesome/css/font-awesome.min.css');

import(/* webpackChunkName: "jquery" */ 'jquery');
import(/* webpackChunkName: "angular" */ 'angular').then(async angular => {
    await import(/* webpackChunkName: "kendo-core"*/ '@progress/kendo-ui/js/kendo.ui.core');
    await import(/* webpackChunkName: "kendo-combobox"*/ '@progress/kendo-ui/js/kendo.combobox');

    import(/* webpackChunkName: "kendo-css-common"*/ '@progress/kendo-ui/css/web/kendo.common.min.css');
    import(/* webpackChunkName: "kendo-css-theme"*/ '@progress/kendo-ui/css/web/kendo.metroblack.min.css');

    import(/* webpackChunkName: "kendo-angular"*/ '@progress/kendo-ui/js/kendo.angular');
    await import(/* webpackChunkName: "ui-router" */ 'angular-ui-router');
    const loginModule = await import(/* webpackChunkName: "login" */ '../login/index');

    angular.module('main', ['ui.router', loginModule.default])
        .config(config)
        .controller('MainCtrl', MainCtrl);

    angular.bootstrap(window.document, ['main']);
});
