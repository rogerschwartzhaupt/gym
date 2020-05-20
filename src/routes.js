const express = require('express')
const routes = express.Router()
const instructors = require('./app/Controllers/instructors')
const members = require('./app/Controllers/members')

routes.get('/', function(req, res){
    return res.redirect("/instructors")
})
routes.get('/instructors/', instructors.index)
routes.get('/instructors/create', instructors.create)
routes.get('/instructors/:id', instructors.show)
routes.get('/instructors/:id/edit', instructors.edit)
routes.post('/instructors', instructors.post)
routes.put("/instructors", instructors.put)
routes.delete("/instructors", instructors.delete)
routes.get('/instructors/create', function(req, res){
    return res.render("instructors/create")
})
        





routes.get('/members', members.index)
routes.get('/members', members.create)
routes.get('/members/:id', members.show)
routes.get('/members/:id/edit', members.edit)
routes.post('/members', members.post)
routes.put("/members", members.put)
routes.delete("/members", members.delete)



module.exports = routes