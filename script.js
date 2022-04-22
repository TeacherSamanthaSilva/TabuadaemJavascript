function tabuada(){
    let num = document.getElementById(`txtn`);
    let tab = document.getElementById(`seltabuada`);
    if(num.value.lenght == 0){

        window.alert("Digite um número qualquer");
        

    }else{

        let n = Number(num.value);
        let c=1;
        while(c< 10){
            let item = document.createElement(`option`);
            item.text = `${n} X ${c} = ${num*c}`;
            tab.appendChild(item)
            c = c+1;
        }
        
    }

    
}