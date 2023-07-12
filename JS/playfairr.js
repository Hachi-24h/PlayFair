var arr=[24];

var len=25;
var c=65;
for(var i=0; i<len;i++){
    arr[i]= String.fromCharCode(i+c);
    if( arr[i]=='J'){
        arr[i]=String.fromCharCode(i+66);
        c+=1;
    }
}
// for(var i=0; i<len;i++){
// console.log('a['+i+']= '+ arr[i]);
// }

function del_trung(khoa){
    var arr_xoa=khoa.split('');
    return  ([...(new Set(arr_xoa))]);
}

function locArr(Arr,xoa){
    var a=[];
    var s= xoa.toString();
    var x=0;
    for(var i=0; i<Arr.length;i++){
        if(s.toUpperCase().indexOf(Arr[i].toString())==-1){
            a[x]=Arr[i];x++;

        }
    }
    return a;
}

function Create_MaTran(lenxoatrungkhoa,arr_xoa,Arr_loc){
    var matran = new Array();
    var a=0;
    while(a<5){
      matran[a] = new Array();a++;
    }
    var j=0;
      for(var i=0; i<len;i++){
          if(i<lenxoatrungkhoa)
             matran[j].push( new Array(arr_xoa[i].toUpperCase()));
          else{
              matran[j].push( new Array(Arr_loc[i-lenxoatrungkhoa]));
          }
          if((i+1) % 5==0){
              j++;
          }
      }
      return matran;
}

function XuLi_Ma(ma){
    var i=0;
    var len_ma=ma.length;
    console.log(len_ma);
    while(i<len_ma){
        if(ma[i]==ma[i+1]){
        ma=   ma.substring(0,i+1) + "X" + ma.substring(i+1);
           i++;
        }
        i++;
      
    }
return ma;
}

function Find_KiTu(kt,matran,x){
        for(var y=0; y<matran[x].length; y++){
           if(kt==matran[x][y].toString()){
            return y;
           }
        }
        return -1;
}

$("#dangki").click(function(e){
        
    let khoa= $("#khoa").val();
    let ma= $("#ma").val().toString();

    var arr_xoa= del_trung(khoa);
    var lenxoatrungkhoa= arr_xoa.length;
    // for(var i=0; i<lenxoatrungkhoa;i++){
    //     console.log('a['+i+']= '+ arr_xoa[i]);
    //     }
  //  console.log(khoa+'_'+ma);

//   var matran=[];
  var Arr_loc= locArr(arr,arr_xoa);

    var len_matran=5;
 var matran=Create_MaTran(lenxoatrungkhoa,arr_xoa,Arr_loc);
  

    ma= XuLi_Ma(ma);
    var ma1=ma.toLocaleUpperCase();
    var i=1;
    ma= ma.substring(0,2) + " " + ma.substring(2);
    for(var i=0 ; i<ma.length; ){
        if(ma[i]==" "&& i+3<ma.length){
            ma= ma.substring(0,i+3) + " " + ma.substring(i+3);
            i+=3;
        }
        else{
            i++;
        } 
    }
    console.log(ma);
    document.getElementById('matach').value = ma.toLocaleUpperCase();
    var bang="";
   for (var x in matran){
    for (var y in matran[x]){
        bang+=matran[x][y] +"   ";
        // console.log();
    }
    bang+="\n";
   }
        document.getElementById('bang').value = bang;
    console.log(Find_KiTu("A",matran,0));

    var ma_duyet=ma.split(" ") ;
    
    var j=0;
    while(j>=ma_duyet.length){
        var temp= ma_duyet[j].toString();
        ma_duyet[j]=new Array().push(temp.split(""));
        j++;
    }
    
    // console.log(typeof ma_duyet[1][3]);
    var kqua="";
    for(var i=0; i<ma_duyet.length; i++){
    //   for(var j=0;j<ma_duyet[i].length; j++){
        // console.log( ma_duyet[i][0])
    //   }
        var kt=ma_duyet[i][0]; 
        var x1;
        var y1=-1;
         for(x1=0; y1===-1; x1++){
             y1=Find_KiTu(kt,matran,x1);
         } 
         console.log(kt +"--"+ x1 +"-"+ y1); 
         var x2=0;
         var y2=-1;
         if(ma_duyet[i].length!==1){
         var kt=ma_duyet[i][1]; 
      
           
          for(x2=0; y2===-1; x2++){
              y2=Find_KiTu(kt,matran,x2);
          }
          console.log(kt +"--"+ x2 +"-"+ y2);
          }
         console.log("\n");
        
        //  x1=1;x2=1;y1=1;y2=2   
        console.log(x1+'-'+y1+"----"+x2+"-"+y2);
         if(y2!==-1){
            if (x1===x2){
        
            if(y1===4){
                kqua+=matran[x1-1][0];
            }
            else{
                 kqua+=matran[x1-1][y1+1];
            }
               
            if(y2===4){
                kqua+=matran[x1-1][0];
            }
            else
                kqua+=matran[x1-1][y2+1];
                 kqua+=" ";
         }
        
        else if(y1===y2){
            if(x1===5){
                kqua+=matran[0][y1];
            }
            else{
                 kqua+=matran[x1][y1];
            }
               
            if(x2===5){
                kqua+=matran[0][y1];
            }
            else
                kqua+=matran[x2][y1];  
                
                kqua+=" ";
         }
         else {     
                    kqua+= matran[x1-1][y2];
                    kqua+= matran[x2-1][y1]+" ";
         }
       
        }
        else {
         
        
                if(y1===4){
                    kqua+=matran[x1-1][0];
                }
                else{
                     kqua+=matran[x1-1][y1+1];
                }
                   
        }
         
    }  
      var x1;
       var y1=-1;
       var kt="W"
        for(x1=0; y1===-1; x1++){
            y1=Find_KiTu(kt,matran,x1);
        }
        
    //         console.log("M" +"--"+ x1 +"-"+ y1);

    // // for(var y=0; y<matran[x].length;y++){
    //     // console.log(typeof matran[1][y].toString());
    // // }
  
    console.log(kqua);
    document.getElementById('ketqua').value = kqua ;
})
