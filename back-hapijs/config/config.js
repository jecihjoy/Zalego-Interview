"use strict";

module.exports = function() {
    var obj = {
                application : {
                        host : 'localhost',
                        port : 9200
                },
                database : {
                        host     : 'localhost',
                        user     : 'root',
                        password : '',
                        database : 'interview'
                }
        };

        if (!obj.application['host']) {
                throw new Error('Missing constant application.host.');
        } else if (!obj.application['port']) {
                throw new Error('Missing constant application.port.');
        } else if (!obj.database['host']) {
                throw new Error('Missing constant database.host.');
        } else if (!obj.database['user']) {
                throw new Error('Missing constant database.user.');
        } else if (!obj.database['database']) {
                throw new Error('Missing constant database.database.');
        }

        return obj;

}();
