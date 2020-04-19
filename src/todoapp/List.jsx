import React from "react";
import {connect} from "react-redux";

const mapStateToProps = state => {
    return {articles: state.articles}
}

const ConnectedList = ({articles}) => (
    <ul>{articles.map(it => (
        <li key={it.id}>{it.title}</li>
    ))}
    </ul>
)

const List = connect(mapStateToProps)(ConnectedList)

export default List