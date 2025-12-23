import React, { useEffect, useState } from 'react';
import { TimelineEvent } from './components/TimelineEvent';

export default function App() {
  const [isVisible, setIsVisible] = useState(false);

  const events = [
    {
      id: 1,
      date: "",
      title: "",
      description: [
      `
        They say Christmas is the time where we should spread joy to others and show appreciation
        to those we care about with gifts, spending a lot more time than we normally would with those
        we value
      `,
      `
        This year, one of the most important people I'd like to, and hopefully will (as I'm writing this
        in advance) dedicate this season to, is you. I've left no subtlety as to how I feel about you, Annie.
        Though to you this photo mightn't seem like much, it's a constant reminder to me of everything I adore about you.
      `,
      `
        So, in the spirit of Christmas, I'd like to dedicate this timeline to you, and document our journey up until this point.
      `
    ],
      image: "photo-1",
      backText: "I still remember what you were wearing. The way you smiled made my heart skip a beat. I'm so glad I said hello.",
      flippable: false
    },
    {
      id: 2,
      date: "September 15th, 2025",
      title: "",
      description: [""],
      image: "hinge-profile",
      backText: 
      `
        On September 15th, 2025, our story began. On this day, I matched with a girl who I'd known for nearly 15 years on Hinge.
      `,
      flippable: true
    },
    {
      id: 30,
      date: "September 15th, 2025",
      title: "",
      description: [""],
      image: "hinge-profile",
      backText: 
      `
        On September 15th, 2025, our story began. On this day, I matched with a girl who I'd known for nearly 15 years on Hinge.
      `,
      flippable: true
    },
    {
      id: 3,
      date: "September 26th, 2025",
      title: "",
      description: [""],
      image: "her-number",
      backText: 
      `
        After over a week of talking, I (very smoothly) managed to get your number!
        The number of a girl I would become very familiar with, and would grow to find
        comfort and warmth in, over the next few months
      `,
      flippable: true
    },
    {
      id: 4,
      date: "October 11th, 2025",
      title: "",
      description: [""],
      image: "first-date",
      backText: 
      `
        On October 11th, we had our first date. Apart from nearly flashing me at the start, it couldn't have been more perfect. I'll never forget the way my heart lept when I saw you for the first time (insert lego batman gif). Part of me knew there and then that I no longer had a need for Hinge.
      `,
      flippable: true
    },
    {
      id: 5,
      date: "October 18th, 2025",
      title: "",
      description: [""],
      image: "pitbull",
      backText: 
      `
        The day before our second date, you went to Pitbull and took some... interesting... creative liberties on your outfit.
      `,
      flippable: true
    },
    {
      id: 6,
      date: "October 19th, 2025",
      title: "",
      description: [""],
      image: "second-date",
      backText: 
      `
        On October 19th we had our second date. We (and unfortunately, a very disgruntled worker) crushed the escape room. I don't have any photos from it unfortunately, but I do have about 10 photos of the light switch patterns, so this is the only evidence we had a second date unfortunately
      `,
      flippable: true
    },
    {
      id: 7,
      date: "October 29th, 2025",
      title: "",
      description: [""],
      image: "duke",
      backText: 
      `
        The first drought. With your holiday and both of us being extremely busy with uni, we couldn't have another date for nearly two weeks. But October 29th marks the beginning of our custody battle for Duke
      `,
      flippable: true
    },
    {
      id: 8,
      date: "October 31st, 2025",
      title: "",
      description: [""],
      image: "third-date",
      backText: 
      `
        On October 31st, we had our third date. I got to show off my impeccable ability to miss the same easy shot 5 times in a row. We got to have a little heart to heart about our grandparents' deaths and past experiences with dating. Maybe you were just practicing your psychology skills, but I felt so heard and cared for by you, and felt so much closer to you by the end.
      `,
      flippable: true
    },
    {
      id: 9,
      date: "November 2nd, 2025",
      title: "",
      description: [""],
      image: "enchanted-party",
      backText: 
      `
        You sent me some very pretty photos of your enchanted costume for Halloween, and we found out that your uncle Chris is ALSO MY UNCLE CHRIS from Woolies!
      `,
      flippable: true
    },
    {
      id: 10,
      date: "November 6th, 2025",
      title: "",
      description: [""],
      image: "dead-or-alive",
      backText: 
      `
        We talked non-stop the night before the paint and sip. I loved being able to talk to you for such a long time even if it was without actually seeing you.
      `,
      flippable: true
    },
    {
      id: 11,
      date: "November 7th, 2025",
      title: "",
      description: [""],
      image: "fourth-date",
      backText: 
      `
        On the 7th of November, we had our paint and sip. I remember the look on your face when you turned around and saw the lillies in my hand, and knew I would buy many more afterwards if not to make you happy, but to see that look in your eyes again. After a great many fuck-ups, my painting was able to hold 1% of a candle to yours, which I suppose I'll take.
      `,
      flippable: true
    },
    {
      id: 12,
      date: "November 23rd, 2025",
      title: "",
      description: [""],
      image: "fifth-date",
      backText: 
      `
        The 2nd drought. You had your exams and I had my cruise, which meant we couldn't see each other for over 2 weeks. At this point I was sort of skeptical if you were still feeling it for reasons we've discussed, but I'm very glad with the way things turned out afterwards. On this day we went to camden art gallery and got lunch. It wasn't anything crazy, but it didn't need to be - all I wanted was you.
      `,
      flippable: true
    },
    {
      id: 13,
      date: "November 24th, 2025",
      title: "",
      description: [""],
      image: "roblox-date",
      backText: 
      `
        On November 24th we had our first roblox date. We spent way too much time solving the corn maze in work at a pizza place, and you eventually showed me Webbed, where we realised we're very bad at timing things over call together. At work the next day I told the guys about our roblox date, and Jono said how happy he was about our budding romance.
      `,
      flippable: true
    }, 
    {
      id: 14,
      date: "November 27th, 2025",
      title: "",
      description: [""],
      image: "sixth-date",
      backText: 
      `
        Our sixth date consisted of binging the first 3 episodes of Stranger Things season 5 at my place. Even though it was two days before my MATH3411 exam, I felt every bit of stress wash away the second I saw your face. You also got to meet my parents who now also absolutely adore you (but unfortunately, not as much as I do)
      `,
      flippable: true
    },
    {
      id: 15,
      date: "November 29th, 2025",
      title: "",
      description: [""],
      image: "car-photo",
      backText: 
      `
        You sent me this photo before my MATH3411 exam. I had already decided what I was going to do on the next date, but this helped confirmed my decision
      `,
      flippable: true
    },
    {
      id: 16,
      date: "December 1st, 2025",
      title: "",
      description: [""],
      image: "seventh-date",
      backText: 
      `
        On December 1st, we did a daytrip to Wollongong. We arrived at around 11:05am, and went to the lighthouse lookout near the water. Time slowed, and when I turned around everybody had left. I heeded the universe's not so subtle hint, told you how you've made me the most happy I've been in a long time, kissed you, and asked you to be my girlfriend. It didn't matter how the rest of that day went, I had already won. But the rest of that day turned out to be just as magical.
      `,
      flippable: true
    },
    {
      id: 17,
      date: "December 4th, 2025",
      title: "",
      description: [""],
      image: "surprise",
      backText: 
      `
        I arrived home after a long day at work, and was greeted by mum telling me I had something on my desk. I looked at my phone and saw your text about something "waiting for you upon your arrival" and couldn't wipe the smile off my face. I watched the security footage of you skipping away from my house, and knew I had found the person for me. That is to say, you looked very cute skipping away like that :)
      `,
      flippable: true
    },
    {
      id: 18,
      date: "December 7th, 2025",
      title: "",
      description: [""],
      image: "eighth-date",
      backText: 
      `
        After a 9 hour Sunday shift, I got to enjoy the rest of my day with you watching Love Actually after grabbing Luigi's for dinner. I would work any amount of hours if it meant coming home to you.
      `,
      flippable: true
    },
    {
      id: 19,
      date: "December 8th, 2025",
      title: "",
      description: [""],
      image: "roblox-fnaf",
      backText: 
      `
        Here you released your inner iPad kid and helped drain our battery to 67% by 2am so Fready Fivebare could kill us. It was here I got to witness you put on your mask 5 seconds after Toy Bonnie entered our office, only to hear you scream and disappear from next to me, with only 10 seconds left in the night.
      `,
      flippable: true
    },
    {
      id: 20,
      date: "December 11th, 2025",
      title: "",
      description: [""],
      image: "dads-birthday",
      backText: 
      `
        At dad's birthday dinner you got to meet Caleb and Izzy, whose feelings towards you I shouldn't need to remind you of. We built the Bonsai tree together
      `,
      flippable: true
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-cream-50 to-rose-50">
      <div className="mx-auto px-6 py-12">
        <header className="text-center">
          <h1 className="text-4xl mb-3 text-rose-900">Our Story</h1>
        </header>

        <div className="space-y-16 pb-20">
          {events.map((event, index) => (
            <TimelineEvent
              key={event.id} event={event} index={index}
            />
          ))}
        </div>

        <footer className="text-center pt-8 pb-12">
          <p className="text-rose-700">These memories I've made with you these past few months are ones I will cherish for the rest of my life. You have brought me so much joy, from your infectious laugh and quirky sense of humour to your gorgeous smile and warm personality. No matter what other people have told you in the past, no matter what they've said you are or aren't, I need you to understand this.</p>
          <p className="text-rose-700">You are wonderful.</p>
          <p className="text-rose-700">You are funny.</p>
          <p className="text-rose-700">You are smart.</p>
          <p className="text-rose-700">You are capable.</p>
          <p className="text-rose-700">You are beautiful.</p>
          <p className="text-rose-700">This year, Christmas came early. Approximately 101 days early. Because on September 15th, 2025, I matched with you on Hinge, which unbeknownst to me would lead to me dating one of the most extraordinary people I've had the pleasure of knowing.</p>
          <p className="text-rose-700">If this year has been any indication of the future, I'm looking even more forward to going into the new year with you. So, Merry Christmas Annie.</p>
          <p className="text-rose-800">-Lachlan ♡</p>
          <p className="text-rose-500"></p>
        </footer>
      </div>
    </div>
  );
}