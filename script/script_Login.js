/* eslint-disable */

$(function () {

    /* 헤더 GNB 메뉴 */
    $("#mainMenu>li").mouseover(function () {
        $(this).children("ul").stop().fadeIn(200);
    });
    $("#mainMenu>li").mouseout(function () {
        $(this).children("ul").stop().fadeOut(200);
    });
    /* 헤더 GNB 메뉴 */


    /* 맨 위로 이동 버튼 */
    /* 스크롤 내렸을 때 버튼 띄우기 */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $("#topBtn").fadeIn(200);
        } else {
            $("#topBtn").fadeOut(200);
        }
    });
    /* 스크롤 내렸을 때 버튼 띄우기 */


    /* 클릭시 맨 위로 이동 */
    $("#topBtn").click(function () {
        $(window).scrollTop(0);

    });
    /* 클릭시 맨 위로 이동 */
    /* 맨 위로 이동 버튼 */



    /* //////////////////////////////// 로그인 //////////////////////////////// */
    /* 공백 유효성 검사 */

    $("#inputArea button").click(function () {
        var inputVal = $("#inputArea input").val().trim();
        var regExp = /[^a-z|A-z|0-9|_]/;
        if ($("#uID").val() == "" || $("#uPW").val() == "") {
            alert("공백은 입력할 수 없습니다.");
        } else {
            if (regExp.test(inputVal)) {
                alert("영어, 숫자, 특수문자 _만 입력 가능합니다.");
            } else {
                alert("로그인 되었습니다.");
                location.href = "../index.html";
            }
        }
    });


    /* 로그인 배너 슬라이드 쇼 */
    setInterval(fnSlide, 8000);

    function fnSlide() {
        $("#bannerSlide a").fadeOut(1500);
        $("#bannerSlide a:nth-child(2)").fadeIn(1500);
        $("#bannerSlide").animate(1000,
            function () {
                $("#bannerSlide a:first-child").insertAfter("#bannerSlide a:last-child");
            });
    }



    /* 고객센터 메뉴 안내 메세지 */
    $("#gnb .custom").click(function () {
        alert("준비 중입니다");
    });
    /* 고객센터 메뉴 안내 메세지 */






}); /* function */
