const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let result='',
  i;
  if (members.length === 0){
    return false;
  }
 for (i=0; i<members.length;i++) {
   if (typeof members[i] === 'string'){
     result+=members[i].trim().charAt(0).toUpperCase();
   }
 }
  
 
return result.split('').sort().join('');
}