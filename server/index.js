require('dotenv').config()
const express = require('express'),
    session = require('express-session'),
    massive = require('massive'),
    add_event_ctrl = require('./controllers/addEventController'),
    auth_admin_ctrl = require('./controllers/authAdminController'),
    auth_user_ctrl = require('./controllers/authUserController'),
    delete_event_ctrl = require('./controllers/deleteEventController')
const app = express()
const {CONNECTION_STRING, SERVER_PORT, SESSION_SECRET} = process.env

app.use(express.json())
app.use(
    session({
        secret: SESSION_SECRET,
        saveUninitialized: false,
        resave: false,
        cookie: {
            maxAge: 1000 * 60 * 60
        }
    })
)

massive(CONNECTION_STRING).then((database) => {
    app.set('db', database)
    console.log('database set!', database.listTables())
    app.listen(SERVER_PORT, () => console.log(`You are not suffering from depression because of ${SERVER_PORT}`))
})

// Endpoints

