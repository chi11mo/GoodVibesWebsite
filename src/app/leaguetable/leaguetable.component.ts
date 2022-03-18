import { Component, OnInit } from '@angular/core';
import { Club } from './club';
import { ClubService } from './club.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-leaguetable',
  templateUrl: './leaguetable.component.html',
  styleUrls: ['./leaguetable.component.css']
})


export class LeaguetableComponent implements OnInit {
  public clubs: Club[]= [];
  public editClub: Club | undefined ;
  public deleteClub: Club | undefined;
  title: string | undefined;



  constructor(private clubService: ClubService){}

  ngOnInit() {
    this.getClubs();
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
/**
  public searchClubs(key: string): void {
    console.log(key);
    const results: Club[] = [];
    for (const club of this.clubs) {
      if (club.team.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || club.email.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || player.twitch.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || player.psn.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(player);
      }
    }
    this.players = results;
    if (results.length === 0 || !key) {
      this.getPlayers();
    }
  }
 **/

  public onOpenModel(club: Club, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addClubModal');
    }
    if (mode === 'edit') {
      this.editClub = club;
      button.setAttribute('data-target', '#updateClubModal');
    }
    if (mode === 'delete') {
      this.deleteClub = club;
      button.setAttribute('data-target', '#deleteClubModal');
    }
    container!.appendChild(button);
    button.click();
  }



}



