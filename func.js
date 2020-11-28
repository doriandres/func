function func(...args){
    args = args.reverse();
    let fn = args[0];
    for(let dec of args.slice(1)) fn = dec(fn);
    return fn;
}

if(document && document.currentScript && document.currentScript.type === "module"){
  export func;
}else if(module){
  module.exports = func;
}else{
  window.func = func;
}
