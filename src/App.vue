<template>
  <div class="page">
    <Navbar
      :logoSrc="navbar.logo"
      :logoUrl="navbar.url"
      :cartCount="onCart"
    ></Navbar>

    <section class="section">
      <div class="container">
      
        <article class="columns">
          <div class="column is-one-third product-media">
            <ProductMedia
              :imageSrc="image"
            ></ProductMedia>
          </div>

          <div class="column product-content">
            <ProductContent
              :productCart="cart"
              :productTitle="title"
              :productSizes="sizes"
              :productDetails="details"
              :productVariants="variants"
              :productInventory="inventory"
              :productLabelClass="productLabel"
              :productDescription="description"
              :productSelectedVariant="selectedVariant"
              :tabs="tabs"
              :stockLabel="stockLabel"
              :onSaleBoolean="onSale"
              @handleProductIncrease="productIncrease"
              @handleProductDecrease="productDecrease"
              @handleAddProduct="addProductToCart"
            ></ProductContent>
          </div>
        </article>

      </div>
    </section>
  </div>
</template>

<script>
import Navbar from './components/Navbar';
import ProductMedia from './components/ProductMedia';
import ProductContent from './components/ProductContent';

export default {
  name: 'App',

  components: {
    Navbar,
    ProductMedia,
    ProductContent,
  },

  data() {
    return {
      navbar: {
        logo: 'https://bulma.io/images/bulma-logo.png',
        url: 'https://bulma.io',
      },

      cart: [],
      onCart: 0,
      title: 'Socks',
      description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.',
      selectedVariant: 0,
      onSale: true,
      stockLabel: '',
      details: [
        '80 cotton', '20% polyester', 'Gender-neutral'
      ],
      variants: [
        {
          id: 2233,
          color: 'is-success',
          quantity: 17,
          image: 'https://media.mysockfactory.ch/1313-large_default/plain-green-socks.jpg',
          sizes: ['sm', 'md', 'lg', 'xl'],
        },
        {
          id: 2234,
          color: 'is-default',
          quantity: 5,
          image: 'https://images.vans.com/is/image/Vans/XRZHTG-HERO?$583x583$',
          sizes: ['md', 'lg', 'xl'],
        },
        {
          id: 2235,
          color: 'is-info',
          quantity: 0,
          image: 'https://cdn10.bigcommerce.com/s-sr2gbw/products/97/images/10885/Foot-Forms-2020---Crew-Socks--navy__99897.1584467016.1280.1280.jpg?c=2',
          sizes: ['sm', 'xl'],
        }
      ],
      tabs: [
        {
          id: 112,
          title: 'Details',
        }, {
          id: 113,
          title: 'Color & Size',
        }
      ],
    }
  },

  computed: {
    image() {
      return this.variants[this.selectedVariant].image;
    },

    sizes() {
      return this.variants[this.selectedVariant].sizes;
    },

    inventory() {
      return this.variants[this.selectedVariant].quantity;
    },

    productLabel() {
      const inventory = this.variants[this.selectedVariant].quantity;

      if (inventory > 10) {
        this.stockLabel = 'In Stock';
        return 'is-primary is-light';
      } else if (inventory<=10 && inventory > 0) {
        this.stockLabel = 'Almost sold';
        return 'is-warning';
      } else {
        this.stockLabel = 'Out of Stock';
        return 'is-link';
      }
    },

    // productCart() {
    //   const count = this.variants[this.selectedVariant].quantity;

    //   if (count !== 0) {

    //   };

    // },
  },

  methods: {
    productIncrease(id) {
      id = this.variants[this.selectedVariant].id;

      if (this.cart.length < this.inventory) {
        this.cart.push(id);
      }
    },

    productDecrease(id) {
      id = this.variants[this.selectedVariant].id;

      if (this.cart.length != 0) {
        this.cart.pop(id);
      }
    },

    addProductToCart() {
      this.onCart += this.cart.length;
      // alert('This Socks were added to Cart');
    },

    // updateProduct(event) {

    //   const elements = document.querySelectorAll('button[data-id]:not(.is-active)');
    //   // console.log(element.getAttribute('data-id'));
    //   // console.log(event.target);
    //   elements.forEach(el => {
    //       el.addEventListener('click', (e) => {
    //         console.log(e.currentTarget);
    //       })
    //   });

    //   // console.log(this.$el.querySelector('button[data-id]'));

    //   // e.preventDefault();

    //   // this.selectedVariant = parseInt(element.getAttribute('data-id'));
    //   // console.log(this.selectedVariant);
    // },
  }
}
</script>
