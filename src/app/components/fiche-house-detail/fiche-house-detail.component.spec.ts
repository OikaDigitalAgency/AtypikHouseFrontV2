import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheHouseDetailComponent } from './fiche-house-detail.component';

describe('FicheHouseDetailComponent', () => {
  let component: FicheHouseDetailComponent;
  let fixture: ComponentFixture<FicheHouseDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FicheHouseDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheHouseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
