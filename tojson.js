
var file = require("fs");
var parseString = require("xml2js").parseString;
var xml_mobile = file.readFileSync("dist/xml/ge_lang_mobile_order_recharge.xml","utf-8");
var xml_pc = file.readFileSync("dist/xml/ge_lang_pc_order_recharge.xml","utf-8");
parseString(xml_pc,{explicitRoot:true},function(err,result){

  var _json = result;
  var _newJson = {};
  var _root = _json.resources;
  _newJson[_root.$.lang]={};
  var _array = _root.string;
  for(var i=0;i<_array.length;i++){
    var _item = _array[i];
    var _key = _item.$.name;
    var _value = _item._;

    _newJson[_root.$.lang][_key]=_value;
  }
  // console.log(_newJson);
  file.writeFile("dist/json/ge_lang_pc_order_recharge.json",JSON.stringify(_newJson));
});

parseString(xml_mobile,{explicitRoot:true},function(err,result){
  var _json = result;
  var _newJson = {};
  var _root = _json.resources;
  _newJson[_root.$.lang]={};

  var _array = _root.string;
  for(var i=0;i<_array.length;i++){
    var _item = _array[i];
    var _key = _item.$.name;
    var _value = _item._;

    _newJson[_root.$.lang][_key]=_value;
  }
  // console.log(_newJson);
  file.writeFile("dist/json/ge_lang_mobile_order_recharge.json",JSON.stringify(_newJson));
});
