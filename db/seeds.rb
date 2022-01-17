puts "begin seeding"

EventCategory.all.destroy_all
Event.all.destroy_all
Hashtag.all.destroy_all


# two users

jojo = User.create(username:'jojo', full_name:'Jonelle Bain', isPromoter: true, password: 'jojo', password_confirmation: 'jojo')

Max = User.create(username:'JMax', full_name:'Max Mezalon', isPromoter: false, password: 'maxie', password_confirmation: 'maxie')


# these are the event types

EventCategory.create(category: "Day Party", img_url: "/event-types-imgs/dayparty.png")
EventCategory.create(category: "Brunch", img_url: "/event-types-imgs/Brunch.png")
EventCategory.create(category: "Nightlife", img_url: "/event-types-imgs/nightlife1.png")
EventCategory.create(category: "Boat Rides", img_url: "/event-types-imgs/boatrides.png")
EventCategory.create(category: "After Work", img_url: "/event-types-imgs/afterwork.png")
EventCategory.create(category: "Arts", img_url: "/event-types-imgs/arts.png")
EventCategory.create(category: "Festivals", img_url: "/event-types-imgs/festivals.png")
EventCategory.create(category: "Concerts", img_url: "/event-types-imgs/concerts.png")

# these events are for brunch
Event.create!(user_id: jojo.id, venue_name: "620 Loft Garden", zip: "11236", state: "NY", img_url: "https://spacehuntr.com/wp-content/uploads/2020/09/Magnificent-vibrant-venue-with-Mediterranean-style-1.jpg", city: "Brooklyn", address: "1463 E 96th", event_category_id: EventCategory.all.sample.id, date: "2022/01/21", description: "come enjoy with me for my birthday")

Event.create!(user_id: jojo.id, venue_name: "Rainbow Room", zip: "11234", state: "NY", img_url: "https://static01.nyt.com/images/2014/10/01/dining/20141001-RAINBOW-slide-4IWD/20141001-RAINBOW-slide-4IWD-superJumbo.jpg", city: "Brooklyn", address: "1081 E 59th", event_category_id: EventCategory.all.sample.id, date: "2022/01/22", description: "come enjoy with me for my birthday")

Event.create!(user_id: jojo.id, venue_name: "The Rink", zip: "11237", state: "NJ", img_url: "https://editorial01.shutterstock.com/wm-preview-1500/9760816c/27931d15/mad-cool-festival-in-madrid-spain-shutterstock-editorial-9760816c.jpg", city: "Hoboken", address: "1411 North street", event_category_id: EventCategory.all.sample.id, date: "2022/02/21", description: "come enjoy with me for my birthday")

Event.create!(user_id: jojo.id, venue_name: "King Pin", zip: "11200", state: "Florida", img_url: "https://easyeventplanning.com/wp-content/uploads/2021/07/83807429_the-cool-venue-new-brunswick-2.jpeg", city: "westchester", address: "1093 North dr", event_category_id: EventCategory.all.sample.id, date: "2022/01/16", description: "come enjoy with me for my birthday")



# these events are for dayparty
Event.create!(user_id: jojo.id, venue_name: "Brooklyn Party Space", zip: "11226", state: "NY", img_url: "https://spacehuntr.com/wp-content/uploads/2021/04/Oriental-Inspired-Venue-with-a-Mysterious-Vibe-via-Spacehuntr.jpg", city: "Brooklyn", address: "1463 E 96th", event_category_id: EventCategory.all.sample.id, date: "2022/02/01", description: "come enjoy with me for my birthday")

Event.create!(user_id: jojo.id, venue_name: "Lux pleasure", zip: "11211", state: "NJ", img_url: "https://i.ytimg.com/vi/mS-wZJysBvo/maxresdefault.jpg", city: "Jersy City", address: "1220 main rd", event_category_id: EventCategory.all.sample.id, date: "2022/02/05", description: "come enjoy with me for my birthday")

Event.create!(user_id: jojo.id, venue_name: "Party Life", zip: "11876", state: "NY", img_url: "https://eventective-media.azureedge.net/2439652_md.jpg", city: "Bronx", address: "1463 Miller rd", event_category_id: EventCategory.all.sample.id, date: "2022/02/06", description: "come enjoy with me for my birthday")

Event.create!(user_id: jojo.id, venue_name: "Lux pleasure", zip: "10736", state: "NY", img_url: "https://pyxis.nymag.com/v1/imgs/101/30b/f06555b200ed1e823d4d2241e5788a3160-2----.w710.jpg", city: "Staten Island", address: "56-21 staten island dr", event_category_id: EventCategory.all.sample.id, date: "2022/03/11", description: "come enjoy with me for my birthday")


Hashtag.create(event_id: Event.all.sample.id, tag: "dayparty")
Hashtag.create(event_id: Event.all.sample.id, tag: "brunch")
Hashtag.create(event_id: Event.all.sample.id, tag: "nightlife")
Hashtag.create(event_id: Event.all.sample.id, tag: "boatrides")
Hashtag.create(event_id: Event.all.sample.id, tag: "afterwork")
Hashtag.create(event_id: Event.all.sample.id, tag: "arts")
Hashtag.create(event_id: Event.all.sample.id, tag: "festivals")
Hashtag.create(event_id: Event.all.sample.id, tag: "concerts")

Hashtag.create(event_id: Event.all.sample.id, tag: "newyork")
Hashtag.create(event_id: Event.all.sample.id, tag: "nyc")
Hashtag.create(event_id: Event.all.sample.id, tag: "brooklyn")
Hashtag.create(event_id: Event.all.sample.id, tag: "queens")
Hashtag.create(event_id: Event.all.sample.id, tag: "statenisland")
Hashtag.create(event_id: Event.all.sample.id, tag: "bronx")
Hashtag.create(event_id: Event.all.sample.id, tag: "longisland")
Hashtag.create(event_id: Event.all.sample.id, tag: "westchester")
Hashtag.create(event_id: Event.all.sample.id, tag: "newjersey")

Hashtag.create(event_id: Event.all.sample.id, tag: "soca")
Hashtag.create(event_id: Event.all.sample.id, tag: "afrobeat")
Hashtag.create(event_id: Event.all.sample.id, tag: "hiphop")
Hashtag.create(event_id: Event.all.sample.id, tag: "rnb")
Hashtag.create(event_id: Event.all.sample.id, tag: "afrohouse")
Hashtag.create(event_id: Event.all.sample.id, tag: "amapiano")
Hashtag.create(event_id: Event.all.sample.id, tag: "soukous")
Hashtag.create(event_id: Event.all.sample.id, tag: "zook")
Hashtag.create(event_id: Event.all.sample.id, tag: "kompa")

    puts "done seeding"