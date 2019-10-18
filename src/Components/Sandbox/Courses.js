import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
// import gql from 'graphql-tag'


const Courses = () => {
    const query = gql`
        {
            country(code: "BR") {
                name
                native
                emoji
                currency
                languages {
                    code
                    name
                }
            }
        }
    `;
    return (
        <Query query={query}>
            {({loading, error, data}) => {
                if(loading) return <h1>Loading the thing...</h1>
                if(error) {
                    console.log(error)
                    return <h1>Error!</h1>
                }
                console.log(data)
                const {name, currency, native} = data.country;
                return <p>{`${name} (${currency}) - ${native}`}</p>
                // return data.country.map((item, idx) => (
                //     <p key={idx}>{`${item.name} (#${item.currency}) - ${item.native}`}</p>
                // ))
            }}
        </Query>
    )
}

export default Courses