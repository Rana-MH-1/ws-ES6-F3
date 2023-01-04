const found = true;
if(found ==true){
    let i = 0;
    console.log(i);
}
//oupuut :0

const found = true;
if(found ==true){
    let i = 0;
}

    console.log(i);
    //output: ReferenceError: i is not defined
    // let has a local/func scope

    const found = true;
if(found ==true){
    var i = 0;
}

    console.log(i);
    //output : 0
    // var has a global scope

    const ages=[1,56,2,8,99]
ages = [8,2]
//TypeError: Assignment to constant variable.
//but we can change the el of arr/obj