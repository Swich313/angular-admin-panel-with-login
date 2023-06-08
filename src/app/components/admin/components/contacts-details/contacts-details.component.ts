import {Component, OnInit} from '@angular/core';
import {map, Observable} from "rxjs";
import {User} from "../../services/user";
import {AdminService} from "../../services/admin.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-contacts-details',
  templateUrl: './contacts-details.component.html',
  styleUrls: ['./contacts-details.component.scss']
})
export class ContactsDetailsComponent implements OnInit{
  userInfo!: Observable<User>
  id!: string

  constructor(private adminService: AdminService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(params => this.id = params?.['id'])
    // this.userInfo = this.adminService.getPerson(this.id)

    this.userInfo = this.activatedRoute.data.pipe(map(data => data?.['user']))
  }


}
