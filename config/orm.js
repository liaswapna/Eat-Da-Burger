const connection = require('./connection')

var orm = {
    selectAll: function(tableName,cb) {
        connection.query('SELECT * FROM ??',[tableName],function(err,data){
            cb(err,data)
            // console.table(data)
        })
    }


    // insertOne:
    // updateOne:
}
    
module.exports = orm