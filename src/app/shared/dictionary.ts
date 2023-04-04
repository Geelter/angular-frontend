interface IKeyCollection<T> {
  add(key: string, value: T): void;
  containsKey(key: string): boolean;
  size(): number;
  getItem(key: string): T;
  removeItem(key: string): T;
  getKeys(): string[];
  values(): T[];
}

export default class Dictionary<T> implements IKeyCollection<T> {
  private items: { [index: string]: T } = {};
  private count = 0;

  add(key: string, value: T) {
    if (!Object.hasOwn(this.items, key)) {
      this.count++;
    }

    this.items[key] = value;
  }

  containsKey(key: string): boolean {
    // return this.items.hasOwnProperty(key);
    return Object.hasOwn(this.items, key);
  }

  size(): number {
    return this.count;
  }

  getItem(key: string): T {
    return this.items[key];
  }

  removeItem(key: string): T {
    const value = this.items[key];

    delete this.items[key];
    this.count--;

    return value;
  }

  getKeys(): string[] {
    const keySet: string[] = [];

    for (const property in this.items) {
      if (Object.hasOwn(this.items, property)) {
        keySet.push(property);
      }
    }

    return keySet;
  }

  values(): T[] {
    const values: T[] = [];

    for (const property in this.items) {
      if (Object.hasOwn(this.items, property)) {
        values.push(this.items[property]);
      }
    }

    return values;
  }
}
