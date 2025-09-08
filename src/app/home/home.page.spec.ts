import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePage } from './home.page';


describe('HomePage', () => {
  let fixture  : ComponentFixture<HomePage>;
  let component: HomePage;
	
	beforeEach(async () => {
		fixture   = TestBed.createComponent(HomePage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});
	
	it('should create', () => {
		expect(component).toBeTruthy();
	});
	
	it(`should have the 'ionic-angular-multi-locale-ssr' title`, () => {
		expect(component.title).toEqual('ionic-angular-multi-locale-ssr');
	});
	
	it('should render title', () => {
		const compiled = fixture.nativeElement as HTMLElement;
		expect(compiled.querySelector('ion-header > ion-toolbar > ion-title')?.textContent).toContain('ionic-angular-multi-locale-ssr');
	});
});
