$(function() {
/*加加减减--------------------------------------------------------------------------------------- */
		$('.plus_add input').focus(function(event) {
			$(this).parents('.plus_add').find('input').css('border-color', '#8e44ad');
			$(this).parents('.right').find('.s-option').removeClass('active');
			getPrice();
		});
		$('.plus_add span').click(function(event) {
			$(this).parents('.plus_add').find('input').css('border-color', '#8e44ad');
			$(this).parents('.right').find('.plus_add').addClass('active');
			$(this).parents('.right').find('.s-option').removeClass('active');
			var buynum =$(this).parents('.plus_add').find('input').val();
			if ($(this).hasClass('plus_in')) {
				buynum++;
			}else{
				if (buynum>1) {
					buynum--;
				}else{
					buynum=1;
				}
			}
			$(this).parents('.plus_add').find('input').val(buynum);
			getPrice();
		});
		$('.plus_add input').blur(function(event){
			var t=$(this).val();
			var z= /^[0-9]*$/;
			if(z.test(t)){
			  if (t<1) {
			  	 $(this).val(1);
			  };
			}else{
			   $(this).val(1);
			};
			$(this).parents('.right').find('.plus_add').addClass('active');
			getPrice();
		});
		$('a.s-option').click(function(event) {
			$(this).parents('.right').find('input').css('border-color', '#c8c8c8');
			$(this).parents('.right').find('.plus_add').removeClass('active');
			$(this).addClass('active').siblings().removeClass('active');
			getPrice();
		});
		/*加加减减 --------------------------------------------------------------------------------------- end*/






	$('.all_chenk .agree').click(function(event) {
		if($(this).find('input').attr('checked')){
			$(this).find('input').attr('checked',false);
			$(this).find('span').removeClass('chek');
			
			var code = $("#prodCode").val();
			if(code == "P110" || code == "P111" || code == "P112" || code == "P106" || code == "P107") {
				if($(this).find('input').val() == "1") {//腹亚膜   不能和腹亮膜共存
					$("input:checkbox[name='checkboxs'][value='2']").attr('checked',true);
					$("input:checkbox[name='checkboxs'][value='2']").parent().find('span').addClass('chek');
				}
				if($(this).find('input').val() == "2") {//腹亮膜   不能和UV、腹亚膜共存
					$("input:checkbox[name='checkboxs'][value='1']").attr('checked',true);
					$("input:checkbox[name='checkboxs'][value='1']").parent().find('span').addClass('chek');
				}
			}
		}else{
			$(this).find('input').attr('checked',true);
			$(this).find('span').addClass('chek');
			
			if($(this).find('input').val() == "1") {//腹亚膜   不能和腹亮膜共存
				$("input:checkbox[name='checkboxs'][value='2']").attr("checked", false);
				$("input:checkbox[name='checkboxs'][value='2']").parent().find('span').removeClass('chek');
			}
			if($(this).find('input').val() == "2") {//腹亮膜 不能和腹亚膜共存 UV
				$("input:checkbox[name='checkboxs'][value='1']").attr("checked", false);
				$("input:checkbox[name='checkboxs'][value='4']").attr("checked", false);
				$("input:checkbox[name='checkboxs'][value='1']").parent().find('span').removeClass('chek');
				$("input:checkbox[name='checkboxs'][value='4']").parent().find('span').removeClass('chek');
			}
			if($(this).find('input').val() == "4") {//UV 必选腹亚膜  取消腹亮膜
				$("input:checkbox[name='checkboxs'][value='1']").attr("checked", true);
				$("input:checkbox[name='checkboxs'][value='2']").attr("checked", false);
				$("input:checkbox[name='checkboxs'][value='1']").parent().find('span').removeClass('chek');
				$("input:checkbox[name='checkboxs'][value='2']").parent().find('span').removeClass('chek');
			}
			if($(this).find('input').val() == "15") {//直角和异性不能共存
				$("input:checkbox[name='checkboxs'][value='16']").attr("checked", false);
				$("input:checkbox[name='checkboxs'][value='16']").parent().find('span').removeClass('chek');
			}
			if($(this).find('input').val() == "16") {//直角和异性不能共存
				$("input:checkbox[name='checkboxs'][value='15']").attr("checked", false);
				$("input:checkbox[name='checkboxs'][value='15']").parent().find('span').removeClass('chek');
			}
		}
//		checkBoxSetting("later_crafts", this);
		getPrice();
	});
	
//	$('a.s-option').click(function(event) {
//		$(this).addClass('active').siblings().removeClass('active');
//		getPrice();
//	});
	//确认所选规格
	$(".j-btnBuy").click(function(){
		$(".j-submitGood").attr("id", $(this).attr('method')).html($(this).html());
		$("#j-mask").show();
		$('.ord-main').addClass('msgShow m-msg');
		$('.ord-main').find('div.title').show();
		$('.ord-main').find('div.info3').show();
		$('.ord-main').find('.j-submitGood').show();
		//$('.ord-main').find('div.infoHead').show();
		
		$('.ord-main').find('div.info').hide();
		$('.ord-main').find('div.wj').parent().hide();
	});
	$('.ord-main').find('a.close').click(function(){
		$("#j-mask").hide();
		$('.ord-main').removeClass('msgShow m-msg');
		$('.ord-main').find('div.title').hide();
		$('.ord-main').find('div.info3').hide();
		$('.ord-main').find('.j-submitGood').hide();
		$('.ord-main').find('#j-addBuy').hide();
		//$('.ord-main').find('div.infoHead').hide();
		$('.ord-main').find('div.info').show();
		$('.ord-main').find('div.wj').parent().show();
	});
	
});

function toProduct(productId){
	var hrefUrl = baseurl+ "/product/"+productId+".htm";
	window.location.href = hrefUrl;
}

