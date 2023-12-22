'use strict';

const mongoose = require('mongoose');

//count  connections
const countConnections = () => {
    const numConnection = mongoose.connections.length
    console.log('Number of connections::' + numConnection);
}

//check over load
const checkOverload = () => {
    setInterval(() => {
        const count
    }, _SECOND5);//monitor every 5 seconds
}

module.exports = {
    countConnections
}