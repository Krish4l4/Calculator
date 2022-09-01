let string ="";
let buttons =document.querySelectorAll('.button');
Array.from(buttons).forEach((item)=>{
    item.addEventListener('click',(e)=>{
        //to evaluate your answer
        if(e.target.innerHTML=='='){
            string=eval(string);
            document.querySelector('input').value=string;
        }
        //to clear the input area if you click AC
        else if(e.target.innerHTML=='AC'){
            string="";
            document.querySelector('input').value=string;
        }
        //to input the operation
        else{
            console.log(e.target)
        string = string + e.target.innerHTML;
        document.querySelector('input').value=string;
        }
        
    })
    

})

