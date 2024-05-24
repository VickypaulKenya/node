//console.log(global);
setTimeout(()=>{
    console.log("In the time out");
    clearInterval(intv);
},3000);


const intv=setInterval(()=>{
    
    console.log("In the time out");
},1000);

console.log(__dirname);
console.log(__filename);git