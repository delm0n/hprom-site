<template>
  <div class="work-item">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
    >
      <g clip-path="url(#clip0_157_8357)">
        <path
          d="M11.251 21.0054C10.0107 21.0054 9.0024 22.0136 9.0024 23.254C9.0024 24.4943 10.0107 25.5026 11.251 25.5026C12.4913 25.5026 13.4996 24.4943 13.4996 23.254C13.5076 22.0136 12.4993 21.0054 11.251 21.0054Z"
          fill="#004978"
        />
        <path
          d="M25.5108 7.49787H21.0056V4.49707H4.5052V7.49787H1.5044C0.920245 8.08203 0.592158 8.41011 0 9.00227C0.584156 9.58643 0.912243 9.91452 1.5044 10.5067H4.5052V13.5075H3.0008C2.41664 14.0916 2.08856 14.4197 1.4964 15.0119C2.08055 15.596 2.40864 15.9241 3.0008 16.5083H4.5052V22.5019H7.57802C7.92211 20.7894 9.44252 19.5011 11.251 19.5011C13.0675 19.5011 14.5799 20.7894 14.924 22.5019H21.0776C21.4217 20.7894 22.9421 19.5011 24.7506 19.5011C26.5671 19.5011 28.0795 20.7894 28.4236 22.5019H30V12.0031C30.008 9.52241 27.9995 7.49787 25.5108 7.49787ZM27.0072 15.0039H22.502V10.5067H25.5028C26.327 10.5067 27.0072 11.1789 27.0072 12.0031V15.0039Z"
          fill="#004978"
        />
        <path
          d="M24.7586 21.0054C23.5183 21.0054 22.51 22.0136 22.51 23.254C22.51 24.4943 23.5183 25.5026 24.7586 25.5026C25.9989 25.5026 27.0072 24.4943 27.0072 23.254C27.0072 22.0136 25.9989 21.0054 24.7586 21.0054Z"
          fill="#004978"
        />
      </g>
      <defs>
        <clipPath id="clip0_157_8357">
          <rect width="30" height="30" fill="white" />
        </clipPath>
      </defs>
    </svg>

    <p class="work-item__title" v-html="item.name"></p>
    <p class="work-item__price">
      от {{ !!item.price ? item.price.toLocaleString() : "0" }} руб./мес.
    </p>
  </div>
</template>

<script lang="ts" setup>
import type { IVakansiiContent } from "~/config/sotrudnichestvo";

const props = defineProps<{
  item: IVakansiiContent;
}>();
</script>

<style lang="scss">
.work-item {
  background: rgba(246, 246, 246, 1);
  border-radius: 20px;
  overflow: hidden;
  height: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  // justify-content: center;

  @media (max-width: 768px) {
    padding: 20px;
  }

  &__title {
    font-size: 22px;
    font-weight: 700;
    line-height: 27.24px;
    margin-bottom: 5px;
    color: rgba(50, 50, 50, 1);

    @media (max-width: 768px) {
      font-size: 18px;
      line-height: 22.28px;
    }
  }

  &__price {
    font-size: 18px;
    font-weight: 400;
    line-height: 21.6px;
    color: rgba(100, 100, 100, 1);

    @media (max-width: 768px) {
      font-size: 14px;
      line-height: 16.8px;
    }
  }

  &:not(.last-slide) {
    cursor: pointer;

    transition: all 0.2s;
    svg path,
    .work-item__title,
    .work-item__price {
      transition: all 0.2s;
    }

    &:hover {
      background: rgba(0, 73, 120, 1);

      .work-item__title {
        color: rgba(255, 255, 255, 1);
      }

      .work-item__price {
        color: rgba(219, 219, 219, 1);
      }

      svg path {
        fill: white;
      }
    }
  }
}
</style>
