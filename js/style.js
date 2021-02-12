
// RGB Color Values

let hex = ["A","B","C","D","E","F",0,1,2,3,4,5,6,7,8,9];

// Create Random RGB Colors

createRandomColorNumber = () => {
    hex = ["A","B","C","D","E","F",0,1,2,3,4,5,6,7,8,9];
    for(let i = 0; i<= 5; i++){
        
        let randomArray = Math.floor(Math.random() * 16);       
        hex[i] = hex[randomArray];
    }  
      
      
}

// Change the backgroundcolor with each click

changeBackgroundColor = () => {
    
    createRandomColorNumber();
    giveRgbColor();    
    document.body.style.backgroundColor = `#${hex[0]}${hex[1]}${hex[2]}${hex[3]}${hex[4]}${hex[5]}`;
  
    
    
}

// Fills the input blanks for HEX color

giveRgbColor = () => {

    document.getElementById('rgb').value= `#${hex[0]}${hex[1]}${hex[2]}${hex[3]}${hex[4]}${hex[5]}`;
}    

    
