import config from "./config";
import LoginCtrl from "./controller";

const moduleName = 'login';

angular.module(moduleName, ['ui.router'])
    .config(config)
    .controller('LoginCtrl', LoginCtrl);

$('<ui-view></ui-view>').appendTo(document.body);

export default moduleName;