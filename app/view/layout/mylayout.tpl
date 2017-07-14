<!doctype html>
<html lang="zh">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta content="all" name="robots">
    <meta name="keywords" content="">
    <meta name="description" content="">
    <meta name="author" content="我要印">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="format-detection" content="telephone=no,email=no,adress=no">
    <title>我要印</title>
    <link type="text/css" rel="stylesheet" href="/public/css/base.css">
    <link type="text/css" rel="stylesheet" href="/public/css/index.css">
    <link type="text/css" rel="stylesheet" href="/public/css/index1.css">
    <link type="text/css" rel="stylesheet" href="/public/css/index2.css">
    <script type="text/javascript" src="/public/js/init.base.js"></script>
    <script type="text/javascript" src="/public/js/init.index.js"></script>
    <link rel="icon" href="/public/favicon.png" type="image/x-icon">
    <title>{% block title %}我要印{% endblock %}</title>
  </head>
  <body>
    <div id="wrapper" class="g-wrap bg-gray">
        <!-- 头部 -->
        <script src="/public/js/index.js"></script>
        <div class="new-g-head over_clean">
            <div class="sort"><a href="" class="u-db" id="j-topSort"><i></i>分类</a></div>
            <div class="logo"><span><a href="" class="u-db"></a></span></div>
            <div class="login">
                <a href="" class="u-db"><i></i>登录</a>
            </div>
        </div>
      {% block content %}{% endblock %}
    </div>
  </body>
</html>