import Race from './Races';

class Elf extends Race {
  private _maxLifePoints = 99;
  static _createdRacesInstances = 0;

  static createdRacesInstances() {
    Elf._createdRacesInstances += 1;
    return Elf._createdRacesInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Elf;