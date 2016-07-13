
var XMLWriter = require("xml-writer");
var file = require("fs");
var SRCPCData = require("./src/json/ge_lang_pc_order_recharge.json");
var SRCMobileData = require("./src/json/ge_lang_mobile_order_recharge.json");

var xwpc = new XMLWriter;
xwpc.startDocument();
xwpc.startElement("resources");
for(var i in SRCPCData){
  xwpc.writeAttribute("value",i);
  for(var j in SRCPCData[i]){
    xwpc.startElement("string");
    xwpc.writeAttribute("name",j)
    xwpc.text(SRCPCData[i][j]);
    xwpc.endElement();
  }
}
xwpc.endElement();
xwpc.endDocument();
// console.log(xwpc.toString());
file.writeFile("src/xml/ge_lang_pc_order_recharge.xml",xwpc.toString());

var xwmb = new XMLWriter;
xwmb.startDocument();
xwmb.startElement("resources");
for(var i in SRCPCData){
  xwmb.writeAttribute("value",i);
  for(var j in SRCPCData[i]){
    xwmb.startElement("string");
    xwmb.writeAttribute("name",j)
    xwmb.text(SRCPCData[i][j]);
    xwmb.endElement();
  }
}
xwmb.endElement();
xwmb.endDocument();
// console.log(xwpc.toString());
file.writeFile("src/xml/ge_lang_mobile_order_recharge.xml",xwmb.toString());
