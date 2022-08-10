import Race from './Races';

class Orc extends Race {
  private _maxLifePoints = 74;
  static _createdRacesInstances = 0;

  static createdRacesInstances() {
    Orc._createdRacesInstances += 1;
    return Orc._createdRacesInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Orc;