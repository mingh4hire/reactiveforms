import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  fg;
  constructor(fb: FormBuilder){
    this.fg  = fb.group({a: [null, Validators.pattern('abcd[1-9]') ],
      b: [null, Validators.required]});
    
  }
}
