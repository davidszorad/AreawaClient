import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {
  @Output() showToaster: EventEmitter<ToasterPayload> = new EventEmitter();
  
  constructor() { }

  public show(type: ToasterType, message: string) {
    this.showToaster.emit({ type, message });
  }
}

export enum ToasterType {
  Success,
  Warning,
  Error,
  Default
}

export interface ToasterPayload {
  type: ToasterType;
  message: string;
}