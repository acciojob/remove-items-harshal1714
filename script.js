//your JS code here. If required.
const btn = document.getElementsByTagName("input")[0];

const btnHandler = () => {
  
const val = document.getElementById("colorSelect").value;
  const option = document.getElementById("colorSelect").children; 
  for(let i=0; i<option.length; i++){
    if(option[i].innerText === val){
      option[i].remove();
      return;
    }
  }
}

btn.addEventListener("click", btnHandler)