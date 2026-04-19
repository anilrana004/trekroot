import React, { useState, useMemo, useEffect } from 'react';
import MobileContactPopup from './components/MobileContactPopup';
import { MapPin, Clock, Mountain, IndianRupee, Star, Menu, X, Search, Phone, Mail, ChevronRight, CheckCircle, MessageCircle, ArrowRight, Shield, Users, Activity, Globe, Heart, LogOut, Camera, Gift, Calendar, Trash2, Plus, Minus, Sparkles, MailOpen, Copy, Backpack, House, BookOpenText, Clapperboard, Compass } from 'lucide-react';

const HERO_VIDEOS = ['/videos/home.png.mp4', '/videos/kedarkantha.png.mp4', '/videos/harkidun.png.mp4', '/videos/himachal.png.mp4', '/videos/chopta.png.mp4'];

const ALL_PILGRIMAGES = [
  { id:'p1', name:'Char Dham Yatra', location:'Uttarakhand', price:30000, duration:10, image:'/image/pilgrimage/char.png', bestTime:'May to June, Sep to Oct', facts:[
    { label:'Yatra Difficulty', value:'Easy to Moderate' },
    { label:'Yatra Duration', value:'10 Days' },
    { label:'Highest Altitude', value:'Kedarnath' },
    { label:'Suitable For', value:'18 to 62 years' },
    { label:'Mode of Yatra', value:'Taxi / Traveller Tempo' },
    { label:'Char Dham Gateway', value:'Haridwar' },
    { label:'Accommodation', value:'Hotel' },
    { label:'Region', value:'Uttarakhand' },
    { label:'Pickup', value:'Railway Station Haridwar, 7.00 AM' },
    { label:'Dropoff', value:'Railway Station Haridwar, 8.00 PM' },
    { label:'Cloakroom', value:'Available' },
    { label:'Group Size', value:'Minimum 4 people & maximum 10 people' },
  ], overview:`Char Dham Yatra in Uttarakhand India Himalayas Dev Bhoomi

Char Dham Yatra – Uttarakhand is a state which has been depicted in the Purans by names like Dev bhoomi (LAND OF GODS), punyabhoomi, rishiyon se youktbhoomi (land full of sages).

Yamunotri, Gangotri, Kedarnath and Badrinath are the four pilgrimage sites located in Indian Himalayas away from pollution in soothing climate and invigorating greenery at different districts "Uttarakhand". These 4 holy places known as "Char Dham" where 'char' means four and dham refers to 'religious destination' and their journey is known as "Tirthyatra" (pilgrimage), where thousands of devotees not only from India but also from abroad come to visit.

A state where many gods and goddesses reside, a state where mother Ganga moves ahead purifying everyone with her holy water, "One such holy place in Uttarakhand" where is situated – 5 badri, 5 Kedar, 5 priyag.

Char Dham Yatra is a pilgrimage tour that covers four sacred Hindu temples located in the state of Uttarakhand, India. The four temples are Yamunotri, Gangotri, Kedarnath, and Badrinath.

Here are some highlights of each temple:

Yamunotri: Located at an altitude of 3293 meters above sea level, Yamunotri temple is dedicated to the goddess Yamuna. The highlight of the temple is the hot water springs called "Janki Chatti" and "Surya Kund," which are believed to have medicinal properties.

Gangotri: Located at an altitude of 3100 meters above sea level, Gangotri temple is dedicated to the goddess Ganga. The highlight of the temple is the Gangotri Glacier, which is the source of the river Ganga.

Kedarnath: Located at an altitude of 3583 meters above sea level, Kedarnath temple is dedicated to Lord Shiva. The highlight of the temple is its stunning location amidst the Himalayan range and the trek that leads to the temple.

Badrinath: Located at an altitude of 3133 meters above sea level, Badrinath temple is dedicated to Lord Vishnu. The highlight of the temple is the natural hot water springs called "Tapt Kund" and the beautiful scenery surrounding the temple.

Overall, the Char Dham Yatra is a spiritually uplifting and physically challenging pilgrimage that attracts devotees from all over India and the world. It is a journey that combines natural beauty, adventure, and devotion.

According to Hindu belief, since when did Char Dham Uttarakhand, Yamunotri, Gangotri, Kedarnath, and Badrinath start?

Char Dham in Uttarakhand, comprising Yamunotri, Gangotri, Kedarnath, and Badrinath, has been regarded as sacred pilgrimage sites in Hinduism for centuries. While there is no definitive historical record specifying the exact dates of their establishment, these pilgrimage sites have a rich mythological and religious significance.

According to Hindu mythology and legends, the origins of the Char Dham can be traced back to ancient times. It is believed that Yamunotri, the source of the Yamuna River, has been revered since the time of the sage Asit Muni, who used to reside in the area. Gangotri, the origin of the Ganges River, is associated with the sage Bhagiratha, who performed severe penance to bring the river down from heaven to cleanse the sins of his ancestors.

Kedarnath, located in the Garhwal Himalayas, is believed to have been established by the Pandavas from the Hindu epic Mahabharata. It is said that after the great Kurukshetra war, the Pandavas sought Lord Shiva's forgiveness for the bloodshed and went on a pilgrimage. Lord Shiva, however, eluded them and manifested himself in the form of a bull at Kedarnath. The Pandavas eventually found Lord Shiva and built the Kedarnath temple at the same location.

Badrinath, situated in the Chamoli district, is associated with Lord Vishnu. It is believed that Lord Vishnu meditated here for thousands of years under a Badri tree. The current Badrinath temple is said to have been established by the sage Adi Shankaracharya in the 8th century CE, although there might have been earlier temples at the site.

While the historical records may not provide precise dates, the religious and mythological significance of these sacred sites has been deeply ingrained in Hindu culture for a long time. Pilgrims from around the world continue to visit these holy places as part of their spiritual journey.

Beliefs for Char Dham Yatra

"Char Dham" holds a great position in Hindu Mythology and people believe that it is important to go for this yatra once in a lifetime in a clockwise direction to get salvation and overcome all the sins. It is great for the people who are in search of spirituality and tranquillity. In the puranas

History of Char Dham Yatra

The above four pilgrimage sites have their own mythological history, which has made these places great holy sites. There are several reasons why people undertake the Char Dham Yatra:

Religious Significance: For devout Hindus, the Char Dham Yatra is an important pilgrimage that is believed to cleanse them of their sins and earn them blessings from the deities. It is believed that visiting the Char Dham shrines brings spiritual upliftment and helps one attain moksha or liberation from the cycle of birth and death.

Adventure and Trekking: The Char Dham Yatra involves a trek through the picturesque Himalayan landscapes, including mountain passes, glaciers, and river crossings. For adventure enthusiasts and nature lovers, this trek provides a unique opportunity to explore the natural beauty of the region.

Cultural Experience: The Char Dham Yatra also provides a cultural experience, as it involves interacting with the locals, experiencing their way of life, and learning about the customs and traditions of the region.

Overall, people undertake the Char Dham Yatra for different reasons, but the common thread that binds them is the belief that the journey will bring them closer to the divine and help them find spiritual fulfillment.

Yamunotri Dham

Goddess Yamuna is the daughter of Lord Surya and sister of Yamraj. It is said in the Puranas that a sage named "Asti Muni" used to live here. When he could not go to Gangotri in his old age, he performed penance. Pleased by his devotion, Mother Ganga began flowing through the Yamuna, allowing him to bathe in both Ganga and Yamuna.

Yamunotri is a major Dham located in the Uttarkashi district of Uttarakhand. It is the source of the river Yamuna. The Yamuna River is considered the second holiest river in India after the Ganga and is the largest tributary of the Ganga.

Pilgrimage Time: The doors of the Yamunotri temple open on Akshaya Tritiya of Shukla Paksha in the month of Vaishakh (May) and close on Yama Dwitiya of Kartik month (November).

The Yamunotri temple is situated at 3,291 meters above sea level and was built in 1839 by the King of Tehri, Sudarshan Shah. It is believed that bathing in the waters here purifies the soul and washes away all sins.

Hot Water Springs: There are hot water springs around the temple, the most important being Surya Kund. Pilgrims cook potatoes and rice here and take them as Prasad.

Gangotri Dham

Gangotri Dham is a major Hindu pilgrimage center located in the Uttarkashi district of Uttarakhand, India. At a distance of 19 km from Gangotri lies Gomukh, the end of the Gangotri glacier and the origin of the Ganga River. According to the Puranas, during the Ashwamedha Yagya, King Sagar sent his 60,000 sons in search of a lost horse. Their search led them to the hermitage of Sage Kapil, who was in deep meditation. The disturbance angered the sage, and he cursed and consumed them. To grant them salvation, Prince Bhagirath performed extreme penance, which pleased Goddess Ganga, who descended to Earth in the form of the sacred river.

Pilgrimage Time: The doors of the Gangotri temple open on Akshaya Tritiya of Shukla Paksha in the month of Vaishakh (May) and close on Yama Dwitiya of Kartik month (November).

The Ganga River is considered the most sacred river in India. It is believed that bathing in the Ganges destroys all sins. After death, it is considered essential to immerse the ashes of the deceased in the Ganga to attain salvation. Gangotri temple is situated at 3,042 meters above sea level and was built in the 19th century by the King of Nepal, Amar Singh Thapa.

Kedarnath Dham

Kedarnath is the most important Hindu pilgrimage center located in the Rudraprayag district of Uttarakhand, India, which is 86 km from Rudraprayag. The Shivling of Kedarnath temple is one of the twelve Jyotirlingas. In Hinduism, Kedarnath is counted among the Char Dham and the five Kedars.

It is written in the Puranas that the Pandavas wanted Lord Shiva to forgive them for the sins they had committed by killing their brothers, the Kauravas, in the battle of Mahabharata. But Lord Shiva did not want to forgive them and turned himself into a bull. When the Pandavas realized that the bull was Lord Shiva, he started to disappear into the ground, but Bhīma caught hold of him from behind. Because of this, the mouth of the bull remained in Nepal and the back part stayed in Kedarnath.

Panch Kedar: All parts of Lord Shiva appeared at different places — hump at Kedarnath, navel at Madhmaheshwar, hair at Kalpeshwar, face at Rudranath, and arms at Tungnath. These five sacred places are collectively known as Panch Kedar.

Pilgrimage Time: The doors of the Kedarnath temple are opened in the month of Baishakh (April–May) and closed in the month of Kartik (October–November).

Kedarnath temple is situated at 3,583 meters above sea level. It is believed to have been originally built by the Pandavas, and later, Saint Adi Shankaracharya constructed a temple next to it in the 8th century.

Badrinath Dham

Badrinath Dham is a major Hindu and Jain pilgrimage center located in the Chamoli district of Uttarakhand, India. This Dham is also dedicated to Lord Adinath, the first Tirthankar of Jainism. Badrinath is situated on the banks of the Alaknanda River.

According to the Puranas, Lord Vishnu meditated here as an act of penance, and to protect him from the harsh natural elements, his wife Goddess Lakshmi took the form of a tree and shielded him. Saint Adi Shankaracharya discovered the idol of Lord Vishnu in the Alaknanda River and placed it in a cave near the Tapt Kund.

Pilgrimage Time: The doors of the Badrinath temple open on Basant Panchami (April–May) and close in the month of Kartik (October–November).

Badrinath temple is situated at an altitude of 2,800 meters above sea level. It was originally established by the Garhwal kings and has been reconstructed multiple times over the centuries.`, basicInfo:[
    { label:'Best Season', value:'Summer and Autumn' },
    { label:'Best Month', value:'May to October' },
    { label:'Nearest Rail Head', value:'Haridwar' },
    { label:'Nearest Airport', value:'Jolly Grant Airport (28 km from Haridwar)' },
    { label:'Food', value:'5 Meals a day while on trek' },
  ], itinerary:[
    { day:1, title:'Haridwar – Ganga Pooja – Drive to Jankichatti', desc:'Pickup at Haridwar after Ganga Pooja. Drive to Jankichatti via Mussoorie, Kamptifall, Nainbag, Damta, Barkot (218 km) (8/9 Hours). Overnight stay at Hotel.' },
    { day:2, title:'Trek to Yamunotri Dham', desc:'Early morning trek from Jankichatti to Yamunotri Dham (5 km) up. After Yamuna Maiya Darshan and pooja, return to Jankichatti. Overnight stay at Hotel.' },
    { day:3, title:'Drive to Gangotri Dham via Uttarkashi & Harshil', desc:'Early morning drive from Jankichatti to Gangotri Dham via Uttarkashi and Harshil Valley (222 km) (8/9 Hours). Overnight stay at Hotel. Evening join Ganga Arti darshan.' },
    { day:4, title:'Gangotri temple & drive to Uttarkashi', desc:'Morning visit Ganga temple; after pooja darshan, same day drive to Uttarkashi (108 km) (6/7 hours). Overnight stay at Hotel.' },
    { day:5, title:'Uttarkashi to Guptkashi', desc:'After breakfast drive from Uttarkashi to Guptkashi (220 km) (8/9 Hours). Overnight stay at Hotel.' },
    { day:6, title:'Guptkashi to Gaurikund – Trek to Kedarnath', desc:'Early morning drive from Guptkashi to Gaurikund (30 km). Same day trek to Kedarnath (16 km) (8/9 hours). Overnight stay at Camp/Hotel. Evening join Kedarnath Arti Darshan.' },
    { day:7, title:'Kedarnath temple – Return to Guptkashi', desc:'Early morning visit Kedarnath temple for pooja and Darshan, then trek back to Gaurikund (16 km) (7/8 hours). Same day drive to Guptkashi. Overnight stay at Hotel.' },
    { day:8, title:'Guptkashi to Badrinath Dham', desc:'Early morning drive from Guptkashi to Badrinath Dham (215 km) (8/9 Hours). Overnight stay at Hotel. Evening join Badrinath Arti Darshan pooja.' },
    { day:9, title:'Badrinath temple, Mana village & nearby sites', desc:'After breakfast visit temple for pooja Darshan and return to hotel. After lunch visit Mana village, Bhimpool, Vyas Gufa, Vasudhara fall, then back to Hotel.' },
    { day:10, title:'Badrinath to Haridwar via Rishikesh', desc:'Early morning drive from Badrinath to Haridwar via Rishikesh (320 km) (10/11 hours).' },
  ] },
  { id:'p2', name:'Do Dham Yatra', location:'Uttarakhand', price:20000, duration:6, image:'/image/pilgrimage/dodham.png', bestTime:'May to October', facts:[
    { label:'Yatra Difficulty', value:'Easy to Moderate' },
    { label:'Yatra Duration', value:'6 Days' },
    { label:'Highest Altitude', value:'Kedarnath' },
    { label:'Suitable For', value:'10 to 62 years' },
    { label:'Mode of Yatra', value:'Taxi / Traveller Tempo' },
    { label:'Char Dham Gateway', value:'Haridwar' },
    { label:'Accommodation', value:'Camp/Hotel' },
    { label:'Region', value:'Uttarakhand' },
    { label:'Pickup', value:'Haridwar / Rishikesh, 6.30 AM' },
    { label:'Dropoff', value:'Haridwar / Rishikesh, 6.30 AM' },
    { label:'Cloakroom', value:'Available' },
    { label:'Group Size', value:'Minimum 4 people & maximum 10 people' },
  ], overview:`Do Dham Yatra in Dev Bhoomi Uttarakhand, India

The Do Dham Yatra typically refers to a pilgrimage tour in the Indian state of Uttarakhand, where devotees visit two of the most revered Hindu temples, Kedarnath and Badrinath. Here's an overview of the Do Dham Yatra to Kedarnath and Badrinath.

Do Dham Yatra to Kedarnath and Badrinath offers devotees a profound spiritual experience amidst the natural beauty of the Himalayas.

Kedarnath Temple: Located in the Garhwal Himalayan range, Kedarnath Temple is dedicated to Lord Shiva. It is one of the twelve Jyotirlingas and is believed to be built by the Pandavas. The temple is situated at an altitude of 3,583 meters (11,755 feet) above sea level, amidst stunning mountain landscapes. Devotees undertake a trek of approximately 16 kilometers from Gaurikund to reach the temple. However, there are also options for helicopter services for those who are unable to trek. The temple opens for a limited period each year due to extreme weather conditions in the region.

Badrinath Temple: Badrinath Temple is located in the Chamoli district of Uttarakhand, dedicated to Lord Vishnu. It is one of the Char Dham pilgrimage sites and is situated along the banks of the Alaknanda River. The temple is believed to have been established by Adi Shankaracharya in the 9th century AD. Badrinath Temple is situated at an altitude of 3,133 meters (10,279 feet) above sea level, surrounded by snow-capped peaks. Devotees can reach the temple by road from Joshimath, which is well-connected by road and is around 45 kilometers away.

Overview of Do Dham Yatra: The Do Dham Yatra to Kedarnath and Badrinath is considered highly auspicious among Hindus, particularly for those seeking spiritual rejuvenation. It usually takes several days to complete the yatra, including travel time and darshan (worship) at both temples. The journey involves traveling through scenic mountainous terrain, offering breathtaking views of the Himalayas. Pilgrims often engage in rituals such as offering prayers, performing puja, and taking dips in the holy waters of rivers and hot springs along the way. Accommodation facilities are available in nearby towns and villages to accommodate pilgrims during their journey.

Overall, the Do Dham Yatra to Kedarnath and Badrinath offers devotees a profound spiritual experience amidst the natural beauty of the Himalayas.

Altitude: Kedarnath Temple is at approximately 3,583 meters (11,755 feet) above sea level. Badrinath Temple is at approximately 3,133 meters (10,279 feet) above sea level.`, basicInfo:[
    { label:'Best Season', value:'Summer and Autumn' },
    { label:'Best Month', value:'May to October' },
    { label:'Nearest Rail Head', value:'Haridwar' },
    { label:'Nearest Airport', value:'Jolly Grant Airport (28 km from Haridwar)' },
    { label:'Food', value:'5 Meals a day while on trek' },
  ], itinerary:[
    { day:1, title:'Pickup & transfer to Sonprayag', desc:'Himalayan Hikers Team will pick up trekkers at Haridwar or Rishikesh at 6:30 AM. Then they will be taken to Sonprayag. Check in to respective hotels and rest for the night.' },
    { day:2, title:'Trek to Kedarnath Temple via Gaurikund', desc:'After breakfast, teams will be dispatched for the Kedarnath temple trail via Gaurikund. Jungle Chatti, Bheembali, and Linchauli are some of the camps you will pass during the trek. As the teams reach Kedarnath temple after covering the new trail, trekkers will stop to visit the temple and receive Lord Kedarnath\'s blessings. Since teams will be staying overnight at camps, hikers will have a great opportunity to explore the surroundings. The tranquil grim of this place will leave trekkers yearning for more.' },
    { day:3, title:'Morning Aarti & return to Sonprayag', desc:'After attending the morning \'Aarti\', teams will prepare for their return. Trek from Kedarnath to Sonprayag on the same day.' },
    { day:4, title:'Sonprayag to Badrinath via Pandukeshwar', desc:'Travel from Sonprayag to Rudraprayag via Pandukeshwar and Badrinath. Overnight stay at Badrinath. En route from Guptkashi to Pandukeshwar, take a bath in the Kund. Then visit the abode of Lord Vishnu, "Badrinath." You can also visit Vyas Gufa, Mana village, Mata Murti Temple, Charan Paduka, Bheem Kund, and the origin of the Saraswati River (Mukha).' },
    { day:5, title:'Badrinath Dham & Mana village', desc:'Explore Badrinath Dham and Mana, the last Indian village. Visit Vyas Gufa and Bhim Pul. Then return to Joshimath for an overnight stay.' },
    { day:6, title:'Joshimath to Rishikesh/Haridwar', desc:'Drive from Joshimath to Rishikesh/Haridwar. Our services end here at around 6:00 PM.' },
  ] },
  { id:'p3', name:'Kedarnath', location:'Uttarakhand', price:9999, duration:5, image:'/image/pilgrimage/kedar.png', bestTime:'May to June, Sep to Oct', facts:[
    { label:'Trek Difficulty', value:'Moderate' },
    { label:'Trek Duration', value:'4 Days / 3 Nights' },
    { label:'Highest Altitude', value:'11,755 ft.' },
    { label:'Suitable For', value:'10 to 60 years' },
    { label:'Total Trek Distance', value:'30 Kms' },
    { label:'Basecamp', value:'Gaurikund' },
    { label:'Accommodation', value:'Homestay/Tents' },
    { label:'Region', value:'Uttarakhand' },
    { label:'Pickup', value:'Haridwar/Rishikesh' },
    { label:'Dropoff', value:'Haridwar/Rishikesh' },
    { label:'Cloakroom', value:'Available' },
    { label:'Off Loading', value:'Available' },
  ], overview:`The Do Dham Yatra typically refers to a pilgrimage to Kedarnath Trek – a renowned pilgrimage destination, forming part of the Char Dham in Uttarakhand's Rudraprayag district. Near the Chorabari Glacier, the source of the Mandakini River, Kedarnath is encircled by majestic snow-capped peaks, including the notable Kedarnath Mountain. Annually, thousands of devotees from across India visit this sacred site.

Many people think the Kedarnath Trek and Kedarkantha Trek are the same, but these are different treks and located in different places. Kedarnath Trek is in Rudraprayag district; Kedarkantha Trek is in Uttarkashi district in Uttarakhand.

Why Choose Himalayan Hikers for Your Kedarnath Yatra?

Planning a trip to the high Himalayas can be overwhelming. We take the stress out of your pilgrimage by providing end-to-end logistics and expert mountain support.

Expert Local Guides: Our team consists of local mountaineers who know every turn of the trail and are trained in high-altitude safety.

Safety First: We provide medical kits and oxygen cylinders for every group and monitor weather updates in real-time.

Comfortable Accommodation: From cozy hotels in Sonprayag to well-managed camps near the temple, we prioritize your rest and recovery.

Authentic Mythology: Our guides don't just show the way but also share the rich legends of the Pandavas, the Panch Kedar, and the 12 Jyotirlingas.

In local dialect 'Kedarnath' means 'lord of fields'; according to a local legend it is believed that Lord Shiva hid in the form of a bull trying to avoid the Pandavas. Bhima, one of the brothers from the Pandavas, recognized Lord Shiva and tried to capture the bull by its tail and hind legs. Just before Bhima could fully grasp the bull, it disappeared into the ground only to later appear in many forms across the region. The hump of this bull appeared in Kedarnath, where it is believed the Pandavas built the temple and later worshipped it.

Kedarnath should not be mistaken as an easy trek; hikers not accustomed to long journeys and altitudes might face some problems, hence it is generally advisable that trekkers practice a reasonable amount of physical fitness.

Kedarnath Temple is a revered Hindu shrine located in the Rudraprayag district of Uttarakhand, India.

Ancient Temple: Kedarnath Temple is one of the oldest temples in India, believed to have been built by the Pandavas during the Mahabharata era.

Dedicated to Lord Shiva: The temple is dedicated to Lord Shiva, one of the most important deities in Hinduism.

High Altitude: The temple is located at an altitude of 3,583 meters (11,755 feet) above sea level, making it one of the highest temples in India.

Magnificent Architecture: The temple's architecture is a beautiful blend of ancient and modern styles, featuring intricate carvings and a unique design.

Unique Rituals: The temple has several unique rituals, including the Abhishekam ceremony, in which the idol of Lord Shiva is bathed with water, milk, and other offerings.

Char Dham Yatra: Kedarnath Temple is one of the four shrines that make up the Char Dham Yatra, a pilgrimage tour considered one of the most sacred in Hinduism.

Importance in Hindu Mythology: According to Hindu mythology, Kedarnath is one of the twelve Jyotirlingas, the most sacred abodes of Lord Shiva. It is also believed to be the place where Lord Shiva absolved the Pandavas of the sin of killing their own brothers during the Mahabharata war.

Overall, Kedarnath Temple is a significant pilgrimage destination for devotees of Lord Shiva and Hinduism, and a beautiful site for tourists to visit and admire the ancient architecture and natural beauty of the surrounding region.

A special place of Lord Shiva in the Himalayas of Uttarakhand – Kedarnath is where a special form of Lord Shiva is seen.

Kedarnath Temple is one of the holy pilgrimage sites in the state of Uttarakhand, northern India, located on the banks of the Mandakini river in the lap of the Himalayas.

The name of the historical heritage of this area is "Kedar Khand".

Kedarnath temple is a special part of the Char Dham Yatra and Panch Kedar in Uttarakhand and is known among the 12 Jyotirlingas of Lord Shiva in India.

Kedarnath is the most remote of all the Char Dham sites where Shiva is the Taposthali, surrounded by snow-capped mountains that attract sages, pilgrims, and tourists alike.

Known for its ancient Shiva temple, a visit to Kedarnath Dham is a beautiful and exhilarating experience.

Like other places, Kedarnath temple closes on the first day of the Hindu month Kartik (October–November), and every year Baba Kedarnath ji's doors open again for his devotees in the month of Vaishakh (April–May).

Ukhimath & Kedarnath – The Dual Seats of Mahadev's Worship

When Lord Shiva is shifted from Kedarnath to Ukhimath Dham, this Shiva temple remains submerged in snow for almost six months. Where sages dedicate themselves to the feet of Baba Kedar even in the winter season, they worship him and do meditation and yoga.

According to legend, Lord Shiva is seen in various forms: arms in Tungnath temple, face in Rudranath temple, stomach in Madmaheshwar temple, and head with hair in Kalpeshwar temple. Kedarnath and these four temples are considered Panch Kedar, where Lord Shiva is worshipped in all the Dhams.

Trek highlights of Kedarnath Trek

Even before the trek starts, trekkers are introduced to many lavish vistas of Rishikesh, Devprayag and Rudraprayag. The magical confluence of Alaknanda & Bhagirathi at Devprayag and Alaknanda with Mandakini at Rudraprayag is an inner-outer experience. Beautiful temples at every few kilometers clearly stamp that yes, trekkers are indeed in the Land of Gods – Uttarakhand.

The trek officially commences from Gaurikund, covering many campsites along the way. Jungle Chatti, Bheembali, and Linchauli are some of the camps we pass during the trek. Throughout the journey trekkers find devotees chanting and celebrating the trail. The echo of "Har Har Mahadev" fills you with an exceptional spiritual embodiment.

The final reach of Kedarnath is enough to overwhelm devotees with the chants of "Mahadev". Temple covered in long ribbons of marigold garlands, long happy queues of devotees, and the calmness of Kedarnath – everything about this place will capture you in its essence.

Top Scenic Attractions to Visit During Your Kedarnath Pilgrimage

Gaurikund: Gaurikund is the base camp for the Kedarnath trek at an altitude of 1,982 meters (6,503 feet). It is believed to be the place where Goddess Parvati meditated to win Lord Shiva's heart.

Rambara: Rambara is a picturesque location around 7 km from Gaurikund, ideal for a break during the trek. It is at 2,835 meters (9,301 feet) and surrounded by beautiful valleys and waterfalls.

Kedarnath Temple: The main attraction at 3,583 meters (11,755 feet), one of the twelve Jyotirlingas and among the most sacred sites in India.

Vasuki Tal: A serene lake around 6 km from Kedarnath at 4,150 meters (13,615 feet), surrounded by mountain peaks and popular for camping and trekking.

Gandhi Sarovar: A glacial lake around 2 km from Kedarnath at 3,900 meters (12,795 feet), named after Mahatma Gandhi, with stunning views of the surrounding ranges.

Things to Look Out For

Souvenirs from Rishikesh are great for memories. There are countless photogenic vistas, so we recommend preparing for aesthetic shoots. The best pictures are those taken under a blue sky with snow-covered peaks in the background. Explore the tranquility of this holy site and submerge yourself in Baba Kedar's blessings.

Altitude Covered in Kedarnath Trek

Rishikesh: 340 m | Sonprayag: 1,829 m | Gaurikund: 1,982 m | Kedarnath: 3,583 m

Kedarnath Temple Opening and Closing Dates

The Kedarnath Temple follows a strict seasonal opening and closing cycle due to heavy snowfall in the Uttarakhand Himalayas.

Opening Date: The temple doors traditionally open in late April or early May on the auspicious day of Akshaya Tritiya. The exact date is announced every year on Maha Shivratri by the temple committee at the Omkareshwar Temple in Ukhimath.

Closing Date: The temple officially closes for the winter on the day of Bhai Dooj, usually in the first week of November. This closing ceremony is a grand event where the silver idol of Lord Shiva begins its journey to its winter home.

Important Note for Travelers: Because the weather at 3,583 meters is unpredictable, the authorities may shift these dates slightly to ensure the safety of pilgrims. During the six months that the temple is closed, the entire Kedarnath valley becomes inaccessible due to several feet of snow. If you are planning your trek for the Char Dham Yatra, it is highly recommended to check the latest updates from the Uttarakhand Tourism official portal before booking your transport and stay.

Booking Information for 2026

The Kedarnath Temple doors are expected to open in late April 2026. Due to high demand for this spiritual escapade, we recommend booking your slot at least three months in advance. Whether you choose to trek on foot, take a pony, or fly via helicopter from Phata or Sirsi, we handle all the registrations and tickets on your behalf.`, basicInfo:[
    { label:'Best Season', value:'Summer and Autumn' },
    { label:'Best Month', value:'May, June, September, October, November – post monsoon season, before and after temple gates open and close' },
    { label:'Nearest Rail Head', value:'Haridwar' },
    { label:'Nearest Airport', value:'Jolly Grant Airport (28 km from Haridwar)' },
    { label:'Food', value:'5 Meals a day while on trek' },
  ], itinerary:[
    { day:1, title:'Pickup Haridwar 6:30 AM – Drive to Guptkashi', desc:'Pickup at 6:30 AM from Haridwar. Drive to Guptkashi (210 km, 8–10 hours). Altitude: 1,319 m. Highlights: Journey alongside Ganga, Alaknanda, and Mandakini rivers. Stop at Devprayag for the holy confluence of Bhagirathi and Alaknanda. Overnight in hotel or homestay at Guptkashi or Sonprayag.' },
    { day:2, title:'Guptkashi via Sonprayag & Gaurikund – Trek to Kedarnath', desc:'Drive from Guptkashi to Sonprayag; local taxi Sonprayag to Gaurikund. Trek to Kedarnath Dham (16 km, 7–9 hours). Altitude gain: 1,982 m (Gaurikund) to 3,583 m (Kedarnath). Trail via Bheembali and Linchauli is steep – maintain a steady pace to reach by late afternoon. Overnight in guest house or camp near the temple. Attend evening Aarti.' },
    { day:3, title:'Morning Arti, Pooja, Darshan – Kedarnath to Guptkashi', desc:'Wake at 3:00 AM for Abhishek/Darshan. Visit Bhairav Nath Temple (500 m uphill) for a bird\'s-eye view. Start descent by 10:00 AM (16 km, 7–8 hours). Reach Gaurikund, taxi to Sonprayag, drive to hotel in Guptkashi for rest.' },
    { day:4, title:'Guptkashi to Rishikesh/Haridwar – Departure', desc:'Drive from Guptkashi to Rishikesh/Haridwar (210 km, 8–10 hours). Himalayan Hikers drop at Rishikesh/Haridwar railway station by 7–8 PM.' },
  ] },
  { id:'p4', name:'Badrinath', location:'Uttarakhand', price:9999, duration:4, image:'/image/pilgrimage/badri.png', bestTime:'May to October', facts:[
    { label:'Trek Difficulty', value:'Moderate' },
    { label:'Trek Duration', value:'3 Days' },
    { label:'Highest Altitude', value:'3300 m' },
    { label:'Suitable For', value:'15 to 62 years' },
    { label:'Total Trek Distance', value:'3-4 Kms' },
    { label:'Basecamp', value:'Joshimath' },
    { label:'Accommodation', value:'Homestay/Hotel' },
    { label:'Region', value:'Uttarakhand' },
    { label:'Pickup', value:'Rishikesh, 6.30 AM' },
    { label:'Dropoff', value:'Rishikesh, 6.30 AM' },
    { label:'Cloakroom', value:'Available' },
    { label:'Group Size', value:'Minimum 4 people & maximum 10 people' },
  ], overview:`The temple is mentioned in various Hindu texts, including the Mahabharata.

Badrinath Trek is a holy site – the famous Badrinath temple is a well-celebrated trek route among Hindu devotees. It is one of the prominent Char Dham pilgrimage sites with thousands of devotees flocking its gates every year.

It is also one of the hundred and eight Divya Desams dedicated to Lord Vishnu. The town of Badrinath lies on the banks of the Alaknanda river in Chamoli district, Uttarakhand, and can be accessed via Joshimath.

Badrinath – The temple is mentioned in various Hindu texts, including the Mahabharata. Badrinath appears in the Mahabharata as a stop on the road to salvation. It is believed that anyone seeking salvation who visits the temple will be blessed by Lord Badri. According to Hindu mythology, Lord Vishnu sat here for meditation; unaware of his surroundings, he was protected by Devi Lakshmi in the form of the Badri tree. Impressed by Devi Lakshmi's devotion, she was renamed Badri Vishal, and the location became known as Badrika Ashram. Lord Vishnu was later referred to as Badrinath.

The trail leading to Badrinath from Joshimath is filled with devotees and their chants, creating a spiritually uplifting atmosphere. The alluring vistas of the nearby places make the overall experience worth every challenge along the way.

Some of the trek highlights of Badrinath Trek

Even before the trek begins, trekkers are treated to breathtaking views of Rishikesh, Devprayag, and Rudraprayag. The magical meeting of Alaknanda and Bhagirathi at Devprayag, and Alaknanda and Mandakini at Rudraprayag, is a spiritual experience. Beautiful temples every few kilometers clearly indicate that trekkers have arrived in the Land of Gods – Uttarakhand.

The trek officially commences from Joshimath, and within a short time trekkers can reach the holy site of Badrinath Temple. The final reach is enough to overwhelm devotees with the chants of "Jai Badrinath." The temple is covered in long ribbons of marigold garlands, with long happy queues of devotees and the calmness of Badrinath. Everything about this place will capture you in its essence.

Things to Look Out For

Souvenirs from Rishikesh are great for memories. There are countless photogenic vistas, so we recommend that you prepare yourself for aesthetic shoots. The best pictures are those taken under a blue sky with snow-covered peaks in the background. Explore the tranquility of this holy site and submerge yourself in Lord Badrinath's blessings. Visit the nearby village of Mana and the majestic Vasudhara Falls. Take a bath in the holy waters of Tapt Kund and leave feeling completely rejuvenated.

The Altitude Covered in Badrinath Trek

Rishikesh – 340 m | Rudraprayag – 690 m | Joshimath – 1,890 m | Badrinath – 3,300 m`, basicInfo:[
    { label:'Best Season', value:'Summer and Autumn' },
    { label:'Best Month', value:'Pre and post monsoon season, when temple gates open and close' },
    { label:'Nearest Rail Head', value:'Haridwar' },
    { label:'Nearest Airport', value:'Jolly Grant Airport (28 km from Haridwar)' },
    { label:'Food', value:'5 Meals a day while on trek' },
  ], itinerary:[
    { day:1, title:'Rishikesh to Rudraprayag to Joshimath', desc:'Drive from Rishikesh via Rudraprayag to Joshimath. Overnight stay at Joshimath.' },
    { day:2, title:'Joshimath to Badrinath', desc:'Drive from Joshimath to Badrinath. Visit the temple and explore the holy site. Overnight stay at Badrinath.' },
    { day:3, title:'Badrinath to Rishikesh', desc:'Drive from Badrinath back to Rishikesh. End of the pilgrimage.' },
  ] },
  { id:'p5', name:'Yamunotri', location:'Uttarakhand', price:5499, duration:3, image:'/image/pilgrimage/yamnoutri.png', bestTime:'May to June, Sep to Oct' },
  { id:'p6', name:'Gangotri', location:'Uttarakhand', price:5499, duration:3, image:'/image/pilgrimage/gangotri.png', bestTime:'May to June, Sep to Oct' },
  { id:'p7', name:'Hemkund Sahib', location:'Uttarakhand', price:8500, duration:4, image:'/image/pilgrimage/sahib.png', bestTime:'May to October', trekFee:{ base:8500, gstPercent:5, insurance:210 }, facts:[
    { label:'Trek Difficulty', value:'Moderate' },
    { label:'Trek Duration', value:'4 Days' },
    { label:'Highest Altitude', value:'4,329 m' },
    { label:'Suitable For', value:'15 to 62 years' },
    { label:'Total Trek Distance', value:'19 Kms' },
    { label:'Basecamp', value:'Govindghat' },
    { label:'Accommodation', value:'Homestay/Hotel' },
    { label:'Region', value:'Uttarakhand' },
    { label:'Pickup', value:'Rishikesh, 6.30 AM' },
    { label:'Dropoff', value:'Rishikesh, 6.30 AM' },
    { label:'Cloakroom', value:'Available' },
    { label:'Group Size', value:'Minimum 4 people & maximum 10 people' },
  ], overview:`The Hemkund Sahib Trek is a famous pilgrimage route in the Indian state of Uttarakhand.

Hemkund Sahib Trek is situated at an elevation of about 4,329 meters (14,200 feet) above sea level in the Chamoli district of Uttarakhand, India. It is surrounded by snow-capped mountains and lush greenery, making it a picturesque destination.

The main attraction of the trek is the Hemkund Sahib Gurudwara, a Sikh place of worship, which is revered as a significant pilgrimage site. It is believed to be the place where Guru Gobind Singh, the tenth Sikh Guru, meditated in his previous birth.

The trek to Hemkund Sahib starts from Govindghat, which is easily accessible by road from Rishikesh or Haridwar. From Govindghat, it is a trek of about 19 kilometers (11.8 miles) to reach Hemkund Sahib. The trek route passes through picturesque landscapes, dense forests, and meandering rivers.

The trek is considered moderately difficult, with steep inclines and rugged terrain. The high altitude can also pose challenges for some trekkers, so it's important to be physically fit and adequately prepared for the journey.

The best time to undertake the Hemkund Sahib trek is during the summer months, from May to October, when the weather is relatively mild and the trekking routes are accessible. During the winter months, the region remains covered in snow, making the trekking trails inaccessible.

Along the trekking route, there are several guesthouses and lodges where trekkers can stay overnight. At Hemkund Sahib, there is a gurdwara that provides free accommodation and meals to pilgrims.

Apart from the natural beauty, the trek also offers a rich cultural experience. Trekkers get to interact with locals, experience the Sikh tradition and hospitality at the gurdwara, and immerse themselves in the serene atmosphere of the Himalayas.

Overall, the Hemkund Sahib trek is not just a physical journey but also a spiritual one, offering trekkers a chance to connect with nature and their inner selves amidst the breathtaking beauty of the Himalayas.

About Hemkund Sahib Gurudwara

Hemkund Sahib is a sacred Sikh pilgrimage site located in the Chamoli district of the Indian state of Uttarakhand. The trek to Hemkund Sahib is renowned for its natural beauty as well as its religious significance.

The history of Hemkund Sahib dates back to the 20th century when it was discovered by Sant Sohan Singh, a Sikh saint, who found this serene place mentioned in the Dasam Granth, a religious scripture of Sikhism. The word "Hemkund" translates to "Lake of Snow" in English, referring to the glacial lake situated at an altitude of about 4,300 meters (14,107 feet) above sea level.

The term "Gurudwara" translates to "the gateway to the Guru" in Punjabi, and it refers to a Sikh place of worship. Gurudwaras are not just places of religious significance but also serve as community centers, where people gather for prayer, meditation, and communal meals known as langar.

Inside a Gurdwara, you'll typically find the Guru Granth Sahib, the holy scripture of Sikhism, placed on a raised platform, which is treated with the utmost reverence. Sikhs bow before the Guru Granth Sahib as a sign of respect and devotion.

Hemkund Sahib is not only significant for Sikhs but also holds importance for Hindus, as it is believed to be the place where Lakshmana, the brother of Lord Rama, meditated. The trek to Hemkund Sahib typically starts from the town of Govindghat and passes through picturesque landscapes, including lush green valleys, dense forests, and eventually rugged mountain terrain before reaching the gurdwara at Hemkund Sahib.

The pilgrimage season to Hemkund Sahib usually starts in May and continues until October, as heavy snowfall blocks the route during the winter months. Thousands of devotees undertake this trek every year to seek spiritual solace and experience the pristine beauty of the Himalayas.

Govind Ghat – The Base Camp of Hemkund Sahib Trek

Govindghat serves as the base camp for the trek to Hemkund Sahib. It is the starting point for pilgrims and trekkers embarking on the journey to this sacred Sikh pilgrimage site. Govindghat is located in the Chamoli district of Uttarakhand, India.

From Govindghat, visitors have two main options to reach Hemkund Sahib:

Trekking: The most common way to reach Hemkund Sahib from Govindghat is by trekking. The trek from Govindghat to Hemkund Sahib is approximately 19 kilometers (11.8 miles) long and usually takes about 6-8 hours, depending on individual fitness levels and weather conditions. Along the way, trekkers pass through picturesque landscapes, including dense forests, cascading waterfalls, and alpine meadows.

Helicopter Service: For those who prefer a quicker and more convenient option, there is also a helicopter service available from Govindghat to Ghangaria, the base camp before Hemkund Sahib. From Ghangaria, visitors can continue their journey to Hemkund Sahib either by trekking or by hiring a pony or mule.

Govindghat offers basic accommodation facilities, eateries, and shops where visitors can stock up on essential supplies before starting their trek to Hemkund Sahib. It's advisable to spend a night in Govindghat before beginning the trek to allow your body to acclimatize to the altitude and prepare for the challenging journey ahead.

The Hemkund Sahib trek, located in the Himalayan region of Uttarakhand, India, is famous for its diverse flora and fauna, including a variety of beautiful Himalayan flowers. Some of the notable flowers that you can find along the Hemkund Sahib trek include:

Brahma Kamal (Saussurea obvallata): This rare and enchanting flower, also known as the "King of Himalayan Flowers," is the state flower of Uttarakhand. It blooms at high altitudes and is often considered sacred in Hindu mythology.

Blue Poppy (Meconopsis aculeata): The blue poppy is known for its striking blue color and delicate petals. It thrives in the alpine meadows and rocky slopes of the Himalayas.

Rhododendron (Rhododendron arboreum): The rhododendron is a common sight along the Hemkund Sahib trek, especially in the lower altitudes. It blooms in vibrant hues of red, pink, and white, adding color to the landscape.

Bistorta (Bistorta affinis): Also known as "Himalayan Bistort," this flower features dense spikes of pink or white blossoms and can be found in moist alpine meadows.

Cobra Lily (Arisaema utile): This unique flower, also called the "Jack-in-the-Pulpit," resembles a cobra with its hooded spathe and long, slender spadix. It grows in damp, shady areas along the trekking route.

Columbine (Aquilegia fragrans): Columbine flowers are known for their distinctive spurred petals and come in various colors, including shades of purple, blue, and white. They are often found in rocky areas and meadows.

Primula (Primula spp.): Primulas are a diverse genus of flowers found in the Himalayas, with species like Primula denticulata and Primula sikkimensis adding pops of color to the landscape with their bright blooms.`, basicInfo:[
    { label:'Best Season', value:'Summer and Autumn' },
    { label:'Best Month', value:'May to October' },
    { label:'Nearest Rail Head', value:'Rishikesh' },
    { label:'Nearest Airport', value:'Jolly Grant Airport (28 km from Haridwar)' },
    { label:'Food', value:'5 Meals a day while on trek' },
  ], itinerary:[
    { day:1, title:'Rishikesh to Govindghat', desc:'Pickup from Rishikesh. Drive to Govindghat.' },
    { day:2, title:'Govindghat to Pulna – Trek to Ghangaria', desc:'Drive from Govindghat to Pulna (last road head). Same day trek to Ghangaria (9 km, approx. 7–8 hours).' },
    { day:3, title:'Ghangaria to Hemkund Sahib and back', desc:'Trek from Ghangaria to Hemkund Sahib and return to Ghangaria.' },
    { day:4, title:'Ghangaria to Govindghat – Return to Rishikesh', desc:'Trek from Ghangaria to Govindghat. Drive back to Rishikesh.' },
  ] },
  { id:'p8', name:'Panch Kedar', location:'Uttarakhand', price:55000, duration:15, image:'/image/pilgrimage/panch.png', bestTime:'May to June, Sep to Oct', facts:[
    { label:'Trek Difficulty', value:'Moderate' },
    { label:'Trek Duration', value:'12 Days / 11 Nights' },
    { label:'Highest Altitude', value:'3,500 m' },
    { label:'Suitable For', value:'15 to 62 years' },
    { label:'Total Trek Distance', value:'107 Kms Approx' },
    { label:'Basecamp', value:'Guptkashi' },
    { label:'Accommodation', value:'Hotel/Tents' },
    { label:'Region', value:'Uttarakhand' },
    { label:'Pickup', value:'Haridwar/Rishikesh' },
    { label:'Dropoff', value:'Haridwar/Rishikesh' },
    { label:'Cloakroom', value:'Available' },
    { label:'Off Loading', value:'Available' },
  ], overview:`The Panch Kedar Trek is a sacred pilgrimage in the Indian state of Uttarakhand, which involves trekking to five different temples dedicated to Lord Shiva.

These temples are known as the Panch Kedar, and they are located in remote areas of the Garhwal Himalayas. The pilgrimage is considered highly significant for devotees of Lord Shiva, and it offers a unique opportunity to explore the natural beauty of the Himalayan region.

The Panch Kedar Yatra holds significant historical and religious importance in Hindu mythology.

Kedarnath Temple: This is the most famous temple among the Panch Kedar. It is located at an altitude of 3,583 meters (11,755 feet) above sea level, in the Rudraprayag district of Uttarakhand. The temple is dedicated to Lord Kedarnath, who is believed to be one of the forms of Lord Shiva. The trek to Kedarnath Temple starts from Gaurikund, which is about 16 kilometers away.

Tungnath Temple: Situated at an altitude of 3,680 meters (12,073 feet), Tungnath is the highest temple of Lord Shiva in the world. It is the second stop of the Panch Kedar Yatra. The trek to Tungnath starts from Chopta, which is around 3.5 kilometers away. From Tungnath, an additional trek of about 1.5 kilometers leads to Chandrashila Peak, which offers breathtaking panoramic views of the surrounding peaks including Nanda Devi, Trishul, and Chaukhamba.

Rudranath Temple: This temple is located at an altitude of 2,286 meters (7,500 feet) above sea level, in the district of Chamoli. Rudranath Temple is believed to be the face of Lord Shiva, and it is the third stop of the Panch Kedar Yatra. The trek to Rudranath starts from Sagar Village, which is around 19 kilometers away.

Madhyamaheshwar Temple: Situated at an altitude of 3,497 meters (11,473 feet), Madhyamaheshwar Temple is believed to be the navel (Madhya) of Lord Shiva. It is the fourth stop of the Panch Kedar Yatra. The trek to Madhyamaheshwar starts from Uniana, which is around 20 kilometers away.

Kalpeshwar Temple: Kalpeshwar Temple is located at an altitude of 2,134 meters (7,001 feet) above sea level, in the Urgam Valley of Chamoli district. It is believed to be the hair (Jata) of Lord Shiva, and it is the final stop of the Panch Kedar Yatra. The trek to Kalpeshwar starts from Helang, which is around 11 kilometers away.

The entire Panch Kedar Yatra trek is challenging and requires adequate preparation, including physical fitness and proper gear. The best time to undertake this pilgrimage is during the summer months (May to June) and early autumn (September to October), as the weather is relatively stable during these times. However, weather conditions can change rapidly in the mountains, so it's essential to stay informed and be prepared for all eventualities. Additionally, it's advisable to consult with local authorities or experienced trekking guides before embarking on the journey.

The Panch Kedar Yatra holds significant historical and religious importance in Hindu mythology.

Legend of the Pandavas and Lord Shiva: According to Hindu mythology, after the Kurukshetra War, the Pandavas sought redemption for their sins committed during the battle, particularly the killing of their relatives. Lord Krishna advised them to seek the blessings of Lord Shiva, who could absolve them of their sins.

The Story: The Pandavas embarked on a journey to find Lord Shiva, who evaded them by taking different forms. When the Pandavas finally reached the Himalayas, Lord Shiva, not wanting to reveal himself, disguised himself as a bull. However, Bhima, the strongest of the Pandavas, recognized Lord Shiva and tried to catch him. But Lord Shiva disappeared, leaving behind his body parts at five different locations, which later became the Panch Kedar temples.

The Five Kedars: The five temples are believed to represent different parts of Lord Shiva's body:

Kedarnath: The hump of Lord Shiva is worshipped here. It is the most prominent temple among the Panch Kedar temples and is located in the Rudraprayag district of Uttarakhand.

Tungnath: This temple is believed to be the place where Lord Shiva's arms appeared. It is the highest Shiva temple in the world and is located in the Rudraprayag district.

Rudranath: This temple is dedicated to Lord Shiva's face and is situated in the Chamoli district.

Madhyamaheshwar: It is believed to be the navel of Lord Shiva, and the temple is located in the Chamoli district.

Kalpeshwar: This temple is associated with Lord Shiva's hair, and it is situated in the Chamoli district.

Significance of the Yatra: The Panch Kedar Yatra is considered a sacred pilgrimage that offers devotees the opportunity to seek the blessings of Lord Shiva and attain spiritual purification. It is believed that undertaking this journey with devotion and sincerity can help devotees attain moksha (liberation) and divine grace.

Over the centuries, the Panch Kedar Yatra has attracted pilgrims from all over the world, who undertake the challenging trek to visit these sacred temples nestled in the pristine Himalayan ranges. The yatra not only offers spiritual solace but also allows pilgrims to immerse themselves in the awe-inspiring beauty of the Himalayas.`, basicInfo:[
    { label:'Best Season', value:'Summer and Early Autumn' },
    { label:'Best Month', value:'May to June, September to October' },
    { label:'Nearest Rail Head', value:'Rishikesh / Haridwar' },
    { label:'Nearest Airport', value:'Jolly Grant Airport (28 km from Haridwar)' },
    { label:'Food', value:'5 Meals a day while on trek' },
  ], itinerary:[
    { day:1, title:'Haridwar/Rishikesh to Guptkashi/Gaurikund', desc:'Drive from Haridwar/Rishikesh to Guptkashi/Gaurikund (240 km, 8/9 hours). Overnight stay at hotel.' },
    { day:2, title:'Gaurikund to Kedarnath Temple', desc:'Trek from Gaurikund to Kedarnath Temple (16 km, 10/11 hours). Kedarnath altitude 3,600 m / 11,700 ft. Overnight stay at Camp or Hotel.' },
    { day:3, title:'Kedarnath to Gaurikund – Drive to Guptkashi/Phata', desc:'Trek descend from Kedarnath to Gaurikund (16 km, 8/9 hours). Drive back to Guptkashi/Phata. Overnight stay at Hotel.' },
    { day:4, title:'Guptkashi to Ransi – Trek to Gaundhar', desc:'Drive from Guptkashi to Ransi (45 km, 2/3 hours). Trek to Gaundhar (6 km, 4/5 hours). Altitude 1,800 m / 5,800 ft. Overnight stay at Camp/Homestay.' },
    { day:5, title:'Gaundhar to Madhyamaheshwar Temple', desc:'Trek from Gaundhar to Madhyamaheshwar Temple (10 km, 7/8 hours). Altitude 3,200 m / 10,600 ft. Overnight stay at Camp/Homestay.' },
    { day:6, title:'Madhyamaheshwar to Ransi – Drive to Chopta', desc:'Trek from Madhyamaheshwar Temple back to Ransi (16 km, 7/8 hours). Altitude 2,900 m / 9,500 ft. Same day drive to Chopta. Overnight stay at Camp/Homestay.' },
    { day:7, title:'Chopta to Tungnath and Chandrashila Peak', desc:'Trek from Chopta to Tungnath and Chandrashila Peak (8 km, 4/5 hours). Altitude 3,500 m / 11,500 ft. Trek back to Camp. Overnight stay at Camp.' },
    { day:8, title:'Chopta to Sagar Village – Trek to Pannar/Lyuti Bugyal', desc:'Drive from Chopta to Sagar Village (35 km, 2/3 hours). Same day trek to Pannar Bugyal/Lyuti Bugyal (8 km, 4/5 hours). Altitude 3,000 m / 10,000 ft. Overnight stay at Camp.' },
    { day:9, title:'Pannar/Lyuti Bugyal to Rudranath and back', desc:'Trek from Pannar Bugyal/Lyuti Bugyal to Rudranath and back (18 km, 8/9 hours). Overnight stay at Camp.' },
    { day:10, title:'Pannar Bugyal to Sagar – Drive to Joshimath/Pipalkoti', desc:'Trek from Pannar Bugyal to Sagar Village (8 km, 5/6 hours). Same day drive to Joshimath/Pipalkoti. Overnight stay at Hotel.' },
    { day:11, title:'Pipalkoti to Kalpeshwar Temple', desc:'Drive from Pipalkoti to Kalpeshwar Temple. Darshan and pooja. Return to Hotel. Overnight stay at Pipalkoti.' },
    { day:12, title:'Pipalkoti to Rishikesh/Haridwar – Tour ends', desc:'Drive from Pipalkoti to Rishikesh or Haridwar (8/9 hours). Tour ends here.' },
  ] },
  { id:'p9', name:'Manikaran Sahib', location:'Himachal Pradesh', price:2999, duration:2, image:'/image/pilgrimage/Manikaran.png', bestTime:'All Year' }
];

