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
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {BattleColor} from '../../../../core/enums/battlecolor.enum';
import {BattleshipInstance} from '../../../../core/store/battleship/model/battleship-instance.model';

@Component({
  selector: 'app-battleship-settings',
  templateUrl: './battleship-settings.component.html',
  styleUrls: ['./battleship-settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BattleshipSettingsComponent implements OnInit, OnChanges {

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
      moves: new FormControl(30, [Validators.required, Validators.min(30), Validators.max(100)]),
    });
  }

  private resetForm(): void {
    if (this.instance) {
      this.form.reset({
        id: this.instance.id,
        name: this.instance.name,
        color: this.instance.color,
        moves: this.instance.moves,
      });
    }
  }

  public get f(): { [p: string]: AbstractControl } {
    return this.form.controls;
  }

}
