(function(){
    document.addEventListener('DOMContentLoaded', function () {
        var _a = document.querySelectorAll('a');

        _a[0].addEventListener('click', function(){
            chrome.tabs.executeScript(null,{code:"document.body.style.backgroundColor='#ee2c0c'"});
        },false);

        _a[1].addEventListener('click', function(){
            chrome.tabs.executeScript(null,{code:"document.body.style.backgroundColor='#0cee0c'"});
        },false);

        _a[2].addEventListener('click', function(){
            chrome.tabs.executeScript(null,{code:"document.body.style.backgroundColor='#e3f615'"});
        },false);
    });
    
})();

