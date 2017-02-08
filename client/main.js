import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.links.rendered = function () {
  $('.col-xs-12').animate({opacity:1, top:"0px"}, 1000);
};


Template.links.events({
  'click .candybox-lid':function(event){
    $('.candybox-lid').animate({top:'-1000px'})
  },
  'click #c1':function(event) {
  	$(".picture").attr('src','imgs/1.jpg');
    $("#c1").fadeOut(function() { 
      $(this).load(function() { $(this).fadeIn(); }); 
      $("#c1").addClass('thumb');
      $(this).attr("src", "imgs/1.jpg"); 
    }); 
  	var clip = document.getElementById("clip1");
    clip.play();
  },
  'click #c2':function(event) {
  	$(".picture").attr('src','imgs/2.jpg');
    $("#c2").fadeOut(function() { 
      $(this).load(function() { $(this).fadeIn(); }); 
      $("#c2").addClass('thumb');
      $(this).attr("src", "imgs/2.jpg"); 
    }); 
  	var clip = document.getElementById("clip2");
    clip.play();
  },
  'click #c3':function(event) {
  	$(".picture").attr('src','imgs/3.jpg');
    $("#c3").fadeOut(function() { 
      $(this).load(function() { $(this).fadeIn(); }); 
      $("#c3").addClass('thumb');
      $(this).attr("src", "imgs/3.jpg"); 
    }); 
  	var clip = document.getElementById("clip3");
    clip.play();
  },
  'click #c4':function(event) {
  	$(".picture").attr('src','imgs/4.jpg');
    $("#c4").fadeOut(function() { 
      $(this).load(function() { $(this).fadeIn(); }); 
      $("#c4").addClass('thumb');
      $(this).attr("src", "imgs/4.jpg"); 
    }); 
  	var clip = document.getElementById("clip4");
    clip.play();
  },
  'click #c5':function(event) {
  	$(".picture").attr('src','imgs/5.jpg');
    $("#c5").fadeOut(function() { 
      $(this).load(function() { $(this).fadeIn(); }); 
      $("#c5").addClass('thumb');
      $(this).attr("src", "imgs/5.jpg"); 
    }); 
  	var clip = document.getElementById("clip5");
    clip.play();
  },
  'click #c6':function(event) {
  	$(".picture").attr('src','imgs/6.jpg');
    $("#c6").fadeOut(function() { 
      $(this).load(function() { $(this).fadeIn(); }); 
      $("#c6").addClass('thumb');
      $(this).attr("src", "imgs/6.jpg"); 
    }); 
  	var clip = document.getElementById("clip6");
    clip.play();
  },
  'click #c7':function(event) {
  	$(".picture").attr('src','imgs/7.jpg');
    $("#c7").fadeOut(function() { 
      $(this).load(function() { $(this).fadeIn(); }); 
      $("#c7").addClass('thumb');
      $(this).attr("src", "imgs/7.jpg"); 
    }); 
  	var clip = document.getElementById("clip7");
    clip.play();
  },
  'click #c8':function(event) {
  	$(".picture").attr('src','imgs/8.jpg');
    $("#c8").fadeOut(function() { 
      $(this).load(function() { $(this).fadeIn(); }); 
      $("#c8").addClass('thumb');
      $(this).attr("src", "imgs/8.jpg"); 
    }); 
  	var clip = document.getElementById("clip8");
    clip.play();
  },
  'click #c9':function(event) {
  	$(".picture").attr('src','imgs/9.jpg');
    $("#c9").fadeOut(function() { 
      $(this).load(function() { $(this).fadeIn(); }); 
      $("#c9").addClass('thumb');
      $(this).attr("src", "imgs/9.jpg"); 
    }); 
  	var clip = document.getElementById("clip9");
    clip.play();
  },
  'click #c10':function(event) {
  	$(".picture").attr('src','imgs/10.jpg');
    $("#c10").fadeOut(function() { 
      $(this).load(function() { $(this).fadeIn(); }); 
      $("#c10").addClass('thumb');
      $(this).attr("src", "imgs/10.jpg"); 
    }); 
  	var clip = document.getElementById("clip10");
    clip.play();
  },
  'click #c11':function(event) {
  	$(".picture").attr('src','imgs/11.jpg');
    $("#c11").fadeOut(function() { 
      $(this).load(function() { $(this).fadeIn(); }); 
      $("#c11").addClass('thumb');
      $(this).attr("src", "imgs/11.jpg"); 
    }); 
  	var clip = document.getElementById("clip11");
    clip.play();
  },
  'click #c12':function(event) {
  	$(".picture").attr('src','imgs/12.jpg');
    $("#c12").fadeOut(function() { 
      $(this).load(function() { $(this).fadeIn(); }); 
      $("#c12").addClass('thumb');
      $(this).attr("src", "imgs/12.jpg"); 
    }); 
  	var clip = document.getElementById("clip12");
    clip.play();
  },
  'click #pictures':function(event){
    $('#pictures').modal('hide');
  }
});
