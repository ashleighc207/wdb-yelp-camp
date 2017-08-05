var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment")

var data = [
    {
        name: "Cloud's Rest",
        image: "https://images.unsplash.com/photo-1470805453991-a1b8c719cc70?dpr=2&auto=compress,format&fit=crop&w=1080&h=720&q=80&cs=tinysrgb&crop=",
        description: "Cool fog like stuff that rolls on the rocks from the water"
    },
     {
        name: "Blue Lagoon",
        image: "https://images.unsplash.com/photo-1497589062741-c73233cb9b47?dpr=2&auto=compress,format&fit=crop&w=1080&h=720&q=80&cs=tinysrgb&crop=",
        description: "Really pretty colored water and endless trees"
    },
     {
        name: "Stoney Run",
        image: "https://images.unsplash.com/photo-1500332988905-1bf2a5733f63?dpr=2&auto=compress,format&fit=crop&w=1080&h=720&q=80&cs=tinysrgb&crop=",
        description: "Pretty cool place, just don't slip on the rocks"
    },
     {
        name: "Autumn's Rising",
        image: "https://images.unsplash.com/photo-1477581265664-b1e27c6731a7?dpr=2&auto=compress,format&fit=crop&w=1080&h=720&q=80&cs=tinysrgb&crop=",
        description: "Color of the trees is breath taking - must see in fall!"
    }
];


function seedDb(){
    //remove all campgrounds
  Campground.remove({}, function(err){
    if(err){
        console.log(err);
    } else {
        console.log("removed campgrounds");
    }
    // add a few campgrounds
        data.forEach(function(seed) {
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err);
                } else {
                    console.log("added campground");
    //add a few comments
                    Comment.create(
                        {
                            text: "this place is great",
                            author: "Homer"
                        },function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                                console.log("added comment")
                                campground.comments.push(comment);
                                campground.save();
                            }
                        });
            }
        });
    });
});  
    
  
    
    
    //add a few comments
}

module.exports = seedDb;
