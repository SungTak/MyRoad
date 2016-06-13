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

        var buckets = [];

        this.options = {};

        this.init = function(options) {
            this.options = options || defaultOptions;

            createElements(this.options);
        };

        this.bucketInit = function() {
            for (var i = 0; i < 800; i = i + 200) {
                buckets.push(new nts.GallaryBucket(200, 800));
            }

            var lis = this.options.selector.children("li");

            for (i = 0; i < lis.length; i++) {
                addBucket(buckets, lis[i]);
            }

            addGallary(buckets, this.options.selector);
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
                aElement.html(imageElement);

                var liElement = jQuery("<li>");
                liElement.html(aElement);
                liElement.width(200); //default width

                imageList.append(liElement);
            }
        }

        function addBucket(buckets, element) {
            for (var i = 0; i < buckets.length; i++) {
                var isSave = buckets[i].add(element);
                if (isSave) {
                    break;
                }
            }
        }


        function addGallary(buckets, selector) {
            selector.empty();

            for (var i = 0; i < buckets.length; i++) {
                var list = buckets[i].getList();
                for (var j = 0; j < list.length; j++) {
                    selector.append(list[j]);
                }
            }
        }

    }

    return Gallary;
})();