import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamescheduleComponent } from './gameschedule.component';

describe('GamescheduleComponent', () => {
  let component: GamescheduleComponent;
  let fixture: ComponentFixture<GamescheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamescheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamescheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
