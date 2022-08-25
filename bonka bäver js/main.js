


function Play(){
    let div = document.createElement("div");
    div.classList.add("beaver");
    div.innerText="BÄVER!!!!!";
    PositionRandomiser(div);
    let timer = setTimeout(Play, 3000);

    const beaver = document.getElementsByClassName("bäverområde")[0];
    beaver.addEventListener("click", handleClick);

    beaver.appendChild(div);
    console.log(div);
    console.log("Start");   


    const button = document.querySelector("button");
        button.disabled = true;
    
}

    
let amount = 0;
function handleClick(ev){

   
    if(ev.target.classList.contains("beaver")) {
        ev.target.innerText="DÖD";
        ev.target.classList.remove("beaver");
        console.log("TRÄFF");


        
        const span = document.querySelector('span');
        

        if(!ev.target.classList.contains("beaver")){
            amount+=1;
            span.innerText="amount: " + amount;
            
            console.log(amount);
        }
        
    }
    
    

}


function PositionRandomiser(div){

    let x = Math.floor(Math.random()*1000);
    let y = Math.floor(Math.random()*600);

    div.style.position = "absolute";
    div.style.left = x + 'px';
    div.style.top = y + 'px';
    

}