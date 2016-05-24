/**
 * Created by Naver on 2016-05-23.
 */
var nts = nts || {};

nts.GallaryEventHandler = (function() {

    function GallaryEventHandler() {
        this.options = {};

        this.change = function(options) {
            this.options = options;
            var $imageController = options.welImageController;
            $imageController.on('change', changeWidth.bind(this));
        };

        function changeWidth(event) {
            var gallary = this.options.gallarySelector;
            var width = this.options.welImageController.val();

            var elImageItems = gallary.children();

            jQuery.each(elImageItems, function( index, item ) {
                $(item).css('width', width);
            });

        }
    }

    return GallaryEventHandler;
})();