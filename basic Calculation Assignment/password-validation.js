"use strict";
let oldpassword = 'abc123';
let enteredoldpassword = 'abc123';
let newpassword = 'siya123';
let confirmnewpassword = 'siya123';
if (enteredoldpassword !== oldpassword) {
    console.log('Incorrect old password');
}
else if (newpassword !== confirmnewpassword) {
    console.log('New password and confirm password do not match');
}
else {
    console.log('Password changed successfully');
}
