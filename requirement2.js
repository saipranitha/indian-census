fs = require('fs');
var result={};
var data=[];
fs.readFileSync("csvfiles/India2011.csv").toString().split("\n").forEach(function(lineContent){

  var rowDataArray = lineContent.split(",");
  if (rowDataArray[4]=="Total" &&  rowDataArray[5]=="All ages"){
    var obj1 = {};
      obj1["state"]=rowDataArray[3];
    obj1["Males"]=rowDataArray[40];
    obj1["Females"]=rowDataArray[41];


    result[rowDataArray[3]] = obj1;
}

});



fs.readFileSync("csvfiles/IndiaSC2011.csv").toString().split("\n").forEach(function(lineContent){

  var rowDataArray = lineContent.split(",");
  if (rowDataArray[4]=="Total" &&  rowDataArray[5]=="All ages"){

    if(result[rowDataArray[3]] != null){
      var record = result[rowDataArray[3]];
      record["state"]=rowDataArray[3];
      record["Males"] = +record["Males"] + +rowDataArray[40];
      record["Females"] =+record["Females"]  + + rowDataArray[41];



    }else{
      var obj1 = {};

    //  obj1["area_name"]=rowDataArray[3];
      obj1["Total Males"]= +rowDataArray[7];
      obj1["Total Females"]= +rowDataArray[8];


      result[rowDataArray[3]] = obj1;
    }


}

});



fs.readFileSync("csvfiles/IndiaST2011.csv").toString().split("\n").forEach(function(lineContent){

  var rowDataArray = lineContent.split(",");
  if (rowDataArray[4]=="Total" &&  rowDataArray[5]=="All ages"){

    if(result[rowDataArray[3]] != null){
      var record = result[rowDataArray[3]];
      record["state"]=rowDataArray[3];
      record["Males"] = +record["Males"] + +rowDataArray[40];
      record["Females"] =+record["Females"]  + + rowDataArray[41];

      data.push(record);

    }else{
      var obj1 = {};

    //  obj1["area_name"]=rowDataArray[3];
      obj1["Males"]= +rowDataArray[40];
      obj1["Females"]= +rowDataArray[41];

      result.push(obj1)
    }

}

});
fs.writeFile("jsonfiles/requirement2.json", JSON.stringify(data, null, 4), function(err) {
 if(err) {
   console.log(err);
 } else {
   console.log("JSON saved ");
 }
});
// console.log(result);
