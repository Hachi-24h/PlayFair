$(document).ready(function(){

    function ktraten(){
        let ma= $("#ten").val();
        let pt = /^[A-Za-z ]+[A-Za-z]+$/;
        if(ma==""){
            $("#erten").html("Khong duoc de trong");
            $("#ten").addClass("error");
            return false;
        }
        if(pt.test(ma)){
            $("#erten").html("dung");
            $("#ten").removeClass("error");
            return true;
        }
        else{
            $("#erten").html("khong hop le");
            $("#ten").addClass("error");
            return false;
        }
    }
    $("#ten").blur(function(e){
        ktraten();
    })


    function ktrasdt(){
        let sdt= $("#sdt").val();
        pt = /^0[1-9]{9}$/;
        if(sdt==""){
            $("#ersdt").html("Khong duoc de trong");
            $("#sdt").addClass("error");
            return false;
        }
        if(pt.test(sdt)){
            $("#ersdt").html("dung");
            $("#sdt").removeClass("error");
            return true;
        }
        else{
            $("#ersdt").html("khong hop le");
            $("#sdt").addClass("error");
            return false;
        }
    }
    $("#sdt").blur(function(e){
        ktrasdt();
    })

    function ktraemail(){
        let sdt= $("#email").val();
        pt = /^[A-Za-z1-9]+@[a-z]+.[a-z]+$/;
        if(sdt==""){
            $("#eremail").html("Khong duoc de trong");
            $("#email").addClass("error");
            return false;
        }
        if(pt.test(sdt)){
            $("#eremail").html("dung");
            $("#email").removeClass("error");
            return true;
        }
        else{
            $("#eremail").html("khong hop le");
            $("#email").addClass("error");
            return false;
        }
    }
    $("#email").blur(function(e){
        ktraemail();
    })

    function ktradiachi(){
        let ma= $("#diachi").val();
        let pt = /^([A-Za-z ]+)+$/;
        if(ma==""){
            $("#erdiachi").html("Khong duoc de trong");
            $("#diachi").addClass("error");
            return false;
        }
        if(pt.test(ma)){
            $("#erdiachi").html("dung");
            $("#diachi").removeClass("error");
            return true;
        }
        else{
         
            $("#diachi").addClass("error");
            return false;
        }
    }
    $("#diachi").blur(function(e){
        ktradiachi();
    })
let stt=1;
    $("#dangki").click(function(e){
        
        let ten= $("#ten").val();   
        $("#erdiachi").html("khong hop fghjklle");
        let sdt= $("#sdt").val();
        let email = $("#email").val();
        let diachi = $("#diachi").val();
        let diadiem = $("#dd input[type='radio']:checked").val();
        if(ktraten() && ktrasdt() && ktraemail() && ktradiachi()){
            let data= "<tr><th>"+stt+"</th><th>"+ten+"</th><th>"+sdt+"</th><th>"+email+"</th><th>"+diachi+"</th><th>"+new Date().getFullYear()+"</th><th>"+diadiem+"</th></tr>";
            stt++;
            $("#tb").append(data);
        }
    })
})