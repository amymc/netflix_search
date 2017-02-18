FilmApp.Collections.Films = Backbone.Collection.extend({
  initialize: function(options){
    if (options.title)
      this.title = options.title;
  },

  url: function()
  {
    return 'http://netflixroulette.net/api/api.php?title='+this.title;
  },

  parse: function(response)
  {   console.log('response', response);
    return response;
  }
});