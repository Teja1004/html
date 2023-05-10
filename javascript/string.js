function countwords(str){
    return str.split(" ").length;

}
let result=countwords("this is the example string counting");
console.log(result);

function compare(str1,str2){
    if(str2.match(str1)){
        return true;
    }else{
        return false;
    }
}
let k=compare("teja","teja");
console.log(k);