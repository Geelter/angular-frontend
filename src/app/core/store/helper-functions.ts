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
