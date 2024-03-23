<template>
  <div class="container">
    <h3 class="mb-3">旅行條件設定</h3>
    <div class="row g-12">
      <div class="col-lg-4">
        <p class="m-1">出發日</p>
        <div class="p-2">
          <input type="date" class="form-control" @change="getStart"  v-model="startTime">
        </div>
      </div>
      <div class="col-lg-4">
        <p class="m-1">回程</p>
        <div class="p-2">
          <input type="date" class="form-control" @change="getEnd" v-model="endTime">
        </div>
      </div>
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

export default {
  methods: {
    ...mapActions(travelConditionsPinia, ['setPeople', 'getStart', 'getEnd']),
  },
  computed: {
    ...mapState(travelConditionsPinia, ['selectedPeople', 'startTime', 'endTime']),
  },
};
</script>
