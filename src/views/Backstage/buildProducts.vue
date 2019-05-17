<template>
  <div class="buildProducts">
     <loading :active.sync="isLoading">
        <template slot="default">
          <img src="../../assets/003.gif"   >
        </template>
     </loading>
    <div class="text-right mt-4">
      <button class="btn btn-primary" @click="openModal(true)">建立新的行程</button>
    </div>
    <table class="table mt-5 mb-6 table-responsive-lg">
      <thead>
        <th width="120">區域</th>
        <th class="text-nowrap">行程名稱</th>
        <th width="120">原價</th>
        <th width="120">售價</th>
        <th class="text-nowrap" width="100">是否上架</th>
        <th width="150">編輯</th>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td class="text-nowrap align-middle category">
            <span class="badge" :class="item.category | giveclass">{{item.category}}</span>
          </td>
          <td class="text-nowrap align-middle">{{item.title}}</td>
          <td class="text-right text-nowrap align-middle">{{item.origin_price | currency}}</td>
          <td class="text-right text-nowrap align-middle">{{item.price | currency}}</td>
          <td class="text-center text-nowrap align-middle">
            <span v-if="item.is_enabled==1" class="text-success">已上架</span>
            <span v-else class="text-danger">未上架</span>
          </td>
          <td class="text-nowrap">
            <div class="btn-group" role="group" aria-label="Basic example">
              <button class="btn btn-outline-primary btn-sm"  @click="openModal(false,item)">編輯</button>
              <button class="btn btn-outline-primary btn-sm"  @click="delopenModal(item)">刪除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <Pagination :pages="pagination" @thePage="getProducts" class="d-flex justify-content-center"/>

    <ProductsModal :theProducts="temProducts" :uploadStatus="status" :isNews="isNew" @sendupdate="updateProducts" @uploadImg="uploadFile"  ref="files"/>

    <DeleteModal :deleteName="temProducts" @deleteCurrent="deleteProducts"/>

  </div>
</template>

<script>
/* global $ */
import Pagination from '../../components/pagination';
import DeleteModal from './deleteModal';
import ProductsModal from './productsModal';

export default {
  data() {
    return {
      products: [],
      pagination: {},
      temProducts: {},
      isNew: false,
      isLoading: false,
      status: {
        uploadloading: false,
      },
    };
  },
  components: {
    Pagination,
    DeleteModal,
    ProductsModal,
  },
  methods: {
    getProducts(page = 1) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUS}/admin/products?page=${page}`;
      const vm = this;
      vm.isLoading = true;
      this.$http.get(api).then((response) => {
        vm.isLoading = false;
        vm.products = response.data.products;
        vm.pagination = response.data.pagination;
      });
    },
    openModal(isNew, item) {
      if (isNew) {
        this.temProducts = {};
        this.isNew = true;
      } else {
        this.temProducts = Object.assign({}, item);
        this.isNew = false;
      }
      $('#productsModal').modal('show');
    },
    updateProducts() {
      let api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUS}/admin/product`;
      let httpmethods = 'post';
      const vm = this;
      if (!vm.isNew) {
        api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUS}/admin/product/${vm.temProducts.id}`;
        httpmethods = 'put';
      }
      this.$http[httpmethods](api, { data: vm.temProducts }).then((response) => {
        if (response.data.success) {
          $('#productsModal').modal('hide');
          vm.getProducts();
        } else {
          vm.getProducts();
        }
      });
    },
    delopenModal(item) {
      this.temProducts = Object.assign({}, item);
      $('#delProductModal').modal('show');
    },
    deleteProducts() {
      const vm = this;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUS}/admin/product/${vm.temProducts.id}`;
      this.$http.delete(api).then((response) => {
        if (response.data.success) {
          $('#delProductModal').modal('hide');
          vm.getProducts();
        } else {
          vm.getProducts();
        }
      });
    },
    uploadFile() {
      const uploadedFile = this.$refs.files.$refs.files.files[0]; // 用元件插入的寫法  files為ref的自訂屬性名稱
      // const uploadedFile = this.$refs.files.files[0]  沒用元件的寫法
      const vm = this;
      const formData = new FormData();
      formData.append('file-to-upload', uploadedFile);
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUS}/admin/upload`;
      vm.status.uploadloading = true;
      this.$http.post(url, formData, {
        headers: {
          'Content-type': 'multipart/form-data',
        },
      }).then((response) => {
        vm.status.uploadloading = false;
        if (response.data.success) {
          vm.$set(vm.temProducts, 'imageUrl', response.data.imageUrl);
        } else {
          this.$bus.$emit('message:push', response.data.message, 'danger');
        }
      });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