const KEDARKANTHA_OVERVIEW = `Kedarkantha Trek – A Majestic Winter Wonderland Trek in the Uttarakhand Himalayas

Kedarkantha Trek is among the most popular winter treks in Uttarakhand, famous for its reliable snowfall, beginner-friendly trail, and panoramic summit views. Situated inside the Govind Wildlife Sanctuary, this winter snow trek is an excellent choice for first-time trekkers seeking a safe and well-supported Himalayan experience from December to April.

The Kedarkantha winter trek features a beautiful blend of dense pine forests, snow-covered campsites, and a rewarding summit climb at 12,500 feet. Thanks to its gradual altitude gain, clearly marked route, and strong safety measures, Kedarkantha is widely regarded as one of the best winter treks in India for beginners.

Kedarkantha Winter Trek: Experience the Magic of Snow in Uttarakhand

The Kedarkantha Winter Trek is one of the best winter treks in India, often referred to as the "Winter Wonderland" or "Queen of Winter Treks", offering an unparalleled blend of adventure and breathtaking landscapes.

The special thing is that Kedarkantha is a triangle-shaped mountain, nestled in the Garhwal region of Uttarakhand in Govind Wildlife Sanctuary national park. At an altitude of 12,500 ft, it provides a perfect opportunity for beginner trekkers to experience the magic of trekking through snow-clad trails, meadows and forests.

The panoramic summit views of the Himalayan peaks, spectacular sunrise and sunset, and the tranquil campsites like Juda Ka Talab and Kedarkantha base camp—which gives a triangle-shape view of the Kedarkantha peak—take you on a heavenly journey of winter wonderland, making it an unforgettable journey for seasoned trekkers. This trek stands out as a must-visit destination for an exhilarating winter adventure.

Kedarkantha Trek – Best Winter Snow Trek for Beginners (2026)

The true beauty of the Kedarkantha Winter Trek unfolds during the snowy season when the entire landscape transforms into a pristine white wonderland. Trekking through snow-laden trails, you'll be greeted by majestic views of towering peaks like Swargarohini I, II, III, Bandarpoonch, and Kalanag. As night falls, the magic intensifies, offering the unforgettable experience of camping under a dazzling moonlit sky, where the serenity of the Himalayas will leave you spellbound. This winter adventure is a perfect escape into nature's untouched splendor.

Updated for 2026 by local Himalayan trekking experts with extensive winter trekking experience.

Discover the Cultural Heritage of Kedarkantha Winter Trek

The Kedarkantha Winter Trek isn't just an adventure through snow-clad trails; it's a journey steeped in cultural heritage. The trek passes through quaint Himalayan villages Sour and Sankri, where you can witness traditional wooden architecture, local festivals, and the warm hospitality of the Garhwali community. At the Kedarkantha summit, trekkers can find a small temple dedicated to Lord Shiva and Ganesh. On June 15 every year a fair takes place here in which all the local people of this valley take part and worship Shiva and Ganesh, which is spoken in the local language as Meru Bagwan. According to legend, Lord Shiva had visited the place with his wife Parvati and made it their temporary home.

3 Things We Love About the Kedarkantha Winter Trek

Traditional village SOUR: This village is the bedrock of the Kedarkantha trek. It is a small village nestled among mountains at an altitude of 1,950 meters. The village is centered around the temple of local deity Someshwar Mahadev, with beautiful wooden carving and sculptures showcasing local arts and culture. Your first and last day stay in Sour and Sankri gives you an opportunity to explore the village—their lifestyle, clothing, local food, festivals, terrace farming, apple orchards and Koti Banal houses.

Pristine forests and beautiful meadows: The forest stretch from village Sour to Juda ka Talab is the most beautiful forest stretch with diverse flora and fauna. The forest is bridged by beautiful meadows which become a winter wonderland when snow covers them and turn into a picturesque location. The trail is lined with dense forests of pine, rhododendron, oak, deodar and various wildflowers and medicinal plants. Fauna includes Himalayan monal, Himalayan woodpecker, langurs, red fox and black eagle, among others. In winter this forest turns into a magical wonderland—every tree wraps itself in a layer of snow glittering when rays of sun fall on it, giving a magical wonderland effect. Trekking through this magical wonderland is a memory for a lifetime to hold and share.

Kedarkantha summit and sunrise view: When something comes after a struggle it always feels magical—something like this is true with the Kedarkantha sunrise. Sunrise comes after a hard climb throughout in the dark, and when the first ray of sun hits you its feel is very special and magical, a moment to remember throughout your life. Sunrise makes every step throughout the trek worth it. Kedarkantha sunrise is one of the most beautiful, stunning and magnificent. The summit gives you a 360-degree view. Reaching the summit gives you an immense sense of accomplishment that few other treks offer.

3 Special Campsites on the Kedarkantha Trek Where Staying Makes Your Winter Trek Experience Even More Special

1. Juda ka Talab Camp — Distance from Sankri to Juda ka Talab: 5 kms. Altitude: 8,858 ft. Highlights: Frozen lake in winter, dense pine forest, beautiful meadows. Himalayan Hikers gives you the opportunity to camp near the special Juda Ka Talab frozen lake. This is our special camping, surrounded by forest and the frozen lake underneath—spending the nights here is a special experience.

2. Kedarkantha Base Camp — Distance from Juda Ka Talab to Kedarkantha base camp: 3 kms. Altitude: 10,498 ft. Highlights: Open meadows, clear views of Swargarohini, Bandarpoonch, Black Peak. Our Kedarkantha Base Camp is a unique place from where you can see the open Himalayas. From here, wherever you look, you can see only beauty, and from here you can easily see Kedarkantha Peak—a special moment before your summit day.

3. Hargaon Camp — Usually used during descent. Distance from Kedarkantha Base Camp to Hargaon Camp: 4 kms. Altitude: 8,498 ft. Highlights: Forested area, gradual slopes, great for night halt. Many companies do not organize this camp and take you back to Juda ka Talab after the Kedarkantha summit, but Himalayan Hikers arranges a stay at a special camp called Hargaon—a special bugyal camp. This will be your last camping night on this Kedarkantha trek.

Sankri Base Camp: Our Hometown & Your Gateway to Adventure — Experience Local Hospitality at Our Own Hotels Swargarohini & The Grand Shiva

Did you know? Sankri is not just a base camp for us—it is our hometown. As locals of Sankri and Saud villages, we at Himalayan Hikers offer a level of hospitality that only a native can provide. Known for the warmth of the Garhwali people, Sankri is the perfect place to immerse yourself in the rich cultural heritage of the Himalayas before you begin your trek.

Stay at our private hotels in Sankri: We ensure our trekkers have the most comfortable start to your journey. We own and operate Hotel Swargarohini and The Grand Shiva Homestay right at the base camp. Staying with us means comfort & safety (hot water, cozy rooms, secure environment), local expertise (guidance from a team that knows every trail and weather pattern), the soul of Sankri & Saud villages—social and cultural connection through community gatherings, traditional music, folk dance and storytelling—and authentic local cuisine: nutritious farm-to-table Pahadi meals like Mandwa Roti, Hari Kafuli, Pahadi Potato Gutka, Rajma and Red Rice.

The trekking hub of Uttarakhand: Sankri is the largest trekking base camp in Uttarakhand and the starting point for over 25 Himalayan expeditions. Apart from the famous Kedarkantha Winter Trek, it serves as the gateway to Har Ki Dun, Phulara Ridge, Bali Pass, Borasu Pass, Dhumdhar Kandi Pass, Rupin Pass, Valley of Flowers, Baraadsar Lake, Brahmatal Trek and many more. Whether you are here for the snow or the summer greens, Sankri welcomes you throughout the year with open arms and authentic Himalayan culture.

Why Choose Himalayan Hikers for Kedarkantha Trek?

Many companies organize the Kedarkantha Trek; Himalayan Hikers offers an experience rooted in local expertise, safety, and 35+ years of Himalayan heritage.

1. The local advantage (Sankri is our home): Unlike many agencies that operate from big cities, we are born and raised in the Himalayas. Our main base is in Sankri, the heart of the Kedarkantha Trek—we know every turn, local story and weather pattern. 100% of our staff—from guides and cooks to porters—are locals.

2. Unmatched safety: Expert guides certified from Nehru Institute of Mountaineering (NIM), trained in wilderness first aid; oximeters, oxygen cylinders and comprehensive first-aid kits on every batch; strong emergency evacuation network and safest bypass routes in bad weather.

3. Premium quality & comfort: High-quality weather-resistant 4-season tents with extra insulation for Kedarkantha winters; nutritious local food prepared fresh at campsites.

4. Eco-conscious trekking: Himalayan Hikers is committed to Leave No Trace—cleanliness drives and bringing non-biodegradable waste back to base for proper disposal.

5. Best value for money: By booking with us you reduce the middleman—we own equipment and have our own local team in Sankri for an honest price without compromising safety or service.`;

