var _ = require('lodash');
var Service = require('./service-model.js');

module.exports = function(app) {

    app.post('/service/create', function(req, res) {
        var newService = new Service(req.body);
        newService.save(function(error) {
            if(error) {
                res.json({message:'Error while creating service', error: error});
            } else {
                res.json({message: req.body.name + ' service created successfully'});
            }
        });    
    });

    app.get('/service/list', function(req, res) {
        Service.find(function(error, services) {
            if(error) {
                res.json({message: 'Error during find', error: error});
            } else {
                if(services.length) {
                    res.json({message: 'Services found', data: services});
                } else {
                    res.json({message: 'No services found'});
                }
                
            }
        });
    });

    app.get('/service/find/:serviceId', function(req, res) {
        Service.find({'serviceId' : req.params.serviceId}, function(error, service) {
            if(error) {
                res.json({message: 'Error searching for service', error: error});
            }
            if(service) {   
                res.json({message: 'Service updated successfully', data: service});
            } else {
                res.json({message: 'Service not found'});
            }
        });
    });

    app.put('/service/update/:serviceId', function(req, res) {
        Service.updateOne({'serviceId': req.params.serviceId}, req.body, function(err, service) {
            if (err) {
                res.json({message: 'Error during update', error: error});
            } 
            if(service) {
                res.json({message: 'Service updated successfully'});
            } else {
                res.json({message: 'Service not found'});
            }
        });
    });

    app.delete('/service/delete/:id', function(req, res) {
        Service.findOneAndDelete(req.params.id, function(error) {
            if(error) {
                res.json({message: 'Error while deleting', error: error});
            } else {
                res.json({message: 'Service deleted successfully'});
            }
        });
    });

    app.get('/service/test', function(req, res) {
        res.send('test passed');
    });
}
