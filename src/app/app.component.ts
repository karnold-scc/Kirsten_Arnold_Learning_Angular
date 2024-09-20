import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {User} from "./shared/models/user";
import {CommonModule} from "@angular/common";

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
  title = 'User Generation';
  user1: User = {
    id: 1, fname: "Kirsten", lname: "Arnold",
    department: "Programming", isAdmin: false
  };
  user2: User = {
    id: 2, fname: "Taylor", lname:
      "Swift", department: "Web Dev", isAdmin: true
  };
  //Can declare values either way
  userList: User[] = //any[] would have worked as well
    [this.user1, this.user2,
      {
        id: 3, fname: "Jude", lname: "Duarte", department:
          "Programming", isAdmin: false
      },
      {
        id: 4, fname: "Jane", lname: "Doe", department:
          "Programming", isAdmin: true
      }
    ]

  toggleAdminStatus(user: User): void {
    user.isAdmin = !user.isAdmin;
  }
}
//argument of a variable called user, which is type User and returns void
