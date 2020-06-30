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
                
                <Detail
                  class="panel-block"
                  v-for="detail in Detail"
                  :key="detail"
                >
                  {{ detail }}
                </Detail>

                <hr>

                <div class="level">
                  <div class="level-left">
                    <Button
                      v-for="(variant, index) in variants"
                      :key="variant.id"
                      :class="variant.color + ' is-small'"
                      @onClick="updateProduct(index)"
                    >
                      <i class="fas fa-tint"></i>
                    </Button>
                  </div>

                  <div class="level-right">
                    <Button
                      v-for="size in sizes"
                      :key="size"
                      :class="'is-small'"
                    >
                      {{ size }}
                    </Button>
                  </div>
                </div>

                <hr>

                <div class="level">
                  <div class="level-left">
                    <!-- <Button 
                      :class="'is-primary'"
                      :disabled="!inventory"
                      @onClick="addProduct"
                    >Add to cart</Button> -->
                  </div>

                  <div class="level-right">
                    <div class="buttons are-small">
                      <Button
                        @onClick="removeProduct"
                        :disabled="!inventory"
                        v-text="'-'"
                      ></Button>
                      <Button>Cart ({{ cart.length }})</Button>
                      <Button
                        @onClick="addProduct"
                        :disabled="!inventory"
                        v-text="'+'"
                      ></Button>
                    </div>
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
import Detail from './components/Detail';
import Button from './components/Button';

export default {
  name: 'App',

  components: {
    Detail,
    Button,
  },

  data() {
    return {
      cart: [],
      title: 'Socks',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.',
      selectedVariant: 0,
      onSale: true,
      stockLabel: '',
      Detail: [
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
          title: 'Detail',
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
    addProduct(id) {
      id = this.variants[this.selectedVariant].id;

      if (this.cart.length < this.inventory) {
        this.cart.push(id);
      }
    },

    removeProduct(id) {
      id = this.variants[this.selectedVariant].id;

      if (this.cart.length != 0) {
        this.cart.pop(id);
      }
    },

    // removeProduct() {
    //   if (this.cart != 0) {
    //     this.cart -= 1;
    //   } else {
    //     this.cart = 0;
    //   }
    // },

    updateProduct(index) {
      this.selectedVariant = index;
    },
  }
}
</script>
