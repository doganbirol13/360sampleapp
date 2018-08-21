
import '/imports/startup/client';
import { jquery } from 'meteor/jquery';

Template.login.events({
  'submit form': function(event){
      event.preventDefault();
      var emailVar = event.target.loginEmail.value;
      var passwordVar = event.target.loginPassword.value;
      Meteor.loginWithPassword(emailVar, passwordVar);
  }
});


Template.nav2.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
    }
});

Template.maslakno1navigation.events({
    'click a img': function(event){   
    }
});

Meteor.call("checkGoogle", function(error, results) {
    console.log(results); //results.data should be a JSON object
  });
/* var Clappr = require("clappr");
var Video360 = require("clappr-video360");

Template.officevideo.onRendered(function () {
  // The URL to the 360 video player 
  var Video360Url = '/SampleOfficeVideo1.mp4';

  // Configure your Clappr player.
  var PlayerInstance = new Clappr.Player({
      source: Video360Url,
      plugins: {
          container: [Video360],
      },
      parentId: '#player',
      width: 965
  });

  // Important to disable the click to pause native plugin of clappr
  // otherwise you won't be able to use correctly the player
  PlayerInstance.getPlugin('click_to_pause').disable();
}); */