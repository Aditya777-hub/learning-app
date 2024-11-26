import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-learn',
  standalone: true,
  imports: [],
  templateUrl: './learn.component.html',
  styleUrl: './learn.component.css'
})
export class LearnComponent {

constructor(private router:Router){

}

html(){
  this.router.navigate(['/Techno1']);
}

css(){
  this.router.navigate(['/Techno2']);
}

javascript(){
  this.router.navigate(['/Techno3']);

}

typescript(){
  this.router.navigate(['/Techno4']);
}

angular(){
  this.router.navigate(['/Techno5']);
}

java(){
  this.router.navigate(['/Techno6']);
}

}
