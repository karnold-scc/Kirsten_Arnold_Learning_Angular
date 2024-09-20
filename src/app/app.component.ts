import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {User} from "./shared/models/user";
import {CommonModule} from "@angular/common";
import {A2} from "./shared/models/a2";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
// export class AppComponent {
//   title  = 'Kirsten';
//   year  = 2024;
//   course = "MAD 307";
//   protected readonly AppComponent1 = AppComponent1;
// }

export class AppComponent {
  title = 'Student List';
  userList: A2[] = //any[] would have worked as well
    [
      {
        name: "Kirsten", birthYear : 2003, program: "Computer Programming",
        semester: 3, isStudent: true
      },
      {
        name: "Joe", birthYear : 2001, program: "Construction",
        semester: 4, isStudent: true
      },
      {
        name: "Alice", birthYear : 2005, program: "Nursing",
        semester: 0, isStudent: true
      },
      {
        name: "Fred", birthYear : 1990, program: "Teacher - Computer Networks",
        semester: 4, isStudent: false
      },
      {
        name: "Jenny", birthYear : 2003, program: "Computer Programming",
        semester: 1, isStudent: true
      },
      {
        name: "John", birthYear : 2004, program: "Nursing",
        semester: 2, isStudent: true
      }
    ]

}
//argument of a variable called user, which is type User and returns void
