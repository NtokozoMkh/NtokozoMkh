var ar_crt = [];

    var obj = new Object()
      obj.icon = 'img/apple2.jpeg';
      obj.name = 'apple';
      obj.details = 'color red';
      obj.price = 2;
      obj.items = 1;
      ar_crt.push(obj);

    var obj = new Object()
      obj.icon = 'img/mango.jpeg';
      obj.name = 'mango';
      obj.details = 'color is yellow';
      obj.price = 3;
      obj.items = 1;
      ar_crt.push(obj);

    var obj = new Object()
      obj.icon = 'img/images (5).jpeg';
      obj.name = 'banana';
      obj.details = 'color is brown ';
      obj.price = 4;
      obj.items = 1;
      ar_crt.push(obj);
      
    var obj = new Object()
      obj.icon = 'img/orange.jpeg';
      obj.name = 'orange';
      obj.details = 'color is orange ';
      obj.price = 9;
      obj.items = 1;
      ar_crt.push(obj);
      
    //scroller item listed
    html = "";
    for(i in ar_crt){
        html += "<div class='top-itm'><img src='"+ar_crt[i].icon+"' alt='no image'/>"+
            "<div class='nam'><h3>"+ar_crt[i].name+"</h3></div></div>";
        document.getElementById("top-lst").innerHTML = html;
    }
    
    //home bottom list items
    var html_nd = "";
    for(i in ar_crt){
        html_nd+= "<div class='btm-itm'><img src='"+ar_crt[i].icon+"'/>"+
            "<div><h2>"+ar_crt[i].name+"</h2><p class='innf'>"+ar_crt[i].details+"</p></div>"+
            "<h2>R"+ar_crt[i].price+"</h2></div>";
        document.getElementById("btm-lst").innerHTML = html_nd;
        qw=document.getElementsByClassName("btm-itm");
        for(i in qw){
            qw[i].onclick= function(){
                document.getElementById("homepg").style.display="none";
                document.getElementById("itempg").style.display="block";
                aa=this.getElementsByTagName("h2")[0].innerHTML;
                document.getElementById("itm-nm").innerHTML=aa;
                bb=this.getElementsByClassName("innf").innerHTML;
                document.getElementById("itm-in").innerHTML;
                cc=this.getElementsByTagName("h2")[1].innerHTML;
                document.getElementById("itm-pr").innerHTML=cc;
            }
        }
    }
    
    //cart items listed
    html_rd = "";
    for(var i in ar_crt) {
        html_rd += "<tr class='tr'>"+
        "<td><img src=" + ar_crt[i].icon+ "/></td>"+
        "<td class='itm-det'><h2>"+ar_crt[i].name+"</h2><p1>"+ar_crt[i].details+"</p1><h3 class='priceOfItems'>R"+ar_crt[i].price+"</h3></td>"+     
        "</tr>";
        priceOfItem = ar_crt[i].price;
        document.getElementById("tbody").innerHTML = html_rd;
        document.getElementById("added-itm").innerHTML = ar_crt.length;
      
    //item control buttons
    var i=0
    tr = document.getElementsByClassName("tr");
    for( i=0; i<tr.length; i++){
        count=document.createElement("TD");
        count.className="itm-coun";
        
        inptA= document.createElement("INPUT");
        inptA.value="+";
        inptA.className="addVal";
        inptA.type="button";
        
        inptM= document.createElement("INPUT");
        inptM.value="-";
        inptM.className="minVal";
        inptM.type="button";
        
        inptV= document.createElement("INPUT");
        inptV.value= ar_crt[i].items;
        inptV.disabled;
        inptV.className="numberOfItems";
        inptV.type="number";
        
        count.appendChild(inptA);
        count.appendChild(inptV);
        count.appendChild(inptM);
        
        tr[i].appendChild(count);
    };
    
    //add item button
    addV=document.getElementsByClassName("addVal");
    for( j=0; j<addV.length; j++ ){
        addV[j].onclick= function(){
            ss=$(this).parent().prev().children().next().next();
            qq=ss.html().slice(1)
            inp = this.nextElementSibling;
            inpV=inp.value;
            if(inpV==1){
                inp.value="";
                inp.value="2";
                a= qq * 2;
                ss.html("R"+a)
            }
            else if(inpV==2){
                inp.value="";
                inp.value="3";
                a= qq * 3 / 2;
                ss.html("R"+a)
            } 
            else if(inpV==3){
                inp.value="";
                inp.value="4";
                a= qq * 4 / 3;
                ss.html("R"+a)
            }
            else{alert("Can not have more than 4 per item!")}
        }
    };
    
    //minus item button
    addV=document.getElementsByClassName("minVal");
    for( j=0; j<addV.length; j++ ){
        addV[j].onclick= function(){
            ss=$(this).parent().prev().children().next().next();
            qq=ss.html().slice(1);
            inp=this.previousElementSibling;
            inpV=inp.value;
            if(inpV==5){
                inp.value="";
                inp.value="4";
                a= qq / 4;
                ss.html("R"+a.toFixed(2))
            }
            else if(inpV==4){
                inp.value="";
                inp.value="3";
                a= qq / 1.33;
                ss.html("R"+a.toFixed(0))
            } 
            else if(inpV==3){
                inp.value="";
                inp.value="2";
                a= qq / 1.5;
                ss.html("R"+a)
            }
            else if(inpV==2){
                inp.value="";
                inp.value="1";
                a= qq / 2;
                ss.html("R"+a)
            }
            else{alert("There must be atleast 1 per item!")}
        }
    };
   }