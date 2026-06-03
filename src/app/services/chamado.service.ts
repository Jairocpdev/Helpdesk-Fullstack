import { Injectable } from '@angular/core';
import { Chamado } from '../models/chamado';

@Injectable({
  providedIn: 'root'
})
export class ChamadoService {

  private chamados: Chamado[] = [
    {
      id: 1,
      titulo: 'Computador não liga',
      descricao: 'Usuário relata que o computador não inicia.',
      status: 'Aberto',
      prioridade: 'Alta'
    }
  ];

  listar(): Chamado[] {
    return this.chamados;
  }

  adicionar(chamado: Chamado): void {
    this.chamados.push(chamado);
  }

  excluir(id: number): void {
  this.chamados = this.chamados.filter(
    chamado => chamado.id !== id
  );
}

buscarPorId(id: number): Chamado | undefined {
  return this.chamados.find(
    chamado => chamado.id === id
  );
}

atualizar(chamadoAtualizado: Chamado): void {

  const indice = this.chamados.findIndex(
    chamado => chamado.id === chamadoAtualizado.id
  );

  if (indice !== -1) {
    this.chamados[indice] = chamadoAtualizado;
  }
}

}

//teste 