import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";


class App extends React.Component {

    state = {images: []};

     onSearchSubmit = async term => {
        // async
        // axios.get('https://api.unsplash.com/search/photos', {
        //     params: { query: term },
        //     headers:{
        //         Authorization: 'Client-ID lGQq0bCz5X_070QDLHv5SweKhxAS7yhWTdxWh8VCgnI'
        //     }
        // }).then((response)=> {
        //     console.log(response.data.results);
        // });
        const response = await unsplash.get('/search/photos', {
            params: { query: term }
        });
        this.setState({images: response.data.results});
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '20px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
        );
    }
}

export default App;