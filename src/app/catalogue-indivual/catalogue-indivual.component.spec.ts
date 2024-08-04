import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogueIndivualComponent } from './catalogue-indivual.component';

describe('CatalogueIndivualComponent', () => {
  let component: CatalogueIndivualComponent;
  let fixture: ComponentFixture<CatalogueIndivualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogueIndivualComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CatalogueIndivualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
