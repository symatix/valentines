import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Meteor.subscribe("theCandybar");
Meteor.subscribe("theCandybox");

Template.player.onRendered(function(){
  $('head').append('<script src="https://www.youtube.com/iframe_api"></script><script src="/ytplayer.js"></script>');
});
  
Template.links.rendered = function () {
  $('.col-xs-12').animate({
    opacity:1, 
    top:"0px"
  }, 1000);


};

Template.links.helpers({
  candybar: function(){
    return Candybar.find();
  },
  candyplace:function(){
    return Candybox.findOne().candyplace;
  }
})

Template.links.events({
  'click .candybox-lid':function(event){
    $('.candybox-lid').addClass('open');
    $('.candybox-lid').animate({
      top:'-400px', 
      left:'-1000px',
      })
    $('.candy').animate({
      opacity:1
    }, 600);
  },
  'mouseenter .candybox-lid':function(event){
    $('.candybox-lid').animate({
      opacity:'0.9'
      }, 60);
  },
  'mouseout .candybox-lid':function(event){
    $('.candybox-lid').animate({
      opacity:'1'
      }, 60);
  },
  'click .candybox-lid.open':function(event){
    $('.candybox-lid').removeClass('open');
    $('.candy').addClass('wiggly');
    $('.candybox-lid').animate({
      top:'0px',
      left:'15px'
    });
    $('.candy').animate({opacity:0}, 600);
    setTimeout(function(){
      for (i = 0; i <= 11; i++){
        $(".c"+i).removeClass('thumb').attr('src',Candybar.find().fetch()[i].candy);
      }
    },1000);
  },
  'click #pictures':function(event){
    $('#pictures').modal('hide');
  },
  'click .wiggly':function(event){
    var candy = this._id;
    var img = Candybar.findOne(candy).img;
    var audio = Candybar.findOne(candy).audioId;
    
    $("#"+candy).removeClass('wiggly');
    $("#"+candy).fadeOut(function() { 
      $(this).load(function() { $(this).fadeIn(); }); 
      $("#"+candy).addClass('thumb');
      $(this).attr("src", img); 
    }); 

    var clip = document.getElementById(audio);
    clip.play();
  },
  'click .candy':function(){
    var candy = this._id;
    var img = Candybar.findOne(candy).img;
    $(".picture").attr('src',img);
  },
  'mouseover .candy':function(event){
    var candyId = this._id;
    $("#"+candyId).animate({
      opacity: 0.6
    }, 100);
  },
  'mouseout .candy':function(event){
    var candyId = this._id;
    $("#"+candyId).animate({
      opacity: 1
    }, 40);
  },
});
