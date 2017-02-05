import { Component, OnInit } from '@angular/core';
import {Achievement} from "../../models/achievement.model";
import {AchievementService} from "../../shared/services/achievement.service";

@Component({
  selector: 'achievements',
  templateUrl: './achievements.component.html'
})
export class AchievementsComponent implements OnInit {
  achievements: Achievement;
  errorMessage: string;

  constructor(
    private _achievementService: AchievementService
  ) { }

  ngOnInit() {
    this.getAchievements();
  }

  getAchievements() {
    this._achievementService.getAchievements()
      .subscribe(
        achievements => this.achievements = achievements,
        error => this.errorMessage = <any>error
      );
  }
}
