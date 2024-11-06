export type RowKey = string;

export type RowElement = HTMLElement;

export const DatasetKey = Object.freeze({
  group: { attrKey: 'jd-colorw-groupkey', mapKey: 'jdColorwGroupkey' },
});

export interface GroupState {
  expectHeight: number;
}

export interface GroupOptions {
  lazyAggregate?: number;
}
