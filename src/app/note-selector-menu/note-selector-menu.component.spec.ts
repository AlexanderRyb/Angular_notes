import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteSelectorMenuComponent } from './note-selector-menu.component';

describe('NoteSelectorMenuComponent', () => {
  let component: NoteSelectorMenuComponent;
  let fixture: ComponentFixture<NoteSelectorMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteSelectorMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteSelectorMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
