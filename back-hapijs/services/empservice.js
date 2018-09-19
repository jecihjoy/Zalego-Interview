'use strict'

const connection = require('../connection/connection');
const Promise = require('bluebird');

function getAllUsers() {
        return new Promise((resolve, reject) => {
                connection.query('SELECT * FROM tbl_user', (err, results, fields) => {
                        if (err) {
                                reject('Error fetching schemas');
                        } else {
                                var querry_data = [];
                                for (var i = 0; i < results.length; i++) {
                                        var data = results[i];
                                        querry_data.push({
                                                fname: data.fname,
                                                lname: data.lname,
                                                user: data.username,
                                                password: data.password
                                        });
                                }
                                resolve(querry_data);
                        }
                });
        });
}
function getEmp(empID) {
        return new Promise((resolve, reject) => {
                connection.query('SELECT * FROM employee WHERE empID= "' + empID + '" AND status = 0', (err, results, fields) => {
                        if (err) {
                                reject('Error fetching schemas');
                        } else {
                                var querry_data = {};
                                for (var i = 0; i < results.length; i++) {
                                        var data = results[0];
                                        querry_data = {
                                                pf: data.empID,
                                                fname: data.fname,
                                                lname: data.lname,
                                                id: data.IDnumber,
                                                gender: data.gender,
                                                address: data.adress,
                                                email: data.email,
                                                phone: data.phone_number,
                                                dob: data.dob
                                        };
                                }
                                resolve(querry_data);
                        }

                });
        });
}

function insertUser(payload) {
        console.log(payload);
        return new Promise((resolve, reject) => {
                connection.query("INSERT INTO `tbl_user` (`fname`, `lname`, `username`, `password`) VALUES ('" + payload.fname + "', '" + payload.lname + "', '" + payload.user + "', '" + payload.password + "')", (err, success) => {
                        if (err) {
                                console.log(err);
                                reject(err);
                        } else {
                                resolve(success);
                        }
                });
        });

}

function deleteEmp(id) {
        return new Promise((resolve, reject) => {
                connection.query('UPDATE employee SET  status = 1 WHERE empID="' + id + '"', (err, success) => {

                        if (err) {
                                reject(err);
                        } else {
                                resolve(success);
                        }

                });
        });

}
function updateEmp(payload) {
        return new Promise((resolve, reject) => {
                connection.query('UPDATE employee SET  lname = "' + payload.lname + '", fname = "' + payload.fname + '", IDnumber = "' + payload.id + '", gender = "' + payload.gender + '", address = "' + payload.address + '", email = "' + payload.email + '", phone_number = "' + payload.phone + '", dob = "' + payload.dob + '" WHERE empID="' + payload.pf + '"', (err, success) => {

                        if (err) {
                                reject(err);
                        } else {
                                resolve(success);
                        }

                });
        });

}

const services = {
        getAllUsers: getAllUsers,
        getEmp: getEmp,
        updateEmp: updateEmp,
        deleteEmp: deleteEmp,
        insertUser: insertUser
}

module.exports = services;