/*global define*/
/**
 *
 * Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
define(function (require) {
	
	var Backbone = require('backbone'),
        AppEvent = require('app/events/app-event'),
		AppRouter,
        router;

    AppRouter = Backbone.Router.extend({
		routes: {
            '': 'index',
            'frame/:id': 'frame'
		},

        index: function () {
            router.navigate('frame/0');
        },

        frame: function (id) {

        }
	});

    router = new AppRouter();
	
	return router;
});
