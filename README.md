# WayPass-WebApp

A web-app password manager.

This is a practice java full-stack application. I use java spring-boot as my backend service ans react.js as the frontend. Account information is stored in a AWS dynamoDB. The java application will encrypt and decript the password using a key provided by the user.

## Application Start Up
Currently a user login service is not implemented so the app immediately opens into the application. Which looks like the image below (this is after some info has already been saved).

![alt text](https://github.com/andycobson/WayPass-WebApp/blob/master/github-readme-images/first_open.PNG?raw=true)

## Adding an Account
The bottom element of the table is always ready to accept new info to add an account. Simply fill the text fields with the desired info and then click save. The pin is to be remembered as it is the key to decrpyt/encrpt.

## Edit Mode
When the user puts in the pin they sumbited when the account  and clicks the edit butto
