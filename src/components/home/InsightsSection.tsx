import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export const InsightsSection: React.FC = () => {
  const articles = [
    {
      title: '7 Vastu Principles Every Homeowner Should Know',
      slug: '7-vastu-principles-every-homeowner-should-know',
      category: 'Home Vastu',
      image: '/images/insights/insight-principles.jpg',
    },
    {
      title: 'Vastu for Modern Apartments',
      slug: 'vastu-remedies-without-demolition-modern-apartments',
      category: 'Apartments',
      image: '/images/insights/insight-apartments.jpg',
    },
    {
      title: 'Best Directions for Your Home Office',
      slug: 'best-directions-for-home-office-vastu',
      category: 'Workspace',
      image: '/images/insights/insight-home-office.jpg',
    },
    {
      title: 'Vastu & Commercial Spaces',
      slug: 'vastu-for-commercial-and-retail-spaces',
      category: 'Commercial',
      image: '/images/insights/insight-commercial.jpg',
    },
    {
      title: 'Understanding the Five Elements',
      slug: 'understanding-the-five-elements-pancha-tattva',
      category: 'Philosophy',
      image: '/images/insights/insight-five-elements.jpg',
    },
  ]

  return (
    <section className="border-b border-slate-200 bg-white py-24 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col justify-between sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-bold tracking-widest text-amber-700 uppercase">
              INSIGHTS
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
              Insights for Better Spaces &amp; Better Living
            </h2>
          </div>

          <Link
            to="/insights"
            className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 transition hover:text-amber-900 sm:mt-0"
          >
            <span>View All Articles</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {articles.map((article) => (
            <article
              key={article.title}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:border-amber-300 hover:shadow-xl"
            >
              <div>
                <div className="h-44 w-full overflow-hidden bg-slate-200">
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-4 sm:p-5">
                  <span className="text-[10px] font-bold tracking-wider text-amber-700 uppercase">
                    {article.category}
                  </span>
                  <h3 className="mt-1 line-clamp-2 font-serif text-sm font-bold text-slate-900 transition group-hover:text-amber-800">
                    <Link to={`/insights/${article.slug}`}>{article.title}</Link>
                  </h3>
                </div>
              </div>

              <div className="p-4 pt-0 sm:px-5 sm:pb-5">
                <Link
                  to={`/insights/${article.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-amber-700 transition hover:text-amber-900"
                >
                  <span>Read More</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
