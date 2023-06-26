import { Injectable } from '@angular/core';
import { SupabaseService } from '@core/services/supabase/supabase.service';
import * as supabaseConstants from '@assets/supabase-constants';
import { MsgService } from '@core/services/msg.service';
import { Profile } from '@core/models/profile.model';
import * as helperFunctions from '@core/helper-functions';

type ProfileRecord = Record<string, Date | null>;

@Injectable({
  providedIn: 'root',
})
export class UserProfilesService {
  constructor(
    private supabase: SupabaseService,
    private messageService: MsgService
  ) {}

  async fetchProfileIDs(): Promise<[string[], number]> {
    const {
      data: profiles,
      count,
      error,
    } = await this.supabase.client
      .from(supabaseConstants.PROFILES_TABLE)
      .select('id', { count: 'exact' });

    if (profiles && !error) {
      const ids = profiles.map(profile => profile.id);
      return [ids as string[], count ? count : 0];
    }

    this.messageService.showError(
      'Error fetching profile IDs.',
      error?.message
    );
    throw new Error('Error fetching profile IDs. ' + error?.message, {
      cause: error?.details,
    });
  }

  async fetchProfileUpdatedAtForIDs(
    profileIDs: string[]
  ): Promise<Record<string, Date | null>> {
    const { data: profiles, error } = await this.supabase.client
      .from(supabaseConstants.PROFILES_TABLE)
      .select('id,updated_at')
      .in('id', profileIDs);

    if (profiles && !error) {
      return profiles.reduce((record: ProfileRecord, profile) => {
        record[profile.id] = profile.updated_at
          ? new Date(
              helperFunctions.convertSupabaseDateString(profile.updated_at)
            )
          : null;

        return record;
      }, {});
    }

    this.messageService.showError(
      'Error fetching profile update dates.',
      error?.message
    );
    throw new Error('Error fetching profile update dates. ' + error?.message, {
      cause: error?.details,
    });
  }

  async fetchProfilesForIDs(profileIDs: string[]): Promise<Profile[]> {
    const { data: profiles, error } = await this.supabase.client
      .from(supabaseConstants.PROFILES_TABLE)
      .select('id,username,avatar_url,archetype_id,updated_at')
      .in('id', profileIDs);

    if (profiles && !error) {
      return profiles.map(profile => ({
        ...profile,
        updated_at: profile.updated_at
          ? new Date(
              helperFunctions.convertSupabaseDateString(profile.updated_at)
            )
          : null,
      })) as Profile[];
    }

    this.messageService.showError(
      'Error fetching profiles for specified IDs.',
      error?.message
    );
    throw new Error(
      'Error fetching profiles for specified IDs. ' + error?.message,
      {
        cause: error?.details,
      }
    );
  }
}
