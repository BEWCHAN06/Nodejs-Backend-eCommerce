const compression = require('compression');
const express = require('express');
const { default: helmet } = require('helmet');
const app = express();

const morgan = require('morgan');

//init middleware
//lenh import: npm i morgan --save-dev
app.use(morgan("dev"))
// morgan("combined")
// morgan("common")
// morgan("short")
// morgan("tiny")
// morgan("dev")

//lenh import: npm i helmet -save-dev
app.use(helmet())
/**
 * tạo thông tin riêng tư, ngăng chặn bên thứ 3 xem lỗ hỏng
 */

app.use(compression())
/**
 *không dùng nó thì chúng ta vận chuyển dữ liệu rất là lớn, còn dùng thì chúng ta có thể giảm được dữ liệu rất nhiều
 */
//init db
require('./dbs/init.mongodb')
const {checkOverload} = require('./helpers/check.connect')
checkOverload()
//init routes
app.get('/', (req, res,next) => {
    const strCompress = 'Hello Factipjs'
    
    return res.status(200).json({
        message:'Wellcome fantipjs!',
        // metadata: strCompress/repeat(10000)
    })
});
//handling error

module.exports = app;
