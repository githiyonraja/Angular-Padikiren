import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Heading } from './heading';

describe('Heading', () => {
  let component: Heading;
  let fixture: ComponentFixture<Heading>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Heading],
    }).compileComponents();

    fixture = TestBed.createComponent(Heading);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('emits the entered username and password when submitted', () => {
    let submitted: { username: string; password: string } | undefined;
    component.credentialsSubmitted.subscribe((credentials) => submitted = credentials);
    component.username = 'alice';
    component.password = 'secret';

    component.onSubmit();

    expect(submitted).toEqual({
      username: 'alice',
      password: 'secret',
    });
  });
});
