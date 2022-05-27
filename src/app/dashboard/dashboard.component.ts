import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  styles: [
    `
      .dashboard-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.75rem;
      }
    `,
  ],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  loadState = 'loading';

  onSwitchState() {
    this.loadState = 'finished';
  }
}
