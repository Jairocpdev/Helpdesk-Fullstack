import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmitirNovoChamadoComponent } from './emitir-novo-chamado.component';

describe('EmitirNovoChamadoComponent', () => {
  let component: EmitirNovoChamadoComponent;
  let fixture: ComponentFixture<EmitirNovoChamadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmitirNovoChamadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmitirNovoChamadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});