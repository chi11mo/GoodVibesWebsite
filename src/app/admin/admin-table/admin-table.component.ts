import {Component, OnInit} from '@angular/core';
import {Club} from './club';
import {ClubService} from './club.service';
import {HttpErrorResponse} from '@angular/common/http';
import {NgForm} from '@angular/forms';
import {Player} from "./player";
import {PlayerService} from "../admin-player/player.service";


@Component({
  selector: 'app-admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.css']
})

export class AdminTableComponent implements OnInit {


  public clubs: Club[] = [];
  public editClub: Club | undefined;
  public deleteClub: Club | undefined;
  title: string | undefined;

  public players: Player[] = [];

  constructor(private clubService: ClubService,private playerService: PlayerService) {
  }

  ngOnInit() {
    this.getClubs();
    this.getPlayers();
  }

  public getPlayers(): void {
    this.playerService.getPlayers().subscribe(
      (response: Player[]) => {
        this.players = response;
        console.log(this.players);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getClubs(): void {
    this.clubService.getClubs().subscribe(
      (response: Club[]) => {
        this.clubs = response;
        console.log(this.clubs);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  public onAddClub(addForm: NgForm): void {
    document.getElementById('add-club-form')!.click();
    this.clubService.addClub(addForm.value).subscribe(
      (response: Club) => {
        console.log(response);
        this.getClubs();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }


  public onUpdateClub(club: Club): void {
    this.clubService.updateClub(club).subscribe(
      (response: Club) => {
        console.log(response);
        this.getClubs();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  public onDeleteClub(clubID: number): void {
    this.clubService.deleteClub(clubID).subscribe(
      (response: void) => {
        console.log(response);
        this.getClubs();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  public onOpenModel(club: Club, mode: string): void {
    const container = document.getElementById('main-container');
    const buttonClub = document.createElement('button');
    buttonClub.type = 'button';
    buttonClub.style.display = 'none';
    buttonClub.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      buttonClub.setAttribute('data-target', '#addClubModal');
    }
    if (mode === 'edit') {
      this.editClub = club;
      buttonClub.setAttribute('data-target', '#updateClubModal');
    }
    if (mode === 'delete') {
      this.deleteClub = club;
      buttonClub.setAttribute('data-target', '#deleteClubModal');
    }
    container!.appendChild(buttonClub);
    buttonClub.click();
  }


}


