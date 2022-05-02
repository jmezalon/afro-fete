puts "begin seeding"
EventCategory.all.destroy_all
EventTag.all.destroy_all
Event.all.destroy_all
User.all.destroy_all
Hashtag.all.destroy_all
# two users

jojo = User.create(username:'jojo', full_name:'Jonelle Bain', isPromoter: true, password: 'jojo', password_confirmation: 'jojo')

Max = User.create(username:'jmax', full_name:'Max Mezalon', isPromoter: false, password: 'maxie', password_confirmation: 'maxie')


# these are the event types

dayparty = EventCategory.create(category: "Day Party", img_url: "/event-types-imgs/dayparty.png")
brunch = EventCategory.create(category: "Brunch", img_url: "/event-types-imgs/Brunch.png")
nightlife = EventCategory.create(category: "Nightlife", img_url: "/event-types-imgs/nightlife1.png")
boatride = EventCategory.create(category: "Boat Rides", img_url: "/event-types-imgs/boatrides.png")
afterwork = EventCategory.create(category: "After Work", img_url: "/event-types-imgs/afterwork.png")
art = EventCategory.create(category: "Arts", img_url: "/event-types-imgs/arts.png")
festival = EventCategory.create(category: "Festival", img_url: "/event-types-imgs/festivals.png")
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
nyctag = Hashtag.create(tag: "nyc")
bktag = Hashtag.create(tag: "brooklyn")
qnstag = Hashtag.create(tag: "queens")
stdtag = Hashtag.create(tag: "statenisland")
bxtag = Hashtag.create(tag: "bronx")
lgitag = Hashtag.create(tag: "longisland")
bktag = Hashtag.create(tag: "westchester")
njtag = Hashtag.create(tag: "newjersey")

socatag = Hashtag.create(tag: "soca")
afrobeattag = Hashtag.create(tag: "afrobeat")
regtag = Hashtag.create(tag: "reggae")
hiphoptag = Hashtag.create(tag: "hiphop")
rnbtag = Hashtag.create(tag: "rnb")
afrohousetag = Hashtag.create(tag: "afrohouse")
amptag = Hashtag.create(tag: "amapiano")
sktag = Hashtag.create(tag: "soukous")
zooktag = Hashtag.create(tag: "zook")
kompatag = Hashtag.create(tag: "kompa")

contemptag = Hashtag.create(tag: 'contemporary') 
christiantag = Hashtag.create(tag: 'christian') 
jesustag = Hashtag.create(tag: 'jesuscan')
worshiptag = Hashtag.create(tag: 'worship') 
besttag = Hashtag.create(tag: 'besttimeever') 
abletag = Hashtag.create(tag: 'heisable')
haititag = Hashtag.create(tag: "haiti")
latintag = Hashtag.create(tag: "latin") 
gmnighttag = Hashtag.create(tag: "gamenight")


# these are the new and updated events 

e1 = Event.create!(user_id: jojo.id, event_name: "AfropolitanNYC - The Black Heritage Experience", venue_name: "Blue Midtown", zip: "10036", state: "NY", img_url: "https://freepsdflyer.com/wp-content/uploads/2019/03/Black-Mood-Free-Party-Flyer-Template-FreePSDFlyer-com.jpg", city: "New York", address: "220 W 44th Street", event_category_id: nightlife.id, date: "2022/05/11", description: "The event also acknowledges and celebrates all African and Caribbean countries with independence in the respective months .", link_to_purchase: "https://www.eventbrite.com/e/afropolitannyc-the-black-heritage-experience-tickets-227460318937?aff=eb dssbcitybrowse")

EventTag.create(event_id: e1.id, hashtag_id: afrobeattag.id)
EventTag.create(event_id: e1.id, hashtag_id: nightlifetag.id)
EventTag.create(event_id: e1.id, hashtag_id: nyctag.id)
EventTag.create(event_id: e1.id, hashtag_id: afrohousetag.id)


