// @flow

import _ from 'lodash';

// eslint-disable-next-line
function Controller({ viewName }: {viewName: string}) {
	// eslint-disable-next-line
	return function (target: any) {
		return function (...args: Array<any>) {
			const injectHelper: Array<any> = _.zipObject(this.constructor.$inject, args);
			Object.assign(target.prototype, injectHelper);
			// eslint-disable-next-line
			const parentConstructor = target.prototype.constructor.__proto__;
			parentConstructor.call(target.prototype, injectHelper, viewName);
			if (target.prototype.onInit) { target.prototype.onInit(); }
		};
	};
}

export default Controller;
