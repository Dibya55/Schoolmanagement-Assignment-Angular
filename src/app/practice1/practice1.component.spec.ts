import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practice1Component } from './practice1.component';

describe('Practice1Component', () => {
  let component: Practice1Component;
  let fixture: ComponentFixture<Practice1Component>;
  let h1:HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Practice1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Practice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it('should expect 30', () => {
  //   expect(addition(10,20)).toBe(30);
  // });
  it('test the string', () => {
    let str = "dibya";
    expect(str).toEqual("dibya");
  });
  
  // it('checking salary slip', () => {
  //   h1 = fixture.nativeElement.querySelector('h1');
  //   component.getSalarySlip();
  //   expect(h1.textContent).toEqual("Salary Slip");
  // });
 
});
