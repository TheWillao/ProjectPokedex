import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFavoritesComponent } from './modal-favorites.component';

describe('ModalFavoritesComponent', () => {
  let component: ModalFavoritesComponent;
  let fixture: ComponentFixture<ModalFavoritesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalFavoritesComponent]
    });
    fixture = TestBed.createComponent(ModalFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
