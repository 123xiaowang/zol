//创建cookie
function createCookie(key,value,json){
    //初始化json
    json = json || {};
    //初始化key=value
    let cookie_str = key + '=' + value + ';path=/';
    //判断有效期
    if(!isNaN(json.expires)){
        //创建日期对象
        let date = new Date();
        //设置日期
        date.setDate(date.getDate() + json.expires);
        //设置有效期
        cookie_str += ';expires=' + date;
    }
    //创建cookie
    document.cookie = cookie_str;
}
//获取cookie
function getCookie(key){
    //'key=value; users={"bbb":"111","aaa":"111","ccc":"111"}'
    let arr = document.cookie.split('; ');
    //['key=value','users={"bbb":"111","aaa":"111","ccc":"111"}']
    for(let i = 0,len = arr.length;i < len;i ++){
        let list = arr[i].split('=');
        //[['key','value'],['users','{"bbb":"111","aaa":"111","ccc":"111"}']]
        if(key === list[0]){  //只要数组中有相同的元素，则返回对象的第二个元素
            return list[1];
        }
    }
    //当前数组没有匹配的内容，则返回'';
    return '';
}

//将字符串转为对象
function convertStrToObj(str){
    if(!str){
        return {};
    }else{
        return JSON.parse(str);
    }
}