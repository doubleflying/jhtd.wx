$(function(){
	//广告点击统计代码
//	$('.j-baseAd').bind('click',function(){
//		var _id = $(this).attr('adId');
//		$.get("/main/baseAd.html", {id:_id});
//		return true;
//	});
	$('.seek_box input').focus(function(event) {
			$('.seek_box').css({'background-image':'url(images/search_no.png)'});
	});
	$('.seek_box input').blur(function(event) {
		if(!$(this).val()){
			$('.seek_box').css({'background-image':'url(images/search_top.png)'});
		}
		
	});
	$('#j-gotop').click(function(event) {
		 $('body,html').animate({scrollTop: 0 },800);
	});
});

////省市地区三级联动SELECT
//function threeSelect(config, district){
//    var $s1=$("#"+config.s1);
//    var $s2=$("#"+config.s2);
//    var $s3=$("#"+config.s3);
//    var v1=config.v1?config.v1:null;
//    var v2=config.v2?config.v2:null;
//    var v3=config.v3?config.v3:null;
//    var district = district.split(',');
//    var province = district[0]|0;
//    var city = district[1]|0;
//    var area = district[2]|0;
//    $.ajax({
//	   type: "POST",
//	   url: "/main/getDistrict.html",
//	   data: "id=0",
//	   dataType: "json",
//	   async:false, //同步传输防止还未获得返回数据就继续向下执行
//	   success: function(data){
//		   	$.each(data,function(k,v){
//		        appendOptionTo($s1,v.text,v.value,v1);
//		        if(v.value == province){
//		        	$s1.find("option:last").attr("selected", true);
//		        }
//	    	});
//	   }
//	});
//
//    $s1.change(function(){
//        var s1_curr_val = $s1.find('option:selected').val();
//        var province = province|s1_curr_val;
//        $s2.html('');
//        if(province){
//	    	$.getJSON('/main/getDistrict.html',{id:province},function(data){
//	    		if(data){
//	                $.each(data,function(k,v){
//	                    appendOptionTo($s2,v.text,v.value,v2);
//	                    if(v.value == province){
//				        	$s2.find("option:last").attr("selected", true);
//				        }
//	                });
//	                $s2.change();
//	        	}
//	    	})
//	    }else{
//	    	appendOptionTo($s2,'-\u57ce\u5e02-','',v2);
//	    	$s2.change();
//	    }
//    }).change();
//    $s2.change(function(){
//    	var s2_curr_val = $s2.find('option:selected').val();
//    	var city = city|s2_curr_val
//    	$s3.html('');
//        if(city){
//	    	$.getJSON('/main/getDistrict.html',{id:city},function(data){
//	    		if(data){
//	                $.each(data,function(k,v){
//	                   appendOptionTo($s3.show(),v.text,v.value,v3);
//	                    if(v.value == area){
//				        	$s3.find("option:last").attr("selected", true);
//				        }
//	                });
//	                $s3.find('option').eq(0).attr('selected', 'selected');
//	        	}
//	    	})      
//    	}else{
//    		appendOptionTo($s3,'-\u533a\u57df-','',v3);
//    	}
//    })
//    function appendOptionTo($o,k,v,d){
// 
//        var $opt=$("<option>").text(k).val(v);
//         
//        if(v==d){
//            $opt.attr("selected", "selected")
//        }
//        $opt.appendTo($o);
//    }  
//}