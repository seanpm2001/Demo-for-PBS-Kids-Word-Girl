/*global require*/

require.config({
    shim: {
    },

    paths: {
        jquery: 'vendor/jquery/jquery',
        underscore: 'vendor/underscore-amd/underscore',
	    backbone: 'vendor/backbone-amd/backbone',
        raf: 'vendor/RequestAnimationFrame'
    }
});

require(['jquery', 'underscore', 'app']);