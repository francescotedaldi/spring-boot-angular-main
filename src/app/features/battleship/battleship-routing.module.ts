import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BattleshipComponent} from './components/battleship.component';

const BATTLESHIP_ROUTER: Routes = [
  {
    path: '',
    component: BattleshipComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(BATTLESHIP_ROUTER)],
  exports: [RouterModule]
})
export class BattleshipRoutingModule { }
