//回车时，默认是登陆
function on_return(){
    if(window.event.keyCode == 13){
        if (document.all('input1')!=null){
            document.all('input1').click();
        }
    }
}