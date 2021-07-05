'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  return db.createTable('posters', {
    'title': {
      'type':'int', 'primaryKey': true, 'autoIncrement': true, 'unsigned': true
    },
    'cost': {
      'type': 'int', 'unsigned': true, 'notNull': true
    },
    'description': {
      'type': 'text', 'notNull': true
    },
    'date':{
      'type':'date'
    },
    'stock': {
      'type':'int', 'unsigned': true
    },
    'height': {
      'type': 'int', 'unsigned': true
    },
    'width': {
      'type': 'int', 'unsigned': true
    }
  })
};

exports.down = function(db) {
  return db.dropTable('posters')
};

exports._meta = {
  "version": 1
};
