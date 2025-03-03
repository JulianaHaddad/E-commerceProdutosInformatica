import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-esqueci',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './esqueci.component.html',
  styleUrls: ['./esqueci.component.css']
})
export class EsqueciComponent {
  email: string = '';
  message: string | null = null;
  success: boolean = false;

  onSubmit() {
    this.simulateApiCall(this.email).then(response => {
      this.message = 'E-mail de recuperação enviado com sucesso!';
      this.success = true;
    }).catch(error => {
      this.message = 'Ocorreu um erro ao enviar o e-mail de recuperação.';
      this.success = false;
    });
  }

  simulateApiCall(email: string): Promise<void> {
    // Simula uma chamada de API que retorna uma promessa
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simula sucesso ou falha
        const isSuccess = Math.random() > 0.5;
        if (isSuccess) {
          resolve();
        } else {
          reject();
        }
      }, 1000);
    });
  }
}
