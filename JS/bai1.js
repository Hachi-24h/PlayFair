$(document).ready(
    function(){
        function ktraten(){
            let ten = $("#name").val();
            let pt = /^[A-Za-z ]+$/;
            if(ten==""){
                $("#erten").html("khong duoc de trong");
                return false;
            }
            else if (pt.test(ten)){
                $("#erten").html("Đungs");
                return true;
            }
            else{
                $("#erten").html("Yêu cầu nhập lại ");
                return true;
            }
        }
        $("#name").blur(function(e){
            ktraten();
        })

        function checkmk(){
            let mk= $("#mk").val();
            let pt= /^[0-9]{5,}$/;
            if(mk==""){
                $("#ermk").html("khong  duoc de trong");
                return false;
            }
            else if(pt.test(mk)){
                $("#ermk").html("dat");
                return true;
            }
            else{
                $("#ermk").html("chua dat");
                return false;
            }
        }
        $("#mk").blur(function(e){
            checkmk();
        })

        function checknlmk(){
            let nlmk= $("#nlmk").val();
            let mk= $("#mk").val();
            if(nlmk==""){
                $("#ernlmk").html("khong  duoc de trong");
                return false;
            }
            else if(mk==nlmk){
                $("#ernlmk").html("dung");
                return true;
            }
            else{
                $("#ernlmk").html("sai matkhau");
                return false;
            }
        }
        $("#nlmk").blur(function(e){
            checknlmk();
        })

        function ktrahoten(){
            let ten = $("#hoten").val();
            let pt = /^[A-Za-z ]+$/;
            if(ten==""){
                $("#erht").html("khong duoc de trong");
                return false;
            }
            else if (pt.test(ten)){
                $("#erht").html("Đungs");
                return true;
            }
            else{
                $("#erht").html("Yêu cầu nhập lại ");
                return true;
            }
        }
        $("#hoten").blur(function(e){
            ktrahoten();
        })

        let stt=1;
        $("#dangki").click(function(e){
            let hoten = $("#hoten").val();
            let ten= $("#name").val();
            let mk= $("#mk").val();
            if(checkmk() && ktrahoten() && ktraten()){
                let data = "<tr><td>"+stt+"</td><td>"+hoten+"</td><td>"+ten+"</td><td>"+mk+"</td></tr>";
                $("#tb").append(data); stt++;
            }
        })
    }
)