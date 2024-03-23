import { defineStore } from 'pinia';

export default defineStore('travelConditionsPinia', {
  state: () => ({
    selectedLocation: null,
    selectedPeople: null,
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
  }),
  actions: {
    setLocation(location) {
      this.selectedLocation = location;
      console.log('this.selectedLocation', this.selectedLocation);
      console.log('this.location', this.location);
    },
    setPeople(people) {
      this.selectedPeople = people;
      console.log('this.selectedPeople', this.selectedPeople);
      console.log('this.people', this.people);
    },
  },
});
