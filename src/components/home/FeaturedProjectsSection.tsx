import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, MapPin } from 'lucide-react'

export const FeaturedProjectsSection: React.FC = () => {
  const scenarios = [
    {
      title: 'Commercial Office Assessment',
      location: 'Bengaluru',
      to: '/case-studies/commercial-office-vastu-assessment',
      type: 'Illustrative Scenario',
      image: '/images/projects/corporate-office-bangalore.jpg',
      description:
        'Directional zone realignment and executive seating orientation using calibrated digital compass mapping.',
    },
    {
      title: 'Residential & Geopathic Assessment',
      location: 'Bengaluru',
      to: '/case-studies/residential-vastu-geopathic-stress-assessment',
      type: 'Illustrative Scenario',
      image: '/images/projects/luxury-residence-mumbai.jpg',
      description:
        'Environmental earth energy evaluation and non-demolition metallic boundary remedies for bedrooms.',
    },
    {
      title: 'Industrial Facility Planning',
      location: 'Bengaluru Hubs',
      to: '/services/industrial-vastu',
      type: 'Service Protocol',
      image: '/images/services/industrial-vastu.jpg',
      description:
        'Zero-downtime spatial zoning for active manufacturing units, machinery placement, and material flow.',
    },
    {
      title: 'Apartment Spatial Alignment',
      location: 'Bengaluru',
      to: '/services/apartment-vastu',
      type: 'Service Protocol',
      image: '/images/projects/villa-goa.jpg',
      description:
        'Non-demolition elemental boundary corrections tailored for leased flats and high-rise apartment units.',
    },
  ]

  return (
    <section className="border-b border-amber-500/20 bg-slate-950 py-24 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col justify-between sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-bold tracking-widest text-amber-400 uppercase">
              CONSULTATION SCENARIOS
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate-100 sm:text-4xl">
              Illustrative Spatial Assessments
            </h2>
            <p className="mt-3 max-w-2xl text-xs text-slate-400 sm:text-sm">
              Explore how 7Rays Astro Vastu evaluates spatial layouts, compass alignments, and
              environmental energy fields across properties in Bengaluru.
            </p>
          </div>
          <Link
            to="/case-studies"
            className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 transition hover:text-amber-300 sm:mt-0"
          >
            <span>View Illustrative Scenarios</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {scenarios.map((scenario) => (
            <Link
              key={scenario.title}
              to={scenario.to}
              className="group relative flex h-72 flex-col justify-end overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 p-5 transition-all duration-500 hover:border-amber-500/40 hover:shadow-2xl hover:shadow-amber-500/10 sm:h-80 sm:p-6 lg:h-96"
            >
              {/* Background Photography with Zoom Effect */}
              <img
                src={scenario.image}
                alt={`${scenario.title} - ${scenario.location}`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

              {/* Foreground Card Content */}
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div className="flex items-start justify-between">
                  <span className="rounded-full border border-amber-500/30 bg-slate-950/70 px-2.5 py-1 text-[10px] font-semibold text-amber-300 backdrop-blur-md">
                    {scenario.type}
                  </span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-amber-400/40 bg-amber-500/20 text-amber-400 transition duration-300 group-hover:bg-amber-500 group-hover:text-slate-950">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>

                <div>
                  <div className="mb-1 flex items-center gap-1 text-xs font-semibold text-amber-400">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>{scenario.location}</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white transition group-hover:text-amber-200">
                    {scenario.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-xs text-slate-300">{scenario.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
