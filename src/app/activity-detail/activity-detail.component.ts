import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ActivityService } from '../services/activity.service';
import Activity from '../models/Activity';
import { Location } from '@angular/common';
import { ActivityComponent } from '../activity/activity.component';

@Component({
  selector: 'ns-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.css']
})
export class ActivityDetailComponent implements OnInit {

  activity : Activity;
  constructor(private router : ActivatedRoute, private activityService : ActivityService, private location : Location) { }


  ngOnInit(): void {
    const id = +this.router.snapshot.params.id;
    this.activity = this.activityService.getActivity(id)
  }
  
  backClicked() {
    this.location.back();
  }


  

}
