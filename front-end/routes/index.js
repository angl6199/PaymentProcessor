var express = require('express');
var router = express.Router();
var sessionController = require('./../controllers/session')
var authenticationController = require('./../controllers/authentication')
const passport = require('passport');
const { request } = require('../app');

router.get('/', authenticationController.validate_Logout, sessionController.get_login);
router.get('/login', authenticationController.validate_Logout, sessionController.get_login);
router.post('/login', sessionController.post_login);

/* router.get('/login/google', sessionController.get_login_google); */
router.get('/login/google', authenticationController.validate_Logout,
    passport.authenticate('google', {
        scope: ['email', 'profile']
    }));

router.get('/login/google/redirect', authenticationController.validate_Logout,
    passport.authenticate('google', {
        successRedirect: '/',
        failureRedirect: '/login'
    }));
/* router.get('/login/google/redirect', sessionController.get_login_google_redirect); */

router.get('/signup', authenticationController.validate_Logout, sessionController.get_register);
router.post('/signup', sessionController.post_register);

router.get('/logout', sessionController.get_logout)

module.exports = router;