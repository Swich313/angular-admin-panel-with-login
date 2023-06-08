import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../../services/auth.service";
import {filter, map, merge, Observable} from "rxjs";
import {ResolveEnd, ResolveStart, Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  private showLoader!: Observable<boolean>
  private hideLoader!: Observable<boolean>

  isLoading!: Observable<boolean>

  constructor(private authService: AuthService, private router: Router) {
  }
  logout() {
    this.authService.logout()
  }

  ngOnInit(): void {
    this.hideLoader = this.router.events.pipe(filter((e) => e instanceof ResolveEnd), map(() => false))
    this.showLoader = this.router.events.pipe(filter((e) => e instanceof ResolveStart), map(() => true))
    this.isLoading = merge(this.hideLoader, this.showLoader)
  }
}
