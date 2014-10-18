/**
 * Created by Samuel on 01/10/2014.
 */
ProyInt1.app = (function(){
    var application;

    function initApplication(){

        application = new kendo.mobile.Application(document.body,{
            transition: 'slide',
            layout:'mainLayout',
            skin: "android-light"
        });
    }

    function getApplication(){
        return application;
    }

    return{
        initApplication:initApplication,
        getApplication: getApplication
    };
})(window);