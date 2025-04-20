import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacaoTabelaComponent } from './racao-tabela.component';

describe('RacaoTabelaComponent', () => {
  let component: RacaoTabelaComponent;
  let fixture: ComponentFixture<RacaoTabelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RacaoTabelaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RacaoTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
