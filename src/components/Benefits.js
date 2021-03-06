import { benefits } from 'lib/benefits'
import React from 'react'

const Benefits = () => {
  return (
    <section className="pt-12 pb-12 md:pb-36 bg-cyan-100 dark:bg-cyan-900 bg-opacity-50 ">
        <div className="max-w-7xl mx-auto px-5">
          <h2
            className="text-center md:text-left inline-flex text-3xl sm:text-4xl font-fancy mb-10
                        font-medium leading-normal md:leading-normal lg:leading-snug xl:leading-snug"
          >
            The Blugenix program provides these powerful benefits:
          </h2>
          <div>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map(({ id, title, img, info }) => (
                <li key={id} className="flex flex-col items-start mb-5">
                  <figure className="benefit_icon">
                    <img src={img} alt="" className="h-10 w-10" />
                  </figure>
                  <h3 className="mb-3 text-xl dark:text-white">{title}</h3>
                  <div>
                    <p className="pr-10 mb-5 font-avenir text-lg text-gray-900 dark:text-gray-100">
                      {info}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
  )
}

export default Benefits