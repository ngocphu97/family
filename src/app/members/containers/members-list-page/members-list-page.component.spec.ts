import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersListPageComponent } from './members-list-page.component';

describe('MembersListPageComponent', () => {
  let component: MembersListPageComponent;
  let fixture: ComponentFixture<MembersListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembersListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
