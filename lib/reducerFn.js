"use strict";

/* eslint no-case-declarations: 0 */
/**
 * Reducer contructor
 * @param  {Object}   initialState default initial state
 * @param  {Object}   actions      actions map
 * @param  {Function} transformer  transformer function
 * @param  {Function} reducer      custom reducer function
 * @return {Function}              reducer function
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducerFn;
function reducerFn(initialState) {
  var actions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var reducer = arguments[2];
  var actionFetch = actions.actionFetch,
      actionSuccess = actions.actionSuccess,
      actionFail = actions.actionFail,
      actionReset = actions.actionReset;

  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
      case actionFetch:
        return _extends({}, state, {
          loading: true,
          error: null,
          syncing: !!action.syncing
        });
      case actionSuccess:
        return _extends({}, state, {
          loading: false,
          sync: true,
          syncing: false,
          error: null,
          data: action.data
        });
      case actionFail:
        return _extends({}, state, {
          loading: false,
          error: action.error,
          syncing: false
        });
      case actionReset:
        var mutation = action.mutation;

        return mutation === "sync" ? _extends({}, state, { sync: false }) : _extends({}, initialState);
      default:
        return reducer ? reducer(state, action) : state;
    }
  };
}
module.exports = exports["default"];
//# sourceMappingURL=reducerFn.js.map