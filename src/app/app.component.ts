import { afterNextRender, Component, inject, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import {
  AnalyticsService,
  InactivityTrackerService,
  ThemeManagerService
} from '@elementar-ui/components/core';
import { TextLogoComponent } from '@elementar-ui/components/logo';
import { SplashScreenComponent } from '@elementar-ui/components/splash-screen';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    TextLogoComponent,
    SplashScreenComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  private _themeManager = inject(ThemeManagerService);
  private _analyticsService = inject(AnalyticsService);
  private _inactivityTracker = inject(InactivityTrackerService);
  private _router = inject(Router);

  constructor() {
    afterNextRender(() => {
      // Scroll a page to top if url changed
      this._router.events
        .pipe(
          filter(event=> event instanceof NavigationEnd)
        )
        .subscribe(() => {
          window.scrollTo({
            top: 0,
            left: 0
          });
        })
      ;

      this._analyticsService.trackPageViews();
      this._inactivityTracker.setupInactivityTimer()
        .subscribe(() => {
          // console.log('Inactive mode has been activated!');
          // this._inactivityTracker.reset();
        })
      ;
    });
  }

  ngOnInit(): void {
    this._themeManager.setColorScheme(this._themeManager.getPreferredColorScheme());
  }
}
