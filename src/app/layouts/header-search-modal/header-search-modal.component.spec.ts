import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSearchModalComponent } from './header-search-modal.component';

describe('HeaderSearchModalComponent', () => {
  let component: HeaderSearchModalComponent;
  let fixture: ComponentFixture<HeaderSearchModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderSearchModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderSearchModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
