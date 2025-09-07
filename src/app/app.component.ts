import { Component }    from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Capacitor }    from '@capacitor/core';


@Component({
	selector   : 'app-root',
	imports    : [RouterOutlet],
	templateUrl: './app.component.html',
	styleUrl   : './app.component.scss',
	standalone : true,
})
export class AppComponent {
	public static readonly KEY = 'locale';
	
	public title: string = 'angular-multi-locale-ssr-capacitor';
	
	public setLocale(lc: string): void {
		localStorage.setItem(AppComponent.KEY, lc);
		window.location.href = Capacitor.isNativePlatform() ? `/${lc}/index.csr.html` : `/${lc}/`;
	}
}