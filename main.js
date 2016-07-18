

var config = require("./config");
//console.log(config);

var srcJsons = config.file.json;
var XMLWriter = require("xml-writer");
var file = require("fs");
var parseString = require("xml2js").parseString;

var args = process.argv;
var type = args[2];
function init(){

}
if(type==="tojson"){
  var _xmlArr = config.file.after.xmls;

  if(_xmlArr&&_xmlArr.length>0){
    for(var i =0;i<_xmlArr.length;i++){
      var _srcFile = _xmlArr[i];
      var _distFile = _srcFile.replace(/\.xml/,".json");

      var pathAfter = config.path.after;
      toJson(pathAfter.xml+_srcFile,pathAfter.json+_distFile);
    }
  }
}else if(type==="toxml"){
  var _jsonArr = config.file.before.jsons;
  if(_jsonArr&&_jsonArr.length>0){
    for(var i =0;i<_jsonArr.length;i++){
      var _srcFile = _jsonArr[i];
      var _distFile = _srcFile.replace(/\.json/,".xml");
      var pathBefore = config.path.before;
      toXml(pathBefore.json+_srcFile,pathBefore.xml+_distFile);
    }
  }
}else{
  console.log("what do you want to do?");
}

function toXml(srcJsonFile,toXmlFile){

  var xwpc = new XMLWriter;
  var SRCData = require(srcJsonFile);

  xwpc.startDocument();
  xwpc.startElement("root");
  for(var i in SRCData){
    xwpc.startElement("resources");
    xwpc.writeAttribute("lang",i);
    for(var j in SRCData[i]){
      xwpc.startElement("string");
      xwpc.writeAttribute("name",j)
      xwpc.text(SRCData[i][j]);
      xwpc.endElement();
    }
    xwpc.endElement();
  }
  xwpc.endElement();
  xwpc.endDocument();
  // console.log(xwpc.toString());
  file.writeFile(toXmlFile,xwpc.toString());

  console.log("Success, Path: "+toXmlFile);
}
function toJson(xmlFile,jsonPath){
  //return;
  var xmldoc = file.readFileSync(xmlFile,"utf-8");
  parseString(xmldoc,{explicitRoot:true},function(err,result){

    var _json = result;
    var _newJson = {};
    var _root = _json.root;

    var _arrResources = _root.resources;
    if(_arrResources&&_arrResources.length>0){
      for(var i=0;i<_arrResources.length;i++){
        var _res = _arrResources[i];
        _newJson[_res.$.lang]={};
        var _array = _res.string;

        for(var j=0;j<_array.length;j++){
          var _item = _array[j];
          var _key = _item.$.name;
          var _value = _item._;

          _newJson[_res.$.lang][_key]=_value;
        }
      }
    }

    // console.log(_newJson);
    file.writeFile(jsonPath,JSON.stringify(_newJson));
    console.log("Success, Path: "+jsonPath);
  });
}
