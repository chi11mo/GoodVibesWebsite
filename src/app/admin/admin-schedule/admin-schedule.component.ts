import { Component, OnInit } from '@angular/core';
import{Schedule} from "./schedule";
import {ScheduleService} from "./schedule.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Club} from "../admin-table/club";
import {NgForm} from "@angular/forms";
import {ClubService} from "../admin-table/club.service";

@Component({
  selector: 'app-admin-schedule',
  templateUrl: './admin-schedule.component.html',
  styleUrls: ['./admin-schedule.component.css']
})
export class AdminScheduleComponent implements OnInit {

  public schedules : Schedule[] | undefined;

  public editSchedule: Schedule | undefined;
  public deleteSchedule: Schedule | undefined;

  constructor(private scheduleService: ScheduleService) { }



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



  public onAddSchedule(addForm: NgForm): void {
    document.getElementById('add-club-form')!.click();
    this.scheduleService.addSchedule(addForm.value).subscribe(
      (response: Schedule) => {
        console.log(response);
        this.getSchedules();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }


  public onUpdateSchedule(schedule:Schedule): void {
    this.scheduleService.updateSchedule(schedule).subscribe(
      (response: Schedule) => {
        console.log(response);
        this.getSchedules();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  public onDeleteSchedule(scheduleID: number): void {
    this.scheduleService.deleteSchedule(scheduleID).subscribe(
      (response: void) => {
        console.log(response);
        this.getSchedules();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  public onOpenModel(schedule: Schedule, mode: string): void {
    const container = document.getElementById('main-container');
    const buttonSchedule = document.createElement('button');
    buttonSchedule.type = 'button';
    buttonSchedule.style.display = 'none';
    buttonSchedule.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      buttonSchedule.setAttribute('data-target', '#addScheduleModal');
    }
    if (mode === 'edit') {
      this.editSchedule = schedule;
      buttonSchedule.setAttribute('data-target', '#updateScheduleModal');
    }
    if (mode === 'delete') {
      this.deleteSchedule =schedule;
      buttonSchedule.setAttribute('data-target', '#deleteScheduleModal');
    }
    container!.appendChild(buttonSchedule);
    buttonSchedule.click();
  }


}
