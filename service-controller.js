var _ = require('lodash');
var Service = require('./service-model.js');



    exports.create =  function(req, res) {
        var newService = new Service(req.body);
        newService.save(function(error) {
            if(error) {
                res.json({message:'Error while creating service', error: error});
            } else {
                res.json({message: req.body.name + ' service created successfully'});
            }
        });    
    };

    exports.list = function(req, res) {
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
    };

    exports.find = function(req, res) {
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
    };

    exports.update = function(req, res) {
        Service.find({'serviceId' : req.params.serviceId}, function(error, service) {
            if(error) {
                res.json({message: 'Error searching for service', error: error});
            }
            if(service) {
               // _.merge(service, req.body);
                console.log(service);
            } else {
                res.json({message: 'Service not found'});
            }
        });
    };

    exports.delete = function(req, res) {
        Service.findOneAndDelete(req.params.id, function(error) {
            if(error) {
                res.json({message: 'Error while deleting', error: error});
            } else {
                res.json({message: 'Service deleted successfully'});
            }
        });
    };

    exports.test = function(req, res) {
        res.send('test passed');
    };
