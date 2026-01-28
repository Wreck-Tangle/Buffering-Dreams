const logs = [
  {
    id: "001",
    date: "2024-03-18",
    title: "first transmission",
    protected: false,
    password: " ",
    content: `
> entry 001 :: first transmission
> date :: 2024-03-18

this is the body of the first log.
`,
    images: []
  },
  {
    id: "002",
    date: "2025-01-07",
    title: "signal noise",
    protected: true,
    password: "password",
    content: `
> entry 002 :: signal noise
> date :: 2025-01-07

this log is protected.
`,
    images: [
        "images/test_image.png"

    ]
  }
];