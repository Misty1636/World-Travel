<template>
  <div>
    <div class="modal fade" id="productModal" tabindex="-1" role="dialog"
      aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">{{ theProduct.title }}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <img :src="theProduct.imageUrl" class="img-fluid" alt="">
            <div class="mt-3">
              <p class="modal-description text-secondary">{{theProduct.description}}</p>
            </div>
            <div class="d-flex justify-content-between align-items-baseline modal-price">
              <del class="h6 text-secondary">原價 {{ theProduct.origin_price | currency}}</del>
              <div class="h4">現在報名 <strong>{{ theProduct.price | currency}}</strong></div>
            </div>
            <select name="count" class="form-control mt-3" v-model="counts">
              <option :value="num" v-for="num in 10" :key="num">
                總共 {{num}} {{theProduct.unit}}
              </option>
            </select>
          </div>
          <div class="modal-footer">
            <div class="text-nowrap mr-4 modal-total">
              小計 <strong>{{ counts * theProduct.price | currency}}</strong>
            </div>
            <button type="button" class="btn modal-btn px-4"
              @click="addtoCart(theProduct.id, counts)" :class="{disabled:theProduct.id === cartdisable}">
               立即報名
              <font-awesome-icon icon="spinner" spin v-if="theProduct.id === loadingtoCart"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    theProduct: {
      type: Object,
      default: {},
    },
    loadingtoCart: ''
  },
  data(){
    return {
      counts:1,
      cartdisable:''
    }
  },

  methods: {
    addtoCart(id,qty){
      this.cartdisable = id;
      this.$emit('addtheCart',id,qty);
      setTimeout(()=>{
        this.cartdisable = '';
        this.counts = 1;
      },1000)
    }
  }
};
</script>