import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, tick } from '@angular/core/testing';

import { SaveComponent } from './save.component';

describe('SaveComponent', () => {
  let component: SaveComponent;
  let fixture: ComponentFixture<SaveComponent>;
  let h1:HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('checking salary slip', () => {
    h1 = fixture.nativeElement.querySelector('h1');
    component.getSalarySlip();
    fixture.detectChanges();
    expect(h1.textContent).toEqual("Salary Slip");
  });

 
    // it has two parameters 1st is event,2nd parameter is event Object


});
