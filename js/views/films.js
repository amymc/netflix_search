FilmApp.Views.FilmView = Backbone.View.extend({

  initialize: function(options) {

    if (options.model)
      this.model = options.model;
  },

  filmTemplate: _.template($('#film-template').html()),

  render: function() {

    this.$el.html(this.filmTemplate({
      title:      this.model.attributes.show_title,
      summary:    this.model.attributes.summary
    }));

    return this;
  }
});
