import React from 'react'

class NameCard extends React.Component {
    render () {
        const {name, number,isHuman, tags} = this.props
        return (
            <div>
                {name}
            </div>
        )
    }
}

export default NameCard