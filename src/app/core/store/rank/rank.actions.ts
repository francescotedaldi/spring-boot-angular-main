import {createAction, props} from '@ngrx/store';
import {GameType} from '../../enums/game-type.enum';
import {AckJSON} from '../../model/ack.model';
import {RankUpdate} from './model/rank-update.model';
import {RankJSON} from './model/rank.model';

export const getAllRanks = createAction(
    '[Rank] Get All Ranks',
    props<{ gameType: GameType }>()
);

export const getAllRanksSuccess = createAction(
    '[Rank] Get All Ranks Success',
    props<{ ranks: RankJSON[] }>()
);

export const saveRank = createAction(
  '[RankUpdate] Rank Test',
  props<{ rankUpdate: RankUpdate }>()
);

export const saveRankSuccess = createAction(
  '[RankUpdate] Save Rank Success',
  props<{ ack: AckJSON }>()
);

export const clean = createAction(
    '[Rank] Clean Ranks'
);
