const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options ) {
   
    resFrRep=firstRep(str,options);

    console.log(resFrRep);
    
    
          }
    
          const firstRep = (str, options) => {
            let RT = options.repeatTimes,
                S = options.separator,
                A = options.addition,
                ART =options.additionRepeatTimes,
                AS = options.additionSeparator,
                res = str;
    
            if (typeof RT === "undefined" || RT == 1) {
              return res;
            } else {
              while (ART>1){
                  ART--;
                  res=res+A+AS;
                  
              };
              let fin=res;
              while(RT>0){
                  if (RT !=1){
                      
                      fin=fin+A+S+res;
                  }else {
                      fin+=A;
                  }
                  RT--;
              }
              return fin;
            }
          };





  
