define(['jquery'], function ($) {

    /**
     * Tab
     * @class
     * @param {DOM} container
     */
    function Tab(container) {
        container = $(container);
        if (container.data('Tab')) return container.data('Tab');
        if (!(this instanceof Tab)) return new Tab(container);
        this.container = container;
        this.container.data('Tab', this);
        this.pos = 0;
        this.content = this.container.find('.mod-tab__content').eq(this.pos);
        this.nav = this.container.find('.mod-tab__ul');
        this.curNav = this.nav.find('.mod-tab__li').eq(this.pos);
        this.hasInitForcast = false;
        this.init();
    }
    Tab.prototype = {
        constructor: Tab,
        init: function () {
            var self = this;
            this.nav.on('click', 'a', function (e) {
                e.preventDefault();
                var that = $(this),
                    href = that.attr('href'),
                    next = that.closest('.mod-tab__li');
                if (href && next[0] !== self.curNav[0]) {
                    self.content.hide();
                    self.curNav.removeClass('mod-tab__li_current');
                    self.content = self.container.find(href);
                    self.curNav = that.closest('.mod-tab__li');
                    self.content.show();
                    self.curNav.addClass('mod-tab__li_current');
                    self.container.trigger('changeTab', href);
                }
            });
            return this;
        },
        /**
         * on
         * @param {String} event
         * @param {Function} cb
         */
        on: function (event, cb) {
            if (event === 'forecast') this._initForcast();
            this.container.on(event, cb);
            return this;
        },
        _initForcast: function () {
            var self = this;
            if (!this.hasInitForcast) {
                this.nav.on('mouseenter', 'a', function (e) {
                    var that = $(this),
                        href = that.attr('href');
                    self.container.trigger('forecast', href);
                });
                this.hasInitForcast = true;
            }
            return this
        }
    };

    /**
     * all
     * @param {DOM} selector
     */
    Tab.all = function (selector) {
        $(selector).find('.mod-tab').each(function (i, ele) {
            new Tab(ele);
        });
    };

    return Tab;

});
