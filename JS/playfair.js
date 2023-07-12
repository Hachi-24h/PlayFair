let arr=[24];

let len=25;
let c=65;
for(let i=0; i<len;i++){
    arr[i]= String.fromCharCode(i+c);
    if( arr[i]=='J'){
        arr[i]=String.fromCharCode(i+66);
        c+=1;
    }
}

// xóa trùng 1 mảng
function del_trung(khoa){
    let khoa_xoaTrung=khoa.split('');
    return  ([...(new Set(khoa_xoaTrung))]);
}

// loc khóa 
function locArr(Arr,xoa){
    let a=[];
    let s= xoa.toString();
    let x=0;
    for(let i=0; i<Arr.length;i++){
        if(s.toUpperCase().indexOf(Arr[i].toString())==-1){
            a[x]=Arr[i];x++;

        }
    }
    return a;
}


// tạo ma trận có đủ kí tự 
function Create_MaTran(lenxoatrungkhoa,khoa_xoaTrung,bangCC_lockhoa){
    let matran = new Array();
    let a=0;
    while(a<5){
      matran[a] = new Array();
      a++;
    }
    let j=0;
      for(let i=0; i<25;i++){
          if(i<lenxoatrungkhoa)
             matran[j].push( new Array(khoa_xoaTrung[i].toUpperCase()));
          else{
              matran[j].push( new Array(bangCC_lockhoa[i-lenxoatrungkhoa]));
          }
          if((i+1) % 5==0){
              j++;
          }
      }
      return matran;
}
// //HA HIIAMA
function XuLi_Ma(ma){
    let i=0;
    while(i<ma.length){
       
        if (i+1>=ma.length){
            ma+="X";
        }

        if(ma[i]!==ma[i+1]){
        ma=   ma.substring(0,i+2) + " " + ma.substring(i+2);
           i+=3;
        }
        else{
            ma=ma.substring(0,i+1) + "X " + ma.substring(i+1);
            i+=3;
        }
      
    }
  return ma;
}


// thai J thành I
function replaceJ_I(ma){
    while(ma.indexOf("J")!=-1)
    ma= ma.toUpperCase().replace("J","I");
    return ma;
}


// n = 1 là mã hóa 
// n = -1 là giải mã ;
function thuatToanChung(n){
    let khoa= replaceJ_I($('#khoa').val().toUpperCase());
    let ma= replaceJ_I($('#ma').val().toUpperCase());

    // xóa các kí tự trùng trong khóa 
    let khoa_xoaTrung= del_trung(khoa);
    let lenxoatrungkhoa= khoa_xoaTrung.length;
 
    // bảng chữ cái đã bỏ ra các kí tự trong khóa 
    let bangCC_lockhoa= locArr(arr,khoa_xoaTrung);

    //tạo mảng 2 chiều 5x5 
    let matran=Create_MaTran(lenxoatrungkhoa,khoa_xoaTrung,bangCC_lockhoa);

    // tạo biến in ra ma trận 
    let getMatran="";
    for(let x=0; x<5; x++){
        for (let y=0 ; y<5; y++){
            getMatran+=matran[x][y]+"    ";
        }
        getMatran+="\n";
    }
    document.getElementById('bang').value = getMatran;

    //mã sau khi xử lí thêm x (nếu có ) và tách theo cặp
    ma= XuLi_Ma(ma);
   
    // in mã sau khi xử lí lên trang 
    document.getElementById('matach').value = ma.toLocaleUpperCase().replace("I","I/J");

    console.log(ma);
    // làm mãng 2 chiều cho mã xữ lí , thuận thiện cho việc xác định vị trí cho từng kí tự 
    let ma_duyet= ma.split(" ");
    var j=0;
    while(j>=ma_duyet.length){
        var temp= ma_duyet[j].toString();
        ma_duyet[j]=new Array().push(temp.split(""));
        j++;
    }

    // tạo biến độ dài của mã duyệt 
    let len_maduyet= ma_duyet.length-1;
    console.log(len_maduyet);

    //khai báo biến kết quả ;
    let kqua="";

    // xử lí từng cặp mã 
    for(let i=0; i<len_maduyet; i++){

        // lấy 2 kí tự trong từng cặp . 
       let kt1= ma_duyet[i][0];
       let kt2= ma_duyet[i][1];
      
       // tìm tọa độ kí tự 1 ;
        let x1=-1,y1,count1=0;
        do{ 
            x1++;
            for(y1=0; y1<5; y1++){
                if(kt1== matran[x1][y1].toString()){
                     count1++;
                     break;
                }
             }       
       }while(count1==0)
        console.log(kt1+" "+x1+"  "+y1);
       
       
        // tìm tọa độ kí tự 2: 
        let x2=-1,y2,count2=0;
        do{ 
            x2++;
            for(y2=0; y2<5; y2++){
                if(kt2== matran[x2][y2].toString()){
                     count2++;
                     break;
                }
             } 
       }while(count2==0)
        console.log(kt2+" "+x2+"  "+y2);

        // 2 kí tự cùng dòng 
        if (x1===x2){
            if(n==1){
                if(y1===4){
                    kqua+=matran[x1][0];
                }
                else{
                     kqua+=matran[x1][y1+1];
                }
                if(y2===4){
                    kqua+=matran[x1][0];
                }
                else
                    kqua+=matran[x1][y2+1];
            }
            else{
                if(y1===4){
                    kqua+=matran[x1][3];
                }
                else{
                     kqua+=matran[x1][y1-1];
                }
                if(y2===4){
                    kqua+=matran[x1][0];
                }
                else
                    kqua+=matran[x1][y2-1];
            }
                
                kqua+=" ";
        }
        // 2 kí tự cùng cột 
        else if(y1===y2){
            if(n==1){

               if(x1===4){
                        kqua+=matran[0][y1];
                }
                else{
                         kqua+=matran[x1+1][y1];
                }
                       
                if(x2===4){
                        kqua+=matran[0][y1];
                }
                else
                    kqua+=matran[x2+1][y1];  
            }
            else{
                if(x1===0){
                    kqua+=matran[4][y1];
                }
                 else{
                     kqua+=matran[x1-1][y1];
                 }
                   
                 if(x2===0){
                    kqua+=matran[4][y1];
            }
            else
                kqua+=matran[x2][y1]; 
            }
                
                kqua+=" ";
        }
        // 2 kí tự chéo nhau 
        else {     
            kqua+= matran[x1][y2];
            kqua+= matran[x2][y1]+" ";
        }
    }
    return kqua;
}
$("#mahoa").click(function(e){
    kqua= thuatToanChung(1);
    document.getElementById('ketqua').value = kqua.replace("I","I/J") ;
})

$("#giaima").click(function(e){
    kqua= thuatToanChung(-1);
    document.getElementById('ketqua').value = kqua.replace("I","I/J") ;
})
