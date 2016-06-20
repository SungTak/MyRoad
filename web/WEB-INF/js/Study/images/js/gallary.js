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
            var bucketWidth = 200;
            var bucketHeight = 800;
            var gallaryWidth = 1000;

            for (var i = 0; i < gallaryWidth; i = i + bucketWidth) {
                buckets.push(new nts.GallaryBucket(bucketWidth, bucketHeight));
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
                liElement.width(200); //default init width

                imageList.append(liElement);
            }
        }

        function addBucket(buckets, element) {
            for (var i = 0; i < buckets.length; i++) {
                var isSave = buckets[i].add(element);
                // 담을 수 있으면 해당 버킷에 담고 바로 끝
                if (isSave) {
                    break;
                }
            }
        }


        function addGallary(buckets, selector) {
            selector.empty();

            for (var i = 0; i < buckets.length; i++) {
                var divBucket = jQuery("<div>");
                divBucket.css("position", "relative");
                divBucket.css("float", "left");
                var list = buckets[i].getList();
                selector.append(divBucket);
                for (var j = 0; j < list.length; j++) {
                    divBucket.append(list[j]);
                }
            }
        }

    }

    return Gallary;
})();