var fs=require('fs');


var files=[];
files[0]='csvfiles/India2011.csv';
files[1]='csvfiles/IndiaSC2011.csv';
files[2]='csvfiles/IndiaST2011.csv';

var result={};
  var literatepopulation={};

var agewiseLiterates = {};
for(var i in files ){
  fs.readFileSync(files[i],'utf8').toString().split("\n").forEach(function(lineContent){

    // fs.readFileSync("India2011.csv").toString().split("\n").forEach(function(lineContent){
    //
      var rowDataArray = lineContent.split(",");

      if(rowDataArray[4] == "Total"){
        if (agewiseLiterates[rowDataArray[5]]){

              agewiseLiterates[rowDataArray[5]] = +agewiseLiterates[rowDataArray[5]] +  +rowDataArray[12];

        }else{
        //  console.log();
          agewiseLiterates[rowDataArray[5]] = +rowDataArray[12];

        }
        delete agewiseLiterates["undefined"];
        delete agewiseLiterates["Age-group"];
          delete agewiseLiterates["All ages"];
        //  literatepopulation = {"Age-Wise population distribution in terms of literate population":  agewiseLiterates};




      }


});
}

var keys = Object.keys(agewiseLiterates);
 var main = [];
for (var i = 0 , len=keys.length; i < len; i++) {
 var temp ={};
 temp["ageGroup"] = keys[i];
 temp["TotalLiteratePop"] =agewiseLiterates[keys[i]];
 main.push(temp);

}console.log(main);
fs.writeFile("jsonfiles/requirement1.json", JSON.stringify(main, null, 4), function(err) {
 if(err) {
   console.log(err);
 } else {
   console.log("JSON saved ");
 }
});

// var obj1 = {};
//   obj1[" Literate without educational level"] =a;
//   obj1[" Below Primary"]= b;
//   obj1[" Primary"]=c;
//   obj1[" Middle"]=d;
//   obj1[" Matric/Secondary"]=e;
//   obj1[" Higher secondary/Intermediate/Pre-University/Senior secondary"]=f;
//   obj1[" Non-technical diploma or certificate not equal to degree"]=g;
//   obj1[" Technical diploma or certificate not equal to degree"]=h;
//   obj1[" Graduate & above"]=i;
//   obj1[" Unclassified"]=j;
//   result["Educational level across india"]=obj1;
// console.log(result);
// console.log(a);
