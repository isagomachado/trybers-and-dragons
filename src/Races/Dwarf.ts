import Race from './Races';

class Dwarf extends Race {
  private _maxLifePoints = 80;
  static _createdRacesInstances = 0;

  static createdRacesInstances() {
    Dwarf._createdRacesInstances += 1;
    return Dwarf._createdRacesInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Dwarf;