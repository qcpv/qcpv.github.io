var langs = ['ja','en', 'zh','fr'];
var langCode = sessionStorage.getItem('splang');
var langJS = null;
var brochure = document.getElementById('download_link');


var translate = function(jsdata) {
  $("[tkey]").each(function(index) {
    var strTr = jsdata[$(this).attr('tkey')];
    $(this).html(strTr);
  });
};

if (langCode==null) {
  //see here for a list of possible values https://stackoverflow.com/questions/5580876/navigator-language-list-of-all-languages
  //substr(0,2) get the first two letters. so for example, "fr-BE" and "fr-CA" both become "fr"
	langCode = navigator.language.substr(0, 2);
	//alert("langCode is null");
  //console.log("langCode is null");
};


if (langs.includes(langCode)){
  //$.getJSON('lang/' + langCode + '.json', translate);
  //console.log("langCode, "+langCode);
  if (langCode=='ja'){
    $.getJSON('/lang/ja.json',translate);
    document.documentElement.style.setProperty('--main-font', "'Noto Sans SC', sans-serif");
    document.documentElement.style.setProperty('--title-font', "'Noto Sans SC', sans-serif");
    document.documentElement.style.setProperty('--h1-font', "'Noto Sans SC', sans-serif");
    document.getElementById("content-t1").setAttribute("data-src","/img/t1_ja.png");
    document.getElementById("content-t3").setAttribute("data-src","/img/int_ja.png");
    brochure.setAttribute('href', 'Pamphlet(ja).pdf');
    brochure.setAttribute('download', '量子集光発電がもたらす新世界');
    //document.getElementById("content-t1").setAttribute("data-src","/img/t1_ja.png");
    //console.log("font changed "+langCode);
  }else if(langCode=='zh'){
    $.getJSON('/lang/zh.json',translate);
    document.documentElement.style.setProperty('--main-font', "'Noto Sans SC', sans-serif");
    document.documentElement.style.setProperty('--title-font', "'Noto Sans SC', sans-serif");
    document.documentElement.style.setProperty('--h1-font', "'Noto Sans SC', sans-serif");
    brochure.setAttribute('href', 'Pamphlet(en).pdf');
    brochure.setAttribute('download', 'About QUASAR');
  }else if(langCode=='en'){
    $.getJSON('/lang/en.json',translate);
    document.documentElement.style.setProperty('--main-font', "'Ping Regular', 'M PLUS 1p', sans-serif");
    document.documentElement.style.setProperty('--title-font', "'Ping Bold', sans-serif");
    document.documentElement.style.setProperty('--h1-font', "'Ping Black Italic', sans-serif");
    brochure.setAttribute('href', 'Pamphlet(en).pdf');
    brochure.setAttribute('download', 'About QUASAR');
  }else{
    $.getJSON('/lang/fr.json',translate);
    document.documentElement.style.setProperty('--main-font', "'Ping Regular', 'M PLUS 1p', sans-serif");
    document.documentElement.style.setProperty('--title-font', "'Ping Bold', sans-serif");
    document.documentElement.style.setProperty('--h1-font', "'Ping Black Italic', sans-serif");
    brochure.setAttribute('href', 'Pamphlet(en).pdf');
    brochure.setAttribute('download', 'About QUASAR');
    
  }
}
else{
  $.getJSON('/lang/en.json', translate);
  //console.log("else");
};


function choose(choice) {
	sessionStorage.setItem('splang', choice );
	/*alert("You chossed " + sessionStorage.getItem('splang'));*/
  //console.log("set:",choice);
	location.reload();
}
