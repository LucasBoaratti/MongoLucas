import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Culturas } from './culturas';

describe('Culturas', () => {
  let component: Culturas;
  let fixture: ComponentFixture<Culturas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Culturas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Culturas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
