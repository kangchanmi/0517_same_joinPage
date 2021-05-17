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
    var inputVal = $("#inputArea input").val();

    $("#inputArea button").click(function () {
        if (inputVal != "") {
            alert("로그인 완료되었습니다.");
        } else {
            alert("공백은 입력할 수 없습니다.");
        }
    });


    /* ////////////////////////////////// 회원가입 /////////////////////////////////// */
    $("#allAgreeChk").click(function () {

        /* 전체동의 버튼 선택 / 해제 */
        var chk = $(this).prop("checked");

        if (chk == true) {
            $(".check").prop("checked", true);
        } else if (chk == false) {
            $(".check").prop("checked", false);
        }
        /* 전체동의 버튼 선택 / 해제 */
    });


    $(".check").click(function () {

        var chk1 = $("#chk1").prop("checked");
        var chk2 = $("#chk2").prop("checked");
        var chk3 = $("#chk3").prop("checked");
        var chk4 = $("#chk4").prop("checked");

        if (chk1 && chk2 && chk3 && chk4 == true) {
            $("#allAgreeChk").prop("checked", true);
        } else {
            $("#allAgreeChk").prop("checked", false);
        }


    });


    /* 이름 */
    /* 공백 입력 불가능 메세지 */
    var msg = "";

    $("#uName").focusout(function () {

        var uName = $("input#uName").val().trim();

        if (uName == "") {
            msg = "공백은 입력할 수 없습니다.";
        }
        /* 공백 입력 불가능 메세지 */

        var spanChk = $("#uName").next().is("span");


        if (spanChk) { // 중복 메세지 제거
            $("span#nameChkMsg").remove();
        }

        $("<span id='nameChkMsg'>" + msg + "</span>").insertAfter("#uName");
    });
    /* 이름 */



    /* 아이디 */
    $("#uID").focusout(function () {

        var uID = $("#uID").val().trim();

        if (uID == "") {
            msg = "공백은 입력할 수 없습니다.";
        }
        /* 공백 입력 불가능 메세지 */


        var spanChk = $("#uID").next().is("span");


        if (spanChk) { // 중복 메세지 제거
            $("span#idChkMsg").remove();
        }

        $("<span id='idChkMsg'>" + msg + "</span>").insertAfter("#uID");

    });
    /* 아이디 */




    /* 비밀번호 유효성 검사 */

    /* 비밀번호 불일치 검사 */
    $("#uPW_Re").focusout(function () {
        var uPW = $("#uPW").val().trim();
        var uPW_Re = $("#uPW_Re").val().trim();
        var pwChkMsg = "";

        var pwChk = $("#uPW_Re").next().is("span");

        if (uPW != "", uPW_Re != "") {
            if (uPW == uPW_Re) {
                pwChkMsg = "비밀번호가 일치합니다.";
            } else {
                pwChkMsg = "비밀번호가 일치하지 않습니다.";
            }
        } else {
            pwChkMsg = "공백은 입력할 수 없습니다.";
        }
        $("span#pwChkMsg").text(pwChkMsg);

        if (pwChk) {
            $("span#pwChkMsg").remove();
        }

        $("<span id ='pwChkMsg'>" + pwChkMsg + "</span>").insertAfter("#uPW_Re");

    });

    /* 비밀번호 유효성 검사 */


    /* 가입완료 안내 메세지 */

    $("button#Join").click(function () {

        if ($("#uName").val() == "" || $("#uID").val() == "" || $("#uPW").val() == "" || $("#uPW_Re").val() == "" || $("#Mail").val() == "") {
            alert("로그인 정보를 모두 입력해 주세요.");
        } else {
            alert("환영합니다!");
            location.href = "../index.html"
        }
    });
    /* 가입완료 안내 메세지 */



    /* 고객센터 메뉴 안내 메세지 */
    $("#gnb .custom").click(function () {
        alert("준비 중입니다");
    });
    /* 고객센터 메뉴 안내 메세지 */





}); /* function */
