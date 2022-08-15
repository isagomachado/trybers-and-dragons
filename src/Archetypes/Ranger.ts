import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  private _energyType: EnergyType = 'stamina';
  static _createdArchetypeInstances = 0;

  static createdArchetypeInstances() {
    Ranger._createdArchetypeInstances += 1;
    return Ranger._createdArchetypeInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Ranger;