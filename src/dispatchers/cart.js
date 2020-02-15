import {
  pending,
  setCartSuccess,
  setItemProductsSuccess,
} from '../actions'

export function addToCart(id) {
  return async (dispatch, getState) => {
    await dispatch(pending())
    let _items = await getState().productsReducer.items
    let _cart = (await getState().productsReducer.cart.list) ?? []
    let _total = (await getState().productsReducer.cart.total) ?? 0

    _items.results.forEach(item => {
      if (item.id === id) {
        if (item.quantityAvailable > 0) {
          item.quantityAvailable--

          if (_cart.find(item => item.id === id)) {
            _cart.forEach(data => {
              if (data.id === id) {
                data.quantity++
                _total += data.price
              }
            }, _cart)
          } else {
            _cart.push({
              id: item.id,
              name: item.name,
              imageUrl: item.imageUrl,
              price: item.salePrice,
              quantity: 1
            })
            _total += item.salePrice
          }
        }
      }
    }, _items.results)

    await dispatch(setItemProductsSuccess(_items))
    await dispatch(setCartSuccess(_cart, _total))

    console.log(_items)
    console.log(_cart)
  }
}

export function removeFromCart(id) {
  return async (dispatch, getState) => {
    await dispatch(pending())
    let _items = await getState().productsReducer.items
    let _cart = (await getState().productsReducer.cart.list) ?? []
    let _total = (await getState().productsReducer.cart.total) ?? 0

    if (_cart.length > 0) {
      _cart.forEach((data, i) => {
        if (data.id === id) {
          if (data.quantity === 1) {
            _cart.splice(i, 1)
            _total -= data.price
          } else {
            _items.results.forEach(item => {
              if (item.id === id) {
                item.quantityAvailable++
                data.quantity--

                _total -= data.price
              }
            }, _items.results)
          }
        }
      }, _cart)
    }

    await dispatch(setItemProductsSuccess(_items))
    await dispatch(setCartSuccess(_cart, _total))

    console.log(_items)
    console.log(_cart)
  }
}

export function deleteFromCart(id) {
  return async (dispatch, getState) => {
    await dispatch(pending())
    let _items = await getState().productsReducer.items
    let _cart = (await getState().productsReducer.cart.list) ?? []
    let _total = (await getState().productsReducer.cart.total) ?? 0

    _items.results.forEach(item => {
      if (item.id === id) {
        let _temp = _cart.find(_item => _item.id === id)
        item.quantityAvailable += _temp.quantity
        _total = _total - _temp.quantity * _temp.price

        _cart.splice(_cart.indexOf(_temp), 1)
      }
    }, _items.results)

    await dispatch(setItemProductsSuccess(_items))
    await dispatch(setCartSuccess(_cart, _total))

    console.log(_items)
    console.log(_cart)
  }
}