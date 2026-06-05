import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-chamados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chamados.component.html',
  styleUrl: './chamados.component.css'
})
export class ChamadosComponent {

  constructor(private router: Router) {}

  voltarDashboard() {
    this.router.navigate(['/dashboard']);
  }
}