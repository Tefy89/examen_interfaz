import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'DEBERES INTERFACES DE DISEÑO';

  constructor(private router: Router) { }

  ngOnInit() {
    if (this.router.url === '/') {
      this.router.navigate(['/inicio']);
    }
  }
}