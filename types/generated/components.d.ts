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

export interface SettingsShippingRates extends Struct.ComponentSchema {
  collectionName: 'components_settings_shipping_rates';
  info: {
    displayName: 'shippingRates';
  };
  attributes: {
    label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    maxKm: Schema.Attribute.Decimal &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    price: Schema.Attribute.Decimal & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'product.stock': ProductStock;
      'settings.shipping-rates': SettingsShippingRates;
    }
  }
}
