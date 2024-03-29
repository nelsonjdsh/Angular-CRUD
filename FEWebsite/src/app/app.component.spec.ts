import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {ClienteComponent  } from "../app/components/cliente/cliente.component";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('Should sum two numbers.', () => {
    const fixture =  TestBed.createComponent(ClienteComponent);
    const app = fixture.componentInstance;
    expect(app.GetClientes()).toThrowError()
  });

  it(`should have as title 'FECliente'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('FECliente');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('FECliente app is running!');
  });
});
