import { Component, OnInit } from '@angular/core';
import { Skill } from '../common/skill.model';
import { Input } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  
  constructor() {}
   
  @Input () skill : Skill | undefined;

  ngOnInit(): void {
  }

}
