import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';//Use this import to close the dialog on success
import { FetchApiDataService } from '../fetch-api-data.service';//Import API call service
import { MatSnackBar } from '@angular/material/snack-bar';//Display notification
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login-form',
  templateUrl: './user-login-form.component.html',
  styleUrls: ['./user-login-form.component.scss']
})
export class UserLoginFormComponent {

  @Input() loginData = { Username: '', Password: '' };//Decorator

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserLoginFormComponent>,
    public snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void { }

  /**
   * login user
   * 
   * @remarks
   * Make API call to login the user, if success, set the localstorage and close the login dialog, if fail,
   * open snackBar to show error message
   */
  loginUser(): void {
    this.fetchApiData.userLogin(this.loginData).subscribe((result) => {
      //Success response
      //console.log('loginUser', response);
      localStorage.setItem('user', result.user.Username);
      localStorage.setItem('token', result.token);

      this.dialogRef.close(); // Close dialog on success
      //console.log('loginUser() response1:', response);
      this.snackBar.open('Login successfully!', 'OK', {
        duration: 2000
      });
      this.router.navigate(['movies']);
    }, (result) => {
      //Error response
      console.log('loginUser()failedRes:', result);
      this.snackBar.open(result.message, 'There is no User!', {
        duration: 4000
      });
    });
  }
}