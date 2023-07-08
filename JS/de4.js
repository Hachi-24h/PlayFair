$(document).ready(function(){
    function checkma(){
        let ma= $("#ma").val();
        let pt = /^[A-Z]{3}[0-9]{3}$/;
        if (ma==""){
            $("#erma").html("ko dc de trong");
            return false;
        }
        else if(pt.test(ma)){
            $("#erma").html("dung");
            return true;
        }
        else{
            $("#erma").html("saiiiiiii");
            return false;
        }
    }
    $("#ma").blur(function(e){
        checkma();
    })

    function checkht(){
        let ma= $("#hanhtrinh").val();
        let pt = /^([A-Za-z ]+)+$/;
        if (ma==""){
            $("#erht").html("ko dc de trong");
            return false;
        }
        else if(pt.test(ma)){
            $("#erht").html("dung");
            return true;
        }
        else{
            $("#erht").html("saiiiiiii");
            return false;
        }
    }

    $("#hanhtrinh").blur(function(e){
        checkht();
    })
    

    // function checkngay(){
    //     var ngay = new Date("#ngay").val();
    //     let day= new Date();
    //     if (!ngay){
    //         $("#erngay").html("ko dc de trong");
    //         return false;
    //     }
    //     else if(ngay.getTime()> day.getTime()){
    //         $("#erngay").html("sai chọn lại");
    //         return false;
    //     }
    //     else{
    //         $("#erngay").html("dung");
    //         return true;
    //     }
    // }
    // $("#ngay").click(checkngay());



    function checkthoigian(){
        let ma= $("#thoigian").val();
        let pt = /^([A-Za-z0-9 ]+)+$/;
        if (ma==""){
            $("#ertg").html("ko dc de trong");
            return false;
        }
        else if(pt.test(ma)){
            $("#ertg").html("dung");
            return true;
        }
        else{
            $("#ertg").html("saiiiiiii");
            return false;
        }
    }
    $("#thoigian").blur(function(e){
        checkthoigian();
    })
    
    function checkgia(){
        let ma= $("#gia").val();
  
        if (ma==""){
            $("#ergia").html("ko dc de trong");
            return false;
        }
        else if(ma>0){
            $("#ergia").html("dung");
            return true;
        }
        else{
            $("#ergia").html("saiiiiiii");
            return false;
        }
    }
    $("#gia").blur(function(e){
        checkgia();
    })

    let stt=1;
    $("#dangki").click(function(e){
        let ma= $("#ma").val();
        let ht= $("#hanhtrinh").val();
        let ngay=  $("#ngay").val()
        // let ngay=d.toString();
        let tg= $("#thoigian").val();
        let gia= $("#gia").val();
        let file= $("#file").val();
        if(checkma() && checkht() && checkthoigian() && checkgia()){
            let data = "<tr><td>"+stt+"</td><td>"+ma+"</td><td>"+ht+"</td><td>"+ngay+"</td><td>"+tg+"</td><td>"+gia+"</td><td>"+file+"</td></tr>";
            $("#tb").append(data);
            stt++;
        }
    })
   
})