import { defineStore } from 'pinia';

export default defineStore('travelConditionsPinia', {
  state: () => ({
    selectedPeople: 0,
    location: [
      '卡托卡尼',
      '伊斯坦堡',
      '聖保羅',
      '布德瓦',
      '本地治里市',
      '克雷塔羅',
      '波扎諾',
      'Castel Hörtenberg',
      '亞庇',
      '艾美度假酒店',
    ],
    startTime: '',
    endTime: '',
  }),
  actions: {
    setPeople(people) {
      this.selectedPeople = people;
    },
    getStart(event) {
      this.startTime = event.target.value;
    },
    getEnd(event) {
      this.endTime = event.target.value;
    },
  },
});
