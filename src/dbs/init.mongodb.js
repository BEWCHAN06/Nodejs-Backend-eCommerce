'use strict';

const mongoose = require('mongoose');

const connectString = 'mongodb://localhost:27017/shopDEV'
const {countConnections} = require('../helpers/check.connect')

//dev
class Database{
    constructor(){
        this.connect()
    }

    //connect
    connect(type ='mongodb'){
        if(1 === 1){
            mongoose.set('debug',true)
            mongoose.set('debug',{color:true})
        }

        mongoose.connect(connectString).then(_=>{
            console.log('connected mongodb successfully PRO',countConnections())
        })
        .catch( err=>console.log('error connecting'));
    }
    static getInstance(){
        if(!Database.instance){
            Database.instance = new Database();
        }

        return Database.instance;
    }
}

const instanceMongodb = Database.getInstance();
module.exports = instanceMongodb;