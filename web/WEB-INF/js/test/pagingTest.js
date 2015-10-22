/**
 * Created by Naver on 2015-10-21.
 */
test("paging.js", function() {

    equal("", createPage(0, 1, 10, "search"));

    document.getElementById("page").innerHTML = createPage(100, 1, 10, "search");

});