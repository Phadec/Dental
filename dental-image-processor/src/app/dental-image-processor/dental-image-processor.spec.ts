import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DentalImageProcessor } from './dental-image-processor';

describe('DentalImageProcessor', () => {
  let component: DentalImageProcessor;
  let fixture: ComponentFixture<DentalImageProcessor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DentalImageProcessor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DentalImageProcessor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
