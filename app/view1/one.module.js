/**
 * Created by volkov_p_v@livebs.ru on 01.2016.
 */

'use strict';

module.exports = function(angular){
    angular
        .module('myApp.viewOne')
        .controller('oneCtrl', oneCtrl);

    function oneCtrl(){
        var vm = this;
        vm.loadAdvanced = 20
    }
};