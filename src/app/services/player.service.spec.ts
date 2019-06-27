import { async,TestBed, ComponentFixture } from '@angular/core/testing';

import { PlayerService } from './player.service';
import { PlayerListComponent } from '../components/player/player-list/player-list.component';

describe('PlayerService', () => {
  let component:PlayerListComponent;
  let fixture: ComponentFixture<PlayerListComponent>;
  beforeEach(async(() =>{
    TestBed.configureTestingModule({

      declarations:[PlayerListComponent]
    })
    .compileComponents();
  }));
  beforeEach(()=>{
    fixture=TestBed.createComponent(PlayerListComponent);
    component=fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create',()=>{
    expect(component).toBeTruthy();
  });
});