function toSearchProduct(wd){
	var hrefUrl = baseurl+ "/search.htm?wd="+wd;
	window.location.href = hrefUrl;
}



function toCreateOrder(productId){
	var toType = $(".j-submitGood").html();
	var userId = getCookie("userId");
	if(userId == null || userId == ""){
		var hrefUrl = baseurl+ "/login.htm";
		window.location.href = hrefUrl;
		return false;
	}
	if(toType == "加入购物车"){
		saveMyCar();
	} else {
		saveProduct();
	}
	
}
function getPrice(){
	var prodCode = $("#prodCode").val();
	
	var filedKeys = [];
	$("div[name='filedKeys']").each(function(){
       var filedKey = $(this).attr("id");
       var filedValue = "";
       
       var selects = $(this).find("[name='selects']").val();
       var lables = $(this).find("[class*='active']").attr("id");
       var lableTexts = $(this).find("[name='lableTexts']").val();


       if (typeof(selects) != "undefined") {
    	   filedValue = selects;
       }
       
       else if (typeof(lables) != "undefined") {
    	   filedValue = lables;
       }
       
       else if (typeof(lableTexts) != "undefined") {
    	   filedValue = lableTexts;
       }
       
       var chk_value = [];
       $(this).find("input:checkbox[name='checkboxs'][checked]").each(function(){ 
    	   chk_value.push($(this).val());
       }); 
   	
       if(chk_value.length > 0){
    	   filedValue = chk_value.join("|");
       }
       
       filedKeys.push(filedKey+":"+filedValue);
	});

	filedKeys.push("code:"+prodCode);
	var dataJson = filedKeys.join(",");
	$.ajax({
		url: baseurl+ "/product/getprice.json",
		async : false,
		type: "post",  
		data: {dataJson:dataJson},
		success: function(data){
			var productPrice = data.price;
			var avgPrice = data.avgPrice;
			if(productPrice != null){
				$("#totalPrice").text(productPrice);
				$("#avgPrice").text("￥"+avgPrice);
			}
		},
		error: function(data){
			cubead.common.showMessage("操作错误！!");
		}
	});
}

function getBuyProductVo() {
	var dataJson = {};
	var prodId = $("#prodId").val();
	var prodName = $("#prodName").val();
	var prodCode = $("#prodCode").val();
	var totalPrice = $("#totalPrice").text();
	
	var filedKeys = [];
	$("div[name='filedKeys']").each(function(){
       var filedKey = $(this).attr("id");
       var filedValue = "";
       
       var selects = $(this).find("[name='selects']").val();
       var lables = $(this).find("[class*='active']").attr("id");
       var lableTexts = $(this).find("[name='lableTexts']").val();


       if (typeof(selects) != "undefined") {
    	   filedValue = selects;
       }
       
       else if (typeof(lables) != "undefined") {
    	   filedValue = lables;
       }
       
       else if (typeof(lableTexts) != "undefined") {
    	   filedValue = lableTexts;
       }
       
       var chk_value = [];
       $(this).find("input:checkbox[name='checkboxs'][checked]").each(function(){ 
    	   chk_value.push($(this).val());
       }); 
   	
       if(chk_value.length > 0){
    	   filedValue = chk_value.join("|");
       }
       
       filedKeys.push(filedKey+":"+filedValue);
	});

	var prodProperties = filedKeys.join(",");
	dataJson.prodId = prodId;
	dataJson.prodName = prodName;
	dataJson.prodCode = prodCode;
	dataJson.totalPrice = totalPrice;
	dataJson.prodProperties = prodProperties;
	return dataJson;
}

//设置cookie
function setCookie(name, value, expired, domain) {
	var tmp = "";
	if(domain) {
		tmp = name + "=" + escape(value) + "; Path=/;domain=" + domain + ";";
	} else {
		tmp = name + "=" + escape(value) + "; Path=/;";
	}
	if (expired > 0) {
		var date = new Date();
		date.setTime(date.getTime() + expired * 3600000);//*hours
		tmp = tmp + " expires=" + date.toGMTString();
	}
	document.cookie = tmp;
}
//获取cookie
function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ')
			c = c.substring(1);
		if (c.indexOf(name) != -1)
			return c.substring(name.length, c.length);
	}
	return "";
}

function saveMyCar() {
	var dataJson = getBuyProductVo();
	var url = baseurl+ "/car/save.json";
	$.ajax({
		url: url,
		dataType : 'json',
		async : false,
		type: "post",  
		data: dataJson,
		success: function(data){
			if(data.status == "success"){
				var hrefUrl = baseurl+ "/car/list.htm";
				window.location.href = hrefUrl;
			}
			else if(data.status == "noLogin"){
				var hrefUrl = baseurl+ "/login.htm";
				window.location.href = hrefUrl;
			}
			else {
				alert("添加购物车失败！");
			}
		},
		error: function(data){
			alert("获取数据失败！");
		}
	});
}

function saveProduct() {
	var userId = getCookie("userId")
	if(userId == null || userId == ""){
		var prodId = $("#prodId").val();
		var hrefUrl = baseurl+ "/product/"+prodId+".htm";
		window.location.href = hrefUrl;
	}
	var dataJson = getBuyProductVo();
	var URL = baseurl+ "/order/tocreateorderbyproduct.htm";
	post(URL, dataJson);
}

function post(URL, PARAMS) { 
	var temp = document.createElement("form"); 
	temp.action = URL; 
	temp.method = "post"; 
	temp.style.display = "none"; 
	for (var x in PARAMS) { 
	var opt = document.createElement("textarea"); 
	opt.name = x; 
	opt.value = PARAMS[x]; 
	temp.appendChild(opt); 
	} 
	document.body.appendChild(temp); 
	temp.submit(); 
}