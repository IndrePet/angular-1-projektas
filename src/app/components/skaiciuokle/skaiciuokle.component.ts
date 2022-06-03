import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skaiciuokle',
  templateUrl: './skaiciuokle.component.html',
  styleUrls: ['./skaiciuokle.component.css'],
})
export class SkaiciuokleComponent implements OnInit {
  public ugis: number = 0;
  public svoris: number = 0;
  public kmi: number = 0;
  public kmiTekstu: string = '';

  constructor() {}

  ngOnInit(): void {}

  public skaiciuotiKMI() {
    if (this.svoris && this.ugis)
      this.kmi = Number((this.svoris / (this.ugis / 100) ** 2).toFixed(2));
    if (this.kmi < 25) this.kmiTekstu = 'Sveikiname! Jūsų svoris normalus';
    if (this.kmi >= 25 && this.kmi < 30)
      this.kmiTekstu = 'Jūs turite antsvorio';
    if (this.kmi >= 30) this.kmiTekstu = 'Jūs turite viršsvorio';
  }
}
