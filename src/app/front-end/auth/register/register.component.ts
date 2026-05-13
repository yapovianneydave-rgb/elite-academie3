import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Commune {
  id: number;
  nom: string;
}

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  currentYear = new Date().getFullYear();
  phoneNumber = '';

  // Sélection de la commune
  selectedCommune: number | null = null;

  // Saisie libre du quartier
  quartier: string = '';

  // Liste des communes
  communes: Commune[] = [
    { id: 1, nom: 'Yopougon' },
    { id: 2, nom: 'Port-Bouet' },
    { id: 3, nom: 'Adjame' },
    { id: 4, nom: 'Marcory' },
    { id: 5, nom: 'Bingerville' },
    { id: 6, nom: 'Koumassi' },
    { id: 7, nom: 'Treichville' },
    { id: 8, nom: 'Songon' },
    { id: 8, nom: 'Cocody' }

  ];
}
