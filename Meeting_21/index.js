console.log("Basic Javascript");

let firstName = "John";
let isMarried = true;

if (isMarried == true){
    console.log(firstName + " is married");
} else {
    console.log(firstName + " is not married");
}

/*
    jika umur :
    < 13 Anak-anak
    13-16 Remaja
    17-25 Anak muda
    26-50 Dewasa
*/
let umur=25;

if(umur <13){
    console.log("Anak-anak");
} else if(umur>=13 && umur<17){
    console.log("Remaja");
}else if(umur>=17 && umur<26){
    console.log("Anak muda");
}else if(umur>=26 && umur<51){
    console.log("Dewasa");
}

let job="teacher";

switch(job){
    case 'teacher': 
        console.log(firstName + " is a teacher");
        break;
    case 'driver': 
        console.log(firstName + " is a driver");
        break;
    case 'instructor': 
        console.log(firstName + " is a instructor");
        break;
    default:
        console.log(firstName + " does something else");
        break;
}

switch(true){
    case umur <13:
        console.log("Anak-anak");
        break;
    case umur>=13 && umur<17:
        console.log("Remaja");
        break;
    case umur>=17 && umur<26:
        console.log("Anak muda");
        break;
    case umur>=26 && umur<51:
        console.log("Dewasa");
        break;
    default:
        console.log("Tidak ada dalam range");
        break;
}

let helloWorld = function (nama) {
    console.log("Hello World i'm " +nama);
};

helloWorld("Charley");

//Function Hoisting
//Scope