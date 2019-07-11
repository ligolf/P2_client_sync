var authController = require('../controllers/authcontroller.js');

module.exports = function (app, passport) {

    app.get('/signup', authController.signup);


    app.get('/signin', authController.signin);


    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/dashboard',
        failureRedirect: '/signup'
    }
    ));


    app.get('/dashboard', isLoggedIn, authController.dashboard);

    // GOES TO TO-DO LIST HANDLEBAR
    app.get('/todo', authController.todo);

    // GOES TO INVENTORY LIST HANDLEBAR
    app.get('/inventory', authController.inventory);

    // GOES TO CONTACTS HANDLEBAR
    app.get('/contacts', authController.contacts);

    app.get('/logout', authController.logout);


    app.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/dashboard',
        failureRedirect: '/signin'
    }
    ));


    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();

        res.redirect('/signin');
    }


}






