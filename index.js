function receivesAFunction(callback) {
    const doSomething = name => console.log("i did a thing");
    callback(doSomething);
}
  
function returnsANamedFunction (){
    return (
    function aFunction (){

    });
}

function returnsAnAnonymousFunction (){
    return (function (){

    });
}
