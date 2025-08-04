let arr = [0,10,20,30];
let fn = (n)=>{
       return n>10;
}

var filter = function(arr, fn) {
    let newarr =[];
    for(let i=0;i<arr.length;i++){
      if(fn(arr[i],i)){
        newarr.push(arr[i]);
      }
    }
    return newarr;

};
filter(arr,fn);