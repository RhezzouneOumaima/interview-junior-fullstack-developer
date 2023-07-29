import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityResultsListComponent } from './city-results-list.component';

describe('CityResultsListComponent', () => {
  let component: CityResultsListComponent;
  let fixture: ComponentFixture<CityResultsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CityResultsListComponent]
    });
    fixture = TestBed.createComponent(CityResultsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
