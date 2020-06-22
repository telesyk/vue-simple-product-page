<template>
  <section class="section">
    <div class="container">
      
      <div class="box">
        <article class="media">
          <div class="media-left">
            <figure class="image is-1by1">
              <img :src="image" alt="Image">
            </figure>
          </div>

          <div class="media-content">
            <div class="content">
              <h1 class="title">{{ title }}</h1>
              <p>{{ description }}</p>
              
              <article class="panel is-primary">
                <div class="level panel-heading">
                  <div class="level-left">
                    <span>{{ activeTab }}</span>
                  </div>

                  <div class="level-right">
                    <span 
                      class="tag"
                      :class="productLabel"
                    >
                      {{ stockLabel }}
                    </span>
                    <span 
                      class="tag is-danger" 
                      v-show="onSale"
                    >On Sale</span>
                  </div>
                </div>

                <p class="panel-tabs">
                  <a 
                    v-for="tab in tabs"
                    :key="tab.id"
                    :class="{'is-active': tab.active}"
                  >
                    {{ tab.title }}
                  </a>
                </p>
                
                <Details
                  class="panel-block"
                  v-for="detail in details"
                  :key="detail"
                >
                  {{ detail }}
                </Details>

                <hr>

                <div class="level">
                  <div class="level-left">
                    <button 
                      class="button"
                      :class="variant.color"
                      v-for="(variant, index) in variants"
                      :key="variant.id"
                      @click="updateProduct(index)"
                    >
                      <i class="fas fa-tint"></i>
                    </button>
                  </div>

                  <div class="level-right">
                    <button
                      class="button"
                      v-for="size in sizes"
                      :key="size"
                    >
                      {{ size }}
                    </button>
                  </div>
                </div>

                <hr>

                <div class="level">
                  <div class="level-left">
                    <button 
                      class="button is-primary"
                      @click="incrementCart"
                      :disabled="!inventory"
                    >Add to cart</button>
                  </div>

                  <div class="level-right">
                    <button 
                      class="button"
                      @click="incrementCart"
                      :disabled="!inventory"
                    >+</button>
                    <button 
                      class="button"
                      @click="decrementCart"
                      :disabled="!inventory"
                    >-</button>
                    <p class="button">Cart ({{ cart }})</p>
                  </div>
                </div>
              </article>
              
            </div>
          </div>
        </article>
      </div>

    </div>
  </section>
</template>

<script>
import Details from './components/Details';

export default {
  name: 'App',

  components: {
    Details,
  },

  data() {
    return {
      cart: 0,
      title: 'Socks',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.',
      selectedVariant: 0,
      onSale: true,
      stockLabel: '',
      details: [
        '80 cotton', '20% polyester', 'Gender-neutral'
      ],
      variants: [
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
          active: true,
        }, {
          id: 113,
          title: 'Color & Size',
          active: false,
        }
      ],
    }
  },

  computed: {
    activeTab() {
      const activeTab = this.tabs.find( tab => !!tab.active);
      return activeTab.title;
    },

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
  },

  methods: {
    incrementCart() {
      if (this.cart < this.inventory) {
        this.cart += 1;
      } else {
        this.cart = this.inventory;
      }
    },

    decrementCart() {
      if (this.cart != 0) {
        this.cart -= 1;
      } else {
        this.cart = 0;
      }
    },

    updateProduct(index) {
      this.selectedVariant = index;
    },
  }
}
</script>
