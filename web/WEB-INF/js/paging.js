/**
 * Created by Naver on 2015-10-21.
 */
function createPage(nTotalCnt, currentPage, nViewPageCnt, callFunc) {
    if (nTotalCnt === 0) {
        return "";
    }

    var totalCnt = parseInt(nTotalCnt); // 전체 채널 개수
    var pageCntPerPage = parseInt(nViewPageCnt); // 한 화면에 보여줄 페이지 개수

    var page = parseInt(currentPage); // 현재 페이지

    if (totalCnt != 0) {
        pageCnt = parseInt(totalCnt / pageCntPerPage);

        if (totalCnt % pageCntPerPage != 0) {
            pageCnt++;
        }
    }

    // 페이지가 10개 이하는 디폴트 값
    var startPage = 1;
    var endPage = pageCnt;

    // 페이지 10개 이상 있으면 동적으로 페이징한다.
    if (pageCnt / pageCntPerPage > 1) {
        if (page > 5 && currentPage + 5 < pageCnt) {
            // 6번째 페이지부터 페이징 숫자가 동적으로 변화하다가 현재 페이지의 +5가 마지막 페이지면 다시 고정이된다.
            startPage = currentPage - pageCntPerPage / 2;
            endPage = currentPage + pageCntPerPage / 2;
        } else if (page <= 5) {
            // 1 ~ 5페이지 부분
            startPage = 1;
            endPage = pageCntPerPage;
        } else {
            // 마지막 페이지 부분
            startPage = endPage - pageCntPerPage;
            endPage = pageCnt;
        }
    }

    var prePage = currentPage - 1;
    var nextPage = currentPage + 1;

    var pageHtml = "<center>";
    if (currentPage != 1) {
        pageHtml += "<a href=\"javascript:" + callFunc + "("+ prePage + ");\" class='pre'>이전</a>";
    }

    for (var i = startPage; i <= endPage; i++) {
        if (currentPage == i) {
            //$('#currentPage').attr('value', i);
            pageHtml += "<a href=\"javascript:" + callFunc + "(" + i + ");\" class='current'>" + i + "</a>";
        } else {
            pageHtml += "<a href=\"javascript:" + callFunc + "(" + i + ");\" class='ajax'>"	+ i + "</a>";
        }
    }

    if (currentPage != endPage) {
        pageHtml += "<a href=\"javascript:" + callFunc + "(" + nextPage + ");\" class='next'>다음</a>";
    }

    pageHtml += "</center>";

    return pageHtml;
}