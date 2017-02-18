FilmApp.Router = Backbone.Router.extend({

  routes: {
    'home': 'home',
    'search': 'search',
    '*path': 'home'
  },

  search: function(){
    var view = new FilmApp.Views.Search();
    $('#main').html(view.render().el);
  }
});