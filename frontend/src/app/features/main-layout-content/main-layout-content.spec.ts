import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLayoutContent } from './main-layout-content';

describe('MainLayoutContent', () => {
  let component: MainLayoutContent;
  let fixture: ComponentFixture<MainLayoutContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainLayoutContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainLayoutContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
