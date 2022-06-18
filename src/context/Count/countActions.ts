import type { CountTypes } from '~constants/Count';

interface Increase {
  type: `${CountTypes.increase}`;
}

interface Decrease {
  type: `${CountTypes.decrease}`;
}

interface SetValue {
  type: `${CountTypes.setCount}`;
  payload: number;
}

export type CountActionTypes = Increase | Decrease | SetValue;
