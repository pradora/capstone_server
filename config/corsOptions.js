const whiteList = require('./whiteList')

const corsOptions = {
    origin: (origin, callback) => {        //remove ( || !origin ) after development
        if (whiteList.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    optionsSuccessStatus: 200
}

module.exports = corsOptions;