e2 = Event.create!(user_id: jojo.id, event_name: "Brunch n Shhh", venue_name: "Katra Lounge & Event Space", zip: "10002", state: "NY", img_url: "https://sill.armymwr.com/application/files/7015/7851/2585/Sill-sundayBrunch-Web.jpg", city: "New York", address: "217 Bowery", event_category_id: brunch.id, date: "2022/06/29", description: "We suggest for customers to leave a $10 per person deposit to guarantee/confirm their reservation. Bottomless Brunch + Entree: $45pp - Brunch Times: 2pm, 4pm, 6pm or 8pm - 2hr seating time w/ 2hr Bottomless Drinks - For your convenience, our menu has been listed below - You can stay and enjoy the day party once your seating time is completed", link_to_purchase: "https://www.eventbrite.com/e/brunch-n-shhh-saturday-2hr-open-bar-brunch-and-day-party-tickets-163517941565?aff=ebdssbdestsearch")

EventTag.create(event_id: e2.id, hashtag_id: daypartytag.id)
EventTag.create(event_id: e2.id, hashtag_id: brunchtag.id)
EventTag.create(event_id: e2.id, hashtag_id: nyctag.id)


e3 = Event.create!(user_id: jojo.id, event_name: "Any Given Sunday Brunch & Day Party", venue_name: "Lenox Sapphire Harlem", zip: "10027", state: "NY", img_url: "https://i.pinimg.com/originals/0e/50/a6/0e50a6e387a0c0310388d3c0b206aac9.png", city: "New York", address: "341 Lenox Avenue", event_category_id: brunch.id, date: "2022/06/30", description: "Doors open at 2pm Everyone free w/ rsvp - Kitchen open till 10pm. Reservations Are Highly Suggested tables will go fast \n Text: 917-985-9212 | www.thisavibe.com", link_to_purchase: "https://www.eventbrite.com/e/anygiven-sunday-brunch-day-party-tickets-210046523807?aff=ebdssbdestsearch")

EventTag.create(event_id: e3.id, hashtag_id: daypartytag.id)
EventTag.create(event_id: e3.id, hashtag_id: brunchtag.id)
EventTag.create(event_id: e3.id, hashtag_id: nyctag.id)
EventTag.create(event_id: e3.id, hashtag_id: bktag.id)


e4 = Event.create!(user_id: jojo.id, event_name: "L.E.S - (Afterwork Reggae Wednesdays)", venue_name: "LES NYC", zip: "10009", state: "NY", img_url: "https://t4.ftcdn.net/jpg/03/08/91/81/360_F_308918114_xpWsT1oRVfiVtDHwM0Eyt7bMpfPWCXX0.jpg", city: "LES", address: "”432 E 13th Street", event_category_id: afterwork.id, date: "2022/06/26", description: "L.E.S Afterwork Reggae Wednesdays NYC Ladies free w/ RSVP before 8pm only. Follow us @les_nyc", link_to_purchase: "https://www.eventbrite.com/e/les-afterwork-reggae-wednesdays-tickets-158417568211?aff=ebdssbdestsearch")

EventTag.create(event_id: e4.id, hashtag_id: afterworktag.id)
EventTag.create(event_id: e4.id, hashtag_id: nytag.id)
EventTag.create(event_id: e4.id, hashtag_id: regtag.id)    


e5 = Event.create!(user_id: jojo.id, event_name: "Friday Afterwork at Doha Bar & Lounge ", venue_name: "Doha Bar & Lounge in Queens", zip: "11101", state: "NY", img_url: "https://media-cdn.tripadvisor.com/media/photo-p/0d/a6/1e/01/promotivne-cene-pivo.jpg", city: "Astoria", address: "3834 31st Street", event_category_id: afterwork.id, date: "2022/06/28", description: "Dress code Neat & Trendy if you searched Friday after work near me, you're in the right place! Celebrate a Friends Birthday, Bachelor/Bachelorette, Corporate, Graduation, Going Away or Reunion Party Late-night reservations are available for Friday nights after midnight! Please see Saturday morning reservations for Friday past midnight.", link_to_purchase: "https://www.eventbrite.com/e/friday-afterwork-at-doha-bar-lounge-in-astoria-ny-tickets-225097963067?aff=ebdssbdestsearch")

EventTag.create(event_id: e5.id, hashtag_id: afterworktag.id)
EventTag.create(event_id: e5.id, hashtag_id: qnstag.id)
EventTag.create(event_id: e5.id, hashtag_id: hiphoptag.id)    


