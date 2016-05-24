/**
 * Created by Naver on 2016-05-23.
 */
var nts = nts || {};

nts.Gallary = (function() {

    function Gallary() {
        var defaultOptions = {
            images : {},
            selector : undefined
        };

        this.options = {};

        this.init = function(options) {
            this.options = options || defaultOptions;

            createElements(this.options);
        };

        this.getSelector = function() {
            return this.options.selector;
        };

        function createElements(options) {
            var imagesPath = options.images;
            var imageList = options.selector;

            /*
             * <li>
             *     <a href="#">
             *         <img src="disney/image01.jpeg" />
             *     </a>
             * </li>
             */
            for (var i = 0; i < imagesPath.length; i++) {
                var imageElement = jQuery("<img>");

                imageElement.attr("src", imagesPath[i]);

                var aElement = jQuery("<a>");
                aElement.attr("href", "#");

                imageElement.html(aElement);

                var liElement = jQuery("<li>");
                liElement.html(imageElement);

                imageList.append(liElement);
            }
        }

    }

    return Gallary;
})();