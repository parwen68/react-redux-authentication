const Authentication = require('./controllers/authentication')
const passportService = require('./services/passport')
const passport = require('passport')

const requireAuth = passport.authenticate('jwtLogin', {session: false})
const requireSignin = passport.authenticate('localLogin', {session: false})

module.exports = app => {
  app.get('/', requireAuth, function (req, res) {
    res.send({hi: "there"})
  })

  app.post('/signin', requireSignin, Authentication.signin)
  app.post('/signup', Authentication.signup)
}