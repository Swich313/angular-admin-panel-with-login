import {Component, OnInit} from '@angular/core';
import {AdminService} from "../../services/admin.service";
import {filter, map, merge, Observable} from "rxjs";
import {User} from "../../services/user";
import {ActivatedRoute, ResolveEnd, ResolveStart, Router} from "@angular/router";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit{
  personalList!: Observable<User[]>

  constructor(
    private adminService: AdminService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
  }



  ngOnInit(): void {
    // this.personalList = this.adminService.getPersonalList();
    this.personalList = this.activatedRoute.data.pipe(map(data => data?.['users']))





  }

}
