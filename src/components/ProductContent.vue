<template>
  <div class="content">
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
            v-show="onSaleBoolean"
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
      
      <TabDetails
        :productDetails="productDetails"
      ></TabDetails>

      <hr>

      <TabColorSize
        :productSizes="productSizes"
        :productVariants="productVariants"
        :productSelectedVariant="productSelectedVariant"
      ></TabColorSize>

      <hr>

      <div class="level">
        <div class="level-left">
          <!-- <Button 
            :class="'is-primary'"
            :disabled="!productInventory"
            @onClick="addProduct"
          >Add to cart</Button> -->
        </div>

        <div class="level-right">
          <div class="buttons are-small px-2 py-2">
            <Button
              @onClick="handleRemoveProduct"
              :disabled="!productInventory"
              v-text="'-'"
            ></Button>

            <Button
              :class="'is-white'"
            >
              Cart ({{ productCart.length }})
            </Button>
            
            <Button
              @onClick="handleAddProduct"
              :disabled="!productInventory"
              v-text="'+'"
            ></Button>
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
    activeTabName: {
      type: String,
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
    updateProduct: {
      type: Function,
    },
    productSelectedVariant: Number,
    productVariants: Array,
    productSizes: Array,
    productDetails: Array,
  },

  methods: {
    handleAddProduct() {
      this.$emit('handleAddProduct');
    },

    handleRemoveProduct() {
      this.$emit('handleRemoveProduct');
    },

    handleProductUpdate() {
      this.$emit('handleProductUpdate');
    }
  },
}
</script>
