import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoCachoComponent } from './juego-cacho.component';

describe('JuegoCachoComponent', () => {
  let component: JuegoCachoComponent;
  let fixture: ComponentFixture<JuegoCachoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuegoCachoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegoCachoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
