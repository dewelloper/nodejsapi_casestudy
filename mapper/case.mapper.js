var objectMapper = require('object-mapper');

//I used object-mapper for simplicity in this application. In real application automapper can be used other like jackson mapster mapstruct
  
//Create case result from the posted mongodb entity(document)
    // {
    //     "startDate": "2021-10-03T00:00:00.000Z",
    //     "endDate": "2038-02-02T00:00:00.000Z",
    //     "createdAt": "2038-02-02T00:00:00.000Z",
    //     "minCount": 2700,
    //     "maxCount": 5700,
    //     "totalCount": 5700,
    //     "_id": "6183a627c584ed4dfbc444bb",
    //     "__v": 0
    // }

    //this is single item pattern for mapping
    var map = {
    "code": "Sample.code",
    "msg": "Sample.msg",
    "records": "Sample.records",
    "key": "Sample.records.key",
    "createdAt": "Sample.records.createdAt",
    "totalCount": "Sample.records.totalCount"
  };

  //this is multipple item pattern for mapping
  var MapWithSubItems = {
    "code": "Sample.code",
    "msg": "Sample.msg",
    "records": "Sample.records",
  };

class CaseMapper {
    Map(src) {
        var sourceVariableTransformerPattern = {
            "code": "0",
            "msg": "Success",
            "records": "",
            "key": src._id,
            "createdAt": src.createdAt,
            "totalCount": src.totalCount === undefined ? 0 :  src.totalCount 
        };

        return objectMapper(sourceVariableTransformerPattern, map);
    }

    MapWithSubItems(src) {
        var sourceVariableTransformerPattern = {
            "code": "0",
            "msg": "Success",
            "records": ""
        };

        var records = [];
        for (let i = 0; i < src.length; i++) { 
            var item = src[i];
            var subItem = {};
            subItem.key = item._id;
            subItem.createdAt = item.createdAt;
            subItem.totalCount = item.totalCount;
            records.push(subItem);
          }

          sourceVariableTransformerPattern.records = records;

        return objectMapper(sourceVariableTransformerPattern, MapWithSubItems);
    }
}

module.exports = new CaseMapper();
