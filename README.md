### 网站使用说明
    在node环境下运行，执行命令行命令到项目根目录，然后gulp webserver启动服务器
    主页+商品列表-------index.html
        
        
        菜单栏跟随页面滚动，滚动商品类别，菜单栏颜色切换,点击商品类别会调到点击的商品类别
        轮播图： 底部导航：可点击  进入banner停止轮播   划出开始轮播  底部导航对应高亮
        二级菜单：划入显示
        动态获取数据的接口写在 ‘男表’，‘女士丝巾围巾’ 模块
        回到顶部功能
        划入商品，滑入商品参数，滑出活动信息
        模拟购物袋功能，详情页添加完购物车，会显示商品信息，数量，总金额，购物车内的商品信息会在详情页和首页显示7天，购物袋有删除功能，点击删除会删除cookie和商品信息，
        搜索框功能
   
    

    ！！只写了‘男表’的详情页和加入购物车-------------goodsinfo.html
        详情页购物车：点击‘+’选择购买的商品数量，点击放入购物袋，
        放大镜功能，滑动图片导航，改变对应图片
        模拟购物袋功能，详情页添加完购物车，会显示商品信息，数量，总金额，购物车内的商品信息会在详情页和首页显示7天，购物袋有删除功能，点击删除会删除cookie和商品信息。因为没给购物袋onchange事件，点击购物车只会操作cookie，购物袋是根据cookie来更改信息，所以需要刷新页面来看。

    账号密码登录---------register.html
        手机号：因为没来及做注册页，所以代码内部模拟存入了cookie,需要刷新页面存入cookie，然后可以做验证，手机号是17561933970
        密码：123456
        以上都正确，才注册成功，跳转主页
    短信登录---------login.html
        手机号：验证手机号正则
        验证码：随机验证码
        登录：验证手机号和密码是否是已注册的账号并且正确，
        正确才跳转主页