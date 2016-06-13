/**
 * Created by Naver on 2016-05-23.
 */
var nts = nts || {};

nts.GallaryEventHandler = (function() {

    function GallaryEventHandler(options) {
        this.options = options;

        this.change = function() {
            var $imageController = this.options.welImageController;
            $imageController.on('change', changeWidth.bind(this));
        };

        this.each = function(fCallback) {
            var $imageContorller = this.options.gallarySelector;
            var elAImages = $imageContorller.find('a');
            jQuery.each(elAImages, function( index, item) {
                $(item).on("click", fCallback);
            });
        };

        function changeWidth(event) {
            var gallary = this.options.gallarySelector;
            var width = this.options.welImageController.val();

            var elImageItems = gallary.children();

            jQuery.each(elImageItems, function( index, item ) {
                $(item).css('width', width);
            });

        }

        function eachClick(event) {
            event.preventDefault();


        }
    }

    return GallaryEventHandler;
})();