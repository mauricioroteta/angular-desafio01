import { ComponentFixture, TestBed } from '@angular/core/testing';

import { alumnosComponent } from './alumnos.component';

describe('alumnosComponent', () => {
  let component: alumnosComponent;
  let fixture: ComponentFixture<alumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [alumnosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(alumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
