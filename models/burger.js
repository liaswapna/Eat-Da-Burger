const orm = require('../config/orm')

var burger = {
    selectAll: function(cb){
        orm.selectAll('burgers',function(data){
            cb(data)
        })
    },

    insertOne: function(colName,colValue,cb){
        orm.insertOne("burgers",colName,colValue,function(result){
            cb(result)
        })
    },

    updateOne: function(colName,colCondition,cb){
        orm.updateOne("burgers",colName,colCondition,function(result){
            cb(result)
        })
    },

    deleteOne: function(colCondition,cb){
        orm.deleteOne("burgers",colCondition,function(result){
            cb(result)
        })
    }
}

module.exports = burger;
