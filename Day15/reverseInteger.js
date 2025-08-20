/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const sign = x<0 ? -1 : 1;
    const string = x.toString();
    let reverse = "";
    for(let i = string.length-1;i>=0;i--){
        reverse += string[i];
    }
    let result =  sign * parseInt(reverse);
    if(result< - (2**31) || result >(2**31-1)){
        return 0;
    }
    return result;
};