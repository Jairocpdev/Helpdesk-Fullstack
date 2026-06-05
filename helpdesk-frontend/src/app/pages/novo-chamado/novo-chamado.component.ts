import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emitir-novo-chamado',
  imports: [],
  templateUrl: './emitir-novo-chamado.component.html',
  styleUrl: './emitir-novo-chamado.component.css'
})
export class EmitirNovoChamadoComponent {
  
  constructor(private router: Router) {}

  novoChamado() {
    this.router.navigate(['/novo-chamado']);
  }
}