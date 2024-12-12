module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    label: 'Rims',
    pluralLabel: 'Rims'
  },
  fields: {
    add: {
      name: {
        type: 'string',
        label: 'Name'
      },
      material: {
        type: 'string',
        label: 'Material'
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
        fields: [ 'name', 'material', 'description', 'fullDescription', 'photo' ]
      }
    }
  }
};
