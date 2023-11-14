import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTaskSidebarComponent } from './user-task-sidebar.component';

describe('UserTaskSidebarComponent', () => {
  let component: UserTaskSidebarComponent;
  let fixture: ComponentFixture<UserTaskSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserTaskSidebarComponent]
    });
    fixture = TestBed.createComponent(UserTaskSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
