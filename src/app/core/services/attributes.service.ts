import { Injectable } from '@angular/core';
import { SupabaseService } from '@core/services/supabase/supabase.service';
import { AttributesConfig } from '@creator/models/attributes-config.model';
import * as supabaseConstants from '@assets/supabase-constants';
import { MsgService } from '@core/services/msg.service';
import { Attribute } from '@creator/models/attribute.model';

@Injectable({
  providedIn: 'root',
})
export class AttributesService {
  constructor(
    private supabase: SupabaseService,
    private messageService: MsgService
  ) {}

  async fetchAttributeAllocationConfig(): Promise<AttributesConfig> {
    const { data: config, error } = await this.supabase.client
      .from(supabaseConstants.ATTRIBUTE_ALLOCATION_CONFIG_TABLE)
      .select(
        'attribute_points,max_attribute,min_attribute,attribute_initial_value'
      )
      .limit(1)
      .single();

    if (config && !error) {
      return config as AttributesConfig;
    }

    this.messageService.showError(
      'Error fetching attribute allocation config.',
      error?.message
    );
    throw new Error(
      'Error fetching attribute allocation config. ' + error?.message,
      { cause: error?.details }
    );
  }

  async fetchAttributeDescriptions(): Promise<Attribute[]> {
    const { data: attributes, error } = await this.supabase.client
      .from(supabaseConstants.ATTRIBUTE_DESCRIPTION_TABLE)
      .select('id,name,description');

    if (attributes && !error) {
      return attributes as Attribute[];
    }

    this.messageService.showError(
      'Error fetching attribute descriptions',
      error?.message
    );
    throw new Error(
      'Error fetching attribute descriptions. ' + error?.message,
      { cause: error?.details }
    );
  }

  async fetchAttributeValuesForProfileID(
    profileID: string
  ): Promise<Record<number, { id: number; value: number }>> {
    const { data: attributes, error } = await this.supabase.client
      .from(supabaseConstants.PLAYER_ATTRIBUTE_TABLE)
      .select('id,value,attribute_id')
      .eq('profile_id', profileID);

    if (attributes && !error) {
      const attributeRecord: Record<number, { id: number; value: number }> = {};

      attributes.map(attribute => {
        attributeRecord[attribute.attribute_id] = {
          id: attribute.id,
          value: attribute.value,
        };
      });

      console.table(attributeRecord);

      return attributeRecord;
    }

    this.messageService.showError(
      'Error fetching attributes for specified profile-display.',
      error?.message
    );
    throw new Error(
      'Error fetching attributes for specified profile-display. ' +
        error?.message,
      { cause: error?.details }
    );
  }
}
