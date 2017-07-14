!function(){
	var css =
		['<style>',
		'.ind-flow{padding-bottom:'+kx.get(85)+';border-bottom:'+kx.get(5)+' solid #dfdfdf;}',
		'.ind-flow .title{width:'+kx.get(1242)+';height:'+kx.get(113)+';line-height:'+kx.get(110)+';padding-left:'+kx.get(60)+';padding-right:'+kx.get(60)+';}',
		'.ind-flow .title i{width:'+kx.get(47)+';height:'+kx.get(30)+';top:'+kx.get(33)+';}',
		'.ind-flow .flow{height:'+kx.get(610)+';border-top:'+kx.get(3)+' solid #dfdfdf;}',
		'.ind-flow .listw{width:'+kx.get(1094)+';}',
		'.ind-flow .a1,.ind-flow .a2,.ind-flow .a3,.ind-flow .a4,.ind-flow .a5,.ind-flow .a6,.ind-flow .a7,.ind-flow .a8{width:'+kx.get(185)+';margin-top:'+kx.get(75)+';}',
		'.ind-flow .a1 i,.ind-flow .a2 i,.ind-flow .a3 i,.ind-flow .a4 i,.ind-flow .a5 i,.ind-flow .a6 i,.ind-flow .a7 i,.ind-flow .a8 i{width:'+kx.get(185)+';height:'+kx.get(185)+';margin-bottom:'+kx.get(20)+';}',
		'.ind-banner .bd li{height:'+kx.get(430)+';}',
		'.ind-banner{height:'+kx.get(430)+';}',
		'.ind-banner .hd{bottom:'+kx.get(30)+';}',
		'.ind-banner .hd span{width:'+kx.get(35)+';height:'+kx.get(35)+';border:'+kx.get(2)+' solid #d2d2d2;margin:'+kx.get(0)+' '+kx.get(12)+';}',
		'.ind-main{width:'+kx.get(1094)+';}',
		'.ind-main .listw{margin-top:'+kx.get(40)+';}',
		'.ind-main .listw li{margin-bottom:'+kx.get(100)+';}',
		'.ind-main .listw .imgw{width:'+kx.get(1094)+';height:'+kx.get(768)+';}',
		'.ind-main .listw .title{height:'+kx.get(88)+';line-height:'+kx.get(88)+';margin-top:'+kx.get(20)+';}',
		'.ind-main .listw .title i{height:'+kx.get(68)+';width:'+kx.get(68)+';margin-left:'+kx.get(15)+';top:'+kx.get(10)+';}',
		'.ind-main .listw .text{padding:'+kx.get(20)+' 0;}',
		'.ind-main .listw .price{height:'+kx.get(138)+';line-height:'+kx.get(138)+';border:'+kx.get(2)+' solid #c9c9c9;margin-top:'+kx.get(20)+';}',
		'.ind-main .listw .split{padding:'+kx.get(0)+' '+kx.get(75)+';}',
		'.ind-main1{width:'+kx.get(1094)+';}',
		'.ind-main1 .listw li{width:'+kx.get(532)+';margin-top:'+kx.get(50)+';}',
		'.ind-main1 .listw .u-fix{height:0;}',
		'.ind-main1 .listw .text{padding-top:'+kx.get(20)+';}',
		'.ind-main1 .u-btn1{margin-top:'+kx.get(80)+';}',
		'.ind-main1 .u-btn2{margin-top:'+kx.get(50)+';}',
		'.ind-main2{width:'+kx.get(1094)+';margin-top:'+kx.get(80)+';}',
		'.ind-main2 .listw li{margin-top:'+kx.get(80)+';}',
		'.ind-main2 .listw li:first-child{margin-top:'+kx.get(20)+';}',
		'.ind-main2 .listw .pj{margin-top:'+kx.get(15)+';}',
		'.ind-main2 .listw .star1,.ind-main2 .listw .star2{width:'+kx.get(45)+';height:'+kx.get(42)+';margin-right:'+kx.get(10)+';}',
		'.ind-main2 .listw .name{padding-right:'+kx.get(60)+';}',
		'.ind-main2 .listw .content{margin-top:'+kx.get(10)+';}',
		'.ind-main2 .listw .info2{margin-top:'+kx.get(5)+';}',
        //new-index样式
        '.ind-flow1 figure {padding-top: '+kx.get(40)+';padding-bottom:'+kx.get(43)+';}',
        '.ind-flow1 figure img{ width:'+kx.get(185)+';height:'+kx.get(184)+'}',
        '.ind-flow1 figure a figcaption {margin-top: '+kx.get(20)+';font-size: '+kx.get(44)+';}',
        '.ind-onsale { margin-top: '+ kx.get(37)+';}',
        '.floor-info {margin: '+kx.get(23)+' 0;}',
        '.floor-info .flag {height: '+kx.get(48)+';}',
        '.floor-info .flag .hrl, .floor-info .flag .hrr {width: '+kx.get(97)+';margin-top: '+kx.get(24)+';}',
        '.floor-info .flag .hrl {margin-right: '+kx.get(40)+';}',
        '.ind-onsale .floor-info i {width: '+kx.get(54)+';height: '+kx.get(48)+';}',
        '.floor-info .flag .content {font-size: '+kx.get(45)+';margin-right: '+kx.get(35)+';}',
        '.floor-info .dateline {margin-top: '+kx.get(10)+';font-size: '+kx.get(30)+';}',
        '.ind-onsale .box a .text {top: '+ kx.get(30)+';left: 0;font-size: '+kx.get(40)+';}',
        '.ind-onsale .box a .text .small {font-size: '+kx.get(31)+';}',
        '.ind-floors { margin-top: '+kx.get(37)+'}',
        '.ind-floors .floor-info {margin-top: '+ kx.get(23)+'; margin-bottom: '+kx.get(20)+'}',
        '.ind-floors .floor-info i {width: '+kx.get(58)+';height: '+kx.get(58)+';}',
        '.floor-info .flag i { margin:0; margin-right: '+kx.get(18)+'}',
        '.ind-floors .box a {padding-top: '+kx.get(3)+'; padding-right: '+kx.get(3)+';}',
        '.ind-floors .box a .text {top: '+kx.get(20)+';left: '+kx.get(15)+';font-size: '+kx.get(40)+';}',
        '.ind-floors .box a .text .small { padding-top: '+ kx.get(2)+';font-size: '+kx.get(31)+';}',
        '.ind-floor1 .box a:nth-child(1) img ,.ind-floor1 .box a:nth-child(2) img,.ind-floor3 .box a:nth-child(1) img,.ind-floor3 .box a:nth-child(2) img {height: '+kx.get(438)+';}',
        '.ind-floor2 {padding-bottom: '+kx.get(16)+';}',
        '.ind-floor3 {padding-bottom: '+kx.get(16)+';}',
        '.ind-floor4 {padding-bottom: '+kx.get(31)+';}',
         '.ind-flow1 {margin-top: '+kx.get(37)+';}',
        '.ind-ask-price {width: '+ kx.get(1148)+';height: '+kx.get(108)+';line-height: '+kx.get(108)+';margin-top: '+kx.get(48)+';font-size: '+kx.get(43)+';}',
		'</style>'].join('\n');
	document.write(css);
}(window);