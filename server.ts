import * as Express from 'express';
import * as Path from 'path';

var app = Express();

var staticPath = Path.join(__dirname, '/');
app.use(Express.static(staticPath));

// Allows you to set port in the project properties.
app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function () {
    console.log('listening');
});
