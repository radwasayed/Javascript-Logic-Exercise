// Question 2
let answer = (array , tar) => {
    for (let i = 0; i < array.length; i++){
        if (array[i] < tar){
           let sub = tar - array[i];
           if (array.includes(sub)){
               return [array[i], sub];
           }else{
               break;
           }
        }
    }
};

answer([1,2,3], 4);