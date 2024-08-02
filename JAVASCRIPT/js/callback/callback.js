function data(x ,y , callback){
       console.log(x+y);
       callback();
}


function display(){
    console.log("complted")
}

data(5,2,display);
