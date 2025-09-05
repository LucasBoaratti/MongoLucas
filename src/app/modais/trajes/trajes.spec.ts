import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Trajes } from './trajes';

describe('Trajes', () => {
  let component: Trajes;
  let fixture: ComponentFixture<Trajes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Trajes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Trajes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
