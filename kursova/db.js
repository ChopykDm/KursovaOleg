var mongoose   = require('mongoose');
var db = mongoose.connection;
var User = require('./models/user');

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Client DB: openned"); 
});


mongoose.connect('mongodb://admin:admin@ds021751.mlab.com:21751/planetakino', function(){
   console.log("Client DB: connected"); 
   
   // init models
    // var user = new User();      
    //     user.email = '1992@outlook.com';  
    //     user.password = 'user1';  
    //     user.firstName = 'User firstname';  
    //     user.lastName = 'User lasttname';  

    //     user.save(function(err) {
    //         if (err){
                
    //         }
    //     });
});
