import { DEFAULT_DATA_LIFESPAN } from '@assets/supabase-constants';

export const updateFetchDateForKey = (
  map: Map<number, Date>,
  id: number
): Map<number, Date> => {
  const expiryDate = new Date();
  expiryDate.setDate(expiryDate.getDate() + DEFAULT_DATA_LIFESPAN);

  const mapCopy = new Map(map);
  mapCopy.set(id, expiryDate);

  return mapCopy;
};

declare global {
  interface Date {
    addMilliseconds(milliseconds: number): Date;
  }
}

Date.prototype.addMilliseconds = function (milliseconds): Date {
  if (!milliseconds) return this;
  const date = this;
  date.setDate(date.getDate() + milliseconds);

  return date;
};
