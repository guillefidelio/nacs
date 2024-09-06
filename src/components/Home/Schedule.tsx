"use client"
import React, { useState } from "react";

interface Event {
  time: string;
  title: string;
  sede: string;
  descripcion: string;
  isHighlight?: boolean;
}

interface ScheduleDay {
  day: string;
  events: Event[];
}

const scheduleData: ScheduleDay[] = [
  {
    day: "Dia 1: Lunes, 7 OCT",
    events: [
      {
        time: "1:15 PM",
        title: "Innovaciones en retail alrededor del mundo",
        sede: "Sala: Pavilion 1 / 2 - Pabellón: Westgate (sin reserva previa))",
        descripcion: "Recomendamos esta presentación para ver cómo actuan operadores de estaciones de servicio y tiendas de conveniencia en todo el mundo y aprender de ellos para despertar el espíritu innovador en cada uno de nosotros.",
      },
      {
        time: "2:30 PM",
        title: "Utilización de la IA adentro de las tiendas",
        sede: "Sala: Pavilion 1 / 2 - Pabellón: Westgate (sin reserva previa)",
        descripcion: "La gran revolución de la IA en el mundo de las tiendas ha llegado y en esta presentación podremos ver cómo se está utilizando y qué beneficios están teniendo para quienes ya la han implementado en sus negocios.",
      },
      {
        time: "3:45 PM",
        title: "El ciclo de la confianza",
        sede: "Sala: General Sessions - Pabellón: Westgate (sin reserva previa)",
        descripcion: "En tiempos de incertidumbre y cambios exponenciales, la confianza permite tomar decisiones acertadas para guiar el rumbo de nuestras empresas. Juan Bendaña, coach de confianza a CEOs, atletas olímpicos y líderes mundiales, aporta su conocimiento con respaldo científico y una pizca de humor para mantener a sus audiencias cautivadas.",
        isHighlight: true,
      },
    ],
  },
  {
    day: "Dia 2: Martes, 8 OCT",
    events: [
        {
          time: "9:15 AM",
          title: "Marketing digital y físico para retailers",
          sede: "Sala: Pavilion 1 / 2 - Pabellón: Westgate (sin reserva previa)",
          descripcion: "Presentación sobre estrategias de marketing tanto digital como físico para minoristas en el sector de estaciones de servicio."
        },
        {
          time: "10:30 AM",
          title: "Evento Inaugural: Ideas 2 Go",
          sede: "Sala: General Sessions - Westgate (sin reserva previa)",
          descripcion: "Ideas 2 Go es la presentación más importante del NACS Show, donde se presentan las ideas más innovadoras y creativas para el sector de estaciones de servicio y tiendas de conveniencia.",
          isHighlight: true,
        },
        {
          time: "1:00 PM a 2:00 PM",
          title: "Group Appointment:Stand Gilbarco Veeder-Root",
          sede: "Stand A",
          descripcion: "Presentación abierta de novedades en español sobre productos y servicios de Gilbarco Veeder-Root. No hace falta reserva y los interesados pueden ir en cualquier momento"
        },

        {
          time: "2:30 PM",
          title: "Stand Franke Coffee - Automatización de cafetería",
          sede: "GA",
          descripcion: "Demostración sobre la automatización de cafeterías con tecnologías avanzadas de Franke Coffee."
        },
        {
          time: "3:15 PM",
          title: "Stand Standard AI - Gestión de tienda con Vision de AI",
          sede: "GA",
          descripcion: "Presentación sobre la gestión automatizada de tiendas utilizando inteligencia artificial de Standard AI."
        }
      ]
      
      
  },
  {
    day: "Dia 3: Miércoles, 9 OCT",
    events: [
      {
        time: "9:00 - 10:00",
        title: "Another Event",
        sede: "Speaker Name",
        descripcion: "Role",
      },
    ],
  },
  {
    day: "Dia 4: Jueves, 10 OCT",
    events: [
      {
        time: "9:00 - 10:00",
        title: "Another Event",
        sede: "Speaker Name",
        descripcion: "Role",
      },
    ],
  },
  {
    day: "Dia 5: Viernes, 11 OCT",
    events: [
      {
        time: "9:00 - 10:00",
        title: "Another Event",
        sede: "Speaker Name",
        descripcion: "Role",
      },
    ],
  },
];

function EventCard({ event }: { event: Event }) {
  if (event.isHighlight) {
    return (
      <div
        className="rounded-[5px] md:rounded-[20px] p-4 border-2 border-pri transition-all duration-300 ease-in-out shadow-[6px_6px_0px_0px_rgba(4,81,206,1)]"
        style={{
          backgroundColor: "#F3F3F3",
        }}
      >
        <div className="flex justify-between items-center w-full text-left">
          <div>
            <span className="text-lg md:text-xl lg:text-2xl text-pri font-bold font-din-pro-cond-black">DESTACADO</span>
            <span className="text-lg md:text-xl lg:text-2xl ml-4">{event.time}</span>
            <h3 className="text-lg md:text-xl lg:text-3xl font-semibold mt-2">{event.title}</h3>
          </div>
        </div>
        <hr className="border-t border-black my-4" />
        <div className="mt-4 text-sm md:text-base lg:text-lg opacity-80">
          <p>{event.sede}</p>
          <p className="text-lg md:text-lg lg:text-xl text-gray-600">{event.descripcion}</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="rounded-[5px] md:rounded-[20px] p-4 border border-black transition-all duration-300 ease-in-out shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
      style={{
        backgroundColor: "#F3F3F3",
        color: "#000000",
      }}
    >
      <div className="flex justify-between items-center w-full text-left">
        <div>
          <span className="text-lg md:text-xl lg:text-2xl text-gray-600">{event.time}</span>
          <h3 className="text-lg md:text-xl lg:text-3xl font-semibold">{event.title}</h3>
        </div>
      </div>
      <hr className="border-t border-black my-4" />
      <div className="mt-4 text-sm md:text-base lg:text-lg opacity-80">
        <p>{event.sede}</p>
        <p className="text-lg md:text-lg lg:text-xl text-gray-600">{event.descripcion}</p>
      </div>
    </div>
  );
}

function Schedule() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="container mx-auto px-4 py-14">
      <div className="mx-auto">
        <div className="w-full md:w-4/5 mx-auto">
          <div className="flex flex-col items-start mb-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-2">
              <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-2 md:mb-0">
                <span className="rounded border-2 border-pri bg-pri text-ter px-2 py-1 inline-block">
                  AGENDA RECOMENDADA
                </span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl">
                Planea tus días<br className="hidden md:inline" />
                en el NACS Show
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-4/5 mx-auto">
          <div className="flex flex-wrap mb-4 gap-2">
            {scheduleData.map((day, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-4 rounded-xl border border-solid text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl flex-grow sm:flex-grow-0 ${
                  activeTab === index 
                    ? "bg-ter text-pri font-bold border-pri " 
                    : "bg-ter border-gray-300 hover:border-pri hover:text-pri transition-colors duration-200"
                } whitespace-nowrap`}
              >
                {day.day}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {scheduleData[activeTab].events.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
