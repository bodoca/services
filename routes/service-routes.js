var ServiceController = require('../controllers/service-controller.js');

module.exports = function(app) {

    app.post('/service/create', ServiceController.create);
    app.get('/service/list', ServiceController.list);
    app.get('/service/find/:serviceId', ServiceController.find);
    app.put('/service/update/:serviceId', ServiceController.update);
    app.delete('/service/delete/:id', ServiceController.delete);
    app.get('/service/test', ServiceController.test);
}
