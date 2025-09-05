import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Culturamodal1 } from './festival';

describe('Culturamodal1', () => {
  let component: Culturamodal1;
  let fixture: ComponentFixture<Culturamodal1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Culturamodal1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Culturamodal1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
