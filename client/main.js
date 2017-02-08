import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Meteor.subscribe("theCandybar");


Template.links.rendered = function () {
  $('.col-xs-12').animate({opacity:1, top:"0px"}, 1000);
};

Template.links.helpers({
  candybar: function(){
    return Candybar.find();
  }
})

Template.links.events({
  'click .candybox-lid':function(event){
    $('.candybox-lid').animate({top:'-1000px'})
    $('.candy').animate({opacity:1}, 600);
  },
  'click #pictures':function(event){
    $('#pictures').modal('hide');
  },
  'click .candy':function(event){
    var candy = this._id;
    var img = Candybar.findOne(candy).img;
    var audio = Candybar.findOne(candy).audioId;

    $(".picture").attr('src',img);
    $("#"+candy).fadeOut(function() { 
      $(this).load(function() { $(this).fadeIn(); }); 
      $("#"+candy).addClass('thumb');
      $(this).attr("src", img); 
    }); 

    var clip = document.getElementById(audio);
    clip.play();
  }
});
