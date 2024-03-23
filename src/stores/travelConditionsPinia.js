import { defineStore } from 'pinia';

export default defineStore('travelConditionsPinia', {
  state: () => ({
    selectedLocation: null,
    selectedPeople: null,
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
