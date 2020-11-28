function func(...args){
    args = args.reverse();
    let fn = args[0];
    for(let dec of args.slice(1)) fn = dec(fn);
    return fn;
}

try{
    module.exports = func;
}catch(e){
    window.func = func;
}
