import React, { useRef, useEffect, useState } from 'react';

interface Event {
  id: number;
  date: string;
  title: string;
  description: string[];
  image: string;
  backText?: string;
  flippable: boolean;
}

interface TimelineEventProps {
  key: number;
  event: Event;
  index: number;
}

const imageMap: { [key: string]: string } = {
  'photo-1': '/photo_1.PNG',
  'hinge-profile': '/hinge_profile.PNG',
  'her-number': '/her_number.PNG',
  'first-date': '/first_date.jpg',
  'pitbull': '/pitbull.jpg',
  'second-date': '/second_date.jpg',
  'duke': '/duke.jpg',
  'third-date': '/third_date.jpg',
  'enchanted-party': '/enchanted_party.jpg',
  'dead-or-alive': '/dead_or_alive.jpg',
  'fourth-date': '/fourth_date.png',
  'fifth-date': '/lillies.jpg',
  'roblox-date': 'https://tr.rbxcdn.com/180DAY-7a3457c102e21cb7a5d38fa0a9ce4648/768/432/Image/Webp/noFilter',
  'sixth-date': '/sixth_date.jpg',
  'car-photo': '/car_photo.jpg',
  'seventh-date': 'seventh_date.jpeg',
  'surprise': '/surprise.jpg',
  'eighth-date': '/eighth_date.png',
  'roblox-fnaf': '/roblox_fnaf.jpg'
};

export function TimelineEvent({ event, index }: TimelineEventProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const eventRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px'
      }
    );

    if (eventRef.current) {
      observer.observe(eventRef.current);
    }

    return () => {
      if (eventRef.current) {
        observer.unobserve(eventRef.current);
      }
    };
  }, []);

  const isEven = index % 2 === 0;

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      ref={eventRef}
      className={`transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: '0.1s' }}
    >
      {/* Polaroid-style photo frame with flip */}
      <div 
        className="polaroid-container"
        onClick={() => {
          if (event.flippable) {
            handleFlip()
          }
        }}
      >
        <div className={`polaroid ${isEven ? 'rotate-left' : 'rotate-right'} ${isFlipped ? 'flipped' : ''}`}>
          {/* Front of polaroid */}
          <div className="polaroid-front">
            <div className="polaroid-photo">
              <img
                src={imageMap[event.image]}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="polaroid-caption">
              <p className="text-rose-900">{event.date}</p>
            </div>
          </div>

          {/* Back of polaroid */}
          <div className="polaroid-back">
            <div className="polaroid-back-content">
              <p className="text-rose-900 whitespace-pre-line">
                {event.backText || "Tap to flip back"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Event details */}
      <div className="mt-6 text-center px-4">
        <h3 className="text-2xl mb-3 text-rose-900">{event.title}</h3>
        {event.description.map((paragraph) => (
          <p className="text-rose-700 leading-relaxed mb-3">{paragraph}</p>
        ))}
      </div>
    </div>
  );
}