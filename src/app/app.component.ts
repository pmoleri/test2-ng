import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { IGX_NAVBAR_DIRECTIVES, IgxAvatarComponent, IgxButtonDirective, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective } from 'igniteui-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet, IGX_NAVBAR_DIRECTIVES, IgxAvatarComponent, IgxButtonDirective, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
