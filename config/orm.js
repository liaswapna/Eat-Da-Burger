const connection = require('./connection')

var orm = {

    // Selecting all the values from the table burgers
    selectAll: function(tableName,cb) {
        connection.query('SELECT * FROM ??',[tableName],function(err,data){
            cb(data)
        })
    },

    // Inserting one record to the table burgers
    insertOne: function(tableName,colName,colValue,cb){
        let query = "INSERT INTO "+tableName+"("+colName+")"+" VALUES('"+colValue+"');"
        connection.query(query,function(err,data){
            cb(data)
        })
    },

    // Updating the record in th etable burgers using the id 
    updateOne: function(tableName,colName,colCondition,cb){
        let query = "UPDATE "+tableName+" SET "+colName+"=true WHERE id="+colCondition;
        connection.query(query,function(err,data){
            cb(data)
        })
    },

    deleteOne: function(tableName,colCondition,cb){
        let query = "DELETE FROM "+tableName+" WHERE id="+colCondition;
        connection.query(query,function(err,data){
            cb(data)
        })     
    }
}
    
module.exports = orm