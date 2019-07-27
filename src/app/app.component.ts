import { Component } from '@angular/core';
import { PubSubService } from './Services/pub-sub.service';
import { NavigationService } from './Services/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mapster';
  constructor(private pubsub: PubSubService, private nav: NavigationService){ }

}
