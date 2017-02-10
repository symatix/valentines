import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup

  if (Candybar.find().count() == 0){
        for (var i = 0 ; i <= 11 ; i++ ){
        Candybar.insert(
            { 
            candyId:"c" + i,
            audioId:"clip" + i,
            img:"imgs/" + i + ".jpg",
            audio:"audio/" + i + ".mp3",
            candy: "candy/" + i + ".png"
            }
            );
        }
    }
  if (Candybox.find().count() == 0){
        for (var i = 0 ; i <= 11 ; i++ ){
        Candybox.insert(
            { 
            candyplace:"c" + i
            }
            );
        }
    }
   console.log("candies in the box: " +Candybar.find().count());
});


Meteor.publish("theCandybar", function(){
	return Candybar.find();
})
Meteor.publish("theCandybox", function(){
	return Candybox.find();
})