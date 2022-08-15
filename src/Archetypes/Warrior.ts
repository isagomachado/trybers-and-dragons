import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Warrior extends Archetype {
  private _energyType: EnergyType = 'stamina';
  static _createdArchetypeInstances = 0;

  static createdArchetypeInstances() {
    Warrior._createdArchetypeInstances += 1;
    return Warrior._createdArchetypeInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Warrior;