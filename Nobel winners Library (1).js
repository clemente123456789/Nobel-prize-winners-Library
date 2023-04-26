var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/main/Science/Nobel%20Prize%20Winners%201901-2016.csv"

function getColumn(url, columnNumber){
  var column = [];
  var table = [];
  var request = new XMLHttpRequest();  
  request.open("GET", url, false);   
  request.send(null);  
  var csvData = new Array();
  var jsonObject = request.responseText.split(/\r?\n|\r/);
  for (var i = 0; i < jsonObject.length; i++) {
    csvData.push(jsonObject[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/));
  }
  table = csvData;
  column = getCol(table, columnNumber);
  return column;
}


//returns the specified column from a 2D Array
function getCol(matrix, col){
       var column = [];
       for(var i=1; i<matrix.length-1; i++){
          column.push(matrix[i][col]);
       }
       return column;
    }

var firstName = getColumn(url,1);
var lastName = getColumn(url,2);
var countries = getColumn (url, 4);
var brith = getColumn(url,3);
var awarded = getColumn(url,6);
var cities = getColumn(url,5);
var fields = getColumn(url,7);
var motivations = getColumn(url,8);


  function dateOfAward(winnerName){
  if(typeof(winnerName) != "string"){
   return"Please input a string"
      }
  for(var i in awarded){
    if(firstName[i].toLowerCase().includes(winnerName.toLowerCase()) || lastName[i].toLowerCase().includes(winnerName.toLowerCase()) ||
(firstName[i].toLowerCase() + " " + lastName[i].toLowerCase()).includes(winnerName.toLowerCase())){
      return awarded[i];
    }

  }
  
return "could not find award winner"

}






function homeLand(country){
  var home = [];
  if(typeof(country) != "string"){
         return "Please input a string"}
  for(var i in cities){
    if(countries[i].toLowerCase().includes(country.toLowerCase())){
       home.push(cities[i]);
      }
   
  }
   if(home.length == 0){
    return "Not Yet"}
  else{
    return home;
  }
    
  
}








function whatFor(field){
  var counter = 0;
  if(typeof(field) != "string"){
         return "Please input a string"}
  for(var i in fields){
    if(fields[i].toLowerCase().includes(field.toLowerCase())){
      counter++
    }
    
   }
  return counter
}











function findMotivation(name){
  if(typeof(name) != "string"){
         return "Please input a string"
      }
  
  for(var i in motivations){
    if(firstName[i].toLowerCase().includes(name.toLowerCase()) || lastName[i].toLowerCase().includes(name.toLowerCase()) ||
(firstName[i].toLowerCase() + " " + lastName[i].toLowerCase()).includes(name.toLowerCase())){
      return motivations[i];
  }
  }
  return "could not find motivation"
  }















function findPerson(country){
  if(typeof(country) != "string"){
         return "Please input a string"
      }
   var winerInfos = [];
  for(var i in countries){
    if(countries[i].toLowerCase().includes(country.toLowerCase())){
    winerInfos.push(firstName[i] + " " + lastName[i] + " " + brith[i]);{
      
    }
      
      }

  }
  if(winerInfos.length == 0){
    return "not yet"
  }
  else{
    return winerInfos
  }
}
