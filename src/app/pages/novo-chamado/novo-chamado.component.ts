import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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

  idChamado: number | null = null;

  constructor(private fb: FormBuilder,
    private chamadoService: ChamadoService,
    private router: Router,
    private route: ActivatedRoute
  ) { 

    this.form = this.fb.group({
      titulo: ['', Validators.required],
      descricao: ['', Validators.required],
      prioridade: ['media'],
      status: ['aberto']
    });
  }

  ngOnInit() {

  const id = this.route.snapshot.paramMap.get('id');

  if (id) {

    this.idChamado = Number(id);

    const chamado = this.chamadoService.buscarPorId(
      this.idChamado
    );

    if (chamado) {

      this.form.patchValue({
        titulo: chamado.titulo,
        descricao: chamado.descricao,
        prioridade: chamado.prioridade,
        status: chamado.status
      });

    }
  }
}

 onSubmit() {

  if (!this.form.valid) {
    console.log('Form inválido');
    return;
  }

  const chamado: Chamado = {
    id: this.idChamado ?? Date.now(),
    titulo: this.form.value.titulo,
    descricao: this.form.value.descricao,
    prioridade: this.form.value.prioridade,
    status: this.form.value.status
  };

  if (this.idChamado) {

    this.chamadoService.atualizar(chamado);

  } else {

    this.chamadoService.adicionar(chamado);

  }

  this.router.navigate(['/chamados']);
}
}