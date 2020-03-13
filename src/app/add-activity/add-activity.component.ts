import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../services/activity.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'ns-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.css']
})
export class AddActivityComponent implements OnInit {

  theForm: FormGroup;
  submitted = false;

  constructor(private activityService : ActivityService, private _fb: FormBuilder, private location : Location) { }

  ngOnInit(): void {
    this.theForm = this._fb.group ({
      content: ['', Validators.required]
    });
  }

  get f() { return this.theForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.theForm.invalid) {
        return;
    }

    this.addActivity(this.f.content.value);
  }

  addActivity(content){
    this.activityService.addActivity(content);
    this.location.back();
  }
}