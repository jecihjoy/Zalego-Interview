'use strict';

const services = require('../services/empservice');

module.exports = function () {
    return [
        {
            method: 'GET',
            path: '/',
            handler: (request, reply) => {
                return 'hello world';
            }
        },
        {
            method: 'GET',
            path: '/getUsers',
            handler: (request, reply) => {
                return new Promise((resolve, reject) => {
                    services.getAllUsers().then((success) => {
                        resolve(success);
                    }).catch((err) => {
                        reject(err);
                    });
                });
            }
        },
        {
            method: 'POST',
            path: '/user',
            handler: (request, reply) => {
                var user = request.payload;
                console.log('anything');
                console.log('payload', request.payload);
                return new Promise((resolve, reject) => {
                    services.insertUser(user).then((success) => {
                        resolve(success);
                    }).catch((err) => {
                        reject(err);
                    });
                });
            }
        },
    ];
}();