const CHOPTA_CHANDRASHILA_OVERVIEW = `Chopta Tungnath & Chandrashila Trek – Mini Switzerland of Uttarakhand

The Chopta–Tungnath–Chandrashila route lies in the Kedarnath Wildlife Sanctuary (Rudraprayag district). Chopta (~2,680 m) is often called the “Mini Switzerland” of Uttarakhand: meadows, forests, and views of peaks like Nanda Devi, Trishul, and Chaukhamba. The area is rich in birds and wildlife—you may spot Himalayan monal and other high-altitude species.

Tungnath is the highest Shiva temple in the world (~12,073 ft) and part of the Panch Kedar. A steep final push leads to Chandrashila summit (“Moon Rock”), with sweeping 360° Himalayan views; it is linked in tradition to Lord Rama after Lanka.

Nearby highlights include Deoriatal (alpine lake with Chaukhamba reflections) and Sari village. The trek is moderate overall: stone-paved trails to Tungnath, a short but steep section to Chandrashila. Autumn (mid-September–November) offers crisp, clear views; winter brings snow trekking; monsoon trails can be slippery—plan accordingly.

This itinerary combines drives from Rishikesh, nights at Chopta, the Tungnath–Chandrashila day, and a Deoriatal excursion before return—ideal for a compact Garhwal mountain experience.`;

