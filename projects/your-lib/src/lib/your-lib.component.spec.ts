import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourLibComponent } from './your-lib.component';

describe('YourLibComponent', () => {
  let component: YourLibComponent;
  let fixture: ComponentFixture<YourLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
