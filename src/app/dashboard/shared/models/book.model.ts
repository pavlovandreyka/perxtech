export interface Book {
  id: string;
  type: string;
  link: { self: string };
  attributes: IAttributes;
  relationships: IRelationships;
}

export interface IAttributes {
  urn: string;
  created_at: string;
  updated_at: string;
  content: string;
  properties: any;
  display_properties: IDisplayProperties;
}

export interface IDisplayProperties {
  type: string;
  image: string;
}

export interface IRelationships {
  authors: IAuthors;
  publishers: IPublishers;
}

export interface IAuthors {
  links: Links;
}

export interface IPublishers {
  links: Links;
}

export interface Links {
  self: string;
  related: string;
}
