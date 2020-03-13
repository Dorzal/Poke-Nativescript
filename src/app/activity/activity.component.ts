import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../services/activity.service';
import Activity from '../models/Activity';


@Component({
  selector: 'ns-activity',
  templateUrl: './activity.component.html',
})
export class ActivityComponent implements OnInit {
  
  activities : Array<Activity>;
  
  constructor(private activityService : ActivityService) { }

  ngOnInit(): void {
     this.getActivities();
  }

  getActivities(){
    this.activities = this.activityService.getActivities();
    this.activities.forEach(elem => { console.log(elem.content)})
  }

  deleteActivity(item){
    console.log(item);
    if(item.done == true){
      this.activities.splice(item, 1);
    }
  }

  toggle(item){
    if(item.done == false){
      item.done = true
    }else{
      item.done = false
    }
  }



  
}
