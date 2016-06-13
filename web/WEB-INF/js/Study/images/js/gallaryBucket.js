/**
 * Created by Naver on 2016-06-13.
 */
var nts = nts || {};

(function(nts) {
    nts.GallaryBucket = function(width, height) {
        this.width = width;
        this.height = height;
        var remainHeight = height;
        var list = [];

        /**
         * 버킷에 엘리먼트를 추가한다.
         * TODO 프로토타입화?
         *
         * @param element
         * @returns {boolean} 성공여부
         */
        this.add = function(element) {
            if (this.isRemainSpace(element.offsetHeight)) {
                list.push(element);
                return true;
            }

            return false;
        };

        /**
         * 버킷에 여유 공간이 있는지 확인한다.
         * TODO 프로토타입으로?
         *
         * @param height
         * @returns {boolean} 성공여부
         */
        this.isRemainSpace = function(height) {
            if (remainHeight >= height) {
                remainHeight = remainHeight - height;
                return true;
            }

            return false;
        };

        this.getList = function() {
            return list;
        };
    }
})(nts);