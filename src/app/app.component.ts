import { Component, OnDestroy, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { SupabaseAuthService } from '@core/services/supabase/supabase-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(
    private primengConfig: PrimeNGConfig,
    private supabaseAuth: SupabaseAuthService,
    private router: Router
  ) {}

  resizeListener: (_: UIEvent) => void;

  private handleResize(event: UIEvent) {
    this.setColumnCount(window.innerWidth);
  }

  private setColumnCount(windowWidth: number) {
    let columnCount;

    if (windowWidth < 600) {
      columnCount = 2;
    } else if (windowWidth < 900) {
      columnCount = 3;
    } else {
      columnCount = 4;
    }

    document.documentElement.style.setProperty(
      '--column-count',
      columnCount.toString()
    );

    // console.log(
    //   document.documentElement.style.getPropertyValue('--column-count')
    // );
  }

  redirectIfLoggedIn() {
    this.supabaseAuth.getSession().then(result => {
      if (result) {
        const _ = this.router.navigate(['/']);
      }
    });
  }
  ngOnInit() {
    this.primengConfig.ripple = true;

    this.resizeListener = this.handleResize.bind(this);
    window.addEventListener('resize', this.resizeListener);
    this.setColumnCount(window.innerWidth);

    // this.redirectIfLoggedIn();

    // Change this to an action dispatch
    // this.archetypesService.fetchArchetypeDescriptions();
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.resizeListener);
  }
}
