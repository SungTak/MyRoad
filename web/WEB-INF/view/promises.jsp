<%--
  Created by IntelliJ IDEA.
  User: SeongTak.Yoon
  Date: 2016-01-26
  Time: 오전 11:46
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<div class="page">

</div>
<button id="call"></button>
<script src="https://google.github.io/traceur-compiler/bin/traceur.js"></script>
<script src="https://google.github.io/traceur-compiler/src/bootstrap.js"></script>
<script type="module">
    window.onload = function() {
        var button = documents.getElementById("call");
        button.addEventListener("click", function() {
            test1();
        });
    }

    function getAjax(url) {
        return new Promise(function(resolve, reject) {
            $.ajax({
                url: url,
                type: 'get',
                dataType: 'text',
                success: function(result) {
                    resolve(result);
                },
                error: function(err) {
                    reject(err);
                }
            });
        });
    }

    function getAjaxJson(url) {
          return getAjax(url).then(JSON.parse);
    }

    function addContents(contents){
        $(".page").append(contents).append("<p><p>");
    }



    function test1(){

        /*

        /ajaxTest =   {  title   :  <h1>치약에 뭐가 들어 있나?</h1>
                        chapterUrls : [ chapter1.json, chapter2.json, chapter3.json, chapter4.json, chapter5.json]
                    }
        */

        getAjaxJson("/ajaxTest").then(function(contents){
            addContents(contents.title);
            contents.chapterUrls.map(function(chapterUrl){
                console.log(chapterUrl);
                getAjaxJson(chapterUrl).then(function(chapter){
                    addContents(chapter.content);
                });
            });


        });

    }
</script>
</body>
</html>