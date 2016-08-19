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

function skip(nickname,path){
    var $total = document.getElementById("total");
    $total.style.display="block";
    var $move = document.getElementById("move");
    $move.style.display="block";
    $(".top").text(nickname);
    $("#path").text(path);
}
$(function(){
    var socket = io.connect('http://localhost:3000/');
    socket.on('message',function(message){
     
    });

    //关闭对话框
    $(".close").click(function(){
        var $total = document.getElementById("total");
        $total.style.display="none";
        var $move = document.getElementById("move");
        $move.style.display="none";
    });

    var nickname = $(".top").text();
    //绑定回车按键
    document.onkeydown = function(e){ 
        var ev = document.all ? window.event : e;
        if(ev.keyCode==13) {
            flag = true;
            var path = $("#path").text();
            var msg = $(".text").text();
            
            socket.emit("send",{"msg":msg,"path":path,"nickname":nickname});
        }
    }
   
    //发送按钮点击事件
    $(".send").click(
        function(){
            flag = true;
            var path = $("#path").text();
            var msg = $(".text").text();
            var nickname = $(".top").text();
            var nickname = $(".top").text();
            appendBubble_right(msg,path);
            socket.emit("send",{"msg":msg,"path":path,"nickname":nickname});
            $(".text").text("");
            
        }
    );
    socket.on('resend',function(data){

         appendBubble_left(data.msg,data.path,data.nickname);
       
    });
});

function appendBubble_left(data,imgPath,nickname){
    $('#info').append(
        "<div class='column left'>" + 
            "<div id='photo' class='left'><img src='"+imgPath+"'/></div>" +
            "<div class='c_font'>"+nickname+"</div>"+
            "<div id='bubble' class='left'>" +
                "<div id='triangle' class='left tri_left'></div>" + 
                "<div id='tinfo' class='left tinfo_left'>" + data +"</div>" + 
            "</div>"+
        "</div>");
}

function appendBubble_right(data,imgPath){
    $('#info').append("<div class='column right'>" + 
        "<div id='photo' class='right'><img src='"+imgPath+"'></div>" +
        "<div id='bubble' class='right'>" +
            "<div id='triangle' class='right tri_right'></div>" + 
            "<div id='tinfo' class='right tinfo_right'>" + data +"</div>" + 
        "</div></div>");
}