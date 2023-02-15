export interface CharacterDataModel {
  id: number;
  name: string;
  avatar: string;
  level: number;
  currentEnergy: number;
  maxEnergy: number;
  energyRegeneration: number;
  money: number;
  currentHealthPoints: number;
  maxHealthPoints: number;
  currentExperience: number;
  experienceToNextLevel: number;
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
