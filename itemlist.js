import {Item} from './Item'
export function ItemList({product}) {
	/*
	products= [ {
		id: 'p0001'
		name: 'Avena 3 Ositos'
		description: 'Paquete de 12'
		stock: '1000'
	
	}, {
		id: 'p0002'
		name: 'Alfajor'
		description: 'Por unidad'
		stock: 23
	  }]
	  */


	return (
		<div>
		{products.map(product =>{
			return <Item key={ product.id} product={product} />
			 })}
			}
		}
		</div>

		)
}