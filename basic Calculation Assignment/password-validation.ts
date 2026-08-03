let oldpassword: string = 'abc123';
let enteredoldpassword: string = 'abc123';

let newpassword: string = 'siya123';
let confirmnewpassword: string = 'siya123';

if (enteredoldpassword !== oldpassword) {
  console.log('Incorrect old password');
} else if (newpassword !== confirmnewpassword) {
  console.log('New password and confirm password do not match');
} else {
  console.log('Password changed successfully');
}
