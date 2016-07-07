
var XMLWriter = require("xml-writer");
var file = require("fs");
var SRCPCData = require("./src/ge_lang_pc_order_recharge.json");
var SRCMobileData = require("./src/ge_lang_mobile_order_recharge.json");

var xwpc = new XMLWriter;
xwpc.startDocument();
xwpc.startElement("foot");
for(var i in SRCPCData){
  xwpc.writeAttribute("value",i);
  for(var j in SRCPCData[i]){
    xwpc.startElement("lang");
    xwpc.writeAttribute("value",j)
    xwpc.text(SRCPCData[i][j]);
    xwpc.endElement();
  }
}
xwpc.endElement();
xwpc.endDocument();
// console.log(xwpc.toString());
file.writeFile("data/ge_lang_pc_order_recharge.xml",xwpc.toString());

var xwmb = new XMLWriter;
xwmb.startDocument();
xwmb.startElement("foot");
for(var i in SRCPCData){
  xwmb.writeAttribute("value",i);
  for(var j in SRCPCData[i]){
    xwmb.startElement("lang");
    xwmb.writeAttribute("value",j)
    xwmb.text(SRCPCData[i][j]);
    xwmb.endElement();
  }
}
xwmb.endElement();
xwmb.endDocument();
// console.log(xwpc.toString());
file.writeFile("data/ge_lang_mobile_order_recharge.xml",xwmb.toString());
