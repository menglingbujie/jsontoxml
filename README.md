# jsontoxml

JSON TO XML

配置文件:

    {
      "file": {
        "before": {//json文件列表
          "jsons": [
            "taotaole_integralrules.json",
            "ge_lang_mobile_order_recharge.json"
          ]
        },
        "after": {//xml文件列表
          "xmls": [
            "ge_lang_mobile_order_recharge.xml"
          ]
        }
      },
      "path": {
        "before": {//提审前待翻译的文件需要从json转为xml
          "json": "./before/json/",
          "xml": "./before/xml/"
        },
        "after": {//提审后翻译过的文件需要从xml转为json
          "json": "./after/json/",
          "xml": "./after/xml/"
        }
      }
    }
  
执行命令
  json转xml
  copy文件到before的json下面，然后执行npm run toxml
  
  xml转json
  copy文件到after的xml下面，然后执行npm run tojson
  
