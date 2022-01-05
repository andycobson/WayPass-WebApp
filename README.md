# WayPass-WebApp

A web-app password manager.

This is a practice java full-stack application. I use java spring-boot as my backend service ans react.js as the frontend. Account information is stored in a AWS dynamoDB. The java application will encrypt and decrypt the password using a key provided by the user.

## Application Start Up
Currently a user login service is not implemented so the app immediately opens into the application. Which looks like the image below (this is after some info has already been saved).

![alt text](https://github.com/andycobson/WayPass-WebApp/blob/master/github-readme-images/first_open.PNG?raw=true)

## Adding an Account
The bottom element of the table is always ready to accept new info to add an account. Simply fill the text fields with the desired info and then click save. The account password is first encrypted and then along with the rest of the account info it is saved in the dynamoDB.

![alt text](https://github.com/andycobson/WayPass-WebApp/blob/master/github-readme-images/add_account_fields.PNG?raw=true)

The UI updates to show the newly added item. We can also see the new item in the aws console.

![alt text](https://github.com/andycobson/WayPass-WebApp/blob/master/github-readme-images/newly_added_item.PNG?raw=true)
![alt text](https://github.com/andycobson/WayPass-WebApp/blob/master/github-readme-images/aws_updated_items.PNG?raw=true)


## Edit Mode
When the user puts in their pin and clicks the edit button the UI changes to an edit mode. The account password is decrypted and then all the account data can be viewed in text fields. The data in the text fields can be changed.

![alt text](https://github.com/andycobson/WayPass-WebApp/blob/master/github-readme-images/pin_inserted_edit_clicked.PNG?raw=true)

### Delete an Account
While in edit mode, 


## Viewing Mode
