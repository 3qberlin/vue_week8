<template>
  <div class="container">
    <h3 class="mb-3">旅行條件設定</h3>
    <div class="row g-12">
      <div class="col-lg-4">
        <p class="m-1">日期</p>
        <div class="p-2">
          <Auto-Range></Auto-Range>
        </div>
      </div>
      <!-- <div class="col-lg-4">
        <p class="m-1">地點</p>
        <div class="p-2">
          <select class="form-select" v-model="selectedLocation"
           @change="setLocation($event.target.value)">
            <option value="隨便" disabled selected>未選擇</option>
            <option v-for="area in location" :key="area">{{ area }}</option>
          </select>
        </div>
      </div> -->
      <div class="col-lg-4">
        <p class="m-1">
          人數<span class="text-danger ms-2">*</span>
          <span class="fs-7 text-secondary"> 暫不接受所有寵物入住</span>
        </p>
        <div class="p-2">
          <select class="form-select" v-model="selectedPeople"
           @change="setPeople($event.target.value)">
            <option value="隨便" disabled selected>
              孩童視為成人，以一位計算
            </option>
            <option v-for="i in 10" :key="i">{{ i }}</option>
          </select>
        </div>
        <div class="btn-group"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';

import travelConditionsPinia from '@/stores/travelConditionsPinia';

import AutoRange from '@/components/AutoRange.vue';

export default {
  components: {
    AutoRange,
  },
  methods: {
    ...mapActions(travelConditionsPinia, ['setPeople']),
  },
  computed: {
    ...mapState(travelConditionsPinia, ['selectedPeople']),
  },
};
</script>
