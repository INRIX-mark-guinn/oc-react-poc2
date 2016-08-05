define(function (require) {
    'use strict';

    const
        ModuleView = require('common/platform/ModuleView'),
        ListControl = require('$MODULE_PATH/ListControl-compiled');

    return class extends ModuleView {
        beforeStart () {
            return super.beforeStart().then(() => {
                Log.debug("view beforeStart()");
                new ListControl({
                    data: [
                        {
                            text: 'Item 1',
                        },
                        {
                            text: 'Item 2',
                        },
                        {
                            text: 'Item 3'
                        }
                    ]
                }).render(this.getView());
            });
        }
    };
});
