import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RssCategoryComponent } from './rss-category.component';

describe('RssCategoryComponent', () => {
  let component: RssCategoryComponent;
  let fixture: ComponentFixture<RssCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RssCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RssCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
