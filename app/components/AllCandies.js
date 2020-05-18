import React, { Component } from 'react'
const loadingImage = 'https://derpicdn.net/img/view/2017/6/25/1471445.gif';
import { connect } from 'react-redux';
import { fetchCandiesFromServer } from '../reducers/index'


class AllCandies extends Component {
    componentDidMount() {
        this.props.getGoodies();
    }
    render() {
        //console.log(this.props)
        const { candies } = this.props
        if (this.props.loading) {
            return (
                <div>
                    <h3>Loading...</h3>
                    <img src={loadingImage} className="loading" />
                </div>
            )
        }
        return (
            <div>
                <h1>All Candies</h1>
                <div className="flexTime">
                    {
                        candies.map(candy => (
                            <div className="candiesRow" key={candy.id}>
                                <img src={candy.imageUrl} />
                                <h3>{candy.name}</h3>
                                <p>{candy.description}</p>
                                <p>Quantity: {candy.quantity}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    candies: state.all
})

const mapDispatch = dispatch => ({
    getGoodies: () => dispatch(fetchCandiesFromServer())
})

export default connect(mapStateToProps, mapDispatch)(AllCandies);
