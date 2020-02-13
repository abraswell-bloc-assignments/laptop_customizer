import React from 'react'
import slugify from 'slugify'
import LaptopParts from './LaptopParts'


export default function PartsList(props) {
   return (
       Object.keys(props.features).map((feature, idx) => {
        const featureHash = feature + '-' + idx
        const options = props.features[feature].map(item => {
          const itemHash = slugify(JSON.stringify(item))
          return (
            <div key={itemHash} className="feature__item">
              <input
                type="radio"
                id={itemHash}
                className="feature__option"
                name={slugify(feature)}
                checked={item.name === props.selected[feature].name}
                onChange={e => props.updateFeature(feature, item)}
              />
              <label htmlFor={itemHash} className="feature__label">
                {item.name} ({props.USCurrencyFormat.format(item.cost)})
              </label>
            </div>
          )
        })

        return (
            <LaptopParts 
              featureHash={featureHash}
              feature={feature}
              options={options} 
            />
        )

      })
    )
} 