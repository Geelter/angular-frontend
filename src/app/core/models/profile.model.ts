export interface Profile {
  id: string;

  username: string;

  avatar_url: string | null;

  archetype_id: number | null;

  updated_at: Date | null;

  attributes: Record<number, { id: number; value: number }>;
}
