import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';
import { EJSON } from 'meteor/ejson';
import { Router, RouteController } from 'meteor/iron:router';

import '/client/main.html';



Router.configure({
    layoutTemplate: 'PageLayout'
  });


  Router.onBeforeAction(function () {
    // all properties available in the route function
    // are also available here such as this.params
  
    
    if(Meteor.userId()==null){
      this.next();
      this.redirect('/');
    }
    //prodUsers
    if (Meteor.userId()=="wFuArX85jiCYPXTre") {
      // if the user is not logged in, render the Login template
      this.next();
      this.redirect('/logged');
    }
    if (Meteor.userId()=="LdFqSmqbr3eu7PBF3") {
        // if the user is not logged in, render the Login template
        this.next();
        this.redirect('/acmeoffices');   
    } 
    if (Meteor.userId()=="2zYC93ZXJjcwP6n8i") {
      // if the user is not logged in, render the Login template
      this.next();
      this.redirect('/maslakno1'); 
    }
    if (Meteor.userId()=="BkGApGdanFAFqBM4R") {
      // if the user is not logged in, render the Login template
      this.next();
      this.redirect('/maslaklinkvr');   
    } 
    //dev users
    if (Meteor.userId()=="RAXNn7yekgGDddmzp") {
      // if the user is not logged in, render the Login template
      this.next();
      this.redirect('/logged');
    }
    if (Meteor.user().emails[0].address=="acmeoffices@acme.com") {
        // if the user is not logged in, render the Login template
        this.next();
        this.redirect('/acmeoffices');   
    } 
    if (Meteor.userId()=="AwcYyZ727EJXj9jj7") {
      // if the user is not logged in, render the Login template
      this.next();
      this.redirect('/maslakno1');  
    }
    if (Meteor.user().emails[0].address=="acmeofficesvr@acme.com") {
        // if the user is not logged in, render the Login template
        this.next();
        this.redirect('/acmeofficesvr');
    }
    else
    {
      this.next();
      this.redirect('/');
    }
  });
  
  Router.route('/', function () {
    this.render('welcome', {to: 'welcome'});
    this.render('welcomepic', {to: 'welcomepic'});
    this.render('nav1', {to: 'nav1'});
    this.render('login', {to: 'login'});
    this.render('void', {to: 'panoviewer'});
    this.render('loginpagewelcometext', {to: 'welcometext'});
    this.render('void', {to: 'anothertemplate'});
  });
  
  Router.route('/logged', function () {
    this.render('welcometext', {to: 'welcometext'});
    this.render('void', {to: 'login'});
    this.render('welcomepicmall', {to: 'welcomepic'});
    this.render('nav2', {to: 'nav1'});
    this.render('viewer', {to: 'panoviewer'});
    this.render('anothertemplate', {to: 'anothertemplate'});
  });
  
  Router.route('/acmeoffices', function () {
    this.render('void', {to: 'welcome'});
    this.render('welcomepicoffice', {to: 'welcomepic'});
    this.render('nav2', {to: 'nav1'});
    this.render('void', {to: 'login'});
    this.render('welcometext2', {to: 'welcometext'});
    this.render('officenavigation', {to: 'panoviewer'});
    this.render('void', {to: 'anothertemplate'});
  });

  Router.route('/maslakno1', function () {
    this.render('void', {to: 'welcome'});
    this.render('welcomepicoffice', {to: 'welcomepic'});
    this.render('nav2', {to: 'nav1'});
    this.render('void', {to: 'login'});
    this.render('maslakno1welcometext', {to: 'welcometext'});
    this.render('maslakno1navigation', {to: 'panoviewer'});
    this.render('void', {to: 'anothertemplate'});
  });

  Router.route('/acmeofficesvr', function () {
    // this.layout('LayoutForAFrame');
    this.render('void', {to: 'welcome'});
    this.render('void', {to: 'welcomepic'});
    this.render('nav2', {to: 'nav1'});
    this.render('vr2', {to: 'login'});
    this.render('void', {to: 'welcometext'});
    this.render('void', {to: 'anothertemplate'});
    this.render('void', {to: 'panoviewer'});
  });
  