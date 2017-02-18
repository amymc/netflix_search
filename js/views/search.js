FilmApp.Views.Search = Backbone.View.extend({

  template: "<input type='text' placeholder='search'> \
             <button>Search movie</button> \
             <ul id='movie-list'></ul>",

  initialize: function(options) {},

  getFilms: function() {
    var title = this.$el.find('input').val();
    var Films = new FilmApp.Collections.Films({title: title});

    Films.fetch({success: this.renderFilms.bind(this)});
  },

  events: {
    'click button' : 'getFilms'
  },

  renderFilms: function(Films) {
    var Filmview;

    for (var n in Films.models) {
      Filmview = new FilmApp.Views.FilmView({model: Films.models[n]});
      this.$el.find('#movie-list').append(Filmview.render().el);
    }
  },

  render: function()
  {
    this.$el.html(this.template);
    return this;
  }
});
