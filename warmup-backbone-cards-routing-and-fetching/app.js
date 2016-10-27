
// $.getJSON("https://randomuser.me/api?results=24")
//    .then((d)=>{
//       console.log(d.results)
//
//       var coll = new Backbone.Collection()
//       coll.add(d.results[3])
//       coll.add(d.results[2])
//       coll.add(d.results[1])
//
//       var view = new ViewTemplateConstructor('#app-container', cardsTemplateFn)
//       view.render(coll)
//    })

// var appContainer = document.querySelector("#app-container")


var AppRouter = Backbone.Router.extend({
            routes: {
               "nationality/:nat": "showNationality",
               "nationality/:nat/gender/:gender" : "showGenderAndNat",
               "": "showHomePage"


         },

   showNationality: function(natInput){
         document.querySelector("#app-container").innerHTML =  "NAT FILTER"
            var coll = new UserCollection("results=24&nat=" + uNat)
            //console.log(coll.url)
            coll.fetch().then(function(){
                  var view = new ViewTemplateConstructor('#app-container', cardsTemplateFn)
                  view.render(coll)
            })
         },



   showGenderAndNat: function(natInput, genderInput){
            document.querySelector("#app-container").innerHTML =  "NAT AND GENDER FILTER"
               var coll = new UserCollection("results=24&nat=" + uNat + "&gender=" + uGen)
               //console.log(coll.url)
               coll.fetch().then(function(){
                  var view = new ViewTemplateConstructor('#app-container', cardsTemplateFn)
                  view.render(coll)
            })

         },

   showHomePage: function(genderInput){
               document.querySelector('#app-container').innerHTML = "HOME PAGE"

               var coll = new UserCollection("results=24")
               coll.fetch().then(function(){
                  //console.log(coll)
                  var view = new ViewTemplateConstructor('#app-container', cardsTemplateFn)
                  view.render(coll)
               })
         },


               initialize: function(cVal){
                  Backbone.history.start()

         }
})

var app = new AppRouter();
