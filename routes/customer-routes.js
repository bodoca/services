var CustomerController = require('../controllers/customer-controller.js');

module.exports = function(app) {
    app.post('/customer/create', CustomerController.create);
    app.get('/customer/list', CustomerController.list);
    app.get('/customer/find/:customerId', CustomerController.find);
    app.put('/customer/update/:customerId', CustomerController.update);
    app.delete('/customer/delete/:customerId', CustomerController.list);
    app.get('/customer/test', CustomerController.test);
}