<template>
  <div class="content box">
    <Title>
      {{ productTitle }}
    </Title>
    <Description>
      {{ productDescription }}
    </Description>
    
    <article class="panel is-primary">
      <div class="level panel-heading">
        <div class="level-left">
          <span>
            {{ activeTabName }}
          </span>
        </div>

        <div class="level-right tags">
          <span 
            class="tag"
            :class="productLabelClass"
          >
            {{ stockLabel }}
          </span>
          <span 
            class="tag is-danger" 
            v-show="onSaleBoolean && !!productInventory"
          >% Sale</span>
        </div>
      </div>

      <p class="panel-tabs">
        <a 
          v-for="(tab, index) in tabs"
          :key="tab.id"
          :class="[index === activeTab ? 'is-active' : '']"
          @click="handleActiveTab(index)"
        >
          {{ tab.title }}
        </a>
      </p>

      <div v-if="activeTab == 0">
        <TabDetails
          :productDetails="productDetails"
        ></TabDetails>
      </div>
      <div v-else-if="activeTab == 1">
        <TabColorSize
          :productSizes="productSizes"
          :productVariants="productVariants"
          :productSelectedVariant="productSelectedVariant"
        ></TabColorSize>
      </div>

      <hr>

      <div class="level">
        <div class="level-left">
          <div 
            class="buttons are-small px-2 py-2"
            v-show="!!productInventory"
          >
            <Button
              @onClick="handleProductDecrease"
              v-text="'-'"
            ></Button>

            <span class="button is-white">
              {{ productCart.length }}
            </span>
            
            <Button
              @onClick="handleProductIncrease"
              v-text="'+'"
            ></Button>
          </div>
        </div>

        <div class="level-right">
          <div class="buttons px-2 py-2">
            <Button 
              :class="'is-primary'"
              :disabled="!productInventory"
              @onClick="handleAddProduct"
            >Add to cart</Button>
          </div>
        </div>
      </div>
    </article>
    
  </div>
</template>

<script>
import Title from './Title';
import Description from './Description';
import TabDetails from './TabDetails';
import TabColorSize from './TabColorSize';
import Button from './Button';

export default {
  name: 'ProductContent',

  components: {
    Title,
    Description,
    TabDetails,
    TabColorSize,
    Button,
  },

  props: {
    productTitle: {
      type: String,
      required: true,
    },
    productDescription: {
      type: String,
      required: true,
    },
    productLabelClass: {
      type: String,
      required: true,
    },
    productInventory: {
      type: Number,
      required: true,
    },
    productCart: {
      type: Array,
      required: true,
    },
    tabs: {
      type: Array,
      required: true,
    },
    stockLabel: {
      type: String,
      required: true,
    },
    onSaleBoolean: {
      type: Boolean,
      required: true,
    },
    updateProduct: Function,
    productSelectedVariant: Number,
    productVariants: Array,
    productSizes: Array,
    productDetails: Array,
  },

  data() {
    return {
      activeTab: 0,
    }
  },

  computed: {
    activeTabName() {
      const tab = this.tabs[this.activeTab];
      return tab.title;
    },
  },

  methods: {
    handleActiveTab(index) {
      this.activeTab = index;
    },

    handleProductIncrease() {
      this.$emit('handleProductIncrease');
    },

    handleProductDecrease() {
      this.$emit('handleProductDecrease');
    },

    handleProductUpdate() {
      this.$emit('handleProductUpdate');
    },

    handleAddProduct() {
      alert('Product added to Cart');
    }
  },
}
</script>
