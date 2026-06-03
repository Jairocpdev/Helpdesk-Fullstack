import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Chamado } from '../../models/chamado';
import { ChamadoService} from '../../services/chamado.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-novo-chamado',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './novo-chamado.component.html',
  styleUrl: './novo-chamado.component.css'
})
export class NovoChamadoComponent {

  form: FormGroup;

  constructor(private fb: FormBuilder,
    private chamadoService: ChamadoService,
    private router: Router
  ) { 

    this.form = this.fb.group({
      titulo: ['', Validators.required],
      descricao: ['', Validators.required],
      prioridade: ['media'],
      status: ['aberto']
    });
  }

  onSubmit() {
  if (this.form.valid) {

    const novoChamado: Chamado = {
      id: Date.now(),
      titulo: this.form.value.titulo,
      descricao: this.form.value.descricao,
      prioridade: this.form.value.prioridade,
      status: this.form.value.status
    };

    this.chamadoService.adicionar(novoChamado);

    this.router.navigate(['/chamados']);

  } else {
    console.log('Form inválido');
  }
}
}
