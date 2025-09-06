import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dancas } from './dancas';

describe('Dancas', () => {
  let component: Dancas;
  let fixture: ComponentFixture<Dancas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dancas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dancas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
