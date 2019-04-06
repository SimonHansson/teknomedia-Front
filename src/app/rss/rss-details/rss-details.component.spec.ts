import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RssDetailsComponent } from './rss-details.component';

describe('RssDetailsComponent', () => {
  let component: RssDetailsComponent;
  let fixture: ComponentFixture<RssDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RssDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RssDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
