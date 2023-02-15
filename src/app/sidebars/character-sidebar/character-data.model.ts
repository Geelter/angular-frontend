export interface CharacterDataModel {
  readonly id: number;
  readonly name: string;
  readonly avatar: string;
  readonly level: number;
  readonly currentEnergy: number;
  readonly maxEnergy: number;
  readonly energyRegeneration: number;
  readonly money: number;
  readonly currentHealthPoints: number;
  readonly maxHealthPoints: number;
  readonly currentExperience: number;
  readonly experienceToNextLevel: number;
}

export const dummyCharacterData: CharacterDataModel = {
  id: 1234,
  name: 'Sir Lovidicus',
  avatar:
    'https://i.pinimg.com/222x/b6/22/45/b622457ad00f5af33813bcdee92286bd.jpg',
  level: 23,
  currentEnergy: 970,
  maxEnergy: 1570,
  energyRegeneration: 50,
  money: 9999,
  currentHealthPoints: 512,
  maxHealthPoints: 1000,
  currentExperience: 720,
  experienceToNextLevel: 3000,
};
