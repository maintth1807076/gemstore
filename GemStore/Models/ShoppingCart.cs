using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GemStore.Models
{
    public class ShoppingCart
    {
        private Dictionary<string, CartItem> _cartItems = new Dictionary<string, CartItem>();
        private double _totalPrice = 0;
        public double GetTotalPrice()
        {
            this._totalPrice = 0;
            foreach (var item in _cartItems.Values)
            {
                this._totalPrice += item.UnitPrice * item.Quantity;
            }
            return this._totalPrice;
        }

        public Dictionary<string, CartItem> GetCartItems()
        {
            return _cartItems;
        }

        public void SetCartItems(Dictionary<string, CartItem> cartItems)
        {
            this._cartItems = cartItems;
        }
        public void AddCart(ItemMst product, int quantity)
        {
            if (_cartItems.ContainsKey(product.StyleCode))
            {
                var item = _cartItems[product.StyleCode];
                item.Quantity += quantity;
                _cartItems[product.StyleCode] = item;
                return;
            }
            var cartItem = new CartItem
            {
                Id = product.StyleCode,
                Name = product.Name,
                UnitPrice = product.SalePrice,
                Quantity = quantity,
                Thumbnail = product.Thumbnails.Split(',')[0]
            };
            // đưa cart item tương ứng với sản phẩm (ở trên) vào danh sách.
            _cartItems.Add(cartItem.Id, cartItem);
        }
    }
}