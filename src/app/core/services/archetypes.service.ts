import { Injectable } from '@angular/core';
import { SupabaseService } from '@core/services/supabase/supabase.service';
import { Archetype } from '@creator/models/archetype.model';
import * as supabaseConstants from '@assets/supabase-constants';
import { MsgService } from '@core/services/msg.service';

@Injectable({
  providedIn: 'root',
})
export class ArchetypesService {
  constructor(
    private supabase: SupabaseService,
    private messageService: MsgService
  ) {}

  async fetchArchetypeDescriptions(): Promise<Archetype[]> {
    const { data: archetypes, error } = await this.supabase.client
      .from(supabaseConstants.ARCHETYPE_DESCRIPTION_TABLE)
      .select('id,name,description');

    if (archetypes && !error) {
      console.table(archetypes);

      return archetypes as Archetype[];
    }

    this.messageService.showError('Error fetching archetypes.', error?.message);
    throw new Error('Error fetching archetypes. ' + error?.message, {
      cause: error?.details,
    });
  }
}
