import { NotifierComponent } from './notifier/notifier.component';
import { MatButton } from '@angular/material/button';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotifierService {

  constructor(private snackbar:MatSnackBar ) { }
  showNotification(displayMessage:string,buttonText:string,messageType:'error'|'Success')
  {
    this.snackbar.openFromComponent(NotifierComponent,{
      data:{
        message:displayMessage,
        buttonText:buttonText
      },
      duration:5000,
      horizontalPosition:'center',
      verticalPosition:'bottom'
    });
  }
}
