puts "begin seeding"
Hashtag.all.destroy_all
# two users

jojo = User.create(username:'jojo', full_name:'Jonelle Bain', isPromoter: true, password: 'jojo', password_confirmation: 'jojo')

Max = User.create(username:'JMax', full_name:'Max Mezalon', isPromoter: false, password: 'maxie', password_confirmation: 'maxie')


# these are the event types

dayparty = EventCategory.create(category: "Day Party", img_url: "/event-types-imgs/dayparty.png")
brunch = EventCategory.create(category: "Brunch", img_url: "/event-types-imgs/Brunch.png")
nightlife = EventCategory.create(category: "Nightlife", img_url: "/event-types-imgs/nightlife1.png")
boatride = EventCategory.create(category: "Boat Rides", img_url: "/event-types-imgs/boatrides.png")
afterwork = EventCategory.create(category: "After Work", img_url: "/event-types-imgs/afterwork.png")
art = EventCategory.create(category: "Arts", img_url: "/event-types-imgs/arts.png")
festival = EventCategory.create(category: "Festivals", img_url: "/event-types-imgs/festivals.png")
concert = EventCategory.create(category: "Concerts", img_url: "/event-types-imgs/concerts.png")

# these are the hashtags

daypartytag = Hashtag.create(tag: "dayparty")
brunchtag = Hashtag.create(tag: "brunch")
nightlifetag= Hashtag.create(tag: "nightlife")
boatridetag = Hashtag.create(tag: "boatrides")
afterworktag = Hashtag.create(tag: "afterwork")
arttag = Hashtag.create(tag: "arts")
festivaltag = Hashtag.create(tag: "festivals")
concerttag = Hashtag.create(tag: "concerts")

nytag = Hashtag.create(tag: "newyork")
Hashtag.create(tag: "nyc")
bktag = Hashtag.create(tag: "brooklyn")
Hashtag.create(tag: "queens")
Hashtag.create(tag: "statenisland")
Hashtag.create(tag: "bronx")
lgitag = Hashtag.create(tag: "longisland")
westag = Hashtag.create(tag: "westchester")
njtag = Hashtag.create(tag: "newjersey")

socatag = Hashtag.create(tag: "soca")
afrobeat = Hashtag.create(tag: "afrobeat")
hiphoptag = Hashtag.create(tag: "hiphop")
rnbtag = Hashtag.create(tag: "rnb")
afrohousetag = Hashtag.create(tag: "afrohouse")
amptag = Hashtag.create(tag: "amapiano")
sktag = Hashtag.create(tag: "soukous")
zooktag = Hashtag.create(tag: "zook")
kompatag = Hashtag.create(tag: "kompa")

# these events are for brunch
e1 = Event.create!(user_id: jojo.id, venue_name: "620 Loft Garden", zip: "11236", state: "NY", img_url: "https://spacehuntr.com/wp-content/uploads/2020/09/Magnificent-vibrant-venue-with-Mediterranean-style-1.jpg", city: "Brooklyn", address: "1463 E 96th", event_category_id: afterwork.id, date: "2022/01/21", description: "come enjoy with me for my birthday, the scenary is so beautiful. I am sure you will have a great time with me. Looking forward to seeing you all!", link_to_purchase: "")

EventTag.create(event_id: e1.id, hashtag_id: afterworktag.id)
EventTag.create(event_id: e1.id, hashtag_id: kompatag.id)
EventTag.create(event_id: e1.id, hashtag_id: rnbtag.id)
EventTag.create(event_id: e1.id, hashtag_id: bktag.id)
EventTag.create(event_id: e1.id, hashtag_id: hiphoptag.id)

e2 = Event.create!(user_id: jojo.id, venue_name: "Rainbow Room", zip: "11234", state: "NY", img_url: "https://static01.nyt.com/images/2014/10/01/dining/20141001-RAINBOW-slide-4IWD/20141001-RAINBOW-slide-4IWD-superJumbo.jpg", city: "Brooklyn", address: "1081 E 59th", event_category_id: afterwork.id, date: "2022/01/22", description: "the setting is just beautiful. There are lots of wonderful places to chill and enjoy the scenery. come with friends and family.  you will enjoy it guarentee.", link_to_purchase: "")

EventTag.create(event_id: e2.id, hashtag_id: arttag.id)
EventTag.create(event_id: e2.id, hashtag_id: bktag.id)
EventTag.create(event_id: e2.id, hashtag_id: rnbtag.id)
EventTag.create(event_id: e2, hashtag_id: afrohousetag.id)
EventTag.create(event_id: e2.id, hashtag_id: nytag.id)
EventTag.create(event_id: e2.id, hashtag_id: daypartytag.id)

e3 = Event.create!(user_id: jojo.id, venue_name: "The Rink", zip: "11237", state: "NJ", img_url: "https://editorial01.shutterstock.com/wm-preview-1500/9760816c/27931d15/mad-cool-festival-in-madrid-spain-shutterstock-editorial-9760816c.jpg", city: "Hoboken", address: "1411 North street", event_category_id: dayparty.id, date: "2022/02/21", description: "We have a lot of space for a lot of people. Come and chill and enjoy the free rides we have set up for you in this festival.", link_to_purchase: "")

