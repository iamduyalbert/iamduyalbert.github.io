function myFunction() {
    var copyText = document.getElementById("phone");
    var input=document.createElement("INPUT");
    document.body.appendChild(input);
    input.value=copyText.innerHTML;
    input.select();
    input.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.body.removeChild(input);
    
    var tooltip = document.getElementById("myTooltip");
    tooltip.style.display='block';
    tooltip.innerHTML=`<button class="button-23" role="button">Copy &nbsp;<i class="fa-solid fa-check"></i></button>`
    

}

function Bttmail() {
    var copyText2 = document.getElementById("gmail");
    var input=document.createElement("INPUT");
    document.body.appendChild(input);
    input.value=copyText2.innerHTML;
    input.select();
    input.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.body.removeChild(input);
    
    var tooltip = document.getElementById("myTooltip2");
    tooltip.style.display='block';
    tooltip.innerHTML=`<button class="button-23" role="button">Copy &nbsp;<i class="fa-solid fa-check"></i></button>`
}
