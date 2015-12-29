
fs = require('fs');
  var result = {};
  var obj1 = {};
var a=0,b=0,c=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0;

fs.readFileSync("csvfiles/India2011.csv").toString().split("\n").forEach(function(lineContent){

  var rowDataArray = lineContent.split(",");
  if (rowDataArray[4]=="Total" &&  rowDataArray[5]=="All ages"){

      a += +rowDataArray[15];
      b += +rowDataArray[18];
      c += +rowDataArray[21];
      d += +rowDataArray[24];
      e += +rowDataArray[27];
      f += +rowDataArray[30];
      g += +rowDataArray[33];
      h += +rowDataArray[36];
      i += +rowDataArray[39];
      j += +rowDataArray[42];
}
obj1["Literate without educational level"] =a;
obj1["Below Primary"]= b;
obj1["Primary"]=c;
obj1["Middle"]=d;
obj1["Matric/Secondary"]=e;
obj1["Higher secondary/Intermediate/Pre-University/Senior secondary"]=f;
obj1["Non-technical diploma or certificate not equal to degree"]=g;
obj1["Technical diploma or certificate not equal to degree"]=h;
obj1["Graduate & above"]=i;
obj1["Unclassified"]=j;
result["Educational level across india"]=obj1;


});
// console.log(result);


fs.readFileSync("csvfiles/IndiaSC2011.csv").toString().split("\n").forEach(function(lineContent){

  var rowDataArray = lineContent.split(",");
  if (rowDataArray[4]=="Total" &&  rowDataArray[5]=="All ages"){
    if(result[rowDataArray[3]] != null){

        a += +rowDataArray[15];
        b += +rowDataArray[18];
        c += +rowDataArray[21];
        d += +rowDataArray[24];
        e += +rowDataArray[27];
        f += +rowDataArray[30];
        g += +rowDataArray[33];
        h += +rowDataArray[36];
        i += +rowDataArray[39];
        j += +rowDataArray[42];

}
}

});

var record = result["Educational level across india"];
record["Literate without educational level"] += +record["Literate without educational level"] + +a;
record["Below Primary"]+=+record["Below Primary"]+ +b;
record["Primary"]+=+record["Primary"]+ +c;
record["Middle"]+=+record["Middle"]+ +d;
record["Matric/Secondary"]+=+record["Matric/Secondary"]+ +e;
record["Higher secondary/Intermediate/Pre-University/Senior secondary"]+=+record["Higher secondary/Intermediate/Pre-University/Senior secondary"]+ +f;
record["Non-technical diploma or certificate not equal to degree"]+=+record["Non-technical diploma or certificate not equal to degree"]+ +g;
record["Technical diploma or certificate not equal to degree"]+=+record["Technical diploma or certificate not equal to degree"]+ +h;
record["Graduate & above"]+=+record["Graduate & above"]+ +i;
record["Unclassified"]+=+record["Unclassified"]+ +j;
// console.log(record);
//
fs.readFileSync("csvfiles/IndiaST2011.csv").toString().split("\n").forEach(function(lineContent){

  var rowDataArray = lineContent.split(",");
  if (rowDataArray[4]=="Total" &&  rowDataArray[5]=="All ages"){
    if(result[rowDataArray[3]] != null){

        a += +rowDataArray[15];
        b += +rowDataArray[18];
        c += +rowDataArray[21];
        d += +rowDataArray[24];
        e += +rowDataArray[27];
        f += +rowDataArray[30];
        g += +rowDataArray[33];
        h += +rowDataArray[36];
        i += +rowDataArray[39];
        j += +rowDataArray[42];

}
}
});
console.log(a);

var record = result["Educational level across india"];
record["Literate without educational level"] +=+record["Literate without educational level"] + +a;
record["Below Primary"]+=+record["Below Primary"]+ +b;
record["Primary"]+=+record["Primary"]+ +c;
record["Middle"]+=+record["Middle"]+ +d;
record["Matric/Secondary"]+=+record["Matric/Secondary"]+ +e;
record["Higher secondary/Intermediate/Pre-University/Senior secondary"]+=+record["Higher secondary/Intermediate/Pre-University/Senior secondary"]+ +f;
record["Non-technical diploma or certificate not equal to degree"]+=+record["Non-technical diploma or certificate not equal to degree"]+ +g;
record["Technical diploma or certificate not equal to degree"]+=+record["Technical diploma or certificate not equal to degree"]+ +h;
record["Graduate & above"]+=+record["Graduate & above"]+ +i;
record["Unclassified"]+=+record["Unclassified"]+ +j;
// console.log(record);
 var keys = Object.keys(record);
  var main = [];
for (var i = 0 , len=keys.length; i < len; i++) {
  var temp ={};
  temp["educationLevel"] = keys[i];
  temp["population"] = record[keys[i]];
  main.push(temp);

}
// console.log(main);
// console.log(JSON.stringify(result));
// return;
 //console.log(Object.keys(result));




fs.writeFile("jsonfiles/requirement3.json", JSON.stringify(main, null, 4), function(err) {
 if(err) {
   console.log(err);
 } else {
   console.log("JSON saved ");
 }
});
