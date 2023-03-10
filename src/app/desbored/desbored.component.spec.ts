import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesboredComponent } from './desbored.component';

describe('DesboredComponent', () => {
  let component: DesboredComponent;
  let fixture: ComponentFixture<DesboredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesboredComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesboredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
