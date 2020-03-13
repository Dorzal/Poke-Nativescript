import { Injectable } from '@angular/core';
import Activity from '../models/Activity';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  private data = new Array<Activity>(
    { id : 1, content: "C'est une activité", done : false },
    { id : 2, content: "C'est une activité", done : false },
    { id : 3, content: "C'est une activité", done : false },
    { id : 4, content: "C'est une activité", done : false },
    { id : 5, content: "C'est une activité", done : false },
    { id : 6, content: "C'est une activité", done : false },
  );
  constructor() { }

  addActivity(Content : string){
    let activity = new Activity(this.data.length, Content, false);
    this.data.push(activity);
  }

  getActivity(id){
    return this.data.filter((item) => item.id === id)[0];
  }

  getActivities(): Array<Activity>{
    return this.data;
  }

  setActivity(a, data){
    
    a.content = data;
    return a;
  }

}
