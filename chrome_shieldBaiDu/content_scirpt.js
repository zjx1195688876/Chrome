/*屏蔽各种百度广告*/
var shieldBaiDu = function(){
    var _contentLeft = document.getElementById('content_left');
    _contentLeft.style.display = 'none';
    //屏蔽百度推广
    var _tuiguangList = _contentLeft.getElementsByClassName('ec_tuiguang_pplink');
    if(_tuiguangList.length > 0){
        for(var i = 0,l = _tuiguangList.length;i < l;i++){
            _tuiguangList[i].parentNode.parentNode.parentNode.style.display = "none";
        }
    }

    //屏蔽大区域广告
    var _tuiguangList2 = _contentLeft.getElementsByClassName('ec_tuiguang_ppimlink');
    if(_tuiguangList2.length > 0){
        for(var i = 0,l = _tuiguangList2.length;i < l;i++){
            _tuiguangList2[i].parentNode.style.display = "none";
        }
    }

    _contentLeft.style.display = 'block';
    document.getElementById('content_left').innerHTML = _contentLeft.innerHTML;
}


/*action*/
if(window.location.href.indexOf('baidu') > -1){
    shieldBaiDu();
}

