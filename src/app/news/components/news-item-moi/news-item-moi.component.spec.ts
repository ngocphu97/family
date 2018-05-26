import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsItemMoiComponent } from './news-item-moi.component';

describe('NewsItemMoiComponent', () => {
  let component: NewsItemMoiComponent;
  let fixture: ComponentFixture<NewsItemMoiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsItemMoiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsItemMoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
