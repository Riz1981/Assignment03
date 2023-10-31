     //lowerCase function
    let personName:string="Muhammad ahmed";
    let lowerCase:string=personName.toLowerCase();
    console.log(lowerCase);
    //upperCase function
    let upperCase:string=personName.toUpperCase();
    console.log(upperCase);
    //tittleCase function
    let words:string[]=personName.split(" ");
    let tittleCaseName:string="";
    for(let i=0;i<words.length ;i++){
      tittleCaseName += words[i].charAt(0).toUpperCase()+words[i].slice(1).toLowerCase()+" "
    };
    console.log(tittleCaseName);
    
    
    
    


    

