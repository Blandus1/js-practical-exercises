// let phoneNumber="1234567890"

const validatePhoneNumber =(phoneNumber)=>{
  

    if( typeof phoneNumber !== 'string' || phoneNumber.length !== 10){
        return false;
    };
    for (const num of phoneNumber){
        if(num <'0'|| num > '9'){
            false;
        }
    }
    return true;
}


console.log(validatePhoneNumber("1234567890"))