<template>
  <footer class="footer">
    <div class="container">
      <div v-if="!viewport.isGreaterOrEquals('tablet')" class="mobile-header">
        <NuxtPicture
          format="avif,webp"
          sizes="77px"
          width="77"
          :src="'/images/layout/logo.png'"
          alt="Хеликон"
        />
        <div class="footer__border"></div>
      </div>

      <div class="footer__row">
        <helicon-footer-links />
        <div class="footer__column-info">
          <div class="footer__column-phone">
            <NuxtPicture
              format="avif,webp"
              sizes="28px"
              :src="'/images/layout/phone.png'"
              alt="#"
            />
            <a class="footer__phone" href="tel:88002505932">8 800 250 59 32 </a>
          </div>
          <ul>
            <li class="footer__info"><span>ИНН:</span> 432500888349</li>
            <li class="footer__info"><span>ОГРНИП:</span> 314744919000039</li>
            <li class="footer__info">
              <span>Адрес фактический:</span> 610006, г. Киров,
              Октябрьский&nbsp;пр-т, д.&nbsp;24
            </li>
            <li class="footer__info">
              <span>Адрес для корреспонденции:</span> 610000, а/я 154
            </li>
          </ul>
        </div>
      </div>
      <div class="footer__border"></div>
      <div class="footer__bottom">
        <div class="footer__bottom-info">
          <div v-if="viewport.isGreaterOrEquals('tablet')" class="footer__logo">
            <NuxtPicture
              format="avif,webp"
              sizes="103px"
              width="103"
              :src="'/images/layout/logo.png'"
              alt="Хеликон"
            />
          </div>
          <p class="footer__copyright">
            © 2010-{{ year }}<br />
            helicon-prom.ru | Все права защищены.
          </p>
        </div>
        <div class="footer__bottom-dropdown">
          <NuxtPicture
            format="avif,webp"
            sizes="181px"
            :src="'/images/layout/dropdown.png'"
            alt="Русский язык"
          />
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import HeliconFooterLinks from "./HeliconFooterLinks.vue";
const viewport = useViewport();

const year = ref<number>(new Date().getFullYear());
</script>

<style lang="scss">
.footer {
  padding: 50px 0;
  background: rgba(236, 236, 236, 1);
  border-radius: 20px 20px 0px 0px;

  @media (max-width: 768px) {
    padding: 30px 0;
  }

  &__row {
    display: flex;
    gap: 20px;
    justify-content: space-between;
    margin-bottom: 50px;

    @media (max-width: 768px) {
      flex-direction: column;
      margin-bottom: 20px;
    }

    .footer__phone {
      color: rgba(50, 50, 50, 1);
      font-size: 22px;
      font-style: normal;
      font-weight: 700;
      line-height: 29px;

      @media (max-width: 992px) {
        font-size: 18px;
        line-height: 25px;
      }
    }

    .footer__info {
      color: #646464;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;

      @media (max-width: 992px) {
        font-size: 14px;
        line-height: 17px;
      }

      span {
        font-weight: 500;
      }

      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }
  }

  &__column-info {
    padding: 20px;
    border-radius: 10px;
    border: 2px solid rgba(50, 50, 50, 1);
    max-width: 455px;

    @media (max-width: 991px) {
      max-width: initial;
    }

    @media (max-width: 575px) {
      padding: 10px;
    }
  }

  &__column-phone {
    display: flex;
    gap: 5px;
    align-items: center;
    margin-bottom: 20px;

    transition: all 0.3s;
    cursor: pointer;

    &:hover {
      opacity: 0.5;
    }
  }

  &__border {
    height: 2px;
    background: rgba(150, 150, 150, 1);
    width: 100%;

    @media (max-width: 768px) {
      height: 1px;
      background: rgba(50, 50, 50, 0.6);
    }
  }

  &__bottom {
    margin-top: 20px;
    gap: 20px;
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
      flex-direction: column-reverse;
      align-items: center;
      gap: 10px;
    }

    &-info {
      display: flex;
      gap: 26px;
      justify-content: center;
      align-items: center;

      @media (max-width: 768px) {
        flex-direction: column;
        align-items: start;
        text-align: center;
      }
    }

    &-dropdown {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: end;
    }
  }

  &__copyright {
    color: rgba(50, 50, 50, 1);
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    @media (max-width: 992px) and (min-width: 769px) {
      font-size: 14px;
      line-height: 17px;
    }

    @media (max-width: 576px) {
      font-size: 14px;
      line-height: 17px;
    }

    br {
      display: none;
    }

    @media (max-width: 575px) {
      br {
        display: block;
      }
    }
  }

  @media (max-width: 768px) {
    .mobile-header {
      margin-bottom: 20px;
      display: flex;
      gap: 20px;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
  }
}
</style>
