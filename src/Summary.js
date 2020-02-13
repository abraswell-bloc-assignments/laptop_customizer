import React from 'react'

export default function Summary(props){

    return (
        Object.keys(props.selected).map((feature, idx) => {
        const featureHash = props.feature + '-' + idx
        const selectedOption = props.selected[feature]
        return (
          <div className="summary__option" key={featureHash}>
            <div className="summary__option__label">{props.feature} </div>
            <div className="summary__option__value">{selectedOption.name}</div>
            <div className="summary__option__cost">
              {props.USCurrencyFormat.format(selectedOption.cost)}
            </div>
          </div>
        )
      })
    )
}