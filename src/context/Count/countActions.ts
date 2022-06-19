import type { CountTypes } from '~constants/count';

interface Increase {
  type: `${CountTypes.increase}`;
  payload?: number;
}

interface Decrease {
  type: `${CountTypes.decrease}`;
  payload?: number;
}

interface IncreaseAmount {
  type: `${CountTypes.increaseAmount}`;
  payload: number;
}

export type CountActionTypes = Increase | Decrease | IncreaseAmount;
