import type { Schema, Struct } from '@strapi/strapi';

export interface ProductStock extends Struct.ComponentSchema {
  collectionName: 'components_product_stocks';
  info: {
    displayName: 'stock';
    icon: 'archive';
  };
  attributes: {
    colors: Schema.Attribute.Relation<'oneToMany', 'api::color.color'>;
    images: Schema.Attribute.Media<'images', true>;
    quantity: Schema.Attribute.Integer & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'product.stock': ProductStock;
    }
  }
}
