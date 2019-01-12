var langs = ['ja','en', 'zh','fr'];
var langCode = sessionStorage.getItem('splang');
var langJS = null;


var translate = function(jsdata) {
  $("[tkey]").each(function(index) {
    var strTr = jsdata[$(this).attr('tkey')];
    $(this).html(strTr);
  });
}

if (langCode==null) {
  //see here for a list of possible values https://stackoverflow.com/questions/5580876/navigator-language-list-of-all-languages
  //substr(0,2) get the first two letters. so for example, "fr-BE" and "fr-CA" both become "fr"
	langCode = navigator.language.substr(0, 2);
	//alert("langCode is null");
  //console.log("langCode is null");
}


if (langs.includes(langCode)){
  $.getJSON('lang/' + langCode + '.json', translate);
  console.log("langCode, "+langCode);
  if (langCode=='ja'){
    document.documentElement.style.setProperty('--main-font', "'Noto Sans SC', sans-serif");
    document.documentElement.style.setProperty('--title-font', "'Noto Sans SC', sans-serif");
    //console.log("font changed "+langCode);
  }else if(langCode=='zh'){
    document.documentElement.style.setProperty('--main-font', "'Noto Sans SC', sans-serif");
    document.documentElement.style.setProperty('--title-font', "'Noto Sans SC', sans-serif");

  }else if(langCode=='en' || langCode=='fr'){
    document.documentElement.style.setProperty('--main-font', "'M PLUS 1p', sans-serif");
    document.documentElement.style.setProperty('--title-font', "'Timmana', sans-serif");
  }
}
else{
  $.getJSON('lang/en.json', translate);
  //console.log("else");
}


function choose(choice) {
	sessionStorage.setItem('splang', choice );
	/*alert("You chossed " + sessionStorage.getItem('splang'));*/
  //console.log("set:",choice);
	location.reload();
}
