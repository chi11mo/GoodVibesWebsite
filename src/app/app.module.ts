import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { PlayerService } from './player.service';

import {appRoutingModule} from "./app.routing";

import { LeaguetableComponent } from './leaguetable';
import {HomeComponent} from "./home";
import { AdminComponent } from './admin/admin.component';
import { GamescheduleComponent } from './gameschedule/gameschedule.component';
import { ClubsComponent } from './clubs/clubs.component';
import { AdminTableComponent } from './admin/admin-table';
import { AdminPlayerComponent } from './admin/admin-player/admin-player.component';
import { AdminScheduleComponent } from './admin/admin-schedule/admin-schedule.component';



@NgModule({
  declarations: [
    AppComponent,
    LeaguetableComponent,
    HomeComponent,
    AdminComponent,
    GamescheduleComponent,
    ClubsComponent,
    AdminTableComponent,
    AdminPlayerComponent,
    AdminScheduleComponent
  ],
  imports: [
    appRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
