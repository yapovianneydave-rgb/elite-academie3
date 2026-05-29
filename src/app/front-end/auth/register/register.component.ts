import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  currentStep = 1;
  showPassword = false;
  showConfirm = false;

  form = {
    nom: '',
    prenom: '',
    role: '',
    telephone: '',
    email: '',
    commune: '',
    quartier: '',
    password: '',
    confirm: '',
    acceptConditions: false
  };


  constructor(private router: Router) {}

  nextStep() {
    if (this.currentStep === 1) {
      if (!this.form.nom || !this.form.prenom || !this.form.role) {
        alert('Veuillez remplir le nom, le prénom et sélectionner votre rôle');
        return;
      }
    }
    if (this.currentStep === 2) {
      if (!this.form.telephone || !this.form.email) {
        alert('Veuillez remplir le téléphone et l\'email');
        return;
      }
    }
    if (this.currentStep < 3) this.currentStep++;
  }

  prevStep() {
    if (this.currentStep > 1) this.currentStep--;
  }

  onSubmit() {
    if (!this.form.password || !this.form.confirm) {
      alert('Veuillez remplir les mots de passe');
      return;
    }
    if (this.form.password !== this.form.confirm) {
      alert('Les mots de passe ne correspondent pas');
      return;
    }
    if (!this.form.acceptConditions) {
      alert('Veuillez accepter les conditions générales');
      return;
    }
    console.log('✅ Inscription réussie', this.form);
    this.router.navigate(['/auth/login']);
  }
}
