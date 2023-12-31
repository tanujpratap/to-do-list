
const addbtn=document.querySelector("#Add");
const deletebtn=document.querySelector("#Delete");
const boxcontainer=document.querySelector(".content-block");
const icon=document.querySelector("i");
const body=document.querySelector("body");
function additem(){
    const input=document.querySelector(" form input").value;
    const ullist=document.querySelector("ul");
  var  el=document.createElement("li");
    var inputtext=document.createTextNode(input);
    el.appendChild(inputtext);
    ullist.appendChild(el);
    const boxcontainer=document.querySelector(".content-block");
   boxcontainer.classList.remove("hide");
   
}
 

addbtn.addEventListener("click", additem);


function deleteitem(){
    const ullist=document.querySelector("ul");
   
    const lastElement = ullist.lastElementChild;

    // Check if there is a last element before attempting to remove
    if (lastElement) {
        ullist.removeChild(lastElement);
    }
}
deletebtn.addEventListener("click",deleteitem);


function changebackgnd(){
   
    let bright=true;
    if(bright){
        body.style.backgroundColor="black";
        bright=false;
       
    }
    else{
        body.style.backgroundColor="white";
        bright=true;
    }
}
icon.addEventListener("click",changebackgnd);