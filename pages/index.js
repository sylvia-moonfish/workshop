import React from 'react'

import PageComponent from '../src/components/page-component'

class Index extends PageComponent {
    constructor(props) {
        super(props)
    }

    render() {
        return <div>Hello, World!</div>
    }
}

export default Index;