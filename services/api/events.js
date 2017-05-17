api = {
  getInterestingEvents(count) {
    return [
      {
        id: 1,
        name: 'Leaf collection',
        purpose: 'Rake and pickup leaves at the Lake Community park to tidy things up.',
        minAttendance: null,
        maxAttendance: null,
        eventDate: 'Tomorrow at 10am',
        organizer: {
          name: 'Josh Graber',
          gravatar: 'https://www.gravatar.com/avatar/5469091ba72e1841ae7868df28e5f648?s=96&d=identicon',
        },
        participants: 5,
        location: {
          address: {
            name: 'Lake High School Standium',
            street: '658 Market Ave N',
            city: 'Uniontown',
            state: 'OH',
            zip: '44685',
          },
          lat: 40.957681,
          long: -81.354747,
        },
      },
      {
        id: 2,
        name: 'Trash pickup',
        purpose: 'Pickup and dispose of litter and trash along Edison street in downtown Hartville to make things look nice again.',
        minAttendance: 3,
        maxAttendance: 15,
        eventDate: 'Monday at 4pm',
        organizer: {
          name: 'Jonas Johnson',
          gravatar: 'https://www.gravatar.com/avatar/6479091ba72e1841ae7868df28e5f648?s=96&d=identicon'
        },
        participants: 6,
        location: {
          address: {
            name: 'Hartville Town Hall',
            street: '202 W Maple St',
            city: 'Hartville',
            state: 'OH',
            zip: '44632',
          },
          lat: 40.963741,
          long: -81.330864,
        }
      },
//      {
//        name: 'Trash pickup',
//      },
//      {
//        name: 'Lot restoration',
//      },
    ]
  },

  getMyEvents() {
    return [
      {
        name: 'Leaf collection',
        purpose: 'Rake and pickup leaves at the Lake Community park to tidy things up.',
        minAttendance: null,
        maxAttendance: null,
        eventDate: 'Tomorrow at 10am',
        organizer: {
          name: 'Josh Graber',
          gravatar: 'http://www.gravatar.com/avatar/5469091ba72e1841ae7868df28e5f648?s=48&d=identicon',
        },
        participants: 5,
        location: {
          address: {
            name: 'Lake High School Standium',
            street: '658 Market Ave N',
            city: 'Uniontown',
            state: 'OH',
            zip: '44685',
          },
          lat: 40.957681,
          long: -81.354747,
        },
      },
    ]
  },
}

export default api
