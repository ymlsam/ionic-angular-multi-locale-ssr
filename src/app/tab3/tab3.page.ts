import { Component }                                   from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
	selector   : 'app-tab3',
	templateUrl: './tab3.page.html',
	styleUrl   : './tab3.page.scss',
	imports    : [IonHeader, IonToolbar, IonTitle, IonContent],
    standalone : true,
})
export class Tab3Page {

}
