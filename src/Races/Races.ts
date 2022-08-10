import NotImplementedError from '../errors/NotImplementedError';

abstract class Race {
  constructor(
    private _name: string,
    private _dexterity: number,
  ) {
    this._name = _name;
    this._dexterity = _dexterity;
  }

  get name(): string {
    return this._name;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  static createdRacesInstances() {
    throw new NotImplementedError();
  }

  abstract get maxLifePoints(): number;
}

export default Race;