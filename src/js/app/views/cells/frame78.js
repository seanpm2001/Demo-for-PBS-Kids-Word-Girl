/*global define $ requestAnimationFrame*/
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
        Vars = require('app/models/vars'),
        UserEvent = require('app/events/user-event'),
        AppEvent = require('app/events/app-event'),
        CellView = require('app/views/cells/cell-view'),
        Frame;

    Frame = CellView.extend({
        initialize: function () {
            CellView.prototype.initialize.call(this);
            $('#home-btn').click(this.click.bind(this));
        },

        click: function (e) {
            //go to first frame
            console.log('goto..');
            AppEvent.trigger('goto', 0);
        },

		animate: function () {
            this.layers[3].x = this.layers[3].x < this.layers[3].origin.x + 60 ? this.layers[3].x + 0.5 : this.layers[3].origin.x + 60;
		},
		
		freeze: function () {
			var i;
            for (i = 0; i < this.layers.length; i += 1) {
                this.layers[i].x = this.layers[i].origin.x;
                this.layers[i].y = this.layers[i].origin.y;
                this.layers[i].rotation = 0;
            }
		}
    });

	return Frame;
});
