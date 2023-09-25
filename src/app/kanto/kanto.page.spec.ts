import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KantoPage } from './kanto.page';

describe('KantoPage', () => {
  let component: KantoPage;
  let fixture: ComponentFixture<KantoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(KantoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
