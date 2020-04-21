export interface IDoctorsResources {
  resourceType: string;
  id: string;
  meta: Meta;
  type: string;
  link: Link[];
  entry: IDoctor[];
}

interface Meta {
  lastUpdated: string;
}

interface Link {
  relation: string;
  url: string;
}

export interface IDoctor {
  fullUrl: string;
  resource: Resource;
  search: Search;
}

interface Resource {
  resourceType: string;
  id: string;
  meta: Meta2;
  active?: boolean;
  name: Name[];
  telecom?: Telecom[];
  address?: Address[];
  gender?: string;
  birthDate?: string;
  qualification?: Qualification[];
  identifier?: Identifier[];
}

interface Meta2 {
  extension: Extension[];
  versionId: string;
  lastUpdated: string;
  profile?: string[];
}

interface Extension {
  url: string;
  valueUri: string;
}

interface Name {
  use?: string;
  text?: string;
  family?: string;
  given?: string;
  prefix?: string[];
  _family?: Family;
}

interface Family {
  extension: Extension2[];
}

interface Extension2 {
  url: string;
  valueString: string;
}

interface Telecom {
  system: string;
  value?: string;
  use?: string;
  rank?: number;
}

interface Address {
  text?: string;
  use?: string;
  type?: string;
  line?: string[];
  city?: string;
  state?: string;
  postalCode?: string;
  country?: string;
}

interface Qualification {
  code: Code;
}

interface Code {
  coding: Coding[];
}

interface Coding {
  system: string;
  code: string;
  display: string;
}

interface Identifier {
  system: string;
  value: string;
}

interface Search {
  mode: string;
}
