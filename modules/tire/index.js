module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    label: 'Tire',
    pluralLabel: 'Tires'
  },
  fields: {
    add: {
      name: {
        type: 'string',
        label: 'Name'
      },
      season: {
        type: 'string',
        label: 'Season'
      },
      description: {
        type: 'string',
        label: 'Description'
      },
      fullDescription: {
        type: 'string',
        label: 'Full Description'
      },
      photo: {
        label: 'Photo',
        type: 'area',
        options: {
          max: 1,
          widgets: {
            '@apostrophecms/image': {}
          }
        }
      }
    },
    group: {
      basics: {
        label: 'Basic',
        fields: [ 'name', 'season', 'description', 'fullDescription', 'photo' ]
      }
    }
  }
};
