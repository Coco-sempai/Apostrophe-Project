// This configures the @apostrophecms/page module to add a "home" page type to the
// pages menu

module.exports = {
  options: {
    types: [
      {
        name: '@apostrophecms/home-page',
        label: 'Home'
      },
      {
        name: 'tire-page',
        label: 'Tire'
      },
      {
        name: 'rims-page',
        label: 'Rims'
      }
    ],
    park: [
      {
        slug: '/search',
        parkedId: 'search',
        title: 'Search',
        type: '@apostrophecms/search'
      }
    ]
  }
};
