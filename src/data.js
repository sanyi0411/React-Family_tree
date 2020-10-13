export const incomingData = 
[
    {
        id: 0,
        firstName: "The",
        lastName: "Force",
        spouse: null,
        children: [
            4
        ],
        mother: null,
        father: null,
        dob: 0,
        dod: 99999,
        img: null,
    },
    {
        id: 1,
        firstName: "Cliegg",
        lastName: "Lars",
        spouse: 2,
        children: [],
        mother: null,
        father: null,
        dob: 1,
        dod: 2,
        img: "1.jpg"
    },
    {
        id: 2,
        firstName: "Shmi",
        lastName: "Skywalker",
        spouse: 1,
        children: [
            3
        ],
        mother: null,
        father: null,
        dob: 1,
        dod: 2,
        img: "2.jpg",
    },
    {
        id: 3,
        firstName: 'Anakin',
        lastName: "Skywalker",
        spouse: 6,
        children: [
            7,8
        ],
        mother: 2,
        father: 0,
        dob: 2,
        dod: 3,
        img: "3.jpg",
    },
    {
        id: 4,
        firstName: "Ruwee",
        lastName: "Naberre",
        spouse: 4,
        children: [
            6,
        ],
        mother: null,
        father: null,
        dob: 1,
        dod: 2,
        img: "4.jpg",
    },
    {
        id: 5,
        firstName: "Jobal",
        lastName: "Naberre",
        spouse: 5,
        children: [
            6
        ],
        mother: null,
        father: null,
        dob: 1,
        dod: 2,
        img: "5.jpg",
    },
    {
        id: 6,
        firstName: "Padme",
        lastName: "Amidala",
        spouse: 3,
        children: [
            7,8
        ],
        mother: 5,
        father: 4,
        dob: 2,
        dod: 3,
        img: "6.jpg",
    },
    {
        id: 7,
        firstName: "Luke",
        lastName: "Skywalker",
        spouse: null,
        children: [],
        mother: 6,
        father: 3,
        dob: 3,
        dod: 4,
        img: "7.jpg",
    },
    {
        id: 8,
        firstName: "Leia",
        lastName: "Organa",
        spouse: 9,
        children: [
            10
        ],
        mother: 6,
        father: 3,
        dob: 2,
        dod: 3,
        img: "8.jpg"
    },
    {
        id: 9,
        firstName: "Han",
        lastName: "Solo",
        spouse: 8,
        children: [
            10
        ],
        mother: null,
        father: null,
        dob: 3,
        dod: 4,
        img: "9.jpg",
    },
    {
        id: 10,
        firstName: "Ben",
        lastName: "Solo",
        spouse: null,
        children: [],
        mother: 8,
        father: 9,
        dob: 4,
        dod: 5,
        img: "10.jpg",
    },
]

export const debugData =
{
    name: "",
    id: 0,
    nodeSvgShape: {
        "shape": "none"
    },
    children: 
    [
        {
            name: "Joe",
            id: 2,
            dob: "05.11.1962.",
        },
        {
            name: "",
            id: 3,
            nodeSvgShape: {
                "shape": "none"
            },
            children:
            [
                {
                    name: "Rachel",
                    id: 6,
                    dob: "18.06.1989.",
                },
                {
                    name: "",
                    id: 7,
                    nodeSvgShape: {
                        "shape": "none"
                    },
                    children:
                    [
                        {
                            name: "James",
                            id: 8,
                            dob: "06.10.2015",
                        },
                        {
                            name: "Pam",
                            id: 9,
                            dob: "13.12.2017",
                        }
                    ]
                },
                {
                    name: "Mike",
                    id: 5,
                    dob: "13.02.1990",
                },
                {
                    name: "Anna",
                    id: 10,
                    dob: "02.04.1991",
                },
                {
                    name: "",
                    id: 11,
                    nodeSvgShape: {
                        "shape": "none"
                    },
                    children: 
                    [
                        {
                            name: "Steve",
                            id: 12,
                            dob: "28.07.2011",
                            nodeSvgShape: {
                                "shape": "circle",
                                "shapeProps": {
                                    "r": 5
                                }
                            },
                        },
                        {
                            name: "Aaron",
                            id: 13,
                            dob: "30.09.2014",
                        }
                    ]
                },
                {
                    name: "Bob",
                    id: 14,
                    dob: "17.03.1988",
                }

            ]
        },
        {
            name: "Susan",
            id: 4,
            dob: "02.06.1963",
        }
    ]
}

export const rootData = {
    name: "1",
    children: [
      {
        name: "2"
      },
      {
        name: "2"
      }
    ]
};

export const fooData = 
{
    name: "root",
    id: 0,
    hidden: false,
    children: 
    []
};

const myTreeData = [
    {
      name: 'Parent Node',
      attributes: {
        keyA: 'val A',
        keyB: 'val B',
        keyC: 'val C',
      },
      nodeSvgShape: {
        shapeProps: {
          fill: 'blue',
        },
      },
      children: [
        {
          name: 'Inner Node',
          attributes: {
            keyA: 'val A',
            keyB: 'val B',
            keyC: 'val C',
          },
          nodeSvgShape: {
            shape: 'rect',
            shapeProps: {
              width: 20,
              height: 20,
              x: -10,
              y: -10,
              fill: 'red',
            },
          },
        },
        {
          name: 'Level 2: B',
        },
      ],
    },
  ];