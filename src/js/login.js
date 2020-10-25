$(function(){
        let arr = [false,false];
        $('#number').blur(function(){
            let re = /^\d+$/;
            if(re.test($(this).val())){
                arr[0] =true;
            }else{
                arr[0] = false;
                alert('手机号码不符合规则')
            }
        })
        $('#upwd').blur(function(){
            let re=/^[a-z]$/;
            if(re.test($(this).val())){
                arr[1] = true;
            }else{
                arr[1] = false;
                alert('密码不符合规则')
            }
        })
        $('#btn').click(function(){

            if(arr.indexOf(false) === -1){
                let number = $('#number').val();
                let upwd = $('#upwd').val();
                let cookie_str =  $.cookie('users') ? $.cookie('users') : '';
                let cookie_obj = convertStrToObj(cookie_str);
                if( number in cookie_obj){
                    if(upwd=== cookie_obj[number]){
                        alert('登录成功');
                        location.href = 'product.html';
                    }else{
                        alert('密码错误')
                    }
                }else{
                    $('#wrong').css('display','block')
                }
            }else{
                alert('信息不完整')
            }
        })
        function convertStrToObj(str){
            if(!str){
                return {};
            }else{
                return JSON.parse(str);
            }
        }
})

