import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'Iroman';
  public age: number = 23;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {

    return `${this.name} - ${this.age}`
  }

  changeHeroName(name: string): void {
    this.name = name
  }

  changeAge(age: number) {
    this.age = age
  }

  resetForm(): void {
    this.name = 'Iroman';
    this.age = 23;
    // document.querySelectorAll('h1').forEach(element => {
    //   element.innerHTML = '<h1>Desde angular</h1>'
    // })
  }

}
