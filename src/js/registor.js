//获取前端验证
$('#phone').focus(function(){
    $(this).val('');
    $(this).css('borderColor','red')
    $('.phone-wrong').css('display','none');

})
let arr=['false','false','false','false'];
//手机号码
$('#phone').blur(function(){
    let re =/^\d+$/;  
    if($(this).val()===''){
        arr[0] = false;
        $('.phone-wrong').css('color','red');
        $('.phone-wrong').css('display','block');
    }else{
        if(re.test($(this).val())){
            arr[0] = true;
        }else{
            arr[0]=false;
            alert('手机号码不符合规则')
        }
    }
    
    
    $(this).css('borderColor','')
    
})
//短信验证
$('#messge').focus(function(){
    $(this).css('borderColor','red');
    $('.massge-wrong').css('display','none');


})
$('#messge').blur(function(){
    let re=/^\d{4}$/;
    if($(this).val()===''){
        arr[1] = false;
        $('.massge-wrong').css('color','red');
        $('.massge-wrong').css('display','block');
        // alert('验证码不能为空')
    }else{
        if(re.test($(this).val())){
            arr[1] = true;
        }else{
            arr[1] = false;
            alert('验证码不符合规则')
        }
    }
    $(this).css('borderColor','')
    
    
    
   
})
//登录密码
$('#upwd').focus(function(){
    $(this).css('borderColor','red')
    $('.password-wrong').css('display','none');
})
$('#upwd').blur(function(){
    let re=/^[a-z]$/;
    if($(this).val()===''){
        arr[2] = false;
        $('.password-wrong').css('color','red');
        $('.password-wrong').css('display','block');
    }else{
        if(re.test($(this).val())){
            arr[2] = true;
        }else{
            arr[2] = false;
            alert('密码不符合规则')
        }
    }
    $(this).css('borderColor','')
    
    
})
//确认密码
$('#sure').focus(function(){
    $(this).css('borderColor','red')
})
$('#sure').blur(function(){
    let re=/^[a-z]$/;
    if(re.test($(this).val())){
        arr[3]=true;
    }else{
        arr[3]=false;
        alert('密码不符合规则')
    }
})
//后端验证
$('#sub').click(function(){
    if(arr.indexOf(false)=== -1){
        let phone = $('#phone').val();
        let upwd = $('#upwd').val();
        let sure = $('#sure').val();
		let cookie_str = $.cookie('users') ? $.cookie('users') : '';
		let cookie_obj = convertStrToObj(cookie_str);
        if(upwd === sure){
            if(phone in cookie_obj){
                alert('号码已注册过')
                return;
            }else{
                cookie_obj[phone]=upwd;
            }
            $.cookie('users',JSON.stringify(cookie_obj),{expires : 2 ,path:'/'});
        }else{
            alert('两次密码不一致')
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
$('#go').click(function(){
    location.href = 'login.html'
})