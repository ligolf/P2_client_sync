module.exports = function (app) {

        const application = require('./routes/application');
        const apiroutes = require('./routes/api-routes');
        const contact = require('./routes/contact');
        const inv = require('./routes/inv');
        const todoroute = require('./routes/todoroute');

        app.use('/', application);
        app.use('/contact', contact);
        app.use('/inv', inv);
        app.use('/apiroutes', apiroutes);
        app.use('/todoroute', todoroute);
        //other routes..