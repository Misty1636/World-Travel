<template>
  <div>
    <footer class="footer-bg py-5">
      <div class="container">
        <div class="d-flex justify-content-sm-between align-items-center flex-sm-row flex-column text-white">
          <small class="mb-sm-0 mb-3">
            <font-awesome-icon icon="copyright" />
            僅個人練習使用，不做商業用途
          </small>
          <div class="d-flex">
            <a href="#" title="Facebook">
              <font-awesome-icon :icon="['fab', 'facebook-square']" size="2x"/>
            </a>
            <a href="#" class="mx-3" title="Instagram">
              <font-awesome-icon :icon="['fab', 'instagram']" size="2x"/>
            </a>
            <a href="#" title="Google">
              <font-awesome-icon :icon="['fab', 'google-plus']" size="2x"/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>