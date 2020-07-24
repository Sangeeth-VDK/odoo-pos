# -*- coding: utf-8 -*-

from odoo import models, fields


class ProductBrandTemp(models.Model):
    _inherit = 'product.template'

    product_brand = fields.Many2one('product.brand', string='Product Brand')
