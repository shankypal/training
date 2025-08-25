import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-training';
  imageUrl = 'assets/images/01.jpg';
  navItems = [
    { label: 'Home', route: '/home' },
    { label: 'About', route: '/about' },
    { label: 'Contact', route: '/contact' }
  ];
  user = { name: 'Shanky', email: 'abc@gmail.com' };
  private _isAuthenticated = false;
  get isAuthenticated(): boolean {
    return this._isAuthenticated;
  }
  set isAuthenticated(value: boolean) {
    console.log('Authentication status changed:', value);
    this._isAuthenticated = value;
    // if (value) {
    //   this.router.navigate(['/home']);
    // } else {
    //   this.router.navigate(['/login']);
    // }
  }
  newNavItem = { label: '', route: '' };

  // The constructor is used to initialize the component
  // and can be used to inject services or perform any setup that does not depend on the component's inputs or lifecycle hooks.
  // It is called when the component is created and is not called again unless the component is destroyed and recreated.
  // This is useful for one-time initialization tasks
  // such as setting up initial values or injecting services that will be used throughout the component's lifecycle. 
  // For example, to handle user authentication or application state
  constructor(private router: Router) { }

  // This lifecycle hook is called once the component has been initialized
  // It is a good place to perform any setup that requires the component to be fully initialized
  // For example, you might want to log the initial value of childData or perform any
  // initial data fetching or setup that depends on the input properties.
  // It is not called again unless the component is destroyed and recreated.
  // This is useful for one-time initialization tasks.
  // and is a good place to perform any setup logic
  ngOnInit(): void {
    // Initialization logic can go here
    console.log(this.user);
  }
  // This method toggles the image URL between two images
  changeImage(): void {
    this.imageUrl = this.imageUrl === 'assets/images/01.jpg' ? 'assets/images/02.jpg' : 'assets/images/01.jpg';
  }
  logUser(): void {
    console.log(this.user);
  }
  submitUser(): void {
    console.log('Form submitted:', this.user);
  }

  changeData(): void {
    this.user = { name: 'John Doe', email: 'john.doe@example.com' };
  }

  // submitNav(): void {
  //   if (this.newNavItem.label && this.newNavItem.route) {
  //     this.navItems.push({ ...this.newNavItem });
  //     this.newNavItem = { label: '', route: '' }; // Reset form
  //     console.log('Nav form submitted:', this.navItems);
  //   }
  // }
}
