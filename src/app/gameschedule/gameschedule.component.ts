import { Component, OnInit } from '@angular/core';
import {Schedule} from "../admin/admin-schedule/schedule";
import {ScheduleService} from "../admin/admin-schedule/schedule.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-gameschedule',
  templateUrl: './gameschedule.component.html',
  styleUrls: ['./gameschedule.component.css']
})
export class GamescheduleComponent implements OnInit {

  public schedules: Schedule[] | undefined;



  constructor(private scheduleService: ScheduleService) {
  }


  ngOnInit() {
    this.getSchedules();
  }

  public getSchedules(): void {
    this.scheduleService.getSchedule().subscribe(
      (response: Schedule[]) => {
        this.schedules = response;
        console.log(this.schedules);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
