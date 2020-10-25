$(function(){
    //获取所有的购物车按钮
    let $cart_btn = $('.cart_btn');
    //循环添加点击事件，点击购物车图时弹出弹框，并跳转到购物车页
    $cart_btn.each(function(){
        $(this).click(function(){
            alert('已成功加入购物车');
            location.href = 'cart.html'
            //获取页面中商品的 nmae ,id ,price,src
            let good_id = $(this).parent().attr('data-good-id');
            // console.log(good_id)
            let good_name = $(this).prev().prev().text();
            console.log(good_name)

            let  good_price =parseInt(/\d+/.exec( $(this).prev().text()));
            
            let good_src =$(this).siblings('img').attr('src');

            //获取cookie
           let  cookie_str = $.cookie('cart') ? $.cookie('cart') : '';
           //将cookie转为对象
           let cookie_obj = convertStrToObj(cookie_str);
           //判断该商品是否已经存在cookie中,如果存在，则找到数量加加，如果不存在,则将商品的信息存入cookie中
           if(good_id in cookie_obj){
               cookie_obj[good_id].num ++;
           }else{
               cookie_obj[good_id] = {
                    name : good_name,
                    price : good_price,
                    src : good_src,
                    num : 1
               }
           }
           //创建cookie
           $.cookie('carts',JSON.stringify(cookie_obj),{expire : 1,path:'/'});
           console.log(cookie_obj)
        })
    })
    function  convertStrToObj(str){
        if(!str){
            return {};
        }else{
            return JSON.parse(str)
        }
    }
})