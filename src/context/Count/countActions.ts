import type { CountTypes } from '~/constants';

interface Increase {
  type: `${CountTypes.increase}`;
  payload?: number;
}

interface Decrease {
  type: `${CountTypes.decrease}`;
  payload?: number;
}

interface Pending {
  type: `${CountTypes.pending}`;
}

interface Fulfilled {
  type: `${CountTypes.fulfilled}`;
  payload?: number;
}

interface Rejected {
  type: `${CountTypes.rejected}`;
  payload?: string;
}

interface IncreaseAmount {
  type: `${CountTypes.increaseAmount}`;
  payload: number;
}

export type CountActionTypes =
  | Increase
  | Decrease
  | IncreaseAmount
  | Pending
  | Fulfilled
  | Rejected;
