import { Component, Inject, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { MAT_SNACK_BAR_DATA, MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-notifier',
  templateUrl: './notifier.component.html',
  styleUrls: ['./notifier.component.css']
})
export class NotifierComponent implements OnInit {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data:any,
  public snackBarRef:MatSnackBarRef<NotifierComponent>) { }

  ngOnInit(): void {
  }

}
