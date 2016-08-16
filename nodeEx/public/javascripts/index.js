var MoveDiv = function(){};
/**
* @deprecated 移动div的方法
* @param{id} id 要移动的层ID
*/
MoveDiv.Move=function(id)
{
    var o=document.getElementById(id);
    o.onselectstart = function()
    {
        return(false);
    };
    o.onmousedown = function(e) {
        e = e||window.event;
        var x=e.layerX||e.offsetX;
        var y=e.layerY||e.offsetY;
        x=x-document.body.scrollLeft;
        y=y-document.body.scrollTop;
        document.onmousemove = function(e)
        {
            e=e||window.event;
            o.style.left=(e.clientX-x)+"px";
            o.style.top=(e.clientY-y)+"px";
        };
        document.onmouseup=function()
        {
            document.onmousemove=null;
        };
    };
}

function skip(){
    var $total = document.getElementById("total");
    $total.style.display="block";
    var $move = document.getElementById("move");
    $move.style.display="block";
}
$(function(){
    var socket = io.connect('http://localhost:3000/');
    socket.on('message',function(message){
     
    });
    $(".send").click(
        function(){
            var msg = $(".text").text();
            socket.emit("send",msg);
        }
    );
    socket.on('resend',function(data){
        $('#info').append(data);
    })
});