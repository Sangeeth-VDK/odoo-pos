odoo.define('pos_product_brand', function (require) {
"use strict";

var PosBaseWidget = require('point_of_sale.BaseWidget');
var gui = require('point_of_sale.gui');
var models = require('point_of_sale.models');
var core = require('web.core');
var screens = require('point_of_sale.screens');
var PopupWidget = require('point_of_sale.popups');
var Widget = require("web.Widget");
var QWeb = core.qweb;
var rpc = require('web.rpc');
var _t  = require('web.core')._t;
var exports = {};


var models = require('point_of_sale.models');
models.load_fields('product.product', ['product_brand']);


models.Orderline = models.Orderline.extend({

 export_for_printing: function(){
           

        return {
            quantity:           this.get_quantity(),
            unit_name:          this.get_unit().name,
            price:              this.get_unit_display_price(),
            discount:           this.get_discount(),
            product_name:       this.get_product().display_name,
	    product_brand:      this.get_product().product_brand[1],
            product_name_wrapped: this.generate_wrapped_product_name(),
            price_lst:          this.get_lst_price(),
            display_discount_policy:    this.display_discount_policy(),
            price_display_one:  this.get_display_price_one(),
            price_display :     this.get_display_price(),
            price_with_tax :    this.get_price_with_tax(),
            price_without_tax:  this.get_price_without_tax(),
            price_with_tax_before_discount:  this.get_price_with_tax_before_discount(),
            tax:                this.get_tax(),
            product_description:      this.get_product().description,
            product_description_sale: this.get_product().description_sale,
        };

    },

});

});


