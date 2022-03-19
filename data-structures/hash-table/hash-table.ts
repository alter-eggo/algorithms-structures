interface IHashTable {
  setEl(key: string, value: string): void;
  getEl(key: string): string;
}

export class HashTable implements IHashTable {
  private readonly _store = [];
  private _size: number;

  constructor(size = 13) {
    this._size = size;
  }

  public setEl(key: string, value: string): void {
    const index = this.hash(key);
    if (!this._store[index]) {
      this._store[index] = [[key, value]];
      return;
    }

    const list = this._store[index];
    const matchingIndex = this.findmatchingIndex(list, key);

    if (matchingIndex) {
      list[matchingIndex] = [key, value];
      return;
    }

    list.push([key, value]);
  }

  public getEl(key: string): string {
    const index = this.hash(key);

    const foundVal = this._store[index];
    if (foundVal) {
      const matchingIndex = this.findmatchingIndex(foundVal, key);

      if (matchingIndex !== undefined) {
        return foundVal[matchingIndex][1];
      }
    }
  }

  private hash(val: string) {
    let index = 0;
    for (let i = 0; i < val.length; i++) {
      index += val.charCodeAt(i) * i + 1;
    }

    return index % this._size;
  }

  private findmatchingIndex(list: [string, string][], key: string): number {
    for (let i = 0; i < list.length; i++) {
      if (list[i][0] === key) {
        return i;
      }
    }
  }
}

// const ht = new HashTable();

// ht.setEl("mouse", "mice");
// ht.setEl("alter-eggo", "winderton");
// ht.setEl("rendertron", "rendertron");
// console.log(ht.getEl("rendertron"));
