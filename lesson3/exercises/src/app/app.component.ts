import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffEnabled: boolean = true;
  upDisabled: boolean = true;
  downDisabled: boolean = true;
  rightDisabled: boolean = true;
  leftDisabled: boolean = true;

  constructor() { }

  ngOnInit() { }

  handleTakeOff() {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
      this.color = 'blue';
      this.height = 10000;
      this.width = 20000;
      this.message = 'Shuttle in flight.';
    }
    this.enableMovement();
  }

  handleLand(rocketImage) {
    window.alert('The shuttle is landing. Landing gear engaged.');
    this.color = 'green';
    this.height = 0;
    this.width = 0;
    rocketImage.style.bottom = '0px';
    this.message = 'The shuttle has landed.';
  }

  handleAbortMission(rocketImage) {
    let result = window.confirm('Are you sure you want to abort the mission?');
    if (result) {
      this.color = 'red';
      this.height = 0;
      this.width = 0;
      rocketImage.style.bottom = '0px';
      this.message = 'Mission aborted.';
    }
  }

  moveRocket(rocketImage, direction) {
    if (direction === 'up') {
      let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height + 10000;
    }

    if (direction === 'down') {
      let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height - 10000;
    }

    if (direction === 'right') {
      let movement = parseInt(rocketImage.style.left) + 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width + 10000;
    }
    
    if (direction === 'left') {
      let movement = parseInt(rocketImage.style.left) - 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width - 10000;
    }
  }

  rocketEdgeWarning() {
    if(this.width===0 || this.width===490000 || this.height===0 || this.height===340000){
      this.color = 'orange';
    } else {
      this.color = ' blue';
    }
  }

  enableMovement(){
    this.upDisabled = false;
    this.downDisabled = false;
    this.rightDisabled = false;
    this.leftDisabled = false;
  }

  disableMovement(){
    if(this.height===0){
      this.downDisabled = true;
    } else {
      this.downDisabled = false;
    }
    
    if(this.height===340000){
      this.upDisabled = true;
    } else {
      this.upDisabled = false;
    }
    
    if(this.width===0){
      this.leftDisabled = true;
    } else {
      this.leftDisabled = false;
    }
    
    if(this.width===490000){
      this.rightDisabled = true;
    } else {
      this.rightDisabled = false;
    }
  }

}


