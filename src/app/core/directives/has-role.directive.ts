import {Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Subject} from 'rxjs';
import {distinctUntilChanged, map, takeUntil} from 'rxjs/operators';
import {AppState} from '../../app-state';
import * as UserSelectors from '../../core/store/user/user.selectors';
import {Role} from '../enums/role.enum';
import {User} from '../store/user/model/user.model';
import {ANY} from '../utils/any';

@Directive({
  selector: '[appHasRole]'
})
export class HasRoleDirective implements OnInit, OnDestroy {
  private readonly destroy$: Subject<ANY> = new Subject();

  @Input()
  public appHasRole: Role[];

  constructor(
    private readonly template: TemplateRef<ANY>,
    private readonly view: ViewContainerRef,
    private readonly store: Store<AppState>
  ) { }

  public ngOnInit(): void {
    this.store
      .pipe(
        select(UserSelectors.getUser),
        map((user: User) => {
          return user && (!this.appHasRole.length || this.appHasRole.includes(user.role));
        }),
        distinctUntilChanged(),
        takeUntil(this.destroy$)
      )
      .subscribe((isLogged: boolean) => {
        if (isLogged) {
          this.view.createEmbeddedView(this.template);
        } else if (!isLogged) {
          this.view.clear();
        }
      });
  }

  public ngOnDestroy(): void {
    this.destroy$.complete();
  }

}
