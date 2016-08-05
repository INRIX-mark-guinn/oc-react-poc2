// This is the simplest example possible. I'm currently just using WebStorm's
// file-watchers to compile this but you could get the same effect (I think)
// with `babel ListControl.js > ListControl-compiled.js`.
define(function (require) {
    const { h, Component } = require('preact'),
          ReactControl = require('common/ui/ReactControl');

    class List extends Component {
        render(props, state) {
            return h(
                'ul',
                null,
                props.data.map(item => h(
                    'li',
                    null,
                    item.text
                ))
            );
        }
    }

    class ListControl extends ReactControl {
        /**
         * Constructs a Control instance
         *
         * @param {Object} attrs                    An object literal defining the attributes of the control.
         * @param {boolean} [autoRender=true]       Indicates whether the control renders automatically after construction if it has a valid HTMLElement instance to replace.
         */
        constructor(attrs = {}, autoRender) {
            super(List, attrs, autoRender);
            this.ocControlName = 'ListControl';
        }
    }

    return ListControl;
});

//# sourceMappingURL=ListControl-compiled.js.map