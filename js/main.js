var FilmApp = {

    Views: {},
    Models: {},
    Collections: {},
    Router: {}
};

$(document).ready(function(){
    FilmApp.Router.Instance = new FilmApp.Router();
    Backbone.history.start();
});
