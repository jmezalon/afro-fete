puts "begin seeding"
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

e1 = Event.create!(user_id: jojo.id, event_name: "AfropolitanNYC - The Black Heritage Experience", venue_name: "Blue Midtown", zip: "10036", state: "NY", img_url: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F200620179%2F206732766879%2F1%2Foriginal.20211214-044101?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C535%2C2156%2C1078&s=190ee8186545975a14dc10593b0a15c6", city: "New York", address: "220 W 44th Street", event_category_id: nightlife.id, date: "2022/02/11", description: "The event also acknowledges and celebrates all African and Caribbean countries with independence in the respective months .", link_to_purchase: "https://www.eventbrite.com/e/afropolitannyc-the-black-heritage-experience-tickets-227460318937?aff=eb dssbcitybrowse")

EventTag.create(event_id: e1.id, hashtag_id: afrobeattag.id)
EventTag.create(event_id: e1.id, hashtag_id: nightlifetag.id)
EventTag.create(event_id: e1.id, hashtag_id: nyctag.id)
EventTag.create(event_id: e1.id, hashtag_id: afrohousetag.id)


e2 = Event.create!(user_id: jojo.id, event_name: "Brunch n Shhh", venue_name: "Katra Lounge & Event Space", zip: "10002", state: "NY", img_url: "https://partyfixx.co/live/wp-content/uploads/2022/01/2022-01-23-302469.jpg", city: "New York", address: "217 Bowery", event_category_id: brunch.id, date: "2022/01/29", description: "We suggest for customers to leave a $10 per person deposit to guarantee/confirm their reservation. Bottomless Brunch + Entree: $45pp - Brunch Times: 2pm, 4pm, 6pm or 8pm - 2hr seating time w/ 2hr Bottomless Drinks - For your convenience, our menu has been listed below - You can stay and enjoy the day party once your seating time is completed", link_to_purchase: "https://www.eventbrite.com/e/brunch-n-shhh-saturday-2hr-open-bar-brunch-and-day-party-tickets-163517941565?aff=ebdssbdestsearch")

EventTag.create(event_id: e2.id, hashtag_id: daypartytag.id)
EventTag.create(event_id: e2.id, hashtag_id: brunchtag.id)
EventTag.create(event_id: e2.id, hashtag_id: nyctag.id)


e3 = Event.create!(user_id: jojo.id, event_name: "Any Given Sunday Brunch & Day Party", venue_name: "Lenox Sapphire Harlem", zip: "10027", state: "NY", img_url: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F215781009%2F286795970478%2F1%2Foriginal.20220120-230227?h=2000&w=720&auto=format%2Ccompress&q=75&sharp=10&s=4049a0b8032dd28c0a167bccda1357f6", city: "New York", address: "341 Lenox Avenue", event_category_id: brunch.id, date: "2022/01/30", description: "Doors open at 2pm Everyone free w/ rsvp - Kitchen open till 10pm. Reservations Are Highly Suggested tables will go fast \n Text: 917-985-9212 | www.thisavibe.com", link_to_purchase: "https://www.eventbrite.com/e/anygiven-sunday-brunch-day-party-tickets-210046523807?aff=ebdssbdestsearch")

EventTag.create(event_id: e3.id, hashtag_id: daypartytag.id)
EventTag.create(event_id: e3.id, hashtag_id: brunchtag.id)
EventTag.create(event_id: e3.id, hashtag_id: nyctag.id)
EventTag.create(event_id: e3.id, hashtag_id: bktag.id)


e4 = Event.create!(user_id: jojo.id, event_name: "L.E.S - (Afterwork Reggae Wednesdays)", venue_name: "LES NYC", zip: "10009", state: "NY", img_url: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F142690421%2F548927895777%2F1%2Foriginal.20210726-154402?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C32%2C1024%2C512&s=858a9763600292948085ba0c267349d4", city: "LES", address: "”432 E 13th Street", event_category_id: afterwork.id, date: "2022/01/26", description: "L.E.S Afterwork Reggae Wednesdays NYC Ladies free w/ RSVP before 8pm only. Follow us @les_nyc", link_to_purchase: "https://www.eventbrite.com/e/les-afterwork-reggae-wednesdays-tickets-158417568211?aff=ebdssbdestsearch")

EventTag.create(event_id: e4.id, hashtag_id: afterworktag.id)
EventTag.create(event_id: e4.id, hashtag_id: nytag.id)
EventTag.create(event_id: e4.id, hashtag_id: regtag.id)    


e5 = Event.create!(user_id: jojo.id, event_name: "Friday Afterwork at Doha Bar & Lounge ", venue_name: "Doha Bar & Lounge in Queens", zip: "11101", state: "NY", img_url: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F198599029%2F240814000140%2F1%2Foriginal.20211209-082846?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C70%2C2240%2C1120&s=a0b0d182f4f63472e811f37c6c2675fc", city: "Astoria", address: "3834 31st Street", event_category_id: afterwork.id, date: "2022/01/28", description: "Dress code Neat & Trendy if you searched Friday after work near me, you're in the right place! Celebrate a Friends Birthday, Bachelor/Bachelorette, Corporate, Graduation, Going Away or Reunion Party Late-night reservations are available for Friday nights after midnight! Please see Saturday morning reservations for Friday past midnight.", link_to_purchase: "https://www.eventbrite.com/e/friday-afterwork-at-doha-bar-lounge-in-astoria-ny-tickets-225097963067?aff=ebdssbdestsearch")

EventTag.create(event_id: e5.id, hashtag_id: afterworktag.id)
EventTag.create(event_id: e5.id, hashtag_id: qnstag.id)
EventTag.create(event_id: e5.id, hashtag_id: hiphoptag.id)    


e6 = Event.create!(user_id: jojo.id, event_name: "DyeimondLashCo After Work Game Night", venue_name: "Party Life Bar & Lounge", zip: "11233", state: "NY", img_url: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F182533439%2F81438767613%2F1%2Foriginal.20211109-020607?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C337%2C1242%2C621&s=4165c3f43b568aaed18f04139a56b1d6", city: "Brooklyn", address: "31 Truxton Street", event_category_id: afterwork.id, date: "2022/01/27", description: "Thursday Night Afterwork Gamenight 8PM-1AM Music By @Djking @Dj Big Beard Hosted By Dyeimondlashco Ladies Free B4 9PM 10$ AFTER Males 10$ B4 10PM 20$ AFTER HAPPY HOUR 8-9pm Birthday Celebrations Available 30$ Hookah Available w/ All Flavors 20$ Refills Hookah Candy Pops 3$ Food Available For Purchase Absolutely no outside food or drinks", link_to_purchase: "https://www.eventbrite.com/e/dyeimondlashco-after-work-gamenight-tickets-89506709979?aff=ebdssbdestsearch")

EventTag.create(event_id: e6.id, hashtag_id: afterworktag.id)
EventTag.create(event_id: e6.id, hashtag_id: bktag.id)
EventTag.create(event_id: e6.id, hashtag_id: gmnighttag.id)    


e7 = Event.create!(user_id: jojo.id, event_name: "NYC YACHT CRUISE BOAT PARTY", venue_name: "Pier 40 at Hudson River Park", zip: "10014", state: "NY", img_url: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F138923979%2F24250841862%2F1%2Foriginal.20210616-155403?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C97%2C630%2C315&s=f96ed338d5ccc6fa8e5b19a04fe8b57a", city: "New York", address: "353 West Street", event_category_id: boatride.id, date: "2022/02/11", description: "Get ready to drop it down and bring it up, it’s time to party New York! Infinity Experience Includes: LIVE DJ 'S ALL AROUND THE YACHT Scenic 3.5-hour cruise of the NYC harbor; Cash Bar (liquor drinks, beer, wine & soda); Captivating views of the Manhattan skyline including the Statue of Liberty, Brooklyn Bridge, Ellis Island, the Freedom Tower and more", link_to_purchase: "https://www.eventbrite.com/e/1-nyc-yacht-cruise-boat-party-nyc-experience-party-tour-tickets-59852662926")

EventTag.create(event_id: e7.id, hashtag_id: nyctag.id)
EventTag.create(event_id: e7.id, hashtag_id: socatag.id)
EventTag.create(event_id: e7.id, hashtag_id: boatridetag.id)    


e8 = Event.create!(user_id: jojo.id, event_name: "Latin Music", venue_name: "Pier 40 Hornblower Cruises & Events", zip: "10014", state: "NY", img_url: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F203665969%2F190353750759%2F1%2Foriginal.20211221-200452?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=f76b9102c649cdafff6b595fce971135", city: "New York", address: "353 West Street", event_category_id: boatride.id, date: "2022/02/12", description: "Get aboard the #1 Cruise on Manhattan waters to celebrate the weekend while enjoying the best views of New York City! Unwind from the week and relax on the water while you indulge on breathtaking views of Manhattan and the Statue of Liberty. While on board, be sure to check out our fully stocked bar! Order drinks straight to your table or at the bar! Our dance floors are fully heated but we are still rocking open-air!", link_to_purchase: "https://www.eventbrite.com/e/the-1-latin-music-boat-party-yacht-cruise-nyc-tickets-159174103027?aff=eb dssbdestsearch")

EventTag.create(event_id: e8.id, hashtag_id: boatridetag.id)
EventTag.create(event_id: e8.id, hashtag_id: nyctag.id)
EventTag.create(event_id: e8.id, hashtag_id: latintag.id)    


e9 = Event.create!(user_id: jojo.id, event_name: "Hot 97 President weekend Day Party rooftop Shutdown ", venue_name: "Harbor NYC Rooftop", zip: "10036", state: "NY", img_url: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F208619829%2F66299487319%2F1%2Foriginal.20220106-205000?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C446%2C1080%2C540&s=535655ea5d17440d0c8c65517b4d921e", city: "New York", address: "621 West 46th Street", event_category_id: dayparty.id, date: "2022/02/20", description: "Music By: Hot 97 Dj Drew ski | True Blends | Dj Yung B - Hip-Hop , R&B , top 40 and latin ,Reggae , Soca , afrobeattags - Everyone Free Before 6 W/Rsvp - Food Is available", link_to_purchase: "https://www.eventbrite.com/e/hot-97-president-weekend-day-party-rooftop-shutdown-tickets-140022841087?aff=ebdssbdestsearch")

EventTag.create(event_id: e9.id, hashtag_id: nytag.id)
EventTag.create(event_id: e9.id, hashtag_id: brunchtag.id)
EventTag.create(event_id: e9.id, hashtag_id: daypartytag.id)    


e10 = Event.create!(user_id: jojo.id, event_name: "Sundaze Brunch & Day Party", venue_name: "Katra Lounge & Event Space", zip: "10002", state: "NY", img_url: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F159973599%2F165609966285%2F1%2Foriginal.20211002-140117?h=2000&w=720&auto=format%2Ccompress&q=75&sharp=10&s=d9dea170143a33cfb917d664496f71be", city: "New York", address: "217 Bowery", event_category_id: dayparty.id, date: "2022/01/30", description: "Everyone free entry with rsvp to Day Party w/ complimentary tequila until 230pm Doors open at 2pm", link_to_purchase: "https://www.eventbrite.com/e/sundaze-brunch-day-party-tickets-233791455537?aff=ebdssbdestsearch")

EventTag.create(event_id: e10.id, hashtag_id: daypartytag.id)
EventTag.create(event_id: e10.id, hashtag_id: nyctag.id)
EventTag.create(event_id: e10.id, hashtag_id: brunchtag.id)    



# these events are the old events
e11 = Event.create!(user_id: jojo.id, event_name: "Black Rose - Chapter 6", venue_name: "Amazura", zip: "11435", state: "NY", img_url: "https://files.slack.com/files-pri/T02MD9XTF-F03034WR9GB/image_from_ios.jpg", city: "Jamaica", address: "91-12 144th PL", event_category_id: nightlife.id, date: "2022/02/20", description: "Nap gen emposib, nap gen klass. It's gonna be Lit!")

EventTag.create(event_id: e11.id, hashtag_id: nightlifetag.id)
EventTag.create(event_id: e11.id, hashtag_id: kompatag.id)
EventTag.create(event_id: e11.id, hashtag_id: qnstag.id)
EventTag.create(event_id: e11.id, hashtag_id: haititag.id)
EventTag.create(event_id: e11.id, hashtag_id: concerttag.id)

e12 = Event.create!(user_id: jojo.id, event_name: "La Nuit Des Jeunes", venue_name: "Amazura", zip: "11435", state: "NY", img_url: "https://files.slack.com/files-pri/T02MD9XTF-F02VADL0UQN/image_from_ios.jpg", city: "Jamaica", address: "91-12 144th PL", event_category_id: nightlife.id, date: "2022/03/26", description: "Bèl bagay nèt. The setting is just beautiful. come with friends. You will enjoy it guarentee.")

EventTag.create(event_id: e12.id, hashtag_id: kompatag.id)
EventTag.create(event_id: e12.id, hashtag_id: qnstag.id)
EventTag.create(event_id: e12.id, hashtag_id: nightlifetag.id)
EventTag.create(event_id: e12.id, hashtag_id: concerttag.id)

e13 = Event.create!(user_id: jojo.id, event_name: "Kick Off Party", venue_name: "Bentley's", zip: "11234", state: "NY", img_url: "https://files.slack.com/files-pri/T02MD9XTF-F02VADL2GJJ/image_from_ios.jpg", city: "Brooklyn", address: "1370 Ralph ave", event_category_id: concert.id, date: "2022/03/25", description: "We have a lot of space for a lot of people. Come and chill and enjoy the good drinks we'll be having.")

EventTag.create(event_id: e13.id, hashtag_id: daypartytag.id)
EventTag.create(event_id: e13.id, hashtag_id: bktag.id)
EventTag.create(event_id: e13.id, hashtag_id: kompatag.id)
EventTag.create(event_id: e13.id, hashtag_id: concerttag.id)

e14 = Event.create!(user_id: jojo.id, event_name: "Lovers Rock | Red & Black Affair", venue_name: "Bentley's", zip: "11234", state: "NY", img_url: "https://files.slack.com/files-pri/T02MD9XTF-F02VADL1VFY/image_from_ios.jpg", city: "Brooklyn", address: "1370 Ralph ave", event_category_id: concert.id, date: "2022/02/11", description:"Come in black and come in red. Nou gen Harmonick, nou gen Kai. DJ Stackz ap la, it's gonna be a movie!")

EventTag.create(event_id: e14.id, hashtag_id: bktag.id)
EventTag.create(event_id: e14.id, hashtag_id: nytag.id)
EventTag.create(event_id: e14.id, hashtag_id: kompatag.id)
EventTag.create(event_id: e14.id, hashtag_id: concerttag.id)


# these events are for dayparty



e16 = Event.create!(user_id: jojo.id, event_name: "Hip-Hop And Gospel", venue_name: "Lux pleasure", zip: "11211", state: "NJ", img_url: "https://i.ytimg.com/vi/mS-wZJysBvo/maxresdefault.jpg", city: "Jersy City", address: "1220 main rd", event_category_id: concert.id, date: "2022/01/25", description: "come enjoy with me for my birthday! all your favorite hiphop song will be played. and we will have a live performance by lil baby. it's gonna be lit. hurry up and get your spot")


EventTag.create(event_id: e16.id, hashtag_id: afterworktag.id)
EventTag.create(event_id: e16.id, hashtag_id: christiantag.id)
EventTag.create(event_id: e16.id, hashtag_id: hiphoptag.id)
EventTag.create(event_id: e16.id, hashtag_id: njtag.id)



e17 = Event.create!(user_id: jojo.id, event_name: "All White Affair", venue_name: "Party Life", zip: "11876", state: "NY", img_url: "https://eventective-media.azureedge.net/2439652_md.jpg", city: "Bronx", address: "1463 Miller rd", event_category_id: nightlife.id, date: "2022/01/25", description: "It's gonna be amazing tonight. we are celebrating my anniversary. i can't wait to see you all. come in full and come on time please.")


EventTag.create(event_id: e17.id, hashtag_id: afterworktag.id)
EventTag.create(event_id: e17.id, hashtag_id: kompatag.id)
EventTag.create(event_id: e17.id, hashtag_id: haititag.id)
EventTag.create(event_id: e17.id, hashtag_id: hiphoptag.id)
EventTag.create(event_id: e17.id, hashtag_id: socatag.id)
EventTag.create(event_id: e17.id, hashtag_id: zooktag.id)

e18 = Event.create!(user_id: jojo.id, event_name: "Night Out", venue_name: "Lux pleasure", zip: "10736", state: "NY", img_url: "https://pyxis.nymag.com/v1/imgs/101/30b/f06555b200ed1e823d4d2241e5788a3160-2----.w710.jpg", city: "Staten Island", address: "56-21 staten island dr", event_category_id: festival.id, date: "2022/03/11", description: "this is outdoor and it's spacious. come in full it will be very lovely.")

EventTag.create(event_id: e18.id, hashtag_id: contemptag.id)
EventTag.create(event_id: e18.id, hashtag_id: festivaltag.id)
EventTag.create(event_id: e18.id, hashtag_id: amptag.id)
EventTag.create(event_id: e18.id, hashtag_id: stdtag.id)



    puts "done seeding"