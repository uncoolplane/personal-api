var user = {
  name: 'Becky Hall',
  location: 'Dev Mtn',
  occupations: [
    'Short Order Cook',
    'File Clerk',
    'Developer'
  ],
  hobbies: [
    {
      name: 'hiking',
      type: 'outdoors'
    },
    {
      name: 'piano',
      type: 'music'
    },
    {
      name: 'gaming',
      type: 'computers'
    }
  ],
  family: [
    {
      name: 'Calvin',
      relation: 'husband',
      gender: 'M'
    },
    {
      name: 'Gabby',
      relation: 'daughter',
      gender: 'F'
    },{
      name: 'Porter',
      relation: 'son',
      gender: 'M'
    },{
      name:'Katelyn',
      relation:'daughter',
      gender: 'F'
    }
  ],
  restaurants: [
    {
      name: "Applebees",
      type: 'American',
      rating: 8
    },
    {
      name: 'Chills',
      type: 'Southwestern',
      rating: 5
    },
    {
      name: 'Wendys',
      type: 'Fast Food',
      rating: 3
    }
  ]
};

module.exports = user;
