
$(function(){
//加入购物车的按钮---跳转到购物车页
    //获取加入购物车按钮
    let $addToCart = $('.cart-btn');

    let cookie_str = $.cookie('carts') ? $.cookie('carts') : '';
    $addToCart.click(function(){

            let  good_name = $('.prodcut-name').text();
            let good_price =parseInt(/\d+/.exec($('.price span').text()));
            let good_src = $('#li_src img').attr('src');
            let good_id = $('.prodcut-masseg').attr('data-good-id')
            // 
            let cookie_str = $.cookie('carts') ? $.cookie('carts') : '';
            let cookie_obj = convertStrToObj(cookie_str);
            if(good_id in cookie_obj){
                cookie_obj[good_id].num++;
            }else{
                cookie_obj[good_id] = {
                    name : good_name,
                    price : good_price,
                    src  : good_src,
                    num : 1
                }
            }
            $.cookie('carts',JSON.stringify(cookie_obj),{expire : 1,path:'/'})
        
           
    })
    $addToCart.click(function(){
        location.href = 'cart.html';
    })
    function convertStrToObj(str){
        if(!str){
            return {};
        }else{
            return JSON.parse(str);
        }
    }
})

