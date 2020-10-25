$(function(){
    let cookie_str = $.cookie('carts') ? $.cookie('carts') : '';
    console.log(cookie_str)

    let cookie_obj = convertStrToObj(cookie_str);

    for (let key in cookie_obj){
        let good = cookie_obj[key]
        // console.log(good)
        $('.cartList').append(
            `
            <ul class="goodInfo" data-good-id="${key}">
            <li>
                <img src="${good.src}" />
                <span>${good.name}</span>
            </li>
            <li>${good.price}</li>
            <li class="num">
                <a href="javascript:;" class="minus">-</a>
                <input type="text" name="" id="" value="${good.num}" />
                <a href="javascript:;" class="plus">+</a>
            </li>
            <li class="total">${good.price*good.num}</li>
            <li><a href="javascript:;" class="del">删除</a></li>
        </ul>
            `
        )
        //获取减号
        let $minus = $('.minus');
        $minus.each(function(){
            $(this).click(function(){
                let id = $('.goodInfo').attr('data-good-id')
                //获取cookie
                let cookie_str = $.cookie('carts') ? $.cookie('carts') : '';
                let cookie_obj = convertStrToObj(cookie_str);
                if(cookie_obj[id].num > 0){
                    cookie_obj[id].num --;
                }
                $.cookie('carts',JSON.stringify(cookie_obj),{expires : 2,path: '/'})
                //改变页面中--后的数量
                $(this).next().val(cookie_obj[id].num);
                //修改页面中的合计
                $(this).parent().next().text(cookie_obj[id].price * cookie_obj[id].num);

            })
        })

         //获取加号
         let $plus = $('.plus');
         $plus.each(function(){
             $(this).click(function(){
                 let id = $('.goodInfo').attr('data-good-id')
                 //获取cookie
                 let cookie_str = $.cookie('carts') ? $.cookie('carts') : '';
                 let cookie_obj = convertStrToObj(cookie_str);
                 cookie_obj[id].num ++;
                 $.cookie('carts',JSON.stringify(cookie_obj),{expires : 2,path: '/'})
                 //改变页面中++后的数量
                 $(this).prev().val(cookie_obj[id].num);
                 //修改页面中的合计
                 $(this).parent().next().text(cookie_obj[id].price * cookie_obj[id].num);
 
             })
         })

          //改变数量
          let $input = $('.num input');
          $input.each(function(){
              $(this).blur(function(){
                  let id = $('.goodInfo').attr('data-good-id')
                  //获取cookie
                  let cookie_obj = convertStrToObj(cookie_str);
                    if(/^\d+$/.test($(this).val())){
                        cookie_obj[id].num = $(this).val();
                    }else{
                        cookie_obj[id].num = 0;
                    let cookie_str = $.cookie('carts') ? $.cookie('carts') : '';
                  }
                    //存入cookie
                  $.cookie('carts',JSON.stringify(cookie_obj),{expires : 2,path: '/'})
                  //改变页面中++后的数量
                  $(this).val(cookie_obj[id].num);
                  //修改页面中的合计
                  $(this).parent().next().text(cookie_obj[id].price * cookie_obj[id].num);
  
              })
          })

          //删除
          let $del = $('.del');
          $del.each(function(){
              $(this).click(function(){
                  let id = $('.goodInfo').attr('data-good-id')
                  //获取cookie
                  let cookie_obj = convertStrToObj(cookie_str);
                //删除cookie中的数据
                delete cookie_obj[id]
                //存入cookie
                  $.cookie('carts',JSON.stringify(cookie_obj),{expires : 2,path: '/'})
                  //删除页面中的数据
                  $(this).parents('.goodInfo').remove();//删除当前标签名的为‘goodInfo’这个祖先标签;parents:表示获取当前标签的所有祖先
                  
              })
          })

          //清除所有商品
          $('.pay').append(
              `
              <div class="container pay-cart">
              <div class="pay-left">
                  <a href="#">清空购物车</a>
              </div>
              <div class="pay-right">
                  已选择<span>${good.num}</span>件商品
                  <span>合计(不含运费)：</span>
                  <span>${good.num * good.price}</span>
                  <span>去结算</span>
              </div>
          </div>
              
              `
          )
    }
    function convertStrToObj(str){
        if(!str){
            return {};
        }else{
            return JSON.parse(str);
        }
    }
})