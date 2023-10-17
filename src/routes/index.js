const UserRouter = require('./UserRouter')

const routes = (app) => { 
    app.use('/api/user', UserRouter)
    // app.use('/api/post', PostRouter)
}

module.exports = routes