const DAYARA_BUGYAL_OVERVIEW = `Dayara Bugyal Trek – India’s Most Stunning High-Altitude Alpine Meadow Trek

The Dayara Bugyal Trek is one of the most breathtaking and beginner-friendly alpine treks in India. Nestled in the heart of Uttarkashi, this trail offers a perfect introduction to high-altitude trekking, with lush forests, ancient villages, and sweeping meadows that seem to touch the sky. At 11,181 ft, Dayara Bugyal rewards you with panoramic views of mighty Himalayan peaks like Bandarpoonch, Rudregaira, Gangotri I, II & III, Jaonli, and Draupadi Ka Danda.

Dayara Bugyal is the queen of lush, rolling landscapes. Spanning over 28 square kilometers, these vast alpine meadows sit at an altitude of 11,181 feet.

The Dayara Bugyal trek lies in Uttarakhand, starting from the mountain village of Raithal. The trek distance from Raithal is about 10 km one way—short yet rewarding, suitable for many age groups with moderate fitness. In total, expect roughly 22 km round trip through oak forests, streams, and snowy mountain scenery.

One of the best things about this trek is its flexibility. Whether you want a short weekend escape or a 4–5 day Dayara Bugyal itinerary, it delivers a full Himalayan experience. The starting point is Raithal village, accessible by road from Dehradun, and it works well as a peaceful acclimatization base.

The best time for Dayara Bugyal depends on the experience you seek—the route can be enjoyed through much of the year. Snow in winter (December to March), flowers in spring–summer (April to June), lush greenery in monsoon (July to August), or golden meadows in autumn (September to November). Weather changes quickly in the mountains; Dayara Bugyal temperatures vary by season. The trek offers serene, awe-inspiring Himalayan scenery at every turn.

Who Can Do Dayara Bugyal Trek

Age limit: Suitable for trekkers aged 8 to 62 years. Children above 8 can join with active supervision and fitness. Seniors up to 62 may participate if they meet fitness requirements and have no high-risk medical issues.

Trekking experience: Ideal for beginners, families, and first-time Himalayan trekkers. No prior high-altitude trekking experience is required.

Required fitness: Good general health with no major medical conditions. You should be able to jog or brisk-walk 5 km in about 45 minutes comfortably.

Mental readiness: Be prepared for about 4–5 hours of trekking daily over moderate terrain. You should be comfortable staying in tents with basic amenities and cold weather.

Acclimatization: Although moderate, the trek reaches 11,181 ft—basic acclimatization awareness helps.

Butter Festival: A Unique Cultural Celebration Near Dayara Bugyal

The Butter Festival (Makhan Holi or Andhuri Utsav) is a unique celebration held around August on the alpine meadows of Dayara Bugyal in Uttarkashi. Unlike traditional Holi, it uses butter and buttermilk instead of colours, symbolizing gratitude toward nature and livestock. Villagers bring their cattle to thank the land for its abundance.

Festivities include traditional Garhwali music and dance, cultural skits, and the Dahi-handi ritual echoing Lord Krishna’s love for butter. A playful highlight is “Butter Holi,” where participants joyfully share butter and curd. Locals prepare traditional food with local ingredients. The event draws villages such as Raithal, Barsu, and others in the Dayara region—a blend of pastoral tradition, spirituality, and community.

If you trek in mid-August, ask your coordinator about this festival for a rare cultural experience.

On the trek we serve up to five meals a day—breakfast, lunch, evening snacks, soup, and dinner—with wholesome Indian, Chinese, and Western options to keep you energized on the trail.`;

const UTTARAKHAND_TREKS = [
  { id:'t1', name:'Kedarkantha Trek', location:'Uttarakhand', price:6999, difficulty:'Easy to Moderate', duration:5, image:'/trek/kedarkantha-hero.jpg', altitude:'12,500 ft', bestTime:'Dec to April', region:'Uttarakhand', bestseller:true, overview: KEDARKANTHA_OVERVIEW, facts:[
    { label:'Trek Difficulty', value:'Easy to Moderate' },
    { label:'Trek Duration', value:'5 Days / 4 Nights' },
    { label:'Highest Altitude', value:'12,500 feet' },
    { label:'Suitable For', value:'8 to 60 years' },
    { label:'Total Trek Distance', value:'25 kms' },
    { label:'Basecamp', value:'Sankri' },
    { label:'Accommodation', value:'Tents/Hotel' },
    { label:'Region', value:'Uttarakhand' },
    { label:'Pickup', value:'Railway Station, Dehradun' },
    { label:'Dropoff', value:'Railway Station, Dehradun' },
    { label:'Cloakroom', value:'Available' },
    { label:'Off Loading', value:'Available' },
  ], itinerary:[
    { day:1, title:'Pickup at Dehradun Railway Station (7:00 AM) to Sankri Base Camp', desc:'Drive to Sankri Base Camp via Mussoorie, Kamptifall, Damta, Purola, Mori. Distance: 190 km | Duration: 8–9 hours. Overnight stay at Sankri hotel (Swargarohini Hotel or The Grand Shiva Hotel).' },
    { day:2, title:'Trek from Sankri to Juda Ka Talab Camp', desc:'Distance: 5 km | Trek time: 4–5 hours | Altitude: 8,858 ft. Overnight stay in camp (twin/three sharing).' },
    { day:3, title:'Trek from Juda Ka Talab to Kedarkantha Base Camp', desc:'Distance: 3 km | Trek time: 2–3 hours | Altitude: 10,498 ft. Overnight stay in camp (twin/three sharing).' },
    { day:4, title:'Summit day: Base Camp → Kedarkantha Peak (12,500 ft) → Base Camp → Hargaon Camp', desc:'Early morning (3:30 AM) trek from base camp to Kedarkantha Peak summit (12,500 ft); same day return to base camp. Lunch, then trek down to Hargaon Camp. Total trek distance: 11 km | Trek time: 7–8 hours | Altitude at Hargaon: 8,498 ft. Overnight stay in camp (twin/three sharing).' },
    { day:5, title:'Trek Hargaon to Sankri & drive back to Dehradun', desc:'Trek from Hargaon Camp to Sankri Market. Distance: 4.5 km | Trek time: 2–3 hours | Altitude: 6,398 ft. Same day drive back to Dehradun: 190 km | Duration: 7–8 hours. Drop-off at Dehradun Railway Station by 9:00–10:00 PM.' },
  ] },
  { id:'t2', name:'Brahmatal Trek', location:'Uttarakhand', price:9499, difficulty:'Moderate', duration:6, image:'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80', altitude:'12,250 ft', bestTime:'Nov to March', region:'Uttarakhand' },
  { id:'t3', name:'Valley of Flowers', location:'Uttarakhand', price:8999, difficulty:'Moderate', duration:6, image:'https://images.unsplash.com/photo-1626245388713-3ea7b36f7311?auto=format&fit=crop&w=800&q=80', altitude:'14,400 ft', bestTime:'July to Sep', region:'Uttarakhand', bestseller:true },
  { id:'t4', name:'Har Ki Dun', location:'Uttarakhand', price:12499, difficulty:'Moderate', duration:7, image:'/trek/harkidun.jpg', altitude:'12,720 ft', bestTime:'April to June, Sep to Dec', region:'Uttarakhand', facts:[
    { label:'Trek Difficulty', value:'Moderate' },
    { label:'Trek Duration', value:'7 Days / 6 Nights' },
    { label:'Highest Altitude', value:'12,720 feet' },
    { label:'Suitable For', value:'8 to 62 years' },
    { label:'Total Trek Distance', value:'46 kms' },
    { label:'Basecamp', value:'Sankri' },
    { label:'Accommodation', value:'Tents/Hotel' },
    { label:'Region', value:'Uttarakhand' },
    { label:'Pickup', value:'Railway Station, Dehradun' },
    { label:'Dropoff', value:'Railway Station, Dehradun' },
    { label:'Cloakroom', value:'Available' },
    { label:'Off Loading', value:'Available' },
  ] },
  { id:'t5', name:'Roopkund Trek', location:'Uttarakhand', price:14999, difficulty:'Difficult', duration:8, image:'https://images.unsplash.com/photo-1600298882283-40b4dcb8b211?auto=format&fit=crop&w=800&q=80', altitude:'16,499 ft', bestTime:'May to June, Sep to Oct', region:'Uttarakhand' },
  { id:'t6', name:'Gaumukh Tapovan', location:'Uttarakhand', price:15999, difficulty:'Difficult', duration:8, image:'https://images.unsplash.com/photo-1589309736404-2e142a2acdf0?auto=format&fit=crop&w=800&q=80', altitude:'14,600 ft', bestTime:'May to June, Sep to Oct', region:'Uttarakhand' },
  { id:'t7', name:'Nag Tibba', location:'Uttarakhand', price:2999, difficulty:'Easy', duration:2, image:'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=800&q=80', altitude:'9,915 ft', bestTime:'All Year', region:'Uttarakhand' },
  { id:'t8', name:'Chopta Chandrashila', location:'Uttarakhand', price:6000, difficulty:'Moderate', duration:3, image:'/trek/chnadr.jpg', altitude:'12,073 ft', bestTime:'April to June, Sep to Nov (autumn best); Dec–Mar snow; avoid heavy monsoon', region:'Uttarakhand', overview: CHOPTA_CHANDRASHILA_OVERVIEW, facts:[
    { label:'Trek Difficulty', value:'Moderate' },
    { label:'Trek Duration', value:'3 Days / 2 Nights' },
    { label:'Highest Altitude', value:'12,073 feet' },
    { label:'Suitable For', value:'8 to 60 years' },
    { label:'Total Trek Distance', value:'14 kms' },
    { label:'Basecamp', value:'Chopta' },
    { label:'Accommodation', value:'Guesthouses, campsites & budget hotels' },
    { label:'Region', value:'Uttarakhand' },
    { label:'Pickup', value:'Rishikesh' },
    { label:'Dropoff', value:'Rishikesh' },
    { label:'Cloakroom', value:'Available' },
    { label:'Off Loading', value:'Available' },
  ], itinerary:[
    { day:1, title:'Pickup Rishikesh – drive to Chopta', desc:'Pickup ~7:30 AM (e.g. Rishikesh Tapovan area). Scenic drive ~212 km, 8–9 hours via Garhwal hills. Altitude at Chopta ~2,012 m. Overnight at hotel/camp in Chopta.' },
    { day:2, title:'Chopta – Tungnath – Chandrashila – return to Chopta', desc:'Trek Chopta → Tungnath → Chandrashila summit and back (~8 km round trip, 6–7 hours). Tungnath (~12,073 ft): highest Shiva temple; Chandrashila: steeper final climb and wide Himalayan views. Overnight at Chopta.' },
    { day:3, title:'Sari – Deoriatal – drive to Rishikesh', desc:'Early start: trek from Sari Village to Deoriatal (~6 km round trip, 3–4 hours), forest trail and lake views. Return to roadhead; drive Sari to Rishikesh ~220 km (8–9 hours). Expected arrival Rishikesh ~8:30–9:30 PM.' },
  ] },
  { id:'t9', name:'Kuari Pass', location:'Uttarakhand', price:9999, difficulty:'Moderate', duration:6, image:'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80', altitude:'12,516 ft', bestTime:'Nov to March', region:'Uttarakhand' },
  { id:'t10', name:'Dayara Bugyal', location:'Uttarakhand', price:8499, difficulty:'Easy to Moderate', duration:4, image:'/trek/darya.jpg', altitude:'11,181 ft', bestTime:'All Year', region:'Uttarakhand', overview: DAYARA_BUGYAL_OVERVIEW, facts:[
    { label:'Trek Difficulty', value:'Easy to Moderate' },
    { label:'Trek Duration', value:'4 Days / 3 Nights' },
    { label:'Highest Altitude', value:'11,181 ft' },
    { label:'Suitable For', value:'8 to 62 years' },
    { label:'Total Trek Distance', value:'22 Kms' },
    { label:'Basecamp', value:'Raithal village' },
    { label:'Accommodation', value:'Tents' },
    { label:'Region', value:'Uttarakhand' },
    { label:'Pickup', value:'Railway Station, Dehradun' },
    { label:'Dropoff', value:'Railway Station, Dehradun' },
    { label:'Cloakroom', value:'Available' },
    { label:'Off Loading', value:'Available' },
  ], itinerary:[
    { day:1, title:'Pickup Dehradun Railway Station → Raithal Base Camp', desc:'Drive: 175 km | Duration: 7–8 hours | Altitude: 7,423 ft | Overnight: homestay at Raithal Village. Highlights: Scenic drive from Dehradun to Raithal via Mussoorie, Suwakholi, and Uttarkashi—Himalayan views, forested roads, and riverside stretches to the Dayara Bugyal trek base.' },
    { day:2, title:'Trek Raithal village to Gui Campsite', desc:'Altitude: 7,423 ft → 9,884 ft | Trek: 5 km | Time: 4–5 hours | Overnight: tents. Highlights: Forest trails and clearings, gentle ascents and scenic views—a peaceful day in the Himalayas.' },
    { day:3, title:'Gui Camp → Dayara Bugyal Summit → Gui Camp', desc:'Altitude: 9,884 ft → 11,181 ft → 9,884 ft | Trek: 12 km | Time: 7–8 hours | Overnight: tents. Highlights: Forested slopes and vast alpine meadows to the summit, wide Himalayan views, then descent back to camp.' },
    { day:4, title:'Gui Camp → Raithal → drive to Dehradun', desc:'Descent: 9,884 ft → 7,423 ft | Trek: 5 km | Time: 3–4 hours. Same day taxi to Dehradun: 175 km, 7–8 hours | Drop-off: Dehradun Railway Station. Highlights: Descend through meadows and forests; certificate ceremony at Raithal; farewell at Dehradun station. Post-trek travel: expect Dehradun ~6:30–7:30 PM; plan onward travel after 9:00 PM. ISBT ~6 km (≈30 min); Jolly Grant Airport ~27 km (≈1 hr by taxi). Consider a buffer day to explore Dehradun, Mussoorie, or Rishikesh.' },
  ] },
  { id:'t11', name:'Pangarchulla Peak', location:'Uttarakhand', price:10999, difficulty:'Difficult', duration:6, image:'https://images.unsplash.com/photo-1543081198-d8bb3c59e742?auto=format&fit=crop&w=800&q=80', altitude:'15,069 ft', bestTime:'April to May', region:'Uttarakhand' },
  { id:'t12', name:'Bali Pass', location:'Uttarakhand', price:18999, difficulty:'Difficult', duration:8, image:'https://images.unsplash.com/photo-1520114008154-1fc057c3d223?auto=format&fit=crop&w=800&q=80', altitude:'16,207 ft', bestTime:'May to June, Sep to Oct', region:'Uttarakhand' },
  { id:'t13', name:'Satopanth Lake', location:'Uttarakhand', price:22999, difficulty:'Difficult', duration:8, image:'https://images.unsplash.com/photo-1626071060960-4c1266e74659?auto=format&fit=crop&w=800&q=80', altitude:'15,100 ft', bestTime:'June, Sep to Oct', region:'Uttarakhand' },
  { id:'t14', name:'Kedartal Trek', location:'Uttarakhand', price:16999, difficulty:'Difficult', duration:7, image:'https://images.unsplash.com/photo-1589408221884-25e1fc414b2e?auto=format&fit=crop&w=800&q=80', altitude:'15,485 ft', bestTime:'May to June, Sep to Oct', region:'Uttarakhand' },
  { id:'t15', name:'Dodital Trek', location:'Uttarakhand', price:7999, difficulty:'Easy to Moderate', duration:5, image:'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=800&q=80', altitude:'10,300 ft', bestTime:'April to Nov', region:'Uttarakhand' },
];

