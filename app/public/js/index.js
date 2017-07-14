function toIndex(){
	var hrefUrl = baseurl+ "/";
	window.location.href = hrefUrl;
}

function toBackUrl(backUrl) {
	if(backUrl ==""){
		toIndex();
	} else {
		window.location.href = backUrl;
	}
}

function toSearch() {
	var wd = $("#searchWord").val();
	var hrefUrl = baseurl+ "/search.htm?wd="+wd;
	window.location.href = hrefUrl;
}

