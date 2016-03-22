import {Component} from 'angular2/core';
import {Hero} from './hero';

console.log('hero-detail.component.ts');

@Component({
    selector: 'my-hero-detail',
    templateUrl: '/app/hero-detail.component.html',
    inputs: ['hero']
})
export class HeroDetailComponent {
    public hero: Hero;
}