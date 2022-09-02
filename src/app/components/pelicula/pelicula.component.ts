import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components'
import { Pelicula } from '../../models/pelicula';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.scss'],
})
export class PeliculaComponent implements OnInit {

  @ViewChild(IonModal) modal: IonModal;
  @Input() pelicula:Pelicula;

  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name: string;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {}

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }

  embedURL(url) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}
