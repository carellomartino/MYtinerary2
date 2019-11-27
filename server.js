const express = require('express')
const app = express()
const bodyParser = require('body-parser');
var mongoose = require('mongoose');
var url = "mongodb+srv://carellomartino:careCARE9900@mycluster-1o7tp.mongodb.net/MYtinerary?retryWrites=true&w=majority";
var db = mongoose.connection;
const routes = require('./backend/Routes/index')
const passport = require('./backend/config/passport');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(passport.initialize());


const port = process.env.PORT || 5000;

mongoose.set('useNewUrlParser', true)

mongoose.connect(url, { useUnifiedTopology: true });
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {

  app.listen(port, () => console.log(`server running on port ${port}`))
  console.log("Mongoose is conected!")

  
  app.use('/', routes)
  
});







// db.collection("itineraries").save(name, (err, result) => {
//             if(err) { 
//               console.log(err);
//             }})


// app.use('/', router);

// app.get('/test', (req, res) => res.send("funciona ameo"));

// app.post('/api/world', (req, res) => {
  //   console.log(req.body);
//   res.send(
//     `I received your POST request. This is what you sent me: ${req.body.post}`,
//   );
// });

// City.find(function (err, allCities) {
//   if (err) return console.error(err);
//   console.log("Todas las ciudades desde City.find", allCities);
// })

// const MongoClient = require('mongodb').MongoClient
//     var ObjectID = require('mongodb').ObjectID; // we will use this later

//     MongoClient.connect('mongodb+srv://carellomartino:careCARE9900@mycluster-1o7tp.mongodb.net/test?retryWrites=true&w=majority', (err, db) => {
//       var dbase = db.db("MYtinerary");

//       app.listen(port, () => console.log(`server running on port ${port}`))

//       app.post('/name/add', (req, res, next) => {

//         var name = {
//           first_name: req.body.first_name,
//           last_name: req.body.last_name
//         };

//         dbase.collection("cities").save(name, (err, result) => {
//           if(err) { 
//             console.log(err);
//           }

//           res.send('name added successfully');
//         });
//       });
//     })