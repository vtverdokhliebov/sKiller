var App = console.log('Hello world from Browserify!!!');

module.exports = App;
$(function() {
    $('#content').load('/templates/login_form.html');
});