e6 = Event.create!(user_id: jojo.id, event_name: "DyeimondLashCo After Work Game Night", venue_name: "Party Life Bar & Lounge", zip: "11233", state: "NY", img_url: "https://cdn.evbuc.com/eventlogos/349121643/afterworkkatraboogs.jpg", city: "Brooklyn", address: "31 Truxton Street", event_category_id: afterwork.id, date: "2022/06/27", description: "Thursday Night Afterwork Gamenight 8PM-1AM Music By @Djking @Dj Big Beard Hosted By Dyeimondlashco Ladies Free B4 9PM 10$ AFTER Males 10$ B4 10PM 20$ AFTER HAPPY HOUR 8-9pm Birthday Celebrations Available 30$ Hookah Available w/ All Flavors 20$ Refills Hookah Candy Pops 3$ Food Available For Purchase Absolutely no outside food or drinks", link_to_purchase: "https://www.eventbrite.com/e/dyeimondlashco-after-work-gamenight-tickets-89506709979?aff=ebdssbdestsearch")

EventTag.create(event_id: e6.id, hashtag_id: afterworktag.id)
EventTag.create(event_id: e6.id, hashtag_id: bktag.id)
EventTag.create(event_id: e6.id, hashtag_id: gmnighttag.id)    


e7 = Event.create!(user_id: jojo.id, event_name: "NYC YACHT CRUISE BOAT PARTY", venue_name: "Pier 40 at Hudson River Park", zip: "10014", state: "NY", img_url: "https://cdn.tourradar.com/s3/tour/645x430/102001_37b1d5a1.jpg", city: "New York", address: "353 West Street", event_category_id: boatride.id, date: "2022/07/11", description: "Get ready to drop it down and bring it up, it’s time to party New York! Infinity Experience Includes: LIVE DJ 'S ALL AROUND THE YACHT Scenic 3.5-hour cruise of the NYC harbor; Cash Bar (liquor drinks, beer, wine & soda); Captivating views of the Manhattan skyline including the Statue of Liberty, Brooklyn Bridge, Ellis Island, the Freedom Tower and more", link_to_purchase: "https://www.eventbrite.com/e/1-nyc-yacht-cruise-boat-party-nyc-experience-party-tour-tickets-59852662926")

EventTag.create(event_id: e7.id, hashtag_id: nyctag.id)
EventTag.create(event_id: e7.id, hashtag_id: socatag.id)
EventTag.create(event_id: e7.id, hashtag_id: boatridetag.id)    


e8 = Event.create!(user_id: jojo.id, event_name: "Latin Music", venue_name: "Pier 40 Hornblower Cruises & Events", zip: "10014", state: "NY", img_url: "https://media.timeout.com/images/103232470/750/422/image.jpg", city: "New York", address: "353 West Street", event_category_id: boatride.id, date: "2022/07/12", description: "Get aboard the #1 Cruise on Manhattan waters to celebrate the weekend while enjoying the best views of New York City! Unwind from the week and relax on the water while you indulge on breathtaking views of Manhattan and the Statue of Liberty. While on board, be sure to check out our fully stocked bar! Order drinks straight to your table or at the bar! Our dance floors are fully heated but we are still rocking open-air!", link_to_purchase: "https://www.eventbrite.com/e/the-1-latin-music-boat-party-yacht-cruise-nyc-tickets-159174103027?aff=eb dssbdestsearch")

EventTag.create(event_id: e8.id, hashtag_id: boatridetag.id)
EventTag.create(event_id: e8.id, hashtag_id: nyctag.id)
EventTag.create(event_id: e8.id, hashtag_id: latintag.id)    


e9 = Event.create!(user_id: jojo.id, event_name: "Hot 97 President weekend Day Party rooftop Shutdown ", venue_name: "Harbor NYC Rooftop", zip: "10036", state: "NY", img_url: "https://dehayf5mhw1h7.cloudfront.net/wp-content/uploads/sites/1300/2021/07/21150936/Esterday_HOT97SJ16-16-818x460.jpg", city: "New York", address: "621 West 46th Street", event_category_id: dayparty.id, date: "2022/07/20", description: "Music By: Hot 97 Dj Drew ski | True Blends | Dj Yung B - Hip-Hop , R&B , top 40 and latin ,Reggae , Soca , afrobeattags - Everyone Free Before 6 W/Rsvp - Food Is available", link_to_purchase: "https://www.eventbrite.com/e/hot-97-president-weekend-day-party-rooftop-shutdown-tickets-140022841087?aff=ebdssbdestsearch")

