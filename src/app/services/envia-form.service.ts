import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnviaFormService {

  constructor() { }

  enviaData() {
    console.log("First click")
  }
}
