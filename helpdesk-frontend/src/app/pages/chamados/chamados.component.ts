import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chamados',
  standalone: true,
  imports: [],
  templateUrl: './chamados.component.html',
  styleUrl: './chamados.component.css'
})
export class ChamadosComponent {

  constructor(private router: Router) {}

  voltarDashboard() {
    this.router.navigate(['/dashboard']);
  }
}