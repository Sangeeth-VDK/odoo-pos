# -*- coding: utf-8 -*-
{
	'name': 'PoS Product Brand',
	'summary': 'product brand in pos',
	'Author':'Sangeeth'
	'category': 'Tools',
    'description': """
                    product brand in pos
                    """,
	'depends': ['base', 'stock', 'point_of_sale'],
	'data': [
		'security/ir.model.access.csv',
		'views/js_templates.xml',
        'views/product_template.xml',
		'views/product_brand.xml'
	],
	'qweb': [
		'static/src/xml/order_line.xml',
		'static/src/xml/pos_ticket_view.xml'],
	'images': [],
	'license': 'AGPL-3',
	'application': False,
	'auto_install': False,
}
