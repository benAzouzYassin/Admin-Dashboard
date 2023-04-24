export const columns = [
    { id: "picture", label: "picture", minWidth: 170 },
    { id: "title", label: "Title", minWidth: 100 },
    {
        id: "price",
        label: "Price",
        minWidth: 170,
        format: (value) => value.toLocaleString("en-US"),
    },
    {
        id: "status",
        label: "Status",
        minWidth: 170,

        format: (value) => value.toLocaleString("en-US"),
    },
];
