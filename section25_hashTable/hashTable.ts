type Pair = [string, any];
class HashTable {
  private keyMap: Array<Array<Pair>>;
  constructor(size: number = 53) {
    this.keyMap = new Array(size);
  }

  private _hash = (key: string) => {
    let total = 0;
    let PRIME = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const code = this._abcOrderCode(key[i]);
      total = (total * PRIME + code) % this.keyMap.length;
    }

    return total;
  };

  public set = (key: string, value: any) => {
    const hashedIndex = this._hash(key);

    if (!this.keyMap[hashedIndex]) {
      this.keyMap[hashedIndex] = [];
    }
    this.keyMap[hashedIndex].push([key, value]);

    return this.keyMap;
  };

  public get = (key: string) => {
    const hashedIndex = this._hash(key);

    if (this.keyMap[hashedIndex]) {
      return this.keyMap[hashedIndex].find((pair) => pair[0] === key);
    }

    return;
  };

  public keys = () => {
    let result: string[] = [];
    const validList = this.keyMap.filter((elem) => Array.isArray(elem));

    for (let i = 0; i < validList.length; i++) {
      const pairList = validList[i];

      pairList.forEach((elem) => {
        if (!result.includes(elem[0])) result.push(elem[0]);
      });
    }

    return result;
  };

  public values = () => {
    let result: any[] = [];
    const validList = this.keyMap.filter((elem) => Array.isArray(elem));

    for (let i = 0; i < validList.length; i++) {
      const pairList = validList[i];

      pairList.forEach((elem) => {
        if (!result.includes(elem[1])) result.push(elem[1]);
      });
    }

    return result;
  };

  private _abcOrderCode = (value: string) => {
    return value.charCodeAt(0) - 96;
  };
}

const table = new HashTable();

console.log(table.set("black", "#000000"));
console.log(table.set("black", "#000000"));
console.log(table.set("gray", "#cccccc"));
console.log(table.set("white", "#ffffff"));
console.log(table.values(), "keys");
