import { Component } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { NewsletterService } from './services/newsletter.service';

@Component({
  selector: 'app-root',
  template: `
      <button class="button button-primary" (click)="subscribeToNotifications()">
        Subscribe
      </button>
`})
export class AppComponent {
  title = 'push';

  readonly VAPID_PUBLIC_KEY = "BM7H8NmJyXhvC2Mb8G0kCCpIleYfPFgIeCNc7KIZFZ3qqSQmyOvDI7FxFH_5XBtk4pQQShLXJELQtnx8_F6m7vk";

  constructor(
    private swPush: SwPush,
    private newsletterService: NewsletterService) { }

  subscribeToNotifications() {

    this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    })
      .then(sub => {
        this.newsletterService.addPushSubscriber(sub).subscribe()
      })
      .catch(err => console.error("Could not subscribe to notifications", err));
  }
}
