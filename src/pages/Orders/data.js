
export const columns = [
    { id: "customer", label: "Customer", align: "center" },
    { id: "product", label: "Product", align: "center" },
    { id: "orderId", label: "OrderId", align: "center" },
    { id: "date", label: "Date", align: "center" },
    { id: "action", label: "Action", align: "center" },
];

function createData(customer, product, orderId, date, action) {
    return { customer, product, orderId, date, action };
}

export const rows = [
    createData(
        "Charlotte Jones",
        "Jacket",
        "ORD-8901",
        "2023-04-23",
        <OrderAction state="canceled" orderId="ORD-8901" />
    ),
    createData(
        "Violet Mitchell",
        "Coat",
        "ORD-4567",
        "2023-04-23",
        <OrderAction state="pending" orderId="ORD-4567" />
    ),
    createData(
        "Emma Scott",
        "Blouse",
        "ORD-2345",
        "2023-04-23",
        <OrderAction state="pending" orderId="ORD-2345" />
    ),
    createData(
        "Audrey Martinez",
        "Jewelry",
        "ORD-3456",
        "2023-04-23",
        <OrderAction state="pending" orderId="ORD-3456" />
    ),
    createData(
        "Sophia Parker",
        "Shorts",
        "ORD-6789",
        "2023-04-23",
        <OrderAction state="pending" orderId="ORD-6789" />
    ),
    createData(
        "Ava Young",
        "Umbrella",
        "ORD-2345",
        "2023-04-23",
        <OrderAction state="pending" orderId="ORD-2345" />
    ),
    createData(
        "Audrey Moore",
        "Umbrella",
        "ORD-7890",
        "2023-04-23",
        <OrderAction state="approved" orderId="ORD-7890" />
    ),
    createData(
        "Charlotte Bailey",
        "Jeans",
        "ORD-8901",
        "2023-04-23",
        <OrderAction state="pending" orderId="ORD-8901" />
    ),
    createData(
        "Zoey Cook",
        "Sneakers",
        "ORD-4567",
        "2023-04-23",
        <OrderAction state="canceled" orderId="ORD-4567" />
    ),
    createData(
        "Skylar Johnson",
        "Sandals",
        "ORD-2345",
        "2023-04-23",
        <OrderAction state="canceled" orderId="ORD-2345" />
    ),
    createData(
        "Sophia Sanchez",
        "Skirt",
        "ORD-6789",
        "2023-04-23",
        <OrderAction state="pending" orderId="ORD-6789" />
    ),
    createData(
        "Nova Reed",
        "Shirt",
        "ORD-7890",
        "2023-04-23",
        <OrderAction state="pending" orderId="ORD-7890" />
    ),
    createData(
        "Riley Wright",
        "Coat",
        "ORD-3456",
        "2023-04-23",
        <OrderAction state="pending" orderId="ORD-3456" />
    ),
    createData(
        "Aria Johnson",
        "Jewelry",
        "ORD-7890",
        "2023-04-23",
        <OrderAction state="pending" orderId="ORD-7890" />
    ),
    createData(
        "Scarlett Carter",
        "Boots",
        "ORD-0123",
        "2023-04-23",
        <OrderAction state="canceled" orderId="ORD-0123" />
    ),
    createData(
        "Violet Reed",
        "Umbrella",
        "ORD-2345",
        "2023-04-23",
        <OrderAction state="pending" orderId="ORD-2345" />
    ),
    createData(
        "Skylar Moore",
        "Handbag",
        "ORD-0123",
        "2023-04-23",
        <OrderAction state="canceled" orderId="ORD-0123" />
    ),
    createData(
        "Natalie Parker",
        "T-Shirt",
        "ORD-0123",
        "2023-04-23",
        <OrderAction state="canceled" orderId="ORD-0123" />
    ),
    createData(
        "Luna Evans",
        "Umbrella",
        "ORD-8901",
        "2023-04-23",
        <OrderAction state="pending" orderId="ORD-8901" />
    ),
    createData(
        "Aurora Gonzalez",
        "Dress",
        "ORD-0123",
        "2023-04-23",
        <OrderAction state="canceled" orderId="ORD-0123" />
    ),
    createData(
        "Natalie Johnson",
        "Watch",
        "ORD-0123",
        "2023-04-23",
        <OrderAction state="pending" orderId="ORD-0123" />
    ),
    createData(
        "Riley Phillips",
        "Sneakers",
        "ORD-4567",
        "2023-04-23",
        <OrderAction state="approved" orderId="ORD-4567" />
    ),
    createData(
        "Mila Campbell",
        "Shirt",
        "ORD-2345",
        "2023-04-23",
        <OrderAction state="approved" orderId="ORD-2345" />
    ),
    createData(
        "Charlotte Reed",
        "Watch",
        "ORD-9012",
        "2023-04-23",
        <OrderAction state="canceled" orderId="ORD-9012" />
    ),
    createData(
        "Luna Allen",
        "Sweater",
        "ORD-0123",
        "2023-04-23",
        <OrderAction state="approved" orderId="ORD-0123" />
    ),
    createData(
        "Isabella Rivera",
        "Jeans",
        "ORD-7890",
        "2023-04-23",
        <OrderAction state="pending" orderId="ORD-7890" />
    ),
    createData(
        "Hannah Jackson",
        "Handbag",
        "ORD-0123",
        "2023-04-23",
        <OrderAction state="approved" orderId="ORD-0123" />
    ),
    createData(
        "Audrey Johnson",
        "Dress",
        "ORD-3456",
        "2023-04-23",
        <OrderAction state="approved" orderId="ORD-3456" />
    ),
    createData(
        "Eleanor Hall",
        "Pants",
        "ORD-4567",
        "2023-04-23",
        <OrderAction state="canceled" orderId="ORD-4567" />
    ),
    createData(
        "Madison Reed",
        "Jacket",
        "ORD-0123",
        "2023-04-23",
        <OrderAction state="approved" orderId="ORD-0123" />
    ),
    createData(
        "Nora Stewart",
        "Sandals",
        "ORD-0123",
        "2023-04-23",
        <OrderAction state="approved" orderId="ORD-0123" />
    ),
    createData(
        "Eleanor Miller",
        "Shorts",
        "ORD-7890",
        "2023-04-23",
        <OrderAction state="pending" orderId="ORD-7890" />
    ),
    createData(
        "Chloe Rodriguez",
        "Jacket",
        "ORD-0123",
        "2023-04-23",
        <OrderAction state="approved" orderId="ORD-0123" />
    ),
    createData(
        "Hazel Adams",
        "Jeans",
        "ORD-4567",
        "2023-04-23",
        <OrderAction state="approved" orderId="ORD-4567" />
    ),
    createData(
        "Eleanor Baker",
        "Shirt",
        "ORD-9012",
        "2023-04-23",
        <OrderAction state="pending" orderId="ORD-9012" />
    ),
    createData(
        "Charlotte Adams",
        "Watch",
        "ORD-6789",
        "2023-04-23",
        <OrderAction state="approved" orderId="ORD-6789" />
    ),
    createData(
        "Lucy Lee",
        "Dress",
        "ORD-4567",
        "2023-04-23",
        <OrderAction state="pending" orderId="ORD-4567" />
    ),
    createData(
        "Victoria Turner",
        "Handbag",
        "ORD-3456",
        "2023-04-23",
        <OrderAction state="approved" orderId="ORD-3456" />
    ),
    createData(
        "Abigail Mitchell",
        "Handbag",
        "ORD-3456",
        "2023-04-23",
        <OrderAction state="canceled" orderId="ORD-3456" />
    ),
    createData(
        "Amelia Gonzalez",
        "Skirt",
        "ORD-4567",
        "2023-04-23",
        <OrderAction state="approved" orderId="ORD-4567" />
    ),
    createData(
        "Lucy Lewis",
        "Sweater",
        "ORD-6789",
        "2023-04-23",
        <OrderAction state="canceled" orderId="ORD-6789" />
    ),
    createData(
        "Ellie Nelson",
        "Coat",
        "ORD-6789",
        "2023-04-23",
        <OrderAction state="canceled" orderId="ORD-6789" />
    ),
    createData(
        "Charlotte Perez",
        "Jeans",
        "ORD-3456",
        "2023-04-23",
        <OrderAction state="approved" orderId="ORD-3456" />
    ),
    createData(
        "Nora Rivera",
        "Jacket",
        "ORD-7890",
        "2023-04-23",
        <OrderAction state="canceled" orderId="ORD-7890" />
    ),
    createData(
        "Lily Rodriguez",
        "Pants",
        "ORD-0123",
        "2023-04-23",
        <OrderAction state="pending" orderId="ORD-0123" />
    ),
    createData(
        "Genesis Stewart",
        "Shirt",
        "ORD-8901",
        "2023-04-23",
        <OrderAction state="pending" orderId="ORD-8901" />
    ),
    createData(
        "Olivia Collins",
        "Skirt",
        "ORD-0123",
        "2023-04-23",
        <OrderAction state="canceled" orderId="ORD-0123" />
    ),
    createData(
        "Eleanor Evans",
        "Sandals",
        "ORD-4567",
        "2023-04-23",
        <OrderAction state="pending" orderId="ORD-4567" />
    ),
    createData(
        "Nova Rodriguez",
        "Jewelry",
        "ORD-2345",
        "2023-04-23",
        <OrderAction state="canceled" orderId="ORD-2345" />
    ),
    createData(
        "Charlotte Phillips",
        "Shirt",
        "ORD-0123",
        "2023-04-23",
        <OrderAction state="approved" orderId="ORD-0123" />
    ),
];

function OrderAction({ orderId, state }) {
    const approveOrder = (id) => console.log(`approving order with id ${id}`); //should make a request to the backend
    const cancelOrder = (id) => console.log(`canceling order with id ${id}`); //should make a call to the backend

    switch (state) {
        case "pending":
            return (
                <>
                    <button
                        onClick={() => approveOrder(orderId)}
                        className="bg-green-500 hover:bg-green-700 mr-1 text-stone-100 font-semibold  p-2 rounded-md"
                    >
                        approve
                    </button>
                    <button onClick={() => cancelOrder(orderId)} className="bg-red-600 ml-1 hover:bg-red-700 text-stone-100 font-semibold  p-2 rounded-md">
                        cancel
                    </button>
                </>
            );
        case "approved":
            return <p className="bg-green-400 text-center w-fit ml-auto mr-auto p-2 rounded-lg">approved</p>;
        case "canceled":
            return <p className="bg-red-400 text-center w-fit ml-auto mr-auto p-2 rounded-lg">canceled</p>;
        default:
            console.log("default");
            break;
    }
}
