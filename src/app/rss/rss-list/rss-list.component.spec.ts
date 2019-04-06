import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RssListComponent } from './rss-list.component';

describe('RssListComponent', () => {
  let component: RssListComponent;
  let fixture: ComponentFixture<RssListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RssListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RssListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
