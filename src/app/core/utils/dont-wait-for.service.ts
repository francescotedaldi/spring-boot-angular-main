import {noop} from 'rxjs';
import {PromiseAny} from './any';

export const dontWaitFor = (p: PromiseAny): void => {
  p.then(noop).catch(noop);
};