const HIMACHAL_TREKS = [
  { id:'t16', name:'Triund Trek', location:'Himachal Pradesh', price:2499, difficulty:'Easy', duration:2, image:'https://images.unsplash.com/photo-1596423735880-5c6fa7f0a827?auto=format&fit=crop&w=800&q=80', altitude:'9,350 ft', bestTime:'March to Dec', region:'Himachal Pradesh' },
  { id:'t17', name:'Hampta Pass', location:'Himachal Pradesh', price:9999, difficulty:'Moderate', duration:5, image:'https://images.unsplash.com/photo-1627885287664-5853b0a7eaab?auto=format&fit=crop&w=800&q=80', altitude:'14,100 ft', bestTime:'June to Sep', region:'Himachal Pradesh' },
  { id:'t18', name:'Bhrigu Lake', location:'Himachal Pradesh', price:7999, difficulty:'Moderate', duration:4, image:'https://images.unsplash.com/photo-1563240030-22c6e6bcab1f?auto=format&fit=crop&w=800&q=80', altitude:'14,000 ft', bestTime:'June to Sep', region:'Himachal Pradesh' },
  { id:'t19', name:'Beas Kund', location:'Himachal Pradesh', price:6999, difficulty:'Moderate', duration:4, image:'https://images.unsplash.com/photo-1581458852391-7fbaec6ab3d0?auto=format&fit=crop&w=800&q=80', altitude:'12,772 ft', bestTime:'May to Oct', region:'Himachal Pradesh' },
  { id:'t20', name:'Pin Parvati Pass', location:'Himachal Pradesh', price:24999, difficulty:'Difficult', duration:11, image:'https://images.unsplash.com/photo-1626245388713-3ea7b36f7311?auto=format&fit=crop&w=800&q=80', altitude:'17,450 ft', bestTime:'July to Sep', region:'Himachal Pradesh' },
  { id:'t21', name:'Indrahar Pass', location:'Himachal Pradesh', price:9499, difficulty:'Moderate to Difficult', duration:4, image:'https://images.unsplash.com/photo-1543081198-d8bb3c59e742?auto=format&fit=crop&w=800&q=80', altitude:'14,245 ft', bestTime:'May to Oct', region:'Himachal Pradesh' },
  { id:'t22', name:'Kareri Lake', location:'Himachal Pradesh', price:4999, difficulty:'Easy to Moderate', duration:3, image:'https://images.unsplash.com/photo-1506154467389-1382414777dd?auto=format&fit=crop&w=800&q=80', altitude:'9,610 ft', bestTime:'May to July, Sep to Nov', region:'Himachal Pradesh' },
  { id:'t23', name:'Kheerganga', location:'Himachal Pradesh', price:2999, difficulty:'Easy', duration:2, image:'https://images.unsplash.com/photo-1605640840469-6535d55b387e?auto=format&fit=crop&w=800&q=80', altitude:'9,711 ft', bestTime:'May to Nov', region:'Himachal Pradesh' },
  { id:'t24', name:'Chandratal Lake', location:'Himachal Pradesh', price:5999, difficulty:'Moderate', duration:3, image:'https://images.unsplash.com/photo-1626071060960-4c1266e74659?auto=format&fit=crop&w=800&q=80', altitude:'14,100 ft', bestTime:'June to Sep', region:'Himachal Pradesh' },
  { id:'t25', name:'Deo Tibba Base Camp', location:'Himachal Pradesh', price:12999, difficulty:'Moderate', duration:6, image:'https://images.unsplash.com/photo-1589309736404-2e142a2acdf0?auto=format&fit=crop&w=800&q=80', altitude:'14,000 ft', bestTime:'May to Oct', region:'Himachal Pradesh' },
  { id:'t26', name:'Friendship Peak', location:'Himachal Pradesh', price:18499, difficulty:'Difficult', duration:7, image:'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80', altitude:'17,352 ft', bestTime:'May to June, Sep to Oct', region:'Himachal Pradesh' },
];

const ALL_TREKS = [...UTTARAKHAND_TREKS, ...HIMACHAL_TREKS];

const INCLUSIONS = ['Experienced Trek Leader','Nutritious Meals on Trek','Trekking Equipment','Permits & Forest Fees','First Aid Kit','Safety Gear','Accommodation'];
const EXCLUSIONS = ['Transportation to basecamp','Personal Expenses','Travel Insurance','Air/Train Tickets','Activities not mentioned'];

const BLOG_POSTS = [
  {
    id:'b1',
    title:'How to Choose Your First Himalayan Trek',
    category:'Trek Planning',
    readTime:'7 min read',
    date:'2026-03-01',
    hero:'/trek/kedarkantha-hero.jpg',
    snippet:'Confused between Kedarkantha, Dayara Bugyal and Chopta Chandrashila? Use difficulty, season and travel time to zero-in on the right first trek.',
    content:`Choosing your first Himalayan trek can feel overwhelming. There are dozens of “easy” and “beginner-friendly” options, each promising snow, campsites and summit views. Instead of chasing what is most viral on social media, it helps to match the trek to *your* season, fitness and travel constraints.

Think first about **season**. If you want snow and clear winter skies between December and March, classic routes like Kedarkantha and Chopta–Chandrashila work beautifully. For late spring and monsoon breaks, meadow treks such as Dayara Bugyal or Valley of Flowers are more comfortable.

Next, be honest about **difficulty and altitude**. For a first Himalayan experience, we like itineraries between 3–5 days with maximum altitude around 11,000–12,500 ft and daily walking of 5–8 km. This gives your body time to acclimatise without being punishing. If you can brisk–walk 5 km in 40–45 minutes on city roads, you are ready for most “easy to moderate” treks on TrekRoots.

Finally, consider **access and buffer days**. Check how long it takes to reach the basecamp from your nearest railway station or airport, and always keep at least one spare day in your plan for weather or road delays. A well–chosen first trek should leave you tired but excited for the next mountain, not burnt out.

On TrekRoots, each trek page highlights season, difficulty, altitude and travel logistics. Use that information along with this checklist to pick a route that suits your dates and your group, then speak with our coordinators for fine–tuning.`,
  },
  {
    id:'b2',
    title:'What to Expect on a Winter Trek Like Kedarkantha',
    category:'Winter Treks',
    readTime:'6 min read',
    date:'2026-01-10',
    hero:'/trek/kedarkantha-hero.jpg',
    snippet:'Layering, campsite life, sunrise summit pushes and safety basics for snow treks in Garhwal.',
    content:`Winter treks in Uttarakhand look dreamy in photos—snow–draped forests, golden light on summits and cosy tents. On the ground, they are a balance of beauty and discipline.

Days usually start with **layering up before dawn**. Temperatures around Kedarkantha or Dayara Bugyal can drop well below freezing, so you rely on three–layer clothing: thermal base, fleece or light down, and a wind–/water–resistant outer shell. Good gloves, woollen socks and a beanie are non–negotiable.

Summit day often involves a **pre–sunrise start** with headlamps. Your guide sets an easy but steady pace, checking in on breathing and energy. As the sun rises, snow softens and views open up—this is the reward for the early alarm.

Back at camp, expect simple but **hot freshly cooked meals** and time to warm up. Good operators carry oximeters, a basic medical kit and spare gear to keep the group safe. When you know what to expect, winter treks feel less intimidating and more like the adventure they truly are.`,
  },
  {
    id:'b3',
    title:'Dayara Bugyal Butter Festival – Culture Beyond the Trek',
    category:'Culture',
    readTime:'5 min read',
    date:'2025-08-20',
    hero:'/trek/darya.jpg',
    snippet:'Why the Makhan Holi of Raithal and Barsu is one of the most unique high–altitude festivals in Uttarakhand.',
    content:`High above Uttarkashi, the meadows of Dayara Bugyal host a celebration that feels like a living postcard from Garhwal. Locals call it **Makhan Holi** or **Andhuri Utsav**—a butter festival that blends gratitude, play and devotion.

Every August, villagers from Raithal, Barsu and nearby hamlets bring their cattle up to the meadows to thank the land for rich pasture. Instead of coloured powder, people use **butter and buttermilk**, echoing the stories of Krishna and his love for makhan. There is music, dhol–damau, circle dances and a local version of the dahi–handi ritual.

For trekkers, timing a Dayara Bugyal itinerary with this festival adds a layer of **culture and community** to the usual summit views. It is also a reminder that these landscapes are not just playgrounds for visitors—they are working commons woven into local life and faith.

If you are planning Dayara Bugyal around mid–August, ask our team about festival dates and etiquette so you can participate respectfully.`,
  },
];

const REELS = [
  { id:'r1', title:'Kedarkantha Winter Sunrise', note:'Paste YouTube embed code for this reel here.' },
  { id:'r2', title:'Har Ki Dun Valley Walkthrough', note:'Paste YouTube embed code for this reel here.' },
  { id:'r3', title:'Dayara Bugyal Snow Meadows', note:'Paste YouTube embed code for this reel here.' },
  { id:'r4', title:'Chopta–Tungnath–Chandrashila Highlights', note:'Paste YouTube embed code for this reel here.' },
];

const FITNESS_QUIZ_QUESTIONS = [
  { id:1, question:'How often do you exercise?', options:['Never','1-2 times/week','3-4 times/week','5+ times/week'] },
  { id:2, question:'Can you run 30 minutes non-stop?', options:['No','Sometimes','Usually','Always'] },
  { id:3, question:'High altitude experience?', options:['Never','Once','2-3 times','4+ times'] },
  { id:4, question:'Trekking distance comfort level?', options:['< 5km','5-10km','10-20km','20+ km'] },
];

const getGeminiApiKey = () => {
  const key = import.meta.env.VITE_GEMINI_API_KEY;
  return key ? key.trim() : '';
};

const generateItinerary = (days) => {
  const itinerary = [];
  for (let i = 1; i <= days; i++) {
    if (i === 1) itinerary.push({ day:i, title:'Arrival at Basecamp', desc:'Arrive and acclimatization.' });
    else if (i === days) itinerary.push({ day:i, title:'Departure', desc:'Final descent and departure.' });
    else if (i === Math.ceil(days/2)) itinerary.push({ day:i, title:'Summit Day', desc:'Ascent to highest point. Early morning start.' });
    else itinerary.push({ day:i, title:`Trek to Camp ${i-1}`, desc:`Scenic trek through Himalayan landscapes.` });
  }
  return itinerary;
};

const callGeminiAPI = async (prompt) => {
  const apiKey = getGeminiApiKey();
  if (!apiKey) throw new Error('API key not configured');
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
  const payload = { contents: [{ parts: [{ text: prompt }] }] };
  const delays = [1000, 2000, 4000, 8000, 16000];
  for (let i = 0; i < 6; i++) {
    try {
      const res = await fetch(url, { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(payload) });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      return data.candidates?.[0]?.content?.parts?.[0]?.text;
    } catch (error) {
      if (i === 5) throw error;
      await new Promise(resolve => setTimeout(resolve, delays[i]));
    }
  }
};

// Components
const Toast = ({ message, show, onClose }) => {
  if (!show) return null;
  return (
    <div className="fixed bottom-4 right-4 z-[9999] bg-green-600 text-white px-6 py-4 rounded-lg shadow-xl flex items-center gap-3">
      <CheckCircle size={20} /><span>{message}</span>
      <button onClick={onClose} className="hover:opacity-75"><X size={18} /></button>
    </div>
  );
};

