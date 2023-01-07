import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipEntityComponent } from './ship-entity.component';

describe('ShipEntityComponent', () => {
  let component: ShipEntityComponent;
  let fixture: ComponentFixture<ShipEntityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipEntityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShipEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