EventTag.create(event_id: e9.id, hashtag_id: nytag.id)
EventTag.create(event_id: e9.id, hashtag_id: brunchtag.id)
EventTag.create(event_id: e9.id, hashtag_id: daypartytag.id)    


e10 = Event.create!(user_id: jojo.id, event_name: "Sundaze Brunch & Day Party", venue_name: "Katra Lounge & Event Space", zip: "10002", state: "NY", img_url: "https://thumbs.dreamstime.com/b/sunday-vibes-handwritten-calligraphy-modern-lettering-text-abstract-watercolor-paint-splash-background-145658391.jpg", city: "New York", address: "217 Bowery", event_category_id: dayparty.id, date: "2022/06/30", description: "Everyone free entry with rsvp to Day Party w/ complimentary tequila until 230pm Doors open at 2pm", link_to_purchase: "https://www.eventbrite.com/e/sundaze-brunch-day-party-tickets-233791455537?aff=ebdssbdestsearch")

EventTag.create(event_id: e10.id, hashtag_id: daypartytag.id)
EventTag.create(event_id: e10.id, hashtag_id: nyctag.id)
EventTag.create(event_id: e10.id, hashtag_id: brunchtag.id)    



# these events are the old events
e11 = Event.create!(user_id: jojo.id, event_name: "Black Rose - Chapter 6", venue_name: "Amazura", zip: "11435", state: "NY", img_url: "https://flowerlinkla.com/wp-content/uploads/2013/10/black-rose-dektop-hd.png", city: "Jamaica", address: "91-12 144th PL", event_category_id: nightlife.id, date: "2022/07/20", description: "Nap gen emposib, nap gen klass. It's gonna be Lit!")

EventTag.create(event_id: e11.id, hashtag_id: nightlifetag.id)
EventTag.create(event_id: e11.id, hashtag_id: kompatag.id)
EventTag.create(event_id: e11.id, hashtag_id: qnstag.id)
EventTag.create(event_id: e11.id, hashtag_id: haititag.id)
EventTag.create(event_id: e11.id, hashtag_id: concerttag.id)

e12 = Event.create!(user_id: jojo.id, event_name: "La Nuit Des Jeunes", venue_name: "Amazura", zip: "11435", state: "NY", img_url: "https://img.freepik.com/free-photo/nightlife-with-people-dancing-club_23-2149052717.jpg", city: "Jamaica", address: "91-12 144th PL", event_category_id: nightlife.id, date: "2022/08/26", description: "Bèl bagay nèt. The setting is just beautiful. come with friends. You will enjoy it guarentee.")

EventTag.create(event_id: e12.id, hashtag_id: kompatag.id)
EventTag.create(event_id: e12.id, hashtag_id: qnstag.id)
EventTag.create(event_id: e12.id, hashtag_id: nightlifetag.id)
EventTag.create(event_id: e12.id, hashtag_id: concerttag.id)

e13 = Event.create!(user_id: jojo.id, event_name: "Kick Off Party", venue_name: "Bentley's", zip: "11234", state: "NY", img_url: "https://i.pinimg.com/736x/30/cd/05/30cd05f7c7502e9f6d3792a17c4d624b--jamberry-party-jamberry-nails.jpg", city: "Brooklyn", address: "1370 Ralph ave", event_category_id: concert.id, date: "2022/08/25", description: "We have a lot of space for a lot of people. Come and chill and enjoy the good drinks we'll be having.")

EventTag.create(event_id: e13.id, hashtag_id: daypartytag.id)
EventTag.create(event_id: e13.id, hashtag_id: bktag.id)
EventTag.create(event_id: e13.id, hashtag_id: kompatag.id)
EventTag.create(event_id: e13.id, hashtag_id: concerttag.id)

e14 = Event.create!(user_id: jojo.id, event_name: "Lovers Rock | Red & Black Affair", venue_name: "Bentley's", zip: "11234", state: "NY", img_url: "https://m.media-amazon.com/images/M/MV5BYjNlYTAwNzktYzdkMS00NzhlLWE4NjEtYzZjMzY1MWI3ZDQwXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg", city: "Brooklyn", address: "1370 Ralph ave", event_category_id: concert.id, date: "2022/07/11", description:"Come in black and come in red. Nou gen Harmonick, nou gen Kai. DJ Stackz ap la, it's gonna be a movie!")

