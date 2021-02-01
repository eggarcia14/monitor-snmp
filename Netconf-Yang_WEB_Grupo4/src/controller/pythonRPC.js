var zerorpc = require("zerorpc"); 
let xmlParser = require('xml2json');
//var parseString = require('xml2js').parseString;
var client = new zerorpc.Client(); 
const fs=require('fs');


client.connect("tcp://127.0.0.1:4242"); //calls the method on the python object 
client.invoke("hello", function(error, reply, streaming) { 
    if(error){ 
        console.log("ERROR: ", error); 
    }
    var jsonfile = xmlParser.toJson(reply);
    //parseString(reply, function (err, result) {
    //console.dir(result);
    fs.writeFile('./src/controller/config.json', jsonfile, error => {
        if (error)
          console.log(error);
        else
          console.log('El archivo fue creado');
      });
    
    });
    //console.log(reply); 
    
    
