var UserModel = Backbone.Model.extend({
   idAttribute: 'email'
})


var UserCollection = Backbone.Collection.extend({
   model: UserModel,
   parse: function(rawJSONRes){
      return rawJSONRes.results
   },
   initialize: function(qryStr){
      this.url = "https://randomuser.me/api?"+qryStr
   }
})
