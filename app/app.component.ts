import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';

@Component({
  selector: 'racing-app',
  template: `
    
`,
  directives: [RacesComponent],
  providers:[RaceService, HTTP_PROVIDERS]
})
export class AppComponent {
  heading = "Ultra Racing Schedule"
}
