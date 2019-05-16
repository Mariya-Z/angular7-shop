import { NO_ERRORS_SCHEMA, DebugElement, Input, Directive } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';


@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[routerLink]',
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    '(click)': 'onClick()'
  }
})
export class RouterLinkStubDirective {
  // tslint:disable-next-line:no-input-rename
  @Input('routerLink') linkParams: any;
  navigatedTo: any = null;

  onClick() {
    this.navigatedTo = this.linkParams;
  }
}

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let links: RouterLinkStubDirective[];
  let linkDes: DebugElement[];

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, RouterLinkStubDirective],
      schemas: [NO_ERRORS_SCHEMA],
    });

    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    linkDes = fixture.debugElement.queryAll(
      By.directive(RouterLinkStubDirective),
    );

    links = linkDes.map(
      d => d.injector.get(RouterLinkStubDirective) as RouterLinkStubDirective,
    );
  }));

  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('can get RouterLinks from template ', () => {
    expect(links.length).toBe(4);
    expect(links[0].linkParams).toBe('/admin');
    expect(links[1].linkParams).toBe('/product-list');
    expect(links[2].linkParams).toBe('/order');
    expect(links[3].linkParams).toBe('/login');
  });

  it('can click  link in template', () => {
    const productLinkDe = linkDes[2];
    const   productLink = links[2];

    expect(productLink.navigatedTo).toBeNull(
      'link should not have navigated yet'
    );

    productLinkDe.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(productLink.navigatedTo).toBe('/order');
  });
});
