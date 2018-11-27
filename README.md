# react-native-laravel-pagination

## Getting Started

yarn add react-native-laravel-pagination

### Prerequisites

What things you need to install the software and how to install them

```js
import React, {Component} from 'react';
import {View} from 'react-native';
import Pagination from 'react-native-pagination';

class Page extends Component {
    constructor(props){
        super(props);
        this.state = {
            links: {},
            meta: {},
            data: []
        }
    }
    render() {
        const actions = {
            prev: this.getPrevPageData,
            next: this.getNextPageData,
            callback: this.getData,
        }
        return (
            <View>
                <!---->
                <Pagination meta={this.state.meta} links={this.state.links} actions={actions} />
            </View>
        )
    }
}
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
