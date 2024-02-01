function firstNonRepeatedChar(str) {
let map = new Map();
for(let i=0; i<str.length; i++){
    if(map.has(str.charAt(i))){
          map.set(str.charAt(i),(map.get(str.charAt(i)) || 1) + 1)
    }else{
         map.set(str.charAt(i),1)
    }
  
}
for(let [key,val] of map){
   if(val === 1){
       return key;
   }
}
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
