import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "src/environments/environment";
import {Schedule} from "./schedule";

@Injectable({
  providedIn: 'root'
})

export class ScheduleService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getSchedule(): Observable<Schedule[]> {
    return this.http.get<Schedule[]>(`${this.apiServerUrl}/schedule/all`);
  }

  public addSchedule(schedule: Schedule): Observable<Schedule> {
    return this.http.post<Schedule>(`${this.apiServerUrl}/schedule/add`, schedule);
  }

  public updateSchedule(schedule: Schedule): Observable<Schedule> {
    return this.http.put<Schedule>(`${this.apiServerUrl}/schedule/update`, schedule);
  }

  public deleteSchedule(scheduleID: number): Observable<void> {
    console.log(scheduleID);
    return this.http.delete<void>(`${this.apiServerUrl}/schedule/delete/${scheduleID}`);
  }
}
