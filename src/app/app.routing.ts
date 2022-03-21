import {Routes, RouterModule} from '@angular/router';

import {LeaguetableComponent} from './leaguetable';
import {HomeComponent} from "./home";
import {AdminComponent} from "./admin/admin.component";
import {GamescheduleComponent} from "./gameschedule/gameschedule.component";
import {ClubsComponent} from "./clubs/clubs.component";
import {AdminTableComponent} from "./admin/admin-table";
import {AdminPlayerComponent} from "./admin/admin-player/admin-player.component";
import {AdminScheduleComponent} from "./admin/admin-schedule/admin-schedule.component";
import {NewsComponent} from "./news/news.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'table', component: LeaguetableComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'gameschedule', component: GamescheduleComponent},
  {path: 'clubs', component: ClubsComponent},
  {path: 'admintable', component: AdminTableComponent},
  {path: 'adminplayer', component: AdminPlayerComponent},
  {path: 'admingameschedule', component: AdminScheduleComponent},
  {path: 'news', component: NewsComponent},

  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];

export const appRoutingModule = RouterModule.forRoot(routes);
