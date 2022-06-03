import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rezervuaras',
  templateUrl: './rezervuaras.component.html',
  styleUrls: ['./rezervuaras.component.css'],
})
export class RezervuarasComponent implements OnInit {
  public talpa: number = 0;
  public greitis: number = 0;
  public laikas: number = 0;

  public uzpildymoLygis: number = 0;
  public errorMsg: string = '';

  constructor() {}

  ngOnInit(): void {}
  //Formule ( g*l) / t * 100
  //Pvz (10*6)/100 * 100
  public skaiciuotiRezervuaroUzpildymoLygi() {
    if (this.talpa && this.greitis && this.laikas) {
      this.uzpildymoLygis = Number(
        (((this.greitis * this.laikas) / this.talpa) * 100).toFixed(2)
      );
      if (this.uzpildymoLygis > 80 && this.uzpildymoLygis < 100)
        this.errorMsg = 'Rezervuaro talpa kritiškai pripildyta.';
      if (this.uzpildymoLygis >= 100) this.errorMsg = 'Talpa yra perpildyta!!!';
    }
  }
}
