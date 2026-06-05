import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Chamado } from '../../models/chamado';
import { ChamadoService } from '../../services/chamado.service';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chamados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chamados.component.html',
  styleUrl: './chamados.component.css'
})
export class ChamadosComponent {

  chamados: Chamado[] = [];

  constructor(
    private router: Router,
    private chamadoService: ChamadoService
  ) {}

  ngOnInit() {
    this.chamados = this.chamadoService.listar();
  }

  voltarDashboard() {
    this.router.navigate(['/dashboard']);
  }

  novoChamado() {
    this.router.navigate(['/novo-chamado']);
  }

  adicionar(chamado: Chamado): void {
  this.chamados.push(chamado);
}

  listar(): Chamado[] {
  return this.chamados;
}

editarChamado(id: number) {
  this.router.navigate(
    ['/editar-chamado', id]
  );
}

excluirChamado(id: number) {

  const confirmar = confirm(
    'Deseja realmente excluir este chamado?'
  );

  if(confirmar) {
    this.chamadoService.excluir(id);
  }

}
}