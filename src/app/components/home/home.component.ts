import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { EnviaFormService } from '../../services/envia-form.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private enviaFormularioService = inject(EnviaFormService)
  name = "Bruno"
  deveMostrarTitulo = false
  listItems = [{id: "2"}, {id: "pe"}, {id: "lagoa"}]


  @Input("name") teste!: string
  @Output() emitindoUmValorName = new EventEmitter<string>()

  submit() {
    this.emitindoUmValorName.emit(this.name);
    this.enviaFormularioService.enviaData()
  }
}


