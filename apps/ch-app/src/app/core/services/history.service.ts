import { Injectable } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { CoreModule } from '../core.module';

@Injectable({ providedIn: 'root' })
export class JourneyService {
  static JOURNEY = [];
  constructor(private router: Router) {}

  /**
   * listenToRouter
   */
  public listenToRouter() {
    this.router.events.subscribe({
      next: event => {
        if (event instanceof ActivationEnd) {
          JourneyService.JOURNEY.push(event.snapshot.data.id);
        }
      }
    });
  }
}