EventTag.create(event_id: e3.id, hashtag_id: daypartytag.id)
EventTag.create(event_id: e3.id, hashtag_id: njtag.id)
EventTag.create(event_id: e3.id, hashtag_id: socatag.id)
EventTag.create(event_id: e3.id, hashtag_id: festivaltag.id)

e4 = Event.create!(user_id: jojo.id, venue_name: "King Pin", zip: "11200", state: "Florida", img_url: "https://easyeventplanning.com/wp-content/uploads/2021/07/83807429_the-cool-venue-new-brunswick-2.jpeg", city: "westchester", address: "1093 North dr", event_category_id: brunch.id, date: "2022/01/29", description: "Do you live in westchester? come checkout this beautiful setting and have brunch with friends and family. you will love it, I promise!", link_to_purchase: "")

EventTag.create(event_id: e4.id, hashtag_id: brunch.id)
EventTag.create(event_id: e4.id, hashtag_id: westag.id)
EventTag.create(event_id: e4.id, hashtag_id: nytag.id)
EventTag.create(event_id: e4.id, hashtag_id: amptag.id)


# these events are for dayparty
e5 = Event.create!(user_id: jojo.id, venue_name: "Brooklyn Party Space", zip: "11226", state: "NY", img_url: "https://spacehuntr.com/wp-content/uploads/2021/04/Oriental-Inspired-Venue-with-a-Mysterious-Vibe-via-Spacehuntr.jpg", city: "Brooklyn", address: "1463 E 96th", event_category_id: afterwork.id, date: "2022/02/01", description: "what are you doing tonight? checkout this scenary. you know you want to come. don't think about it too much. call your significant other and come enjoy!", link_to_purchase: "")

EventTag.create(event_id: e5.id, hashtag_id: afterworktag.id)
EventTag.create(event_id: e5.id, hashtag_id: nightlifetag.id)
EventTag.create(event_id: e5.id, hashtag_id: rnbtag.id)
EventTag.create(event_id: e5.id, hashtag_id: bktag.id)
EventTag.create(event_id: e5.id, hashtag_id: sktag.id)


e6 = Event.create!(user_id: jojo.id, venue_name: "Lux pleasure", zip: "11211", state: "NJ", img_url: "https://i.ytimg.com/vi/mS-wZJysBvo/maxresdefault.jpg", city: "Jersy City", address: "1220 main rd", event_category_id: concert.id, date: "2022/02/05", description: "come enjoy with me for my birthday! all your favorite hiphop song will be played. and we will have a live performance by lil baby. it's gonna be lit. hurry up and get your spot", link_to_purchase: "")


EventTag.create(event_id: e6.id, hashtag_id: afterworktag.id)
EventTag.create(event_id: e6.id, hashtag_id: concerttag.id)
EventTag.create(event_id: e6.id, hashtag_id: hiphoptag.id)
EventTag.create(event_id: e6.id, hashtag_id: njtag.id)



e7 = Event.create!(user_id: jojo.id, venue_name: "Party Life", zip: "11876", state: "NY", img_url: "https://eventective-media.azureedge.net/2439652_md.jpg", city: "Bronx", address: "1463 Miller rd", event_category_id: nightlife.id, date: "2022/02/06", description: "It's gonna be amazing tonight. we are celebrating my anniversary. i can't wait to see you all. come in full and come on time please.", link_to_purchase: "")


EventTag.create(event_id: e7.id, hashtag_id: afterworktag.id)
EventTag.create(event_id: e7.id, hashtag_id: kompatag.id)
EventTag.create(event_id: e7.id, hashtag_id: hiphoptag.id)
EventTag.create(event_id: e7.id, hashtag_id: nightlifetag.id)
EventTag.create(event_id: e7.id, hashtag_id: socatag.id)
EventTag.create(event_id: e7.id, hashtag_id: zooktag.id)

e8 = Event.create!(user_id: jojo.id, venue_name: "Lux pleasure", zip: "10736", state: "NY", img_url: "https://pyxis.nymag.com/v1/imgs/101/30b/f06555b200ed1e823d4d2241e5788a3160-2----.w710.jpg", city: "Staten Island", address: "56-21 staten island dr", event_category_id: nightlife.id, date: "2022/03/11", description: "this is outdoor and it's spacious. come in full it will be very lovely.", link_to_purchase: "")



EventTag.create(event_id: e8.id, hashtag_id: afterworktag.id)
EventTag.create(event_id: e8.id, hashtag_id: nightlifetag.id)
EventTag.create(event_id: e8.id, hashtag_id: hiphoptag.id)
EventTag.create(event_id: e8.id, hashtag_id: festivaltag.id)
EventTag.create(event_id: e8.id, hashtag_id: amptag.id)

    puts "done seeding"