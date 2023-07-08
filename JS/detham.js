$(document).ready(
    function(){
        let stt=1;
        function ktrama(){
            let ma= $("#name").val();
            let patten = /^[0-9]{4}$/;
            if(patten.test(ma)){
                $("#erten").html("đúng");
                return true;
            }
            else{
                   $("#erten").html("sai");
                   return false;
            }

        }   $("#name").blur(function(e) {
                // ktra ho ten dung
                ktrama();
            });

        function ktradiachi(){
            let dc= $("#diachi").val();
            let pt = /^[A-Za-z ']+[A-Za-z ]+$/;
            if(dc==""){
                $("#erdiachi").html("không được để trống !");
                return false;
            }
            if(pt.test(dc)){
                $("#erdiachi").html("đúng");
                return true;
            }
            else{
                $("#erdiachi").html("sai");
                return false;
            }
        }
        $("#diachi").blur(function(e) {
            ktradiachi();
        });
        
         let value="";
        // check loại báo 
        function checkbao(){
          
            let ele= document.getElementsByName("loai");
            
            for( let i=0 ; i<ele.length; i++){
                if(ele.item(i).checked)
                value=ele.item(i).value();
            }
            if(value==""){
                $("#erbao").html("yeu cau chon loai bao");
                return false;
            }
            else{
                $("#erbao").html("ok pro");
                return true;
            }
        }

        $("#kihan").change(function(e){
            let dg=$("#kihan option:selected").val();
            $("#dongia").val(dg);
        })

        $("#dangki").click(function(e){
            // lấy giá trị của radio button được chọn 
            let lbao = $("input[type='radio']:checked").val();

            // lấy giá trị option được chọn trong selected
            let kihan = $("#kihan option:selected").text();

            // lấy đơn giá của kì hạn đó 
            let dongia = $("#dongia").val();

            //lấy mã sách 
            let ma = $("#name").val();

            // lấy địa chỉ nhận báo
            let dchi = $("#diachi").val();

            //hình thức thanh toán 
            let httt = $("#thanhtoan input[type='radio']:checked").val();

            if(ktrama() && ktradiachi() ){
                let trnew = "<tr><td>"+stt+"</td><td>"+lbao+"</td><td>"+kihan+"</td><td>"+dongia+"</td><td>"+ma+"</td><td>"+dchi+"</td><td>"+httt+"</td></tr>";
                $("#tb").append(trnew);
                $("#tong").html(stt);
                stt++;
            }
            
        })


    }
)
