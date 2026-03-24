import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentButton } from './present-button';

describe('PresentButton', () => {
  let component: PresentButton;
  let fixture: ComponentFixture<PresentButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresentButton],
    }).compileComponents();

    fixture = TestBed.createComponent(PresentButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
