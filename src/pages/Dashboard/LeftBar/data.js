export const notificationsData = [
    {
        profileImg: "/imgs/img1.png",
        name: "Andrew Thomas",
        text: "has ordered Apple smart watch 2500mh battery.",
        timePassed: "25 seconds ago",
    },
    {
        profileImg: "/imgs/img2.png",
        name: "Andrew Thomas",
        text: "has received Samsung gadget for charging battery.",
        timePassed: "30 minutes ago",
    },
    {
        profileImg: "/imgs/img3.png",
        name: "Andrew Thomas",
        text: "has ordered Apple smart watch, samsung gear 2500mh battery.",
        timePassed: "1 hour ago",
    },
];
export const chartData = {
    options: {
        chart: {
            id: "basic-bar",
        },
        xaxis: {
            categories: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
            ],
        },
        chart: {
            height: 350,
            type: "area",
        },
    },
    series: [
        {
            name: "ratings",
            data: [11, 32, 51, 32, 30, 52, 59],
        },
    ],
};