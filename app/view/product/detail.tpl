{% extends "../layout/mylayout.tpl" %}
{% block content %}

<link type="text/css" rel="stylesheet" href="/public/css/other.css">
<link type="text/css" rel="stylesheet" href="/public/css/detail.css">
<script type="text/javascript" src="/public/js/init.other.js"></script>
<div class="u-title1">
		<a href="javascript:history.go(-1);" class="back"><i></i></a>
		<div class="text">画册</div>
	</div>
	<div class="ord-banner" id="j-banner">
		<div class="bd">
			<div class="tempWrap" style="overflow:hidden; position:relative;">
				<ul style="width: 1986px; position: relative; overflow: hidden; padding: 0px; margin: 0px; transition-duration: 200ms; transform: translate(-331px, 0px) translateZ(0px);">
					<li style="display: table-cell; vertical-align: top; width: 331px;"><a href="#"><img src="/public/img/1.jpg" class="u-db" alt=""></a></li>
					<li
					 style="display: table-cell; vertical-align: top; width: 331px;"><a href="#"><img src="/public/img/1.jpg" class="u-db" alt=""></a></li>
						<li style="display: table-cell; vertical-align: top; width: 331px;"><a href="#"><img src="/public/img/2.jpg" class="u-db" alt=""></a></li>
						<li style="display: table-cell; vertical-align: top; width: 331px;"><a href="#"><img src="/public/img/3.jpg" class="u-db" alt=""></a></li>
						<li style="display: table-cell; vertical-align: top; width: 331px;"><a href="#"><img src="/public/img/1.jpg" class="u-db" alt=""></a></li>
						<li style="display: table-cell; vertical-align: top; width: 331px;"><a href="#"><img src="/public/img/4.jpg" class="u-db" alt=""></a></li>
				</ul>
			</div>
		</div>
		<div class="hd"><span class="on"></span><span class=""></span><span class=""></span><span class=""></span></div>
	</div>
	<div class="ord-main">
		<div class="title" style="display:none;"><a class="close" href="javascript:;"></a>确定印品属性</div>
		<div class="info over_clean bor">
			<div class="fl xq_tit">
				<p class="p1">画册</p>
				<p class="p2">累计订购 <span class="s-purple">1140</span></p>
			</div>
			<div class="fr xq_tit">
				<p class="hot fap"></p>
				<p class="hot zhib"></p>
			</div>
		</div>
		<div class="info2" id="j-detail">
			<div class="box f-clearfix">
				<div class="left">印刷价格</div>
				<div class="right big_l">
					<span class="s-meid">￥<b id="totalPrice">763.00</b></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;单价：<span class="s-meid"
					 id="avgPrice">￥1.53 </span>元 / 本
				</div>
			</div>
			<form action="#" method="post" id="j-goods">

				<input id="prodId" value="18" name="prodId" type="hidden">
				<input id="prodName" value="画册" name="prodName" type="hidden">
				<input id="prodCode" value="P116" name="prodCode" type="hidden">

				<div class="box f-clearfix">
					<div class="left">开本类型</div>
					<div class="right r1 j-sel" name="filedKeys" id="folio_type" types="2">
						<a href="javascript:;" name="lables" id="1" class="a1 s-option active ">竖开本 </a>
						<a href="javascript:;" name="lables" id="2" class="a1 s-option  ">横开本 </a>
					</div>
				</div>
				<div class="box f-clearfix">
					<div class="left">成品尺寸</div>
					<div class="right" name="filedKeys" id="size_type" types="1">
						<div class="sbox f-clearfix">
							<div class="u-selw j-selectBox" style="float:left;">
								<select class="sel1 j-comboboxNumberType" name="selects" onchange="javascript:getPrice();">
																									                    									<option value="1">210mm*285mm(A4大小 大16开)</option>
													                    									<option value="2">210mm*140mm(A5大小 大32开)</option>
													                    									<option value="3">185mm*260mm(B5大小 正16开)</option>
													                    									<option value="4">185mm*130mm(正32开)</option>
																									            								</select>
								<i class="arrow"></i>
							</div>
						</div>
					</div>
				</div>
				<div class="box f-clearfix">
					<div class="left">封面工艺</div>
					<div class="right r1 j-sel" name="filedKeys" id="crafts_type_1" types="2">
						<a href="javascript:;" name="lables" id="4" class="a1 s-option active ">四色印刷 </a>
						<a href="javascript:;" name="lables" id="2" class="a1 s-option  ">双色印刷 </a>
						<a href="javascript:;" name="lables" id="1" class="a1 s-option  ">单色印刷 </a>
					</div>
				</div>
				<div class="box f-clearfix">
					<div class="left">单双面</div>
					<div class="right r1 j-sel" name="filedKeys" id="side_type" types="2">
						<a href="javascript:;" name="lables" id="2" class="a1 s-option active ">双面印刷 </a>
						<a href="javascript:;" name="lables" id="1" class="a1 s-option  ">单面印刷 </a>
					</div>
				</div>
				<div class="box f-clearfix">
					<div class="left">封面纸张</div>
					<div class="right" name="filedKeys" id="paper_type_1" types="1">
						<div class="sbox f-clearfix">
							<div class="u-selw j-selectBox" style="float:left;">
								<select class="sel1 j-comboboxNumberType" name="selects" onchange="javascript:getPrice();">
																									                    									<option value="128">128G铜版纸</option>
													                    									<option value="157">157G铜版纸</option>
													                    									<option value="200">200G铜版纸</option>
													                    									<option value="250">250G铜版纸</option>
													                    									<option value="300">300G铜版纸</option>
													                    									<option value="120">120G胶版纸</option>
													                    									<option value="140">140G胶版纸</option>
													                    									<option value="301">300G哑粉纸</option>
													                    									<option value="251">250G哑粉纸</option>
													                    									<option value="201">200G哑粉纸</option>
													                    									<option value="158">157G哑粉纸</option>
													                    									<option value="129">128G哑粉纸</option>
																									            								</select>
								<i class="arrow"></i>
							</div>
						</div>
					</div>
				</div>
				<div class="box f-clearfix">
					<div class="left">后期工艺</div>
					<div class="all_chenk" name="filedKeys" id="later_crafts" types="4">
						<div class="agree" for="j-aa" style="padding:0;height:auto;">
							<input type="checkbox" name="checkboxs" class="checkbox" value="1">
							<span id="snan1"></span> 单面覆哑膜
						</div>
						<div class="agree" for="j-aa" style="padding:0;height:auto;">
							<input type="checkbox" name="checkboxs" class="checkbox" value="2">
							<span id="snan2"></span> 单面覆亮膜
						</div>
						<div class="agree" for="j-aa" style="padding:0;height:auto;">
							<input type="checkbox" name="checkboxs" class="checkbox" value="4">
							<span id="snan4"></span> UV
						</div>
						<div class="agree" for="j-aa" style="padding:0;height:auto;">
							<input type="checkbox" name="checkboxs" class="checkbox" value="5">
							<span id="snan5"></span> 烫金
						</div>
						<div class="agree" for="j-aa" style="padding:0;height:auto;">
							<input type="checkbox" name="checkboxs" class="checkbox" value="6">
							<span id="snan6"></span> 烫银
						</div>
						<div class="agree" for="j-aa" style="padding:0;height:auto;">
							<input type="checkbox" name="checkboxs" class="checkbox" value="7">
							<span id="snan7"></span> 起鼓
						</div>
					</div>
				</div>
				<div class="box f-clearfix">
					<div class="left">内文工艺</div>
					<div class="right r1 j-sel" name="filedKeys" id="crafts_type_2" types="2">
						<a href="javascript:;" name="lables" id="4" class="a1 s-option active ">四色印刷 </a>
						<a href="javascript:;" name="lables" id="2" class="a1 s-option  ">双色印刷 </a>
						<a href="javascript:;" name="lables" id="1" class="a1 s-option  ">单色印刷 </a>
					</div>
				</div>
				<div class="box f-clearfix">
					<div class="left">内文纸张</div>
					<div class="right" name="filedKeys" id="paper_type_2" types="1">
						<div class="sbox f-clearfix">
							<div class="u-selw j-selectBox" style="float:left;">
								<select class="sel1 j-comboboxNumberType" name="selects" onchange="javascript:getPrice();">
																									                    									<option value="100">100G胶版纸</option>
													                    									<option value="105">105G铜版纸</option>
													                    									<option value="128">128G铜版纸</option>
													                    									<option value="157">157G铜版纸</option>
													                    									<option value="200">200G铜版纸</option>
													                    									<option value="250">250G铜版纸</option>
													                    									<option value="70">70G胶版纸</option>
													                    									<option value="80">80G胶版纸</option>
													                    									<option value="90">80G哑粉纸</option>
													                    									<option value="120">120G胶版纸</option>
													                    									<option value="140">140G胶版纸</option>
													                    									<option value="251">250G哑粉纸</option>
													                    									<option value="201">200G哑粉纸</option>
													                    									<option value="158">157G哑粉纸</option>
													                    									<option value="129">128G哑粉纸</option>
													                    									<option value="106">105G哑粉纸</option>
																									            								</select>
								<i class="arrow"></i>
							</div>
						</div>
					</div>
				</div>
				<div class="box f-clearfix">
					<div class="left">内文P数</div>
					<div class="right r1 j-sel" name="filedKeys" id="pages" types="6">
						<a href="javascript:;" name="lables" id="4" class="a1 s-option active ">4 页</a>
						<a href="javascript:;" name="lables" id="8" class="a1 s-option  ">8 页</a>
						<a href="javascript:;" name="lables" id="12" class="a1 s-option  ">12 页</a>
						<a href="javascript:;" name="lables" id="16" class="a1 s-option  ">16 页</a>
						<a href="javascript:;" name="lables" id="20" class="a1 s-option  ">20 页</a>
						<a href="javascript:;" name="lables" id="24" class="a1 s-option  ">24 页</a>
						<!-- 新添加的加加减减 -->
						<div class="u-selw j-selectBox plus_add">
							<span href="javascript:;" class="minus_in">-</span>
							<input type="text" name="lableTexts" placeholder="请输入页数" value="1" class="text sel1">
							<span href="javascript:;" class="plus_in">+</span>
						</div>
						<!-- 新添加的加加减减 end-->
					</div>
				</div>
				<div class="box f-clearfix">
					<div class="left">装订方式</div>
					<div class="right r1 j-sel" name="filedKeys" id="binding_style" types="2">
						<a href="javascript:;" name="lables" id="1" class="a1 s-option active ">骑马钉 </a>
						<a href="javascript:;" name="lables" id="2" class="a1 s-option  ">胶装 </a>
					</div>
				</div>
				<div class="box f-clearfix">
					<div class="left">印刷数量</div>
					<div class="right r1 j-sel" name="filedKeys" id="print_number" types="6">
						<a href="javascript:;" name="lables" id="500" class="a1 s-option active ">500 本</a>
						<a href="javascript:;" name="lables" id="1000" class="a1 s-option  ">1000 本</a>
						<a href="javascript:;" name="lables" id="2000" class="a1 s-option  ">2000 本</a>
						<a href="javascript:;" name="lables" id="3000" class="a1 s-option  ">3000 本</a>
						<a href="javascript:;" name="lables" id="5000" class="a1 s-option  ">5000 本</a>
						<!-- 新添加的加加减减 -->
						<div class="u-selw j-selectBox plus_add">
							<span href="javascript:;" class="minus_in">-</span>
							<input type="text" name="lableTexts" placeholder="请输入本数" value="1" class="text sel1">
							<span href="javascript:;" class="plus_in">+</span>
						</div>
						<!-- 新添加的加加减减 end-->
					</div>
				</div>
				<div class="box f-clearfix">
					<div class="left">文件</div>
					<div class="right wj">支付后联系客服传送文件&nbsp;&nbsp;</div>
				</div>
			</form>
		</div>
		<a class="u-btn5 j-submitGood btn-purple" href="javascript:toCreateOrder(&#39;18&#39;);" style="display:none;">加入购物车</a>
	</div>
	<div class="u-space u-space-1"></div>
	<div class="ord-main1">
		<div class="content">
			<div style="text-align:center;">
				<div style="text-align:center;">
					<span style="line-height:1.5;"></span><img src="/html/loadImage.htm" alt="" style="line-height:1.5;">
					<img
					 src="/html/loadImage(1).htm" alt="" style="line-height:1.5;"><img src="/html/loadImage(2).htm" alt="" style="line-height:1.5;"><img src="/html/loadImage(3).htm"
						 alt="" style="line-height:1.5;"><img src="/html/loadImage(4).htm" alt="" style="line-height:1.5;">
				</div>
			</div>
		</div>
	</div>
	<div class="g-footnav">
		<a href="tel:4008109006" target="_blank" class="a1 f-f35"><i></i>联系客服</a>
		<a href="javascript:;" class="a5 f-f50 j-btnBuy">立即购买</a>
		<a href="javascript:;" class="a6 f-f50 j-btnBuy">加入购物车</a>
	</div>
	<div class="m-mask" id="j-mask"></div>
    {% extends "../layout/footer.tpl" %}
    {% endblock %}
    
    <script type="text/javascript" src="/public/js/product.js"></script>