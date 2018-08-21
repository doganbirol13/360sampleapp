import '../imports/startup/server/fixtures.js';
import { Meteor } from 'meteor/meteor';

Meteor.methods({
    checkGoogle: function () {
        this.unblock();
        return Meteor.http.call("GET", "http://storage.googleapis.com");
    }
});