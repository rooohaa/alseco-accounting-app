<template>
   <div class="root-wrap" v-click-outside="closeSelect">
      <div class="select-wrap" @click="toggleSelect">
         <div class="select-value">
            {{ selectedValue ? selectedValue : placeHolder }}
         </div>
         <button>
            <img
               :class="{ active: isActive }"
               src="../assets/arrow-down.svg"
               alt="Arrow down"
            />
         </button>
      </div>
      <div class="options" :class="{ active: isActive }">
         <ul>
            <li
               v-for="option in options"
               :key="option.meta"
               @click="setSelectedValue(option.value, option.meta)"
               :class="{ selected: option.value === selectedValue }"
            >
               {{ option.value }}
            </li>
            <li class="reset" @click="reset">Сбросить</li>
         </ul>
      </div>
   </div>
</template>

<script>
export default {
   props: {
      placeHolder: {
         type: String,
         required: true,
      },
      options: {
         type: Array,
         required: true,
      },
   },
   data() {
      return {
         selectedValue: null,
         isActive: false,
      }
   },
   methods: {
      toggleSelect() {
         this.isActive = !this.isActive
      },
      setSelectedValue(value, meta) {
         this.selectedValue = value
         this.isActive = false

         this.$emit('on-select', meta)
      },
      closeSelect() {
         this.isActive = false
      },
      reset() {
         this.isActive = false
         this.selectedValue = null

         this.$emit('on-reset')
      },
   },
}
</script>

<style lang="scss" scoped>
.root-wrap {
   border: 1px solid #ccc;
   border-radius: 5px;

   position: relative;
   z-index: 10;

   width: 190px;
}

.select-wrap {
   padding: 10px 15px;

   display: flex;
   align-items: center;
   justify-content: space-between;

   cursor: pointer;

   .select-value {
      font-size: 14px;
      line-height: 16px;
      color: #9e9e9e;

      user-select: none;
   }

   button {
      background-color: inherit;
      width: 10px;
      height: 10px;
      border: none;

      display: flex;
      align-items: center;
      justify-content: center;

      img {
         transition: transform 0.3s ease-out;

         width: 100%;
         height: 100%;
         object-fit: contain;
         transform: rotate(180deg);

         &.active {
            transform: rotate(0);
         }
      }
   }
}

.options {
   position: absolute;
   top: 115%;
   right: 0;
   left: 0;

   box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
   background-color: #fff;
   border-radius: 5px;

   animation: open 0.4s ease;
   display: none;

   &.active {
      display: block;
   }

   ul {
      display: flex;
      flex-direction: column;
      padding: 3px;
      row-gap: 3px;

      li {
         widows: 100%;
         padding: 7px;

         transition: background-color 0.4s ease;

         border-bottom: 1px solid #f2f2f2;
         font-size: 13px;
         line-height: 18px;
         cursor: pointer;
         color: #333;
         border-radius: 5px;

         &:hover {
            background-color: rgba(74, 88, 237, 0.1);
         }

         &.selected {
            background-color: rgba(74, 88, 237, 0.1);
         }

         &.reset {
            color: #e6576c;

            &:hover {
               background-color: rgba(230, 87, 108, 0.2);
            }
         }

         &:last-child {
            border-bottom: none;
         }
      }
   }
}

@keyframes open {
   from {
      opacity: 0;
      transform: translateY(30px);
   }
   to {
      opacity: 1;
      transform: translateY(1);
   }
}
</style>
