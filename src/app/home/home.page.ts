import { Component }                                   from '@angular/core';
import { RouterModule }                                from "@angular/router";
import { Capacitor }                                   from "@capacitor/core";
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
	selector   : 'app-home',
	templateUrl: './home.page.html',
	styleUrl   : './home.page.scss',
	imports    : [IonHeader, IonToolbar, IonTitle, IonContent, RouterModule],
    standalone : true,
})
export class HomePage {
	public static readonly KEY = 'locale';
	
	public title: string             = 'ionic-angular-multi-locale-ssr';
	public lines: { text: string }[] = Array.from({ length: 50 }).map((value: unknown, index: number) => ({
		text: `line ${ index + 1 }`,
	}));
	
	
	public setLocale(lc: string): void {
		localStorage.setItem(HomePage.KEY, lc);
		window.location.href = Capacitor.isNativePlatform() ? `/${ lc }/index.csr.html` : `/${ lc }/`;
	}
}
