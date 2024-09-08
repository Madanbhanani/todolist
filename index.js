

var input=document.getElementById("InputData");
var List=document.getElementById("List");
var Edit=document.getElementById("Edit");
var Close=document.getElementById("Close");



var ListAdd=document.getElementById("ListAdd");

function addItem(){

            var maindiv=document.createElement("div");
            maindiv.setAttribute("class","mindiv");

            ListAdd.appendChild(maindiv);

            if(input.value !== ""){
                var p1=document.createElement("p");
                var pTextNod=document.createTextNode(input.value);
                p1.appendChild(pTextNod);
                maindiv.appendChild(p1)
                console.log(p1);
    
    
                var EditBtn=document.createElement("button");
                EditBtn.setAttribute("class", "EditBtn")
                var pTextNod2=document.createTextNode("Edit");
                EditBtn.appendChild(pTextNod2);
                maindiv.appendChild(EditBtn)
                console.log(EditBtn);
                

              

    
                var CloseBtn=document.createElement("button");
                CloseBtn.setAttribute("class", "EditBtn");
                var pTextNod3=document.createTextNode("close");
                CloseBtn.appendChild(pTextNod3);
                maindiv.appendChild(CloseBtn)
                console.log(CloseBtn);



            
                CloseBtn.addEventListener("click",Closebtn);
                function Closebtn(){
                    maindiv.style.display="none"
                }

                EditBtn.addEventListener("click",editBtn);
                function editBtn(){
                    var promptData=prompt("Edit Field",p1.innerText);
                    p1.innerHTML=promptData;
                }
                
            }
               

            else{
                alert("Enter data")
        }


}