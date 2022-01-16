import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ToasterService, ToasterPayload, ToasterType } from 'src/app/services/toaster.service';
import { animate, AnimationEvent, state, style, transition, trigger } from '@angular/animations';

export type FadeState = 'visible' | 'hidden';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.css'],
  animations: [
    trigger('state', [
      state(
        'visible',
        style({
          opacity: '1'
        })
      ),
      state(
        'hidden',
        style({
          opacity: '0'
        })
      ),
      transition('* => visible', [animate('500ms ease-out')]),
      transition('visible => hidden', [animate('1000ms ease-out')])
    ])
  ],
  changeDetection: ChangeDetectionStrategy.Default
})

export class ToasterComponent implements OnInit {
  private alertTimeout: number = 4000;
  private alertTypeSuccess: string = 'success';
  private alertTypeWarning: string = 'warning';
  private alertTypeError: string = 'danger';
  private alertTypeDefault: string = 'primary';

  showToaster: boolean = false;
  alertType: string = '';
  alertTitle: string = '';
  alertMessage: string = '';
  state: FadeState = 'hidden';
  
  constructor(private toasterService: ToasterService) {}

  ngOnInit() {
    this.toasterService.showToaster.subscribe((payload: ToasterPayload) => {
      this.open(payload);
      this.delayedClose();
    });
  }

  animationDone(event: AnimationEvent) {
    if (event.fromState === 'visible' && event.toState === 'hidden') {
      this.showToaster = false;
    }
  }

  private open(payload: ToasterPayload) {
    switch (payload.type) {
      case ToasterType.Success:
        this.alertType = this.alertTypeSuccess;
        this.alertTitle = 'success';
        break;
      case ToasterType.Error:
        this.alertType = this.alertTypeError;
        this.alertTitle = 'error';
        break;
      case ToasterType.Warning:
        this.alertType = this.alertTypeWarning;
        this.alertTitle = 'warning';
        break;
      default:
        this.alertType = this.alertTypeDefault;
        this.alertTitle = 'info';
        break;
    }
    this.alertMessage = payload.message;
    this.showToaster = true;
    this.state = 'visible';
  }
  
  private close() {
    this.state = 'hidden';
  }

  private delayedClose() {
    setTimeout(() => { this.close(); }, this.alertTimeout);
  }
}