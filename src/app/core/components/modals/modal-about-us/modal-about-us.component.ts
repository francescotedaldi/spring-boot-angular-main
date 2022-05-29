import {Component, OnDestroy, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap/modal';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-modal-about-us',
  templateUrl: './modal-about-us.component.html',
  styleUrls: ['./modal-about-us.component.scss']
})
export class ModalAboutUsComponent implements OnInit, OnDestroy {
  public onClose: Subject<boolean>;

  constructor(
    public bsModalRef: BsModalRef
  ) { }

  public ngOnInit(): void {
    this.onClose = new Subject();
  }

  public ngOnDestroy(): void {
    this.onClose.unsubscribe();
  }

}
