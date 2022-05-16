import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {BattleshipInstance} from "../../../../core/store/battleship/model/battleship-instance.model";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {BattleColor} from "../../../../core/enums/battlecolor.enum";

@Component({
  selector: 'app-home-settings',
  templateUrl: './home-settings.component.html',
  styleUrls: ['./home-settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeSettingsComponent implements OnInit, OnChanges {

  @Input()
  public instance: BattleshipInstance;
  @Output()
  public back: EventEmitter<void> = new EventEmitter();
  @Output()
  public save: EventEmitter<BattleshipInstance> = new EventEmitter<BattleshipInstance>();

  public form: FormGroup;
  public submitted: boolean;
  public colors: BattleColor[];


  constructor() {
    this.colors = Object.values(BattleColor).filter((value: string) => typeof value !== 'number');
  }

  public ngOnInit(): void {
    this.buildForm();
    this.resetForm();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (!this.form) {
      this.buildForm();
    }
    this.resetForm();
  }

  public saveHandler(): void {
    this.submitted = true;

    if (this.form.valid) {
      const instance = this.form.value as BattleshipInstance;
      this.save.emit(instance);
    }
  }

  public backHandler(): void {
    this.back.emit();
  }

  private buildForm(): void {
    this.form = new FormGroup({
      id: new FormControl(),
      name: new FormControl(null, Validators.required),
      color: new FormControl(null, Validators.required),
      time: new FormControl(15, [Validators.required, Validators.min(15), Validators.max(120)]),
    });
  }

  private resetForm(): void {
    if (this.instance) {
      this.form.reset({
        id: this.instance.id,
        name: this.instance.name,
        color: this.instance.color,
        time: this.instance.time,
      });
    }
  }

  public get f(): { [p: string]: AbstractControl } {
    return this.form.controls;
  }

}
