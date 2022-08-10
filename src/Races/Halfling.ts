import Race from './Races';

class Halfling extends Race {
  private _maxLifePoints = 60;
  static _createdRacesInstances = 0;

  static createdRacesInstances() {
    Halfling._createdRacesInstances += 1;
    return Halfling._createdRacesInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Halfling;