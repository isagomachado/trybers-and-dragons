import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private _energyType: EnergyType = 'mana';
  static _createdArchetypeInstances = 0;

  static createdArchetypeInstances() {
    Mage._createdArchetypeInstances += 1;
    return Mage._createdArchetypeInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Mage;