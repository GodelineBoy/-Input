import { Component, OnInit } from '@angular/core';
import { Developer } from '../common/developer.model';
import { Skill } from '../common/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})


export class DeveloperComponent implements OnInit {

  public developer: Developer | undefined;

  constructor() {}
   

  ngOnInit() : void {

    this.developer = new Developer(
    "Boy",
    "Godeline",
    39,
    "femme",
    "en formation de developpement fullSatck",
    [
      new Skill("HTML", "https://fr.m.wikipedia.org/wiki/Fichier:HTML5_logo_and_wordmark.svg", "https://developer.mozilla.org/fr/docs/Learn/Getting_started_with_the_web/HTML_basics"),
      new Skill("CSS", "https://fr.wikipedia.org/wiki/Fichier:CSS3_logo_and_wordmark.svg", "https://developer.mozilla.org/fr/docs/Learn/Getting_started_with_the_web/CSS_basics"),
      new Skill("Angular", "https://www.google.com/url?sa=i&url=https%3A%2F%2Ffr.wikipedia.org%2Fwiki%2FAngular&psig=AOvVaw24dYQ1SmZKgYstXjReomJT&ust=1635939093843000&source=images&cd=vfe&ved=2ahUKEwjk3OKVyvnzAhVOZhQKHT10A5QQr4kDegUIARCzAQ", "https://angular.io/"), 
    ]
    );
    
  }

}
