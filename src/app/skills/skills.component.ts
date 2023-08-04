import { Component, ElementRef, ViewChild } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-skills',
  templateUrl :'skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  skills: any

  constructor(protected profileService:ProfileService) { }

    ngOnInit() {
     
      this.skills =  this.profileService.skills()
    }

/*
    @ViewChild('renderCanvas', { static: true }) renderCanvas!: ElementRef<HTMLCanvasElement>;
    private engine!: BABYLON.Engine 
    private scene!: BABYLON.Scene;

 

  private createScene(): void {
    // Create the Babylon Engine
    this.engine = new BABYLON.Engine(this.renderCanvas.nativeElement, true);

    // Create a basic Babylon Scene
    this.scene = new BABYLON.Scene(this.engine);

    // Create and position a free camera
    const camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), this.scene);
    camera.setTarget(BABYLON.Vector3.Zero());
    camera.attachControl(this.renderCanvas.nativeElement, true);

    // Create a light, aiming 0,1,0 - to the sky
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), this.scene);
    light.intensity = 0.7;

    // Create a sphere
    const sphere = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 2, segments: 32 }, this.scene);
    sphere.position.y = 1;

    // Create a ground
    const ground = BABYLON.MeshBuilder.CreateGround("ground", { width: 6, height: 6 }, this.scene);

    // Start the engine rendering loop
    this.engine.runRenderLoop(() => {
      this.scene.render();
    });
  }

  ngOnDestroy(): void {
    // Dispose of the scene and engine when the component is destroyed
    this.scene.dispose();
    this.engine.dispose();
  }*/
}
