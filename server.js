// CONSTANT VARIABLES =====================================
const express = require('express');
const apiRoutes = require('./routing/apiRoutes');
const htmlRoutes = require('./routing/htmlRoutes');
const app = express();
const PORT = process.env.PORT || 3000;
const exphbs = require("express-handlebars");


// App Setup ===============================================
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));

// Routes to app assets and responses =======================
app.use('/', htmlRoutes);
app.use('/api', apiRoutes);


// Initialize listening =====================================
app.listen(PORT, function() {
    console.log('frined-finder is running on ' + PORT);
});