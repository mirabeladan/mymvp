import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type TripsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Trips {
  readonly id: string;
  readonly destination?: string | null;
  readonly date?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Trips, TripsMetaData>);
  static copyOf(source: Trips, mutator: (draft: MutableModel<Trips, TripsMetaData>) => MutableModel<Trips, TripsMetaData> | void): Trips;
}