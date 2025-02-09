const sampleListings = [
    {
        title: "Cozy Beachfront Cottage",
        description: "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
        url: {
            filename: "listingimage",
            image_url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 1500,
        location: "Malibu",
        country: "United States",
    },
    {
        title: "Modern Loft in Downtown",
        description: "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
        url: {
            filename: "listingimage",
            image_url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 1200,
        location: "New York City",
        country: "United States",
    },
    {
        title: "Mountain Retreat",
        description: "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
        url: {
            filename: "listingimage",
            image_url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        price: 1000,
        location: "Aspen",
        country: "United States",
    },
    {
        title: "Historic Villa in Tuscany",
        description: "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
        url: {
            filename: "listingimage",
            image_url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        price: 2500,
        location: "Florence",
        country: "Italy",
    },
    {
        title: "Secluded Treehouse Getaway",
        description: "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
        url: {
            filename: "listingimage",
            image_url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 800,
        location: "Portland",
        country: "United States",
    },
    {
        title: "Beachfront Paradise",
        description: "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
        url: {
            filename: "listingimage",
            image_url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 2000,
        location: "Cancun",
        country: "Mexico",
    },
    {
        title: "Rustic Cabin by the Lake",
        description: "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
        url: {
            filename: "listingimage",
            image_url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        price: 900,
        location: "Lake Tahoe",
        country: "United States",
    },
    {
        title: "Luxury Penthouse Suite",
        description: "Indulge in luxury in this stunning penthouse suite with panoramic city views.",
        url: {
            filename: "listingimage",
            image_url: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-1.2.1&q=80&w=400",
        },
        price: 4000,
        location: "Los Angeles",
        country: "United States",
    },
    {
        title: "Tropical Overwater Bungalow",
        description: "Stay in this luxurious overwater bungalow with crystal-clear lagoon views.",
        url: {
            filename: "listingimage",
            image_url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-1.2.1&q=80&w=400",
        },
        price: 3000,
        location: "Bora Bora",
        country: "French Polynesia",
    },
    {
        title: "Ski Chalet in Swiss Alps",
        description: "Hit the slopes and enjoy cozy nights by the fire in this classic ski chalet.",
        url: {
            filename: "listingimage",
            image_url: "https://images.unsplash.com/photo-1519974719765-e6559eac2575?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-1.2.1&q=80&w=400",
        },
        price: 2800,
        location: "Zermatt",
        country: "Switzerland",
    },
    {
        title: "Desert Glamping Experience",
        description: "Experience the magic of the Sahara in this luxurious desert glamping retreat.",
        url: {
            filename: "listingimage",
            image_url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-1.2.1&q=80&w=400",
        },
        price: 1200,
        location: "Sahara Desert",
        country: "Morocco",
    },
    {
        title: "Eco-Friendly Jungle Bungalow",
        description: "Reconnect with nature in this eco-friendly jungle bungalow. Perfect for adventurers!",
        url: {
            filename: "listingimage",
            image_url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-1.2.1&q=80&w=400",
        },
        price: 700,
        location: "Costa Rica",
        country: "Costa Rica",
    },
];


module.exports = { data: sampleListings };
