$(function() {

  var ieTest = true;
  var screenWidth = $(window).width();
  var screenHeight = $(window).height();

  if (screenWidth <= 600) {
    isMobile = true;
  } else {
    isMobile = false;
  }

  if (isMobile==true){
		var imgUrl = "http://img.khan.co.kr/spko/storytelling/2019/projapan/";
		var m_url = "intro-bg-1-m.png";
		$(".bg--1 img").attr("src", imgUrl+m_url);
		$(".bg--2").html("");

  } else {
  }


  if (navigator.userAgent.indexOf("Trident") != -1) {
    if (navigator.userAgent.match(/Trident\/(\d.\d)/i)[1] == '5.0' || navigator.userAgent.indexOf('9.0') != -1) {
      ieTest = false;
    }

  }

  //새로고침시 최상단
  window.onbeforeunload = function() {
    window.scrollTo(0, 0);
  }


  // 인트로애니메이션
  var bi = 0;
  var bi2 = 0;
  var $bg = $(".animation-bg .bg--puzzle img");

  $(".header").animate({
    "top": "0px"
  }, 300, 'easeOutCubic');

  function showTitle() {
    $(".intro .intro-wrap .cover-shadow").fadeIn();
    //$(".intro .intro-wrap .deem").fadeIn(function() {
      $(".title-con").addClass("zoom");
      setTimeout(function() {$(".btn-holder").fadeIn();}, 500);
    //});
  }

  function bgFade() {
    $bg.eq(bi).css({"opacity": "1","right": "0px"});
    bi++;
    if (bi < $bg.length) setTimeout(function() {
      bgFade();
    }, 200);
    if (bi == $bg.length) setTimeout(function() {
      showTitle();
    }, 500);
  }

  function bgFadeOut() {
    $bg.eq(bi2).css({"opacity": "0","right": "200px"});
    bi2++;
    if (bi2 < $bg.length) setTimeout(function() {
      bgFadeOut();
    }, 200);
  }

  $(".intro .intro-wrap .start-btn").on("mouseenter", function() {
    $(".go-start").fadeOut();
  });
  // 인트로애니메이션

	$("#introNext").on("click", function() {
		//$(".title-con").removeClass("zoom");
		$(".deem").fadeOut();
		$(".intro .intro-wrap .cover-shadow").fadeOut();
			bgFadeOut();
			$(".animation-bg").hide();
			$(".intro-con").fadeOut(function(){
				$(".intro-box").fadeIn(function() {
					$(".intro-box h2").addClass("title-show");
					$(".box-outer").slideDown(1000, 'easeInOutBack', function(){
					  $(".intro-box .start-btn").fadeIn();
					});

				});
			});
	});

	$("#introMove").on("click", function() {
		$(this).hide();
		$(".intro-box h2").removeClass("title-show");
		$(".box-outer").slideUp(1000, 'easeInOutBack', function() {
		  $(".intro-box").fadeOut( function(){
			var makeCenterS = (screenHeight-$(".select-type").height())/2;
			$(".select-type").css({"top": makeCenterS});
			$(".select-type").fadeIn(1000);
		  });
		});
	});

    var testNum = 0;
    var typeList = []; // 타입별 목록을 따로 담음

    //친일파 타입을 선택하면 해당하는 질문 뿌려주고 질문 영역으로 넘어감
	$(".select-type .type-list-holder li").on("click", function(e){
		var ti = $(this).index();
		var tv = $(this).attr("type");
		console.log(tv+"을 선택");

		japanList.forEach(function(v,i,a){
			if(japanList[i].type == tv){
				typeList.push(japanList[i]);
			}
		});

		typeList.forEach(function(v,i,a){
			typeList[i].point = 0;
		});

		console.log(typeList);

		//질문뿌리기
		makeQuestion(tv);
		$(".intro").fadeOut(1000, function(){
			$(".fixed-type p").html(selectType(ti+1));
			$(".que-area").fadeIn();
			flyingIn(testNum);

			$(".each-anw").on("click", function(e) {
				e.preventDefault();

				if ($(".each-qna").eq(testNum).find(".anw").length > 2) { // OX 가 아님
				  aN = Number($(this).index() + 1); // 차례대로 1,2,3,4 값을 보냄
				} else { //OX
				  aN = ($(this).index() == 0) ? 1 : 2; //yes면 1, 아니면 2을 보냄
				}

				check(Number($(this).index() + 1));

				return false;

			});
			// 질문에서 답변 클릭 끝

		});
	});

	function selectType(i) {
	  switch (i) {
		case 1:
		  return "조선 귀족들";
		  break;
		case 2:
		  return "일본군인·밀정";
		  break;
		case 3:
		  return "법관·관료·경찰";
		  break;
		case 4:
		  return "학자·언론인";
		  break;
		case 5:
		  return "문화예술인";
		  break;
		case 6:
		  return "기업인·종교인";
		  break;
	  }

	}



  //보기 설명 버튼 클릭
  $(".more-info").on("click", function(e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    $(this).hide();
    $(".more-info-close").fadeIn();
    var queBox = $(this).parent(".anw-box").parent(".qna-wrap").parent(".each-qna");
    $(this).siblings(".anw").children(".hidden").slideDown(function() {
      var makeCenterTem = (screenHeight - queBox.height()) / 2;
      queBox.animate({
        "top": makeCenterTem
      }, 500);
    });

  });

  $(".more-info-close").on("click", function(e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    $(this).hide();
    $(".more-info").fadeIn();
    var queBox = $(this).parent(".anw-box").parent(".qna-wrap").parent(".each-qna");
    $(this).siblings(".anw").children(".hidden").slideUp(function() {
      var makeCenterTem = (screenHeight - queBox.height()) / 2;
      queBox.animate({
        "top": makeCenterTem
      }, 500);
    });

  });
  //보기 설명 버튼 클릭


	/*** ▼▼▼  새로 추가된 함수들. 함수명 체크해주세요 YJ  ▼▼▼ ***/

	///////  질문 애니메이션  ///////
    function flyingOut(i){

		//애니메이션 동작하면 클릭포인트 차단
		var que = $(".que-list .qna-holder .each-qna-holder");
		que.find(".anw-box").addClass("block");

		var obC = 0;
		var $ob = que.eq(i).find(".flyOb");

		function eachFly() {
		  $ob.eq(obC).css({"left": "-1000px","opacity": "0"});
		  obC++;
		  if (obC < $ob.length) setTimeout(function(){ eachFly(); }, 50);
		  if (obC == $ob.length) {
			  	flyingIn(i+1);
				setTimeout(function(){ que.eq(i).fadeOut();}, 1500);
		  };
		}
		eachFly();
    };

	function flyingIn(i){

		var que = $(".que-list .qna-holder .each-qna-holder");
		var obC = 0;
		var $ob = que.eq(i).find(".flyOb");

		function eachFly() {
		  $ob.eq(obC).css({"left": "0px","opacity": "1"});
		  obC++;
		  if (obC < $ob.length) setTimeout(function(){ eachFly(); }, 50);
		  if (obC == $ob.length) {
			  que.find(".anw-box").removeClass("block");
		  };
		}

		que.eq(i).fadeIn(function(){
			eachFly();
		});

    };
	//////// 질문 애니메이션 ///////

	var itemNumb = 6; //타입 슬라이더 개수
	var baseWidth;
	function setSlider(){
		var $Base = $(".rank-holder .blank");
		baseWidth = $Base.width();
		$(".rank-each-type").css({"width": $Base.width() });
		$(".rank-slide").css({"width": itemNumb*$Base.width()});
	}

	$(".rank-navi").on("click", function(e){
		e.preventDefault();
		var drct = $(this).attr("id");
		rankSlide(drct);
	});

	var sliderIndex = 0;
	function rankSlide(drct){
		if(drct=="prev"){ // 이전
			if(sliderIndex==0){

			}else if(sliderIndex>0){
				sliderIndex -=1;
				var moving = baseWidth*sliderIndex;
				$(".rank-slide").animate({"left":-moving}, 800,"easeOutCubic");

			}

		}else if(drct=="next"){ // 다음
			if(sliderIndex==itemNumb-1){

			}else if(sliderIndex<itemNumb-1){
				sliderIndex +=1;
				var moving = baseWidth*sliderIndex;
				$(".rank-slide").animate({"left":-moving}, 800,"easeOutCubic");
			}

		}

    }
    

    ///////// 슬라이더 ////////
	var queLength;
	function makeQuestion(t){
//		$(".qna-list").attr("id", t);
		var qN = 0;
		for( i=0; i<queData.length; i++){
			if(queData[i].type == t) {
				//질문
				if(t=="military"&&queData[i].id==2) { //보기4개
					$(".qna-list").append("<div class='each-qna-holder'><div class='q-bg'></div><div class='each-qna' id=qna-"+ queData[i].id +"><div class='qna-wrap'><div class='que-box'><p class='que-des flyOb'>"+ queData[i].qdes +"</p><p class='que-main flyOb'>"+ queData[i].qmain +"</p><p class='que-sm flyOb'>"+ queData[i].qsm +"</p></div><div class='anw-box'><div class='each-anw anw-a flyOb'><div class='anw'>"+ queData[i].a +"</div></div><div class='each-anw anw-b flyOb'><div class='anw'>"+ queData[i].b +"</div></div><div class='each-anw anw-c flyOb'><div class='anw'>"+ queData[i].c +"</div></div><div class='each-anw anw-d flyOb'><div class='anw'>"+ queData[i].d +"</div></div></div></div></div></div>");
				}else if(t=="military"&&queData[i].id==13){//보기3개
					$(".qna-list").append("<div class='each-qna-holder'><div class='q-bg'></div><div class='each-qna' id=qna-"+ queData[i].id +"><div class='qna-wrap'><div class='que-box'><p class='que-des flyOb'>"+ queData[i].qdes +"</p><p class='que-main flyOb'>"+ queData[i].qmain +"</p><p class='que-sm flyOb'>"+ queData[i].qsm +"</p></div><div class='anw-box'><div class='each-anw anw-a flyOb'><div class='anw'>"+ queData[i].a +"</div></div><div class='each-anw anw-b flyOb'><div class='anw'>"+ queData[i].b +"</div></div><div class='each-anw anw-c flyOb'><div class='anw'>"+ queData[i].c +"</div></div></div></div></div></div>");
				}else {
					$(".qna-list").append("<div class='each-qna-holder'><div class='q-bg'></div><div class='each-qna' id=qna-"+ queData[i].id +"><div class='qna-wrap'><div class='que-box'><p class='que-des flyOb'>"+ queData[i].qdes +"</p><p class='que-main flyOb'>"+ queData[i].qmain +"</p><p class='que-sm flyOb'>"+ queData[i].qsm +"</p></div><div class='anw-box'><div class='each-anw anw-a flyOb'><div class='anw'>"+ queData[i].a +"</div></div><div class='each-anw anw-b flyOb'><div class='anw'>"+ queData[i].b +"</div></div></div></div></div></div>");
				}
				//배경뿌리기
				if(queData[i].bg1 != ""){
					$(".each-qna-holder").eq(qN).find(".q-bg").append("<div class='bg-img "+t+"-bg-"+queData[i].id+"-1"+"'><img src='http://img.khan.co.kr/spko/storytelling/2019/projapan/"+queData[i].bg1+"' alt='' class='flyOb'></div>");
					if(queData[i].bg2 != ""){
						$(".each-qna-holder").eq(qN).find(".q-bg").append("<div class='bg-img "+t+"-bg-"+queData[i].id+"-2"+"'><img src='http://img.khan.co.kr/spko/storytelling/2019/projapan/"+queData[i].bg2+"' alt='' class='flyOb'></div>");
						if(queData[i].bg3 != ""){
							$(".each-qna-holder").eq(qN).find(".q-bg").append("<div class='bg-img "+t+"-bg-"+queData[i].id+"-3"+"'><img src='http://img.khan.co.kr/spko/storytelling/2019/projapan/"+queData[i].bg3+"' alt='' class='flyOb'></div>");
						}
					}

				}

				qN++;

			}
		}
		queLength = qN;
		console.log(queLength+"개의 질문 생성");
		for( i=0; i<queLength; i++){
			$(".navi ul").append("<li></li>");
		}
		$(".navi ul li").eq(0).addClass("on");

	}
	////// 질문뿌리기 //////



    /***▲▲▲   새로 추가된 함수들. 함수명 체크해주세요 YJ ▲▲▲  ***/


  // 인물 적합도 체크 및 결과 전송
  function check(se) {//se는 만약 ox 면 1,2 , ox가 아니면 1,2,3,4로 넘어올 것임
	console.log(se);

    var qI = testNum+1;
    //포인트 추가
    for (var it = 0; it < typeList.length; it++) {//for문으로 해당하는 타입의 인물 배열을 돔
		var spl = String(typeList[it][qI]); // spl은 인물들의 해당 질문에 대한 답변 값
		if (spl == se){
			typeList[it].point++;
		}
    }

    typeList.sort(function(a, b) {
      return a.point > b.point ? -1 : a.point < b.point ? 1 : 0;
    });

	//큰 순대로 나열 한 후에 그 결과를 콘솔에 출력
    typeList.forEach(function(v, i, a){
        console.log(a[i].name + " : " + a[i].point);
    });

    var max = typeList.reduce(function(a, b) {
      return (a.point > b.point) ? a : b;
    });
	console.log("최대값 : " + max.point);

    /*if (testNum >= 10) {
      if (japanList[0].point == max.point && japanList[0].point != japanList[1].point) {
        //resultShow(0);
		$(".que-area").fadeOut(function() {
			$(".result-area").fadeIn( function(){
				setSlider();
				AOS.init();
				$(".replay-btn").on("click", function(e) {
					e.preventDefault();
					location.reload();
					return false;
			    });
				$(".type-txt").addClass("zoom");
			});
		});

        return;
      } else if (testNum == queLength) {
        // 동점자 체크
        var reNum = japanList.filter(function(v, i, a) {
          return a[i].point == max.point;
        }).length;
        resultShow(reNum);
        return;
      }
    }else if(testNum<10){
	  queNumb++;
	  flyingOut(queNumb-1);
      return;
	}*/

	//일단 전체 질문 다 돌도록 해놓겠습니다.

	testNum++;
	if (testNum == queLength) {
		resultShow(0);
		return;
	}
	console.log((testNum+1)+"번째 질문으로 이동");
	flyingOut(testNum-1);

	$(".navi ul").children("li").removeClass("on");
	$(".navi ul").children("li").eq(testNum).addClass("on");


  }

  // 결과 보여주기
  function resultShow(n) {

    var first = 0,
      second = 1,
      record = {};

    if (n != 0) {
      while (true) {
        var r1 = Math.floor(Math.random() * n);
        var r2 = Math.floor(Math.random() * n);
        if (r1 != r2) {
          first = r1;
          second = r2;
          break;
        }
      }
    }

    typeList.forEach(function(v, i, a) {
      if (i == first || i == second) {
        record[a[i].name] = 1;
      } else {
        record[a[i].name] = 0;
      }
    });

    var excatch = getCookie("catch");
    if (excatch == undefined){
      setCookie("catch", typeList[first].name + "," + typeList[second].name , 365);
    } else {
      setCookie("catch", excatch + "," + typeList[first].name + "," + typeList[second].name, 365);
    }

    var catched = getCookie("catch").split(",");
    console.log(catched);

    record.password = "ok!";

    $.ajax({
      url: "dataload.php",
      data: record,
      type: "POST",
      success: function() {

        $.getJSON("dataload.php", function(data) {

          console.log(data);
          japanList.forEach(function(v, i, a){
            a[i].rank = Number(data[a[i].name]);
          });

          japanList.sort(function(a, b) {
            return a.rank > b.rank ? -1 : a.rank < b.rank ? 1 : 0;
          });

          for (var rk = 0; rk < japanList.length; rk++){
            if ($("#" + japanList[rk].type).find("li").length < 3){
              $("#" + japanList[rk].type).find("ul").append("<li><div class='thumb'><img src='http://img.khan.co.kr/spko/storytelling/2019/projapan/p_img" + japanList[rk].no + ".png' alt='' class='thumb-img'><img src='http://img.khan.co.kr/spko/storytelling/2019/projapan/catch.png' class='catch' alt=''></div><div class='proJapan-info'><span class='name'>" + japanList[rk].name + "</span><span class='catch-numb'><em>" + japanList[rk].rank + "</em>회 검거</span></div></li>");
              if (catched.indexOf(japanList[rk].name) != -1){
                $("#" + japanList[rk].type).find("li").last().addClass("catched");
              }
            }
            if (catched.indexOf(japanList[rk].name) != -1){
              $(".all-activist .all-acti-wrap ul li").eq(japanList[rk].no-1).addClass("catched");
            }
          }

          $(".sct-numb").each(function(i) {
            $(this).html(data[$(this).prev().text()] + "회 검거");
          });

        });

      }
    });

    $(".my-type p.type-txt").html(typeList[first].ment);
    $(".each-result-card").eq(0).find(".numb").html((typeList[first].point / testNum * 100).toFixed(1) + "%");
    $(".each-result-card").eq(0).find(".thumb .thumb-img").attr("src", "http://img.khan.co.kr/spko/storytelling/2019/projapan/" + typeList[first].thumb + ".png");
    $(".each-result-card").eq(0).find(".name").html(typeList[first].name);
    var actBirth = typeList[first].birth;
    actBirth.replace('(', '').replace(')', '');
    $(".each-result-card").eq(0).find(".info .year").html(actBirth);
    $(".each-result-card").eq(0).find(".year").html(typeList[first].birth);
    $(".each-result-card").eq(0).find(".subtitle").html(typeList[first].subtitle);
    $(".each-result-card").eq(0).find(".desc .first-para").html(typeList[first].firstpara);
    $(".each-result-card").eq(0).find(".hidden-para").html(typeList[first].desc);

    $(".each-result-card").eq(1).find(".numb").html((typeList[second].point / testNum * 100).toFixed(1) + "%");
    $(".each-result-card").eq(1).find(".thumb .thumb-img").attr("src", "http://img.khan.co.kr/spko/storytelling/2019/projapan/" + typeList[second].thumb + ".png");
    $(".each-result-card").eq(1).find(".name").html(typeList[second].name);
    var actBirth2 = typeList[second].birth;
    actBirth2.replace('(', '').replace(')', '');
    $(".each-result-card").eq(1).find(".year").html(actBirth2);
    $(".each-result-card").eq(1).find(".subtitle").html(typeList[second].subtitle);
    $(".each-result-card").eq(1).find(".desc .first-para").html(typeList[second].firstpara);
    $(".each-result-card").eq(1).find(".hidden-para").html(typeList[second].desc);


	$(".que-area").fadeOut(function() {
		$(".result-area").fadeIn( function(){
			setSlider();
			$(".type-txt").addClass("zoom");
			$(".subtitle").addClass("subtitle-zoom");

			$(".replay-btn").on("click", function(e) { //다른 친일인사 추적하기 누르면 다시 타입선택영역으로
				e.preventDefault();

        setCookie("reloadCheck", "true", 365);
        location.reload();

  //			$(".result-area").hide();
	//			reSet();
	//			$(".intro").fadeIn(1000);
	//			$("html, body").animate({scrollTop: 0}, 500);

				/*
				location.reload(function(){
					$(".intro-con").hide();
					$(".animation-bg").hide();
					$(".cover-shadow").hide();
					$(".intro-box").fadeIn(function() {
						$(".intro-box h2").addClass("title-show");
						$(".box-outer").slideDown(1000, 'easeInOutBack', function(){
						  $(".intro-box .start-btn").fadeIn();
						});

					});

				});*/
				return false;
			});

		});
	});



    // 결과 공유하기
    $(".sns-share .fb").on("click", function(e){
      e.preventDefault();
      var cardIndex = ($(this).parent().parent().attr("id") == "first") ? first : second;
      var shareIndex;
      typeList.forEach(function(v, i, a) {
        if (a[i].name == typeList[cardIndex].name) shareIndex = a[i].no;
      });
      var url = encodeURIComponent("http://news.khan.co.kr/kh_storytelling/2019/projapan/result.html?gene=" + shareIndex + "&fbrefresh=NOT_SEEN_BEFORE");
      window.open('http://www.facebook.com/sharer/sharer.php?u=' + url);
      return false;
    });

    $(".sns-share .tw").on("click", function(e){
      e.preventDefault();
      var cardIndex = ($(this).parent().parent().attr("id") == "first") ? first : second;
      var shareIndex;
      typeList.forEach(function(v, i, a) {
        if (a[i].name == typeList[cardIndex].name) shareIndex = a[i].no;
      });
      var url = encodeURIComponent("http://news.khan.co.kr/kh_storytelling/2019/projapan/result.html?gene=" + shareIndex);
      window.open('http://twitter.com/intent/tweet?url=' + url);
      return false;
    });

  }

  //인물설명더보기 버튼
  $(".show-hidden-para").on("click", function(e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    $(this).hide();
    $(this).siblings(".hidden-para").slideDown('easeInOutQuart');
  });

  //친일파 리스트 만들기
  function makeActList() {
    for (i = 0; i < japanList.length; i++) {
      $(".all-activist .all-acti-wrap ul").append("<li><div class='thumb'><img src='http://img.khan.co.kr/spko/storytelling/2019/projapan/" + japanList[i].thumb + ".png' alt=''><img src='http://img.khan.co.kr/spko/storytelling/2019/projapan/catch.png' class='catch' alt=''></div><div class='act-inf'><span class='name'>" + japanList[i].name + "</span><span class='sct-numb'></span></div></li>");
    }
  }
  makeActList();

  //모든 친일파 리스트 보여주기
  var listOpen = false;
  $(".go-others").on("click", function(e) {
    e.preventDefault();
    e.stopImmediatePropagation();
	$(".go-list").fadeOut();

    if (listOpen == false) {
      $(".go-others").addClass("go-others-close");
      $(".all-activist").slideDown(1000, 'easeInOutQuart');
      listOpen = true;
    } else if (listOpen == true) {
      var after_pos = $(".go-others").offset().top - 350;
      $("html, body").animate({
        scrollTop: after_pos
      }, 1000);
      $(".all-activist").slideUp(1000, 'easeInOutQuart', function() {
        $(".go-others").removeClass("go-others-close");

      });
      listOpen = false;
    }
  });

  $(".list-close").on("click", function(e) {
    e.preventDefault();
    var after_pos = $(".go-others").offset().top - 350;
    $("html, body").animate({
      scrollTop: after_pos
    }, 1000);
    $(".all-activist").slideUp(1000, 'easeInOutQuart', function() {
      $(".go-others").removeClass("go-others-close");
    });
    listOpen = false;
    return false;
  });
  //모든 독립운동가 리스트 보여주기

  //리스트 클릭하면 독립운동가 팝업
  function makeActCard(name) {
    var index;
    japanList.forEach(function(v, i, a) {
      if (a[i].name == name) index = i;
    });

    $(".acti-popUp .card-inner").find(".thumb img").attr("src", "http://img.khan.co.kr/spko/storytelling/2019/projapan/" + japanList[index].thumb + ".png");
    $(".acti-popUp .card-inner").find(".info .name").html(japanList[index].name);
    var actBirth = japanList[index].birth;
    actBirth.replace('(', '').replace(')', '');
    $(".acti-popUp .card-inner").find(".info .year").html(actBirth);
    $(".acti-popUp .card-inner").find(".subtitle").html(japanList[index].subtitle);
    $(".acti-popUp .card-inner").find(".desc .first-para").html(japanList[index].firstpara);
    $(".acti-popUp .card-inner").find(".hidden-para").html(japanList[index].desc);
  }


  // 초기화 함수 추가
  function reSet(){
	$(".qna-list").html("");
	$(".qna-list").attr("id","");
	$(".navi ul").html("");
	var testNum = 0;
    var typeList = [];
	console.log("다시 시작, 초기화");
  };

  $(".all-activist .all-acti-wrap ul li").on("click", function(e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    var japIndex = $(this).find(".name").text();
    makeActCard(japIndex);
    $(".acti-popUp-back").show();
    $(".acti-popUp").fadeIn();
    $("body").addClass("fixed");
    $("#scrReset").scrollTop(0);
  });

  $(".rank-each-type ul li").on("click", function(e) {
    e.preventDefault();
    e.stopImmediatePropagation();
	var japIndex = $(this).find(".name").text();
    makeActCard(japIndex);
    $(".acti-popUp-back").show();
    $(".acti-popUp").fadeIn();
    $("body").addClass("fixed");
    $("#scrReset").scrollTop(0);

  });

  $(".acti-popUp .popUp-holder .close-btn").on("click", function(e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    $(".acti-popUp").hide();
    $(".acti-popUp-back").fadeOut();
    $("body").removeClass("fixed");
  });
  $(".acti-popUp-back").on("click", function(e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    $(".acti-popUp").hide();
    $(".acti-popUp-back").fadeOut();
    $("body").removeClass("fixed");
  });
  //리스트 클릭하면 독립운동가 팝업


  $(window).on("load", function() {
    $(".loading-page").fadeOut(500);
    $(".after-load").fadeIn(100, function() {

      // queNumb = Math.floor(Math.random() * $(".each-qna").length);
      $(".each-qna").each(function(i) {
        quesId.push($(this).attr("id"));
      });

      japanList.forEach(function(v, i, a) {
        a[i].point = 0;
        a[i].no = i+1;
      });

      if (getCookie("reloadCheck") == "true"){
        $(".animation-bg").hide();
        $(".intro-con").hide();
        $(".intro .intro-wrap .cover-shadow").hide();
        bgFadeOut();
        $(".animation-bg").hide();
        var makeCenterS = (screenHeight-$(".select-type").height())/2;
        $(".select-type").css({"top": makeCenterS});
        $(".select-type").fadeIn(1000);
        setCookie("reloadCheck", "false", 365);

      } else {
        bgFade();
      }

    });
  });

  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = document.cookie;
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }


});

// 공유

function sendSns(sns) {

  var url = encodeURIComponent(location.href);
  var txt = encodeURIComponent($("title").html());


  switch (sns) {
    case 'facebook':
      window.open('http://www.facebook.com/sharer/sharer.php?u=' + url);
      break;

    case 'twitter':
      window.open('http://twitter.com/intent/tweet?text=' + txt + '&url=' + url);
      break;

  }


}