const Navbar = ({ currentPage, navigateTo, user, cartCount, onProfileClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name:'Home', view:'home' }, { name:'Treks', view:'treks' },
    { name:'Pilgrimages', view:'pilgrimages' }, { name:'Blog', view:'blog' }, { name:'Reviews', view:'reviews' },
    { name:'Contact', view:'contact' },
  ];
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => navigateTo('home')}>
            <img src="/logo/logo.png" alt="TrekRoots" className="h-12 w-auto object-contain" />
          </div>
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map(link => (
              <button key={link.name} onClick={() => navigateTo(link.view)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${currentPage===link.view ? 'text-[#0B3D91] bg-blue-50' : 'text-slate-600 hover:text-[#0B3D91] hover:bg-slate-50'}`}>
                {link.name}
              </button>
            ))}
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <button onClick={onProfileClick} className="flex items-center space-x-2 px-4 py-2 bg-blue-50 text-[#0B3D91] rounded-full border border-blue-100">
                <div className="w-7 h-7 bg-[#0B3D91] text-white rounded-full flex items-center justify-center text-xs font-bold">{user.name[0]}</div>
                <span className="text-sm font-semibold">{user.name.split(' ')[0]}</span>
              </button>
            ) : (
              <div className="flex items-center space-x-3">
                <button onClick={() => navigateTo('auth','signup')} className="bg-[#0B3D91] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-800 shadow-md">Join Us</button>
              </div>
            )}
          </div>
          <div className="md:hidden flex items-center space-x-4">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-600">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-2xl">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map(link => (
              <button key={link.name} onClick={() => { navigateTo(link.view); setIsOpen(false); }}
                className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium ${currentPage===link.view ? 'bg-blue-50 text-[#0B3D91]' : 'text-slate-600 hover:bg-slate-50'}`}>
                {link.name}
              </button>
            ))}
            {!user && (
              <div className="pt-4 mt-4 border-t border-slate-100 flex flex-col space-y-3 px-4">
                <button onClick={() => { navigateTo('auth','signup'); setIsOpen(false); }} className="w-full bg-[#0B3D91] text-white py-3 rounded-lg font-bold">Join Us</button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

const Footer = ({ navigateTo }) => (
  <footer className="bg-slate-900 text-slate-300">
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
        <div className="space-y-6 flex flex-col items-center md:items-start">
          <img src="/logo/logo.png" alt="TrekRoots" className="h-14 w-auto brightness-0 invert" />
          <p className="text-slate-400 text-sm leading-relaxed max-w-xs">Expert-led expeditions and sacred pilgrimages with cultural depth.</p>
          <div className="flex space-x-4">
            <button className="h-10 w-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-[#0B3D91]"><MessageCircle size={20} /></button>
            <button className="h-10 w-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-[#0B3D91]"><Users size={20} /></button>
          </div>
        </div>
        <div>
          <h3 className="text-white font-bold text-lg mb-6">Quick Nav</h3>
          <ul className="space-y-4">
            <li><button onClick={() => navigateTo('home')} className="hover:text-white">Home</button></li>
            <li><button onClick={() => navigateTo('treks')} className="hover:text-white">Treks</button></li>
            <li><button onClick={() => navigateTo('pilgrimages')} className="hover:text-white">Pilgrimages</button></li>
            <li><button onClick={() => navigateTo('blog')} className="hover:text-white">Blog</button></li>
            <li><button onClick={() => navigateTo('gallery')} className="hover:text-white">Gallery</button></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-bold text-lg mb-6">Support</h3>
          <ul className="space-y-4">
            <li><button onClick={() => navigateTo('contact')} className="hover:text-white">Contact</button></li>
            <li><button className="hover:text-white">Safety Protocols</button></li>
            <li><button className="hover:text-white">Terms of Service</button></li>
            <li><button onClick={() => navigateTo('admin')} className="text-slate-700 hover:text-slate-500 text-xs">Admin</button></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-white font-bold text-lg mb-6">HQ Contact</h3>
          <p className="flex items-center justify-center md:justify-start gap-3"><MapPin size={18} className="text-blue-400" /><span>Rishikesh, Uttarakhand</span></p>
          <p className="flex items-center justify-center md:justify-start gap-3"><Phone size={18} className="text-blue-400" /><span>+91 98765 43210</span></p>
          <p className="flex items-center justify-center md:justify-start gap-3"><Mail size={18} className="text-blue-400" /><span>info@trekroots.com</span></p>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} TrekRoots. Cultivated with passion in the Himalayas.</p>
      </div>
    </div>
  </footer>
);

const MobileBottomNav = ({ currentView, navigateTo }) => {
  const tabs = [
    { id:'home', label:'Home', icon:House },
    { id:'treks', label:'Treks', icon:Compass },
    { id:'pilgrimages', label:'Yatra', icon:MapPin },
    { id:'reels', label:'Reels', icon:Clapperboard },
    { id:'blog', label:'Blog', icon:BookOpenText },
  ];
  return (
    <div className="fixed md:hidden bottom-0 inset-x-0 z-50 border-t border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="grid grid-cols-5 px-1 py-1">
        {tabs.map(tab => {
          const active = currentView===tab.id || (tab.id==='blog' && currentView==='blog-detail');
          return (
            <button
              key={tab.id}
              onClick={() => navigateTo(tab.id)}
              className={`flex flex-col items-center justify-center py-2 rounded-xl transition-all ${active ? 'text-[#0B3D91] bg-blue-50' : 'text-slate-500'}`}
            >
              <tab.icon size={18} />
              <span className="mt-1 text-[10px] font-semibold tracking-wide">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

const TrekCard = ({ trek, navigateTo, isFavored, onFavorite }) => (
  <div className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full cursor-pointer"
    onClick={() => navigateTo('trek-detail', trek.id)}>
    <div className="relative h-72 sm:h-80 md:h-96 overflow-hidden">
      <img src={trek.image} alt={trek.name} className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute top-4 left-4 flex gap-2 z-[2]">
        <span className="bg-white/90 backdrop-blur-md text-slate-900 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">{trek.location.split(',')[0]}</span>
        {trek.bestseller && <span className="bg-amber-400 text-slate-900 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center"><Star size={10} className="mr-1 fill-slate-900" /> Bestseller</span>}
      </div>
      <h3 className="absolute bottom-4 left-6 right-16 z-[1] text-xl sm:text-2xl font-black text-white drop-shadow-lg pointer-events-none">{trek.name}</h3>
      <button onClick={e => { e.stopPropagation(); onFavorite?.(trek.id); }}
        className="absolute bottom-4 right-4 z-[2] h-10 w-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all">
        <Heart size={20} className={isFavored ? 'fill-red-500 text-red-500' : 'text-slate-400'} />
      </button>
    </div>
    <div className="p-6 flex flex-col flex-grow bg-gradient-to-b from-white to-slate-50/20">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500 mb-6 uppercase tracking-widest">
        <span className="flex items-center"><Clock size={14} className="mr-1.5 text-blue-500 shrink-0" /> {trek.duration} Days</span>
        <span className="text-slate-300 hidden sm:inline">·</span>
        <span className="flex items-center"><Mountain size={14} className="mr-1.5 text-blue-500 shrink-0" /> {trek.difficulty}</span>
      </div>
      <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
        <div>
          <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Starting From</span>
          <p className="text-2xl font-black text-[#0B3D91]">&#8377;{trek.price.toLocaleString()}</p>
        </div>
        <div className="h-10 w-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-[#0B3D91] group-hover:text-white group-hover:border-[#0B3D91] transition-all">
          <ArrowRight size={18} />
        </div>
      </div>
    </div>
  </div>
);

const PilgrimageCard = ({ pilgrimage, navigateTo, isFavored, onFavorite }) => (
  <div className="group bg-white rounded-3xl overflow-hidden border border-amber-50 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full cursor-pointer"
    onClick={() => navigateTo('pilgrimage-detail', pilgrimage.id)}>
    <div className="relative h-72 sm:h-80 md:h-96 overflow-hidden">
      <img src={pilgrimage.image} alt={pilgrimage.name} className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-orange-950/75 via-orange-950/15 to-transparent" />
      <div className="absolute top-4 left-4 z-[2]">
        <span className="bg-orange-500/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm flex items-center">
          <MapPin size={10} className="mr-1" /> {pilgrimage.location}
        </span>
      </div>
      <button onClick={e => { e.stopPropagation(); onFavorite?.(pilgrimage.id); }}
        className="absolute bottom-4 right-4 z-[2] h-10 w-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all">
        <Heart size={20} className={isFavored ? 'fill-orange-500 text-orange-500' : 'text-slate-400'} />
      </button>
      <h3 className="absolute bottom-4 left-6 right-16 z-[1] text-xl sm:text-2xl font-black text-white drop-shadow-lg pointer-events-none">{pilgrimage.name}</h3>
    </div>
    <div className="p-6 flex flex-col flex-grow bg-gradient-to-b from-white to-amber-50/20">
      <div className="flex items-center space-x-4 text-xs text-slate-500 mb-6">
        <div className="flex items-center uppercase tracking-widest"><Clock size={14} className="mr-1.5 text-orange-500" /> {pilgrimage.duration} Days</div>
      </div>
      <div className="mt-auto pt-6 border-t border-orange-100 flex items-center justify-between">
        <div>
          <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Full Package</span>
          <p className="text-2xl font-black text-orange-600">&#8377;{pilgrimage.price.toLocaleString()}</p>
        </div>
        <div className="h-10 w-10 rounded-full border border-orange-200 flex items-center justify-center text-orange-400 group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-600 transition-all">
          <ArrowRight size={18} />
        </div>
      </div>
    </div>
  </div>
);

const BlogCard = ({ post, navigateTo }) => (
  <article className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full cursor-pointer"
    onClick={() => navigateTo('blog-detail', post.id)}>
    <div className="relative h-60 overflow-hidden">
      <img src={post.hero} alt={post.title} className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/10 to-transparent" />
      <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-[1]">
        <span className="bg-white/90 backdrop-blur-md text-slate-900 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">{post.category}</span>
        <span className="bg-slate-900/80 text-slate-100 px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider">{post.readTime}</span>
      </div>
      <h3 className="absolute bottom-4 left-4 right-4 text-white text-xl font-black drop-shadow-lg leading-snug">{post.title}</h3>
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <p className="text-xs text-slate-400 mb-2">Published {post.date}</p>
      <p className="text-sm text-slate-600 mb-4 line-clamp-3">{post.snippet}</p>
      <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
        <span className="text-[11px] uppercase font-bold text-[#0B3D91] tracking-[0.18em]">Read Story</span>
        <div className="h-9 w-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-[#0B3D91] group-hover:text-white group-hover:border-[#0B3D91] transition-all">
          <ArrowRight size={18} />
        </div>
      </div>
    </div>
  </article>
);

// Views
const HomeView = ({ navigateTo }) => {
  const [heroIndex, setHeroIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setHeroIndex(prev => (prev + 1) % HERO_VIDEOS.length), 8000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="bg-white">
      <div className="relative h-screen w-full overflow-hidden bg-slate-900">
        <video key={HERO_VIDEOS[heroIndex]} src={HERO_VIDEOS[heroIndex]} className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto">
          <span className="inline-block text-blue-400 font-bold uppercase tracking-[0.3em] mb-6 text-xs sm:text-sm">Rooted in Mountains &#8226; Driven by Adventure</span>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
            DISCOVER THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">SOUL</span> OF THE HIMALAYAS
          </h1>
          <p className="text-lg sm:text-xl text-slate-200 mb-12 max-w-2xl mx-auto font-medium">Expert-led expeditions, sacred pilgrimage circuits, and reward-based fitness challenges.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button onClick={() => navigateTo('treks')} className="group relative bg-[#0B3D91] text-white px-10 py-5 font-bold uppercase tracking-widest overflow-hidden transition-all hover:scale-105 active:scale-95">
              <span className="relative z-10">Explore Treks</span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
            </button>
            <button onClick={() => navigateTo('pilgrimages')} className="bg-white text-slate-900 px-10 py-5 font-bold uppercase tracking-widest hover:bg-slate-100 transition-all hover:scale-105 active:scale-95">Sacred Journeys</button>
          </div>
        </div>
      </div>
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4">WHY TREKROOTS?</h2>
          <div className="h-1.5 w-24 bg-[#0B3D91] mx-auto rounded-full" />
        </div>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[{icon:Shield,title:'Safe Travel',desc:'Highest safety standards with rescue protocols.'},{icon:Users,title:'Certified Guides',desc:'BMC/AMC certified leaders with 10+ years experience.'},{icon:IndianRupee,title:'Best Pricing',desc:'Transparent pricing with zero hidden charges.'},{icon:Gift,title:'Rewards',desc:'Earn points on every trek and redeem for discounts.'}].map((f,i)=>(
            <div key={i} className="bg-white p-10 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="h-16 w-16 bg-blue-50 rounded-2xl flex items-center justify-center text-[#0B3D91] mb-6 group-hover:bg-[#0B3D91] group-hover:text-white transition-colors"><f.icon size={32}/></div>
              <h3 className="text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/image/pilgrimage/chardham_bg.png" className="w-full h-full object-cover" alt="" />
          <div className="absolute inset-0 bg-slate-900/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-12">SPIRITUAL JOURNEYS</h2>
          <div className="flex md:grid md:grid-cols-3 gap-5 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-2 -mx-1 px-1">
            {ALL_PILGRIMAGES.slice(0,3).map(p=>(
              <div key={p.id} className="min-w-[86%] sm:min-w-[60%] md:min-w-0 snap-start">
                <PilgrimageCard pilgrimage={p} navigateTo={navigateTo}/>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl sm:text-6xl font-black text-slate-900 mb-12 text-center uppercase tracking-tighter">Bestsellers</h2>
          <div className="flex md:grid md:grid-cols-3 gap-5 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-2 -mx-1 px-1">
            {ALL_TREKS.filter(t=>t.bestseller).slice(0,3).map(trek=>(
              <div key={trek.id} className="min-w-[86%] sm:min-w-[60%] md:min-w-0 snap-start">
                <TrekCard trek={trek} navigateTo={navigateTo}/>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4">Reels & Shorts</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm sm:text-base">Quick vertical videos from our favourite trails. These blocks are ready for your YouTube Shorts or Instagram Reels embeds.</p>
        </div>
        <div className="max-w-7xl mx-auto px-4 flex md:grid md:grid-cols-3 gap-5 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-2 -mx-1">
          {REELS.slice(0,3).map(reel=>(
            <div key={reel.id} className="min-w-[86%] sm:min-w-[60%] md:min-w-0 snap-start bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col">
              <div className="aspect-[9/16] bg-slate-900/80 flex items-center justify-center text-center text-slate-300 text-xs px-4">
                <p>Embed area for <span className="font-semibold text-white">{reel.title}</span>. Add your YouTube `iframe` here.</p>
              </div>
              <div className="p-4 border-t border-slate-100">
                <h3 className="text-sm font-bold text-slate-900 mb-1">{reel.title}</h3>
                <p className="text-xs text-slate-500">{reel.note}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <button onClick={()=>navigateTo('reels')} className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-slate-300 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:shadow-md">
            View all reels
            <ArrowRight size={16}/>
          </button>
        </div>
      </section>
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4">From the TrekRoots Blog</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm sm:text-base">Practical guides, culture stories and preparation tips from Himalayan locals and trek leaders.</p>
        </div>
        <div className="max-w-7xl mx-auto px-4 flex md:grid md:grid-cols-3 gap-5 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-2 -mx-1">
          {BLOG_POSTS.slice(0,3).map(post=>(
            <div key={post.id} className="min-w-[86%] sm:min-w-[60%] md:min-w-0 snap-start">
              <BlogCard post={post} navigateTo={navigateTo}/>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <button onClick={()=>navigateTo('blog')} className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-slate-300 text-sm font-semibold text-slate-700 hover:bg-white hover:shadow-md">
            View all articles
            <ArrowRight size={16}/>
          </button>
        </div>
      </section>
    </div>
  );
};

const TreksView = ({ navigateTo, favorites, onFavorite }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [difficulty, setDifficulty] = useState('All');
  const [region, setRegion] = useState('All');
  const [matchQuery, setMatchQuery] = useState('');
  const [matchLoading, setMatchLoading] = useState(false);
  const [matchResult, setMatchResult] = useState(null);
  const filteredTreks = useMemo(() => {
    let list = ALL_TREKS.filter(t => {
      const ms = t.name.toLowerCase().includes(searchTerm.toLowerCase());
      const md = difficulty==='All' || t.difficulty.includes(difficulty);
      const mr = region==='All' || t.region===region;
      return ms && md && mr;
    });
    if (matchResult?.trekIds?.length) {
      const ids = matchResult.trekIds;
      const filtered = list.filter(t=>ids.includes(t.id));
      list = filtered.length > 0 ? filtered : ALL_TREKS.filter(t=>ids.includes(t.id));
    }
    return list;
  }, [searchTerm, difficulty, region, matchResult]);
  const regions = ['All', ...new Set(ALL_TREKS.map(t=>t.region))];
  const difficulties = ['All','Easy','Moderate','Difficult'];
  const runMatchmaker = async () => {
    if (!matchQuery.trim()) return;
    setMatchLoading(true); setMatchResult(null);
    try {
      const res = await callGeminiAPI(`Given these treks: ${JSON.stringify(ALL_TREKS.slice(0,20).map(t=>({id:t.id,name:t.name,difficulty:t.difficulty,duration:t.duration})))}. User request: "${matchQuery}". Reply with JSON only: {"trekIds":["id1"],"reason":"one sentence"}`);
      const parsed = JSON.parse(res||'{}');
      setMatchResult({trekIds:parsed.trekIds||[],reason:parsed.reason||''});
    } catch(e) { setMatchResult({trekIds:[],reason:'Could not get recommendation.'}); }
    setMatchLoading(false);
  };
  return (
    <div className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-black text-[#0B3D91] tracking-tight mb-4">HIMALAYAN TREKS</h1>
        <p className="text-slate-500 mb-12">Explore {ALL_TREKS.length}+ meticulously planned trekking itineraries.</p>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-[#0B3D91] p-8 rounded-[32px] text-white shadow-xl">
              <h2 className="font-black text-xl flex items-center gap-3 mb-6"><Sparkles size={24} className="text-amber-400"/> AI MATCHMAKER</h2>
              <p className="text-sm text-blue-100/80 mb-6 leading-relaxed">Describe your dream trek and our AI finds the perfect match.</p>
              <textarea className="w-full bg-blue-800/50 border border-blue-700 rounded-2xl p-4 text-sm text-white placeholder:text-blue-300 focus:outline-none focus:ring-2 focus:ring-amber-400 font-sans" rows="3" placeholder="e.g. easy 2-day trek near Manali" value={matchQuery} onChange={e=>setMatchQuery(e.target.value)}/>
              <button onClick={runMatchmaker} disabled={matchLoading} className="w-full bg-amber-400 text-slate-900 font-black py-4 rounded-2xl hover:bg-amber-300 transition-all flex items-center justify-center gap-2 mt-4 disabled:opacity-50">
                {matchLoading ? <div className="h-5 w-5 border-2 border-slate-900 border-t-transparent rounded-full animate-spin"/> : 'Find My Trek'}
              </button>
              {matchResult && <div className="mt-6 p-4 bg-white/10 rounded-2xl border border-white/10"><p className="text-xs font-bold text-amber-400 mb-1">AI INSIGHT</p><p className="text-xs text-blue-100">{matchResult.reason}</p></div>}
            </div>
            <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm space-y-8">
              <div>
                <h3 className="font-bold text-slate-900 mb-4">DIFFICULTY</h3>
                <div className="flex flex-wrap gap-2">
                  {difficulties.map(d=><button key={d} onClick={()=>setDifficulty(d)} className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${difficulty===d?'bg-[#0B3D91] text-white':'bg-slate-50 text-slate-500 hover:bg-slate-100'}`}>{d}</button>)}
                </div>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-4">REGION</h3>
                <div className="space-y-2">
                  {regions.map(r=><button key={r} onClick={()=>setRegion(r)} className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold transition-all ${region===r?'bg-blue-50 text-[#0B3D91]':'text-slate-500 hover:bg-slate-50'}`}>{r}</button>)}
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3">
            <div className="flex items-center gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18}/>
                <input type="text" placeholder="Search expeditions..." className="pl-12 pr-6 py-3 bg-white border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full" value={searchTerm} onChange={e=>setSearchTerm(e.target.value)}/>
              </div>
              {matchResult && <button onClick={()=>setMatchResult(null)} className="px-4 py-3 border border-slate-200 rounded-2xl text-sm font-semibold hover:bg-slate-50">Clear AI</button>}
            </div>
            {filteredTreks.length>0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {filteredTreks.map(trek=><TrekCard key={trek.id} trek={trek} navigateTo={navigateTo} isFavored={favorites.includes(trek.id)} onFavorite={onFavorite}/>)}
              </div>
            ) : (
              <div className="text-center py-24 bg-white rounded-[40px] border border-dashed border-slate-200">
                <Search size={32} className="mx-auto text-slate-300 mb-4"/>
                <h3 className="text-2xl font-black text-slate-900 mb-2">NO EXPEDITIONS FOUND</h3>
                <p className="text-slate-500">Try adjusting your filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const BlogListView = ({ navigateTo }) => {
  return (
    <div className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-black text-[#0B3D91] tracking-tight mb-4">TrekRoots Blog</h1>
        <p className="text-slate-500 mb-10 max-w-2xl">Stories, tips and guides from the Garhwal and Himachal Himalayas—curated to help you plan safer, richer journeys.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {BLOG_POSTS.map(post=>(
            <BlogCard key={post.id} post={post} navigateTo={navigateTo}/>
          ))}
        </div>
      </div>
    </div>
  );
};

const ReelsView = ({ navigateTo }) => {
  return (
    <div className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-4xl sm:text-5xl font-black text-[#0B3D91] tracking-tight">Reels & Shorts</h1>
            <p className="text-slate-500 mt-2 max-w-2xl text-sm sm:text-base">Quick visual stories from trek routes, summit mornings and village life. Replace the placeholders below with your own YouTube embed iframes.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {REELS.map(reel=>(
            <div key={reel.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col">
              <div className="aspect-[9/16] bg-slate-900/80 flex items-center justify-center text-center text-slate-300 text-xs px-4">
                {/* Replace this div with your <iframe> embed for {reel.title} */}
                <p>Embed area for <span className="font-semibold text-white">{reel.title}</span>. Add your YouTube `iframe` here.</p>
              </div>
              <div className="p-4 border-t border-slate-100">
                <h3 className="text-sm font-bold text-slate-900 mb-1">{reel.title}</h3>
                <p className="text-xs text-slate-500">{reel.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const BlogDetailView = ({ postId, navigateTo }) => {
  const post = BLOG_POSTS.find(p=>p.id===postId);
  if (!post) return (
    <div className="py-20 text-center">
      <p>Article not found.</p>
      <button onClick={()=>navigateTo('blog')} className="mt-4 text-[#0B3D91] underline">Back to Blog</button>
    </div>
  );
  return (
    <div className="min-h-screen bg-slate-50 pb-16">
      <button onClick={()=>navigateTo('blog')} className="absolute left-4 top-24 z-10 bg-white/90 rounded-full p-2 shadow">
        <ArrowRight className="rotate-180" size={20}/>
      </button>
      <div className="relative h-[18rem] sm:h-[22rem] md:h-[26rem] lg:h-[30rem]">
        <img src={post.hero} alt={post.title} className="w-full h-full object-cover object-center"/>
        <div className="absolute inset-0 bg-black/45"/>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-900/10 to-slate-900/90"/>
        <div className="absolute inset-0 flex flex-col items-center justify-center px-5 sm:px-8 text-center">
          <p className="text-sky-200/95 text-[10px] sm:text-xs font-bold uppercase tracking-[0.28em] mb-2">{post.category} · {post.readTime}</p>
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-3 max-w-4xl leading-[1.1]">{post.title}</h1>
          <p className="text-slate-200 text-xs sm:text-sm">Published {post.date}</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 pt-10 space-y-6 text-slate-700">
        {post.content.split(/\n\n+/).map((para,idx)=>(
          <p key={idx} className="leading-relaxed text-sm sm:text-base">{para.trim()}</p>
        ))}
      </div>
    </div>
  );
};

const TrekDetailView = ({ trekId, navigateTo }) => {
  const trek = ALL_TREKS.find(t=>t.id===trekId);
  const [excuseTarget, setExcuseTarget] = useState('boss');
  const [excuseLoading, setExcuseLoading] = useState(false);
  const [excuseEmail, setExcuseEmail] = useState('');
  const [packingLoading, setPackingLoading] = useState(false);
  const [packingMarkdown, setPackingMarkdown] = useState('');
  const [trainingLoading, setTrainingLoading] = useState(false);
  const [trainingMarkdown, setTrainingMarkdown] = useState('');
  const [cultureLoading, setCultureLoading] = useState(false);
  const [cultureMarkdown, setCultureMarkdown] = useState('');
  const itinerary = useMemo(() => {
    if (!trek) return [];
    if (trek.itinerary?.length) return trek.itinerary;
    return generateItinerary(trek.duration);
  }, [trek]);
  const handleCopy = text => { if (navigator.clipboard) navigator.clipboard.writeText(text); };
  const generateExcuse = async () => {
    if (!trek) return; setExcuseLoading(true); setExcuseEmail('');
    try { const who = excuseTarget==='boss'?'my boss':excuseTarget==='parents'?'my parents':'my partner'; const res = await callGeminiAPI(`Write a short professional excuse email (3-4 sentences) to ${who} asking for time off for a ${trek.duration}-day trek: "${trek.name}". Polite and convincing.`); setExcuseEmail(res||''); } catch(e) { setExcuseEmail('Could not generate. Check API key.'); }
    setExcuseLoading(false);
  };
  const generatePacking = async () => {
    if (!trek) return; setPackingLoading(true); setPackingMarkdown('');
    try { const res = await callGeminiAPI(`Create a concise packing list in markdown for: ${trek.name}, ${trek.duration} days, altitude ${trek.altitude||'high'}. Include clothing, gear, toiletries, documents.`); setPackingMarkdown(res||''); } catch(e) { setPackingMarkdown('* Could not generate.'); }
    setPackingLoading(false);
  };
  const generateTraining = async () => {
    if (!trek) return; setTrainingLoading(true); setTrainingMarkdown('');
    try { const res = await callGeminiAPI(`Write a 4-week training plan in markdown to prepare for: ${trek.name}, difficulty ${trek.difficulty}. Include cardio, strength, and rest.`); setTrainingMarkdown(res||''); } catch(e) { setTrainingMarkdown('* Could not generate.'); }
    setTrainingLoading(false);
  };
  const generateCulture = async () => {
    if (!trek) return; setCultureLoading(true); setCultureMarkdown('');
    try { const res = await callGeminiAPI(`Brief local culture guide in markdown for trekkers visiting ${trek.location||'the region'}: phrases, etiquette tips, and local dishes.`); setCultureMarkdown(res||''); } catch(e) { setCultureMarkdown('* Could not generate.'); }
    setCultureLoading(false);
  };
  if (!trek) return (<div className="py-20 text-center"><p>Trek not found.</p><button onClick={()=>navigateTo('treks')} className="mt-4 text-[#0B3D91] underline">Back to Treks</button></div>);
  return (
    <div className="min-h-screen bg-slate-50 pb-16">
      <button onClick={()=>navigateTo('treks')} className="absolute left-4 top-24 z-10 bg-white/90 rounded-full p-2 shadow"><ArrowRight className="rotate-180" size={20}/></button>
      <div className="relative h-[22rem] sm:h-[26rem] md:h-[32rem] lg:h-[38rem] xl:h-[42rem]">
        <img src={trek.image} alt={trek.name} className="w-full h-full object-cover object-center"/>
        <div className="absolute inset-0 bg-black/45"/>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/15 to-slate-900/65"/>
        <div className="absolute inset-0 flex flex-col items-center justify-center px-5 sm:px-8 text-center">
          <p className="text-sky-200/95 text-[10px] sm:text-xs font-bold uppercase tracking-[0.28em] mb-2 md:mb-3">{trek.region || 'Himalayas'} · {trek.location}</p>
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-3 md:mb-4 drop-shadow-lg max-w-5xl leading-[1.1]">{trek.name}</h1>
          <p className="text-white text-sm sm:text-base md:text-lg font-semibold drop-shadow max-w-3xl">{trek.duration} days · {trek.difficulty}{trek.altitude ? ` · up to ${trek.altitude}` : ''}</p>
          {trek.bestTime && <p className="text-white/85 text-xs sm:text-sm mt-2 max-w-2xl leading-relaxed">Best time: {trek.bestTime}</p>}
          <p className="text-white/80 text-xs sm:text-sm mt-3 max-w-2xl leading-relaxed hidden sm:block">Guided trek with route briefing, camps or lodges, meals on trail, permits, and safety backup—plan your window and fitness using the stats below.</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {(trek.facts?.length ? trek.facts : [
            { label:'Difficulty', value:trek.difficulty },
            { label:'Duration', value:`${trek.duration} Days` },
            { label:'Altitude', value:(trek.altitude||'-') },
            { label:'Best Time', value:(trek.bestTime||'-') },
          ]).map((item, idx) => (
            <div key={`${item.label}-${idx}`} className="bg-white rounded-xl p-4 shadow">
              <p className="text-xs text-slate-500">{item.label}</p>
              <p className="font-semibold text-slate-900">{item.value}</p>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <section className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-4">Overview</h2>
              {trek.overview ? (
                <div className="text-slate-600 space-y-4">
                  {trek.overview.split(/\n\n+/).map((para, i) => (
                    <p key={i} className="leading-relaxed">{para.trim()}</p>
                  ))}
                </div>
              ) : (
                <p className="text-slate-600">Explore {trek.name} in {trek.location}. This {trek.duration}-day trek offers stunning views. Best visited {trek.bestTime||'in season'}.</p>
              )}
            </section>
            <section className="bg-white rounded-2xl p-6 shadow-sm"><h2 className="text-xl font-bold mb-4">Itinerary</h2><ul className="space-y-3">{itinerary.map(item=><li key={item.day} className="flex gap-4"><span className="font-bold text-[#0B3D91]">Day {item.day}</span><div><p className="font-medium">{item.title}</p><p className="text-sm text-slate-600">{item.desc}</p></div></li>)}</ul></section>
            <section className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><MailOpen size={22}/> Need Time Off? Let AI Ask!</h2>
              <div className="flex flex-wrap gap-2 mb-4">{['boss','parents','partner'].map(t=><button key={t} onClick={()=>setExcuseTarget(t)} className={`px-4 py-2 rounded-lg ${excuseTarget===t?'bg-[#0B3D91] text-white':'bg-slate-100'}`}>{t}</button>)}</div>
              <button onClick={generateExcuse} disabled={excuseLoading} className="bg-[#0B3D91] text-white px-4 py-2 rounded-lg disabled:opacity-50">Generate email</button>
              {excuseEmail && <div className="mt-4 p-4 bg-slate-50 rounded-lg relative"><pre className="text-sm whitespace-pre-wrap">{excuseEmail}</pre><button onClick={()=>handleCopy(excuseEmail)} className="absolute top-2 right-2 p-2 rounded bg-white border"><Copy size={16}/></button></div>}
            </section>
            <section className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><Backpack size={22}/> Smart Packing List</h2>
              <button onClick={generatePacking} disabled={packingLoading} className="bg-[#0B3D91] text-white px-4 py-2 rounded-lg disabled:opacity-50">Generate list</button>
              {packingMarkdown && <div className="mt-4 p-4 bg-slate-50 rounded-lg" dangerouslySetInnerHTML={{__html:packingMarkdown.replace(/\n/g,'<br/>').replace(/\*\s/g,'• ')}}/>}
            </section>
            <section className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><Activity size={22}/> AI Training Plan</h2>
              <button onClick={generateTraining} disabled={trainingLoading} className="bg-[#0B3D91] text-white px-4 py-2 rounded-lg disabled:opacity-50">Generate plan</button>
              {trainingMarkdown && <div className="mt-4 p-4 bg-slate-50 rounded-lg" dangerouslySetInnerHTML={{__html:trainingMarkdown.replace(/\n/g,'<br/>').replace(/\*\s/g,'• ')}}/>}
            </section>
            <section className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><Globe size={22}/> Local Culture Guide</h2>
              <button onClick={generateCulture} disabled={cultureLoading} className="bg-[#0B3D91] text-white px-4 py-2 rounded-lg disabled:opacity-50">Generate guide</button>
              {cultureMarkdown && <div className="mt-4 p-4 bg-slate-50 rounded-lg" dangerouslySetInnerHTML={{__html:cultureMarkdown.replace(/\n/g,'<br/>').replace(/\*\s/g,'• ')}}/>}
            </section>
            <section className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-4">Inclusions &amp; Exclusions</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div><h3 className="font-semibold text-green-700 mb-2">Included</h3><ul className="list-disc list-inside text-slate-600">{INCLUSIONS.map((x,i)=><li key={i}>{x}</li>)}</ul></div>
                <div><h3 className="font-semibold text-red-700 mb-2">Excluded</h3><ul className="list-disc list-inside text-slate-600">{EXCLUSIONS.map((x,i)=><li key={i}>{x}</li>)}</ul></div>
              </div>
            </section>
          </div>
          <div className="md:col-span-1">
            <div className="sticky top-24 bg-white rounded-2xl p-6 shadow-lg border border-slate-100 space-y-4">
              <div className="flex items-center gap-2 text-slate-500"><Calendar size={20}/> From &#8377;{trek.price}</div>
              <button onClick={()=>navigateTo('contact',trek.name)} className="w-full bg-[#0B3D91] text-white py-3 rounded-xl font-semibold">Book This Trek</button>
              <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full border border-green-500 text-green-600 py-3 rounded-xl font-semibold hover:bg-green-50">WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PilgrimagesView = ({ navigateTo, favorites, onFavorite }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [region, setRegion] = useState('All');
  const filteredPilgrimages = useMemo(()=>ALL_PILGRIMAGES.filter(p=>p.name.toLowerCase().includes(searchTerm.toLowerCase())&&(region==='All'||p.location===region)),[searchTerm,region]);
  const regions = ['All',...new Set(ALL_PILGRIMAGES.map(p=>p.location))];
  return (
    <div className="py-12 bg-orange-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12">Sacred Pilgrimages</h1>
        <div className="bg-white p-6 rounded-2xl mb-10 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20}/>
            <input type="text" placeholder="Search pilgrimages..." className="w-full pl-10 pr-4 py-3 rounded-xl border border-amber-200 focus:ring-2 focus:ring-orange-500 outline-none" value={searchTerm} onChange={e=>setSearchTerm(e.target.value)}/>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Region</label>
            <select value={region} onChange={e=>setRegion(e.target.value)} className="w-full px-3 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none">
              {regions.map(r=><option key={r} value={r}>{r}</option>)}
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredPilgrimages.map(p=><PilgrimageCard key={p.id} pilgrimage={p} isFavored={favorites?.includes(p.id)} onFavorite={onFavorite} navigateTo={navigateTo}/>)}
        </div>
      </div>
    </div>
  );
};

const PilgrimageDetailView = ({ pilgrimageId, navigateTo }) => {
  const pilgrimage = ALL_PILGRIMAGES.find(p=>p.id===pilgrimageId);
  const [excuseTarget, setExcuseTarget] = useState('boss');
  const [excuseLoading, setExcuseLoading] = useState(false);
  const [excuseEmail, setExcuseEmail] = useState('');
  const [packingLoading, setPackingLoading] = useState(false);
  const [packingMarkdown, setPackingMarkdown] = useState('');
  const [cultureLoading, setCultureLoading] = useState(false);
  const [cultureMarkdown, setCultureMarkdown] = useState('');
  const itinerary = useMemo(()=> {
    if (!pilgrimage) return [];
    if (pilgrimage.itinerary?.length) return pilgrimage.itinerary;
    return generateItinerary(pilgrimage.duration);
  }, [pilgrimage]);
  const handleCopy = text => { if (navigator.clipboard) navigator.clipboard.writeText(text); };
  const generateExcuse = async () => {
    if (!pilgrimage) return;
    setExcuseLoading(true);
    setExcuseEmail('');
    try {
      const who = excuseTarget==='boss'?'my boss':excuseTarget==='parents'?'my parents':'my partner';
      const res = await callGeminiAPI(`Write a short professional leave request email (3-4 sentences) to ${who} asking for time off for a ${pilgrimage.duration}-day pilgrimage: "${pilgrimage.name}". Polite, respectful, and concise.`);
      setExcuseEmail(res||'');
    } catch (e) {
      setExcuseEmail('Could not generate. Check API key.');
    }
    setExcuseLoading(false);
  };
  const generatePacking = async () => {
    if (!pilgrimage) return;
    setPackingLoading(true);
    setPackingMarkdown('');
    try {
      const res = await callGeminiAPI(`Create a concise packing list in markdown for the pilgrimage: ${pilgrimage.name}, ${pilgrimage.duration} days in ${pilgrimage.location}. Include clothing, religious items if relevant, personal care, and documents.`);
      setPackingMarkdown(res||'');
    } catch (e) {
      setPackingMarkdown('* Could not generate.');
    }
    setPackingLoading(false);
  };
  const generateCulture = async () => {
    if (!pilgrimage) return;
    setCultureLoading(true);
    setCultureMarkdown('');
    try {
      const res = await callGeminiAPI(`Brief culture and etiquette guide in markdown for pilgrims visiting ${pilgrimage.name} in ${pilgrimage.location}. Include dress code, temple etiquette, and useful phrases.`);
      setCultureMarkdown(res||'');
    } catch (e) {
      setCultureMarkdown('* Could not generate.');
    }
    setCultureLoading(false);
  };
  if (!pilgrimage) return (<div className="py-20 text-center"><p>Pilgrimage not found.</p><button onClick={()=>navigateTo('pilgrimages')} className="mt-4 text-orange-600 underline">Back to Pilgrimages</button></div>);
  return (
    <div className="min-h-screen bg-orange-50 pb-16">
      <button onClick={()=>navigateTo('pilgrimages')} className="absolute left-4 top-24 z-10 bg-white/90 rounded-full p-2 shadow"><ArrowRight className="rotate-180" size={20}/></button>
      <div className="relative h-[22rem] sm:h-[26rem] md:h-[32rem] lg:h-[38rem] xl:h-[42rem]">
        <img src={pilgrimage.image} alt={pilgrimage.name} className="w-full h-full object-cover object-center"/>
        <div className="absolute inset-0 bg-black/40"/>
        <div className="absolute inset-0 bg-gradient-to-b from-amber-950/45 via-orange-950/20 to-amber-950/75"/>
        <div className="absolute inset-0 flex flex-col items-center justify-center px-5 sm:px-8 text-center">
          <p className="text-amber-200/95 text-[10px] sm:text-xs font-bold uppercase tracking-[0.28em] mb-2 md:mb-3">{pilgrimage.location} · Sacred pilgrimage</p>
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-3 md:mb-4 drop-shadow-lg max-w-5xl leading-[1.1]">{pilgrimage.name}</h1>
          <p className="text-white text-sm sm:text-base md:text-lg font-semibold drop-shadow max-w-3xl">{pilgrimage.duration} days · Full package with travel support & temple timings</p>
          {pilgrimage.bestTime && <p className="text-white/85 text-xs sm:text-sm mt-2 max-w-2xl">Best time: {pilgrimage.bestTime}</p>}
          <p className="text-white/80 text-xs sm:text-sm mt-3 max-w-2xl leading-relaxed hidden sm:block">Darshan-led itinerary, comfortable stays, vegetarian meals on route, and local coordination for a smooth yatra experience.</p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {(pilgrimage.facts?.length ? pilgrimage.facts : [
            { label:'Location', value:pilgrimage.location },
            { label:'Duration', value:`${pilgrimage.duration} Days` },
            { label:'Best Time', value:(pilgrimage.bestTime||'-') },
            { label:'From', value:`₹${pilgrimage.price}` },
          ]).map((item, idx) => (
            <div key={`${item.label}-${idx}`} className="bg-white rounded-xl p-4 shadow">
              <p className="text-xs text-slate-500">{item.label}</p>
              <p className={`font-semibold ${item.label==='From' ? 'text-orange-600' : ''}`}>{item.value}</p>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <section className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-4">Overview</h2>
              {pilgrimage.overview ? (
                <div className="text-slate-600 space-y-4">
                  {pilgrimage.overview.split(/\n\n+/).map((para, i) => (
                    <p key={i} className="leading-relaxed">{para.trim()}</p>
                  ))}
                  {pilgrimage.basicInfo?.length > 0 && (
                    <div className="mt-6 pt-6 border-t border-slate-200">
                      <h3 className="font-semibold text-slate-800 mb-3">Basic Information</h3>
                      <table className="w-full text-left text-sm">
                        <tbody>
                          {pilgrimage.basicInfo.map((row, i) => (
                            <tr key={i} className="border-b border-slate-100">
                              <td className="py-2 pr-4 font-medium text-slate-500 align-top">{row.label}</td>
                              <td className="py-2 text-slate-700">{row.value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              ) : (
                <p className="text-slate-600">Sacred journey to {pilgrimage.name}, {pilgrimage.location}. Duration {pilgrimage.duration} days. Best time: {pilgrimage.bestTime||'seasonal'}.</p>
              )}
            </section>
            <section className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-4">Suggested Itinerary</h2>
              <ul className="space-y-3">
                {itinerary.map(item=>(
                  <li key={item.day} className="flex gap-4">
                    <span className="font-bold text-orange-600">Day {item.day}</span>
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
            <section className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><MailOpen size={22}/> Need Leave? Let AI Draft It</h2>
              <div className="flex flex-wrap gap-2 mb-4">
                {['boss','parents','partner'].map(t=>(
                  <button key={t} onClick={()=>setExcuseTarget(t)} className={`px-4 py-2 rounded-lg text-sm font-semibold ${excuseTarget===t?'bg-orange-500 text-white':'bg-slate-100'}`}>
                    {t}
                  </button>
                ))}
              </div>
              <button onClick={generateExcuse} disabled={excuseLoading} className="bg-orange-500 text-white px-4 py-2 rounded-lg disabled:opacity-50">Generate email</button>
              {excuseEmail && (
                <div className="mt-4 p-4 bg-slate-50 rounded-lg relative">
                  <pre className="text-sm whitespace-pre-wrap">{excuseEmail}</pre>
                  <button onClick={()=>handleCopy(excuseEmail)} className="absolute top-2 right-2 p-2 rounded bg-white border"><Copy size={16}/></button>
                </div>
              )}
            </section>
            <section className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><Backpack size={22}/> Smart Packing List</h2>
              <button onClick={generatePacking} disabled={packingLoading} className="bg-orange-500 text-white px-4 py-2 rounded-lg disabled:opacity-50">Generate list</button>
              {packingMarkdown && (
                <div className="mt-4 p-4 bg-slate-50 rounded-lg" dangerouslySetInnerHTML={{__html:packingMarkdown.replace(/\n/g,'<br/>').replace(/\*\s/g,'• ')}}/>
              )}
            </section>
            <section className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><Globe size={22}/> Local Culture &amp; Etiquette</h2>
              <button onClick={generateCulture} disabled={cultureLoading} className="bg-orange-500 text-white px-4 py-2 rounded-lg disabled:opacity-50">Generate guide</button>
              {cultureMarkdown && (
                <div className="mt-4 p-4 bg-slate-50 rounded-lg" dangerouslySetInnerHTML={{__html:cultureMarkdown.replace(/\n/g,'<br/>').replace(/\*\s/g,'• ')}}/>
              )}
            </section>
          </div>
          <div className="md:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-amber-100 space-y-4 sticky top-24">
              {pilgrimage.trekFee ? (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-slate-500"><Calendar size={20}/><span className="text-xs font-bold uppercase tracking-wide">Trek Fee</span></div>
                  <p className="text-3xl font-black text-orange-600">&#8377;{pilgrimage.trekFee.base.toLocaleString()}</p>
                  <div className="text-sm text-slate-600 space-y-1.5 border-t border-amber-100 pt-3">
                    <p>+ {pilgrimage.trekFee.gstPercent}% GST</p>
                    <p>+ &#8377;{pilgrimage.trekFee.insurance.toLocaleString()} Trek Insurance</p>
                  </div>
                  <p className="text-xs text-slate-500 pt-1">
                    Est. total (incl. GST &amp; insurance): <span className="font-semibold text-slate-700">&#8377;{(pilgrimage.trekFee.base + Math.round(pilgrimage.trekFee.base * pilgrimage.trekFee.gstPercent / 100) + pilgrimage.trekFee.insurance).toLocaleString()}</span>
                  </p>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-slate-500">
                  <Calendar size={20}/> From &#8377;{pilgrimage.price}
                </div>
              )}
              <button onClick={()=>navigateTo('contact',pilgrimage.name)} className="w-full bg-orange-500 text-white py-3 rounded-xl font-semibold">Book This Pilgrimage</button>
              <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full border border-green-500 text-green-600 py-3 rounded-xl font-semibold hover:bg-green-50">WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactView = ({ navigateTo, selectedPackage, submitInquiry, showToast }) => {
  const [name,setName]=useState(''); const [email,setEmail]=useState(''); const [phone,setPhone]=useState('');
  const [selectedTrek,setSelectedTrek]=useState(selectedPackage||''); const [date,setDate]=useState('');
  const [guests,setGuests]=useState(1); const [message,setMessage]=useState('');
  useEffect(()=>{ setSelectedTrek(selectedPackage||''); },[selectedPackage]);
  const options = [{name:'Select...',id:''},...ALL_TREKS.map(t=>({id:t.id,name:t.name})),...ALL_PILGRIMAGES.map(p=>({id:p.id,name:p.name}))];
  const handleSubmit = e => {
    e.preventDefault();
    submitInquiry({name,email,phone,package:selectedTrek,date,guests,message});
    showToast('Inquiry sent! We will get back soon.');
    setName('');setEmail('');setPhone('');setSelectedTrek('');setDate('');setGuests(1);setMessage('');
  };
  return (
    <div className="relative min-h-screen py-12 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="/image/pilgrimage/badri.png" alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-slate-900/55" aria-hidden="true" />
      </div>
      <div className="relative z-10 max-w-2xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-white drop-shadow-md">Contact Us</h1>
        <form onSubmit={handleSubmit} className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 space-y-4">
          <div><label className="block text-sm font-medium mb-1">Name</label><input type="text" required value={name} onChange={e=>setName(e.target.value)} className="w-full px-4 py-2 border rounded-lg" placeholder="Your name"/></div>
          <div><label className="block text-sm font-medium mb-1">Email</label><input type="email" required value={email} onChange={e=>setEmail(e.target.value)} className="w-full px-4 py-2 border rounded-lg" placeholder="you@example.com"/></div>
          <div><label className="block text-sm font-medium mb-1">Phone</label><input type="tel" value={phone} onChange={e=>setPhone(e.target.value)} className="w-full px-4 py-2 border rounded-lg" placeholder="+91"/></div>
          <div><label className="block text-sm font-medium mb-1">Trek / Tour</label><select value={selectedTrek} onChange={e=>setSelectedTrek(e.target.value)} className="w-full px-4 py-2 border rounded-lg">{options.map(o=><option key={o.id||'blank'} value={o.name}>{o.name||'Select...'}</option>)}</select></div>
          <div><label className="block text-sm font-medium mb-1">Preferred Date</label><input type="date" value={date} onChange={e=>setDate(e.target.value)} className="w-full px-4 py-2 border rounded-lg"/></div>
          <div><label className="block text-sm font-medium mb-1">Guests</label><input type="number" min={1} value={guests} onChange={e=>setGuests(Number(e.target.value))} className="w-full px-4 py-2 border rounded-lg"/></div>
          <div><label className="block text-sm font-medium mb-1">Message</label><textarea value={message} onChange={e=>setMessage(e.target.value)} className="w-full px-4 py-2 border rounded-lg" rows={4} placeholder="Any questions?"/></div>
          <button type="submit" className="w-full bg-[#0B3D91] text-white py-3 rounded-xl font-semibold">Send Inquiry</button>
        </form>
      </div>
    </div>
  );
};

const ReviewsView = ({ reviews, submitReview, showToast }) => {
  const [summary,setSummary]=useState(''); const [summaryLoading,setSummaryLoading]=useState(false);
  const [rating,setRating]=useState(5); const [name,setName]=useState('');
  const [text,setText]=useState(''); const [photo,setPhoto]=useState(null);
  const generateSummary = async () => {
    setSummaryLoading(true); setSummary('');
    try { const texts=reviews.map(r=>r.text).filter(Boolean).join('\n'); const res=await callGeminiAPI(`Summarize these customer reviews in 2-3 sentences:\n\n${texts||'No reviews yet.'}`); setSummary(res||''); } catch(e) { setSummary('Could not generate summary.'); }
    setSummaryLoading(false);
  };
  const handleSubmit = e => {
    e.preventDefault();
    submitReview({name:name||'Guest',rating,text,photo});
    showToast('Thank you! Your review is live.');
    setRating(5); setName(''); setText(''); setPhoto(null);
  };
  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Customer Reviews</h1>
        <section className="bg-white rounded-2xl p-6 shadow-sm mb-8">
          <h2 className="text-lg font-bold mb-2 flex items-center gap-2"><Sparkles size={22}/> AI Review Summary</h2>
          <button onClick={generateSummary} disabled={summaryLoading} className="bg-[#0B3D91] text-white px-4 py-2 rounded-lg disabled:opacity-50 mb-4">Generate summary</button>
          {summary && <p className="text-slate-600">{summary}</p>}
        </section>
        <div className="grid gap-6 mb-10">
          {reviews.map(r=>(
            <div key={r.id} className="bg-white rounded-xl p-6 shadow-sm flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center overflow-hidden">{r.photo?<img src={r.photo} alt="" className="w-full h-full object-cover"/>:<span className="text-lg font-bold text-slate-500">{r.name?.[0]||'?'}</span>}</div>
              <div className="flex-grow">
                <div className="flex items-center gap-2 mb-1"><span className="font-semibold">{r.name}</span><span className="text-amber-500">{'&#9733;'.repeat(0).padEnd(0)+Array.from({length:r.rating},()=>'★').join('')+Array.from({length:5-r.rating},()=>'☆').join('')}</span></div>
                <p className="text-slate-600 text-sm">{r.date}</p>
                <p className="mt-2">{r.text}</p>
              </div>
            </div>
          ))}
        </div>
        <section className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-bold mb-4">Share Your Experience</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div><label className="block text-sm font-medium mb-1">Rating</label><select value={rating} onChange={e=>setRating(Number(e.target.value))} className="w-full px-4 py-2 border rounded-lg">{[1,2,3,4,5].map(n=><option key={n} value={n}>{n} stars</option>)}</select></div>
            <div><label className="block text-sm font-medium mb-1">Name</label><input type="text" value={name} onChange={e=>setName(e.target.value)} className="w-full px-4 py-2 border rounded-lg" placeholder="Your name"/></div>
            <div><label className="block text-sm font-medium mb-1">Photo (optional)</label><input type="file" accept="image/*" onChange={e=>setPhoto(e.target.files?.[0]?URL.createObjectURL(e.target.files[0]):null)} className="w-full px-4 py-2 border rounded-lg"/></div>
            <div><label className="block text-sm font-medium mb-1">Review</label><textarea required value={text} onChange={e=>setText(e.target.value)} className="w-full px-4 py-2 border rounded-lg" rows={4} placeholder="Your experience..."/></div>
            <button type="submit" className="bg-[#0B3D91] text-white px-6 py-3 rounded-xl font-semibold">Submit Review</button>
          </form>
        </section>
      </div>
    </div>
  );
};

const AuthView = ({ authType, navigateTo, onAuth }) => {
  const [formData, setFormData] = useState({name:'',email:'',password:'',phone:''});
  const handleSubmit = e => { e.preventDefault(); onAuth({name:formData.name||'Trekker',email:formData.email,phone:formData.phone}); navigateTo('home'); };
  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center py-12 px-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md border border-slate-200">
        <div className="bg-[#0B3D91] px-8 py-10 text-white">
          <h2 className="text-3xl font-bold mb-2">Join TrekRoots</h2>
          <p className="text-blue-200">Create your account</p>
        </div>
        <form onSubmit={handleSubmit} className="px-8 py-8 space-y-6">
          <div><label className="block text-sm font-medium mb-2">Full Name</label><input type="text" required placeholder="Your name" className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[#0B3D91] outline-none" value={formData.name} onChange={e=>setFormData({...formData,name:e.target.value})}/></div>
          <div><label className="block text-sm font-medium mb-2">Email</label><input type="email" required placeholder="you@example.com" className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[#0B3D91] outline-none" value={formData.email} onChange={e=>setFormData({...formData,email:e.target.value})}/></div>
          <div><label className="block text-sm font-medium mb-2">Password</label><input type="password" required placeholder="••••••••" className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-[#0B3D91] outline-none" value={formData.password} onChange={e=>setFormData({...formData,password:e.target.value})}/></div>
          <button type="submit" className="w-full bg-[#0B3D91] text-white py-3 rounded-xl font-bold hover:bg-blue-800">Create Account</button>
        </form>
        <div className="px-8 py-4 border-t text-center text-sm text-gray-600">
          Already booked with us before? Use the same email when you contact our team and we will link your past trips manually.
        </div>
      </div>
    </div>
  );
};

const FitnessQuizView = ({ navigateTo }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [recommendation, setRecommendation] = useState(null);
  const handleAnswer = idx => {
    const newAnswers = [...answers, idx];
    setAnswers(newAnswers);
    if (newAnswers.length === FITNESS_QUIZ_QUESTIONS.length) {
      const avg = newAnswers.reduce((a,b)=>a+b,0)/newAnswers.length;
      setRecommendation(avg<1.5?'Easy':avg<2.5?'Moderate':'Difficult');
    } else { setCurrentQuestion(currentQuestion+1); }
  };
  if (recommendation) return (
    <div className="min-h-screen bg-purple-50 flex items-center justify-center py-12 px-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-full text-center border border-slate-200">
        <CheckCircle size={48} className="text-green-600 mx-auto mb-4"/>
        <h2 className="text-3xl font-bold mb-2">Quiz Complete!</h2>
        <p className="text-lg text-[#0B3D91] font-bold mb-2">Recommended: <span className="text-2xl">{recommendation}</span></p>
        <button onClick={()=>navigateTo('treks')} className="w-full bg-[#0B3D91] text-white py-3 rounded-xl font-bold hover:bg-blue-800 mt-6">Browse Treks</button>
      </div>
    </div>
  );
  return (
    <div className="min-h-screen bg-purple-50 flex items-center justify-center py-12 px-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-full border border-slate-200">
        <div className="mb-8">
          <span className="text-sm text-gray-500">Question {currentQuestion+1}/{FITNESS_QUIZ_QUESTIONS.length}</span>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2"><div className="bg-[#0B3D91] h-full rounded-full" style={{width:`${((currentQuestion+1)/FITNESS_QUIZ_QUESTIONS.length)*100}%`}}/></div>
        </div>
        <h3 className="text-xl font-bold mb-6">{FITNESS_QUIZ_QUESTIONS[currentQuestion].question}</h3>
        <div className="space-y-3">
          {FITNESS_QUIZ_QUESTIONS[currentQuestion].options.map((option,idx)=>(
            <button key={idx} onClick={()=>handleAnswer(idx)} className="w-full p-4 border-2 border-gray-200 rounded-lg hover:border-[#0B3D91] hover:bg-blue-50 font-semibold text-left">{option}</button>
          ))}
        </div>
      </div>
    </div>
  );
};

const GalleryView = () => (
  <div className="py-12 bg-slate-50 min-h-screen">
    <div className="max-w-7xl mx-auto px-4">
      <h1 className="text-4xl font-bold mb-12 text-center">Community Gallery</h1>
      <div className="bg-white rounded-xl p-8 text-center">
        <Camera size={48} className="mx-auto text-gray-300 mb-4"/>
        <h2 className="text-2xl font-bold mb-2">Share Your Photos</h2>
        <button className="bg-[#0B3D91] text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-800 mt-4">Upload Photo</button>
      </div>
    </div>
  </div>
);

const CartView = ({ cart, onUpdateCart, onCheckout, navigateTo }) => {
  const total = cart.reduce((sum,item)=>sum+(item.price*item.quantity),0);
  const tax = Math.round(total*0.18);
  const grandTotal = total+tax;
  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>
        {cart.length===0?(
          <div className="bg-white rounded-2xl p-12 text-center">
            <ShoppingCart size={48} className="mx-auto text-gray-300 mb-4"/>
            <h2 className="text-2xl font-bold mb-2">Cart is empty</h2>
            <button onClick={()=>navigateTo('treks')} className="bg-[#0B3D91] text-white px-8 py-3 rounded-xl font-bold mt-6 hover:bg-blue-800">Browse Treks</button>
          </div>
        ):(
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item,idx)=>(
                <div key={idx} className="bg-white rounded-xl p-6 flex items-center gap-6 border border-slate-200">
                  <img src={item.image} alt={item.name} className="w-24 h-24 rounded-lg object-cover"/>
                  <div className="flex-1"><h3 className="text-lg font-bold">{item.name}</h3><p className="text-sm text-gray-600">&#8377;{item.price} x {item.quantity}</p></div>
                  <div className="flex items-center gap-2">
                    <button onClick={()=>onUpdateCart(idx,Math.max(1,item.quantity-1))} className="p-2 hover:bg-gray-100 rounded"><Minus size={20}/></button>
                    <span className="w-8 text-center font-bold">{item.quantity}</span>
                    <button onClick={()=>onUpdateCart(idx,item.quantity+1)} className="p-2 hover:bg-gray-100 rounded"><Plus size={20}/></button>
                  </div>
                  <button onClick={()=>onUpdateCart(idx,0)} className="p-2 text-red-500 hover:bg-red-50 rounded"><Trash2 size={20}/></button>
                </div>
              ))}
            </div>
            <div className="h-fit bg-white rounded-xl p-6 border border-slate-200 sticky top-24">
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
              <div className="space-y-4 border-b pb-6">
                <div className="flex justify-between"><span className="text-gray-600">Subtotal</span><span className="font-semibold">&#8377;{total}</span></div>
                <div className="flex justify-between text-orange-600"><span>Tax (18%)</span><span className="font-semibold">&#8377;{tax}</span></div>
              </div>
              <div className="flex justify-between my-6 text-lg font-bold"><span>Total</span><span className="text-[#0B3D91] text-2xl">&#8377;{grandTotal}</span></div>
              <button onClick={onCheckout} className="w-full bg-[#0B3D91] text-white py-4 rounded-xl font-bold hover:bg-blue-800">Checkout</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const ProfileView = ({ user, navigateTo, onLogout }) => (
  <div className="py-12 bg-slate-50 min-h-screen">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-4xl font-bold">My Profile</h1>
        <button onClick={onLogout} className="flex items-center gap-2 bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600"><LogOut size={20}/> Logout</button>
      </div>
      <div className="bg-white rounded-xl p-8 border border-slate-200">
        <div className="flex items-center mb-8">
          <div className="w-20 h-20 bg-[#0B3D91] text-white rounded-full flex items-center justify-center text-4xl font-bold mr-6">{user&&user.name[0]}</div>
          <div><h2 className="text-3xl font-bold">{user&&user.name}</h2><p className="text-gray-600">{user&&user.email}</p></div>
        </div>
        <button className="text-[#0B3D91] font-semibold hover:underline">Edit Profile</button>
      </div>
    </div>
  </div>
);

const AdminView = ({ navigateTo, isAdminAuth, adminPin, setAdminPin, onAdminLogin, inquiries=[], reviews=[] }) => {
  const [adminTab, setAdminTab] = useState('stats');
  if (!isAdminAuth) return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm text-center">
        <h2 className="text-2xl font-bold mb-6">Admin Access</h2>
        <form onSubmit={onAdminLogin}>
          <input type="password" placeholder="PIN (1234)" required className="w-full px-4 py-3 rounded-lg border text-center mb-4 focus:ring-2 focus:ring-[#0B3D91] outline-none" value={adminPin} onChange={e=>setAdminPin(e.target.value)}/>
          <button type="submit" className="w-full bg-[#0B3D91] text-white py-3 rounded-lg font-bold hover:bg-blue-800">Login</button>
        </form>
        <button onClick={()=>navigateTo('home')} className="mt-4 text-sm text-gray-500 hover:text-gray-800">Back</button>
      </div>
    </div>
  );
  return (
    <div className="min-h-screen bg-slate-50 p-10">
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <button onClick={()=>navigateTo('home')} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">Exit</button>
      </div>
      <div className="flex gap-4 mb-8">
        {['stats','inquiries','reviews'].map(tab=><button key={tab} onClick={()=>setAdminTab(tab)} className={`px-4 py-2 rounded-lg capitalize ${adminTab===tab?'bg-[#0B3D91] text-white':'bg-white border'}`}>{tab}</button>)}
      </div>
      {adminTab==='stats' && (<div className="grid grid-cols-1 md:grid-cols-4 gap-6"><div className="bg-white p-6 rounded-xl border"><p className="text-gray-600 text-sm">Total Bookings</p><p className="text-3xl font-bold">156</p></div><div className="bg-white p-6 rounded-xl border"><p className="text-gray-600 text-sm">Reviews</p><p className="text-3xl font-bold">{reviews.length}</p></div><div className="bg-white p-6 rounded-xl border"><p className="text-gray-600 text-sm">Users</p><p className="text-3xl font-bold">342</p></div><div className="bg-white p-6 rounded-xl border"><p className="text-gray-600 text-sm">Revenue</p><p className="text-3xl font-bold">&#8377;12.5 L</p></div></div>)}
      {adminTab==='inquiries' && (<div className="bg-white rounded-xl border overflow-x-auto"><table className="w-full text-left"><thead className="bg-slate-100"><tr><th className="p-3">Date</th><th className="p-3">Name</th><th className="p-3">Contact</th><th className="p-3">Package</th><th className="p-3">Guests</th><th className="p-3">Message</th></tr></thead><tbody>{inquiries.map(i=><tr key={i.id} className="border-t"><td className="p-3">{i.dateSubmitted||'-'}</td><td className="p-3">{i.name}</td><td className="p-3">{i.email}</td><td className="p-3">{i.package||'-'}</td><td className="p-3">{i.guests??'-'}</td><td className="p-3 max-w-xs truncate">{i.message||'-'}</td></tr>)}</tbody></table>{inquiries.length===0&&<p className="p-6 text-slate-500">No inquiries yet.</p>}</div>)}
      {adminTab==='reviews' && (<div className="bg-white rounded-xl border overflow-x-auto"><table className="w-full text-left"><thead className="bg-slate-100"><tr><th className="p-3">Date</th><th className="p-3">Name</th><th className="p-3">Rating</th><th className="p-3">Text</th></tr></thead><tbody>{reviews.map(r=><tr key={r.id} className="border-t"><td className="p-3">{r.date}</td><td className="p-3">{r.name}</td><td className="p-3">{r.rating}&#9733;</td><td className="p-3 max-w-md">{r.text}</td></tr>)}</tbody></table></div>)}
    </div>
  );
};

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedItem, setSelectedItem] = useState(null);
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [inquiries, setInquiries] = useState([]);
  const [reviews, setReviews] = useState([
    { id:'r1', name:'Priya S.', rating:5, text:'Kedarkantha was magical. TrekRoots team was professional and the views were unforgettable.', date:'2025-01-15', photo:null },
    { id:'r2', name:'Rahul M.', rating:5, text:'Valley of Flowers exceeded expectations. Highly recommend for first-time trekkers.', date:'2025-02-01', photo:null },
    { id:'r3', name:'Anita K.', rating:4, text:'Har Ki Dun trek was well organised. Only minor delay on day 2 due to weather.', date:'2025-02-10', photo:null }
  ]);
  const [isAdminAuth, setIsAdminAuth] = useState(false);
  const [adminPin, setAdminPin] = useState('');
  const [toast, setToast] = useState({ show:false, message:'' });

  const showToast = message => { setToast({show:true,message}); setTimeout(()=>setToast({show:false,message:''}),4000); };
  const navigateTo = (view, item=null) => { window.scrollTo(0,0); setCurrentView(view); setSelectedItem(item); };
  const handleAuth = userData => { setUser(userData); showToast(`Welcome, ${userData.name}!`); };
  const handleFavorite = id => { setFavorites(fav=>fav.includes(id)?fav.filter(f=>f!==id):[...fav,id]); showToast('Wishlist updated!'); };
  const handleAddToCart = item => {
    const existing = cart.find(c=>c.id===item.id);
    if (existing) { setCart(cart.map(c=>c.id===item.id?{...c,quantity:c.quantity+1}:c)); } else { setCart([...cart,{...item,quantity:1}]); }
    showToast('Added to cart!');
  };
  const submitInquiry = data => { setInquiries(prev=>[...prev,{id:'inq-'+Date.now(),...data,dateSubmitted:new Date().toISOString().slice(0,10)}]); };
  const submitReview = data => { setReviews(prev=>[...prev,{id:'rev-'+Date.now(),name:data.name,rating:data.rating,text:data.text,date:new Date().toISOString().slice(0,10),photo:data.photo||null}]); };
  const handleUpdateCart = (index,quantity) => {
    if (quantity<=0) { setCart(cart.filter((_,i)=>i!==index)); showToast('Removed from cart'); } else { setCart(cart.map((item,i)=>i===index?{...item,quantity}:item)); }
  };
  const handleCheckout = () => { showToast('Booking confirmed! Check your email.'); setCart([]); setTimeout(()=>navigateTo('home'),2000); };
  const handleAdminLogin = e => { e.preventDefault(); if(adminPin==='1234'){setIsAdminAuth(true);setAdminPin('');showToast('Admin logged in');}else{showToast('Invalid PIN');} };
  const handleLogout = () => { setUser(null); showToast('Logged out'); navigateTo('home'); };

  return (
    <div className="min-h-screen flex flex-col font-sans antialiased text-slate-900 bg-slate-50 pb-20 md:pb-0">
      <Toast show={toast.show} message={toast.message} onClose={()=>setToast({show:false,message:''})}/>
      {currentView!=='admin' && <Navbar currentPage={currentView} navigateTo={navigateTo} user={user} cartCount={cart.length} onProfileClick={()=>user?navigateTo('profile'):navigateTo('auth','signup')}/>}
      <main className="flex-grow">
        {currentView==='home' && <HomeView navigateTo={navigateTo}/>}
        {currentView==='treks' && <TreksView navigateTo={navigateTo} favorites={favorites} onFavorite={handleFavorite}/>}
        {currentView==='pilgrimages' && <PilgrimagesView navigateTo={navigateTo} favorites={favorites} onFavorite={handleFavorite}/>}
        {currentView==='reels' && <ReelsView navigateTo={navigateTo}/>}
        {currentView==='blog' && <BlogListView navigateTo={navigateTo}/>}
        {currentView==='blog-detail' && <BlogDetailView postId={selectedItem} navigateTo={navigateTo}/>}
        {currentView==='trek-detail' && <TrekDetailView trekId={selectedItem} navigateTo={navigateTo}/>}
        {currentView==='pilgrimage-detail' && <PilgrimageDetailView pilgrimageId={selectedItem} navigateTo={navigateTo}/>}
        {currentView==='contact' && <ContactView key={selectedItem||'contact'} navigateTo={navigateTo} selectedPackage={selectedItem} submitInquiry={submitInquiry} showToast={showToast}/>}
        {currentView==='reviews' && <ReviewsView reviews={reviews} submitReview={submitReview} showToast={showToast}/>}
        {currentView==='auth' && <AuthView authType="signup" navigateTo={navigateTo} onAuth={handleAuth}/>}
        {currentView==='fitness' && <FitnessQuizView navigateTo={navigateTo}/>}
        {currentView==='gallery' && <GalleryView navigateTo={navigateTo}/>}
        {currentView==='profile' && user && <ProfileView user={user} navigateTo={navigateTo} onLogout={handleLogout}/>}
        {currentView==='admin' && <AdminView navigateTo={navigateTo} isAdminAuth={isAdminAuth} adminPin={adminPin} setAdminPin={setAdminPin} onAdminLogin={handleAdminLogin} inquiries={inquiries} reviews={reviews}/>}
      </main>
      {currentView!=='admin' && <Footer navigateTo={navigateTo}/>}
      {currentView!=='admin' && (
        <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="fixed bottom-24 md:bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-transform z-40">
          <MessageCircle size={28}/>
        </a>
      )}
      {currentView!=='admin' && <MobileBottomNav currentView={currentView} navigateTo={navigateTo} />}
      <MobileContactPopup/>
    </div>
  );
}
