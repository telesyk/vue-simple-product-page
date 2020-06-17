new Vue({
  el: '#app',

  data: {
    cart: 0,
    product: {
      title: 'Socks',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.',
      assets: 'https://images.vans.com/is/image/Vans/XRZHTG-HERO?$583x583$',
      inventory: 10,
      onSale: true,
      details: [
        '80 cotton', '20% polyester', 'Gender-neutral'
      ],
      tabs: [
        {
          id: 112,
          title: 'Details',
          active: true,
        }, {
          id: 113,
          title: 'Color & Size',
          active: false,
        }
      ],
      variants: [
        {
          id: 2234,
          color: 'grey',
          image: 'https://images.vans.com/is/image/Vans/XRZHTG-HERO?$583x583$',
        },
        {
          id: 2235,
          color: 'blue',
          image: 'https://cdn10.bigcommerce.com/s-sr2gbw/products/97/images/10885/Foot-Forms-2020---Crew-Socks--navy__99897.1584467016.1280.1280.jpg?c=2',
        }
      ],
      sizes: [
        {
          id: 123,
          value: 'lg',
        },
        {
          id: 124,
          value: 'xl',
        }
      ],
    }
  },

  computed: {
    activeTab() {
      const activeTab = this.product.tabs.find( tab => !!tab.active);
      return activeTab.title;
    }
  },

  methods: {
    incrementCart() {
      if (this.cart < this.product.inventory) {
        this.cart += 1;
      } else {
        this.cart = this.product.inventory;
      }
    },
    
    decrementCart() {
      if (this.cart != 0) {
        this.cart -= 1;
      } else {
        this.cart = 0;
      }
    },

    updateProductImage(variantImage) {
      this.product.assets = variantImage;
    }
  }
});