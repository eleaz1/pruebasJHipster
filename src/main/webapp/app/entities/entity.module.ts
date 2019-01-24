import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { PruebasJHipsterProductModule } from './product/product.module';
import { PruebasJHipsterProductCategoryModule } from './product-category/product-category.module';
import { PruebasJHipsterProductOrderModule } from './product-order/product-order.module';
import { PruebasJHipsterOrderItemModule } from './order-item/order-item.module';
import { PruebasJHipsterCustomerModule } from './customer/customer.module';
import { PruebasJHipsterInvoiceModule } from './invoice/invoice.module';
import { PruebasJHipsterShipmentModule } from './shipment/shipment.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        PruebasJHipsterProductModule,
        PruebasJHipsterProductCategoryModule,
        PruebasJHipsterProductOrderModule,
        PruebasJHipsterOrderItemModule,
        PruebasJHipsterCustomerModule,
        PruebasJHipsterInvoiceModule,
        PruebasJHipsterShipmentModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PruebasJHipsterEntityModule {}