EventTag.create(event_id: e14.id, hashtag_id: bktag.id)
EventTag.create(event_id: e14.id, hashtag_id: nytag.id)
EventTag.create(event_id: e14.id, hashtag_id: kompatag.id)
EventTag.create(event_id: e14.id, hashtag_id: concerttag.id)


# these events are for dayparty



e16 = Event.create!(user_id: jojo.id, event_name: "Hip-Hop And Gospel", venue_name: "Lux pleasure", zip: "11211", state: "NJ", img_url: "https://i.ytimg.com/vi/mS-wZJysBvo/maxresdefault.jpg", city: "Jersy City", address: "1220 main rd", event_category_id: concert.id, date: "2022/06/25", description: "come enjoy with me for my birthday! all your favorite hiphop song will be played. and we will have a live performance by lil baby. it's gonna be lit. hurry up and get your spot")


EventTag.create(event_id: e16.id, hashtag_id: afterworktag.id)
EventTag.create(event_id: e16.id, hashtag_id: christiantag.id)
EventTag.create(event_id: e16.id, hashtag_id: hiphoptag.id)
EventTag.create(event_id: e16.id, hashtag_id: njtag.id)



e17 = Event.create!(user_id: jojo.id, event_name: "All White Affair", venue_name: "Party Life", zip: "11876", state: "NY", img_url: "https://eventective-media.azureedge.net/2439652_md.jpg", city: "Bronx", address: "1463 Miller rd", event_category_id: nightlife.id, date: "2022/06/25", description: "It's gonna be amazing tonight. we are celebrating my anniversary. i can't wait to see you all. come in full and come on time please.")


EventTag.create(event_id: e17.id, hashtag_id: afterworktag.id)
EventTag.create(event_id: e17.id, hashtag_id: kompatag.id)
EventTag.create(event_id: e17.id, hashtag_id: haititag.id)
EventTag.create(event_id: e17.id, hashtag_id: hiphoptag.id)
EventTag.create(event_id: e17.id, hashtag_id: socatag.id)
EventTag.create(event_id: e17.id, hashtag_id: zooktag.id)

e18 = Event.create!(user_id: jojo.id, event_name: "Fabolous @ Coney Art Walls", venue_name: "Coney Art Walls", zip: "11224", state: "NY", img_url: "https://fever.imgix.net/plan/photo/6afb5dc6-bfae-11ec-8e95-0647d04561f1.jpg?w=550&h=550&auto=format&fm=jpg", city: "Brooklyn", address: "3050 Stillwell ave", event_category_id: art.id, date: "2022/06/11", description: "If you love to draw and have fun with friends, come through.")

EventTag.create(event_id: e18.id, hashtag_id: arttag.id)
EventTag.create(event_id: e18.id, hashtag_id: nyctag.id)

e19 = Event.create!(user_id: jojo.id, event_name: "Micky Dolenz @ Hackensack", venue_name: "Meridian Health Theatre", zip: "07701", state: "NJ", img_url: "https://image.shutterstock.com/image-photo/stock-photo-artistic-artist-art-250nw-262209128.jpg", city: "Staten Island", address: "99 Monmouth St", event_category_id: art.id, date: "2022/05/31", description: "paint and link with companies.")

EventTag.create(event_id: e19.id, hashtag_id: arttag.id)
EventTag.create(event_id: e19.id, hashtag_id: njtag.id)
EventTag.create(event_id: e19.id, hashtag_id: besttag.id)


e20 = Event.create!(user_id: jojo.id, event_name: "Night Out", venue_name: "Lux pleasure", zip: "10736", state: "NY", img_url: "https://pyxis.nymag.com/v1/imgs/101/30b/f06555b200ed1e823d4d2241e5788a3160-2----.w710.jpg", city: "Staten Island", address: "56-21 staten island dr", event_category_id: festival.id, date: "2022/07/11", description: "this is outdoor and it's spacious. come in full it will be very lovely.")

EventTag.create(event_id: e20.id, hashtag_id: contemptag.id)
EventTag.create(event_id: e20.id, hashtag_id: festivaltag.id)
EventTag.create(event_id: e20.id, hashtag_id: amptag.id)
EventTag.create(event_id: e20.id, hashtag_id: stdtag.id)



    puts "done seeding"