import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'


const Courses = () => (
    <Query query={gql`
        {
            Page {
                characters {
                    id
                    name {
                        full
                        native
                    }
                    image {
                        large
                    }
                }
            }
        }
    `}>
        {({loading, error, data}) => {
            if(loading) return <h1>Loading the thing...</h1>
            if(error) {
                console.log(error)
                return <h1>Error!</h1>
            }
            console.log(data)
            // return data.Page.characters.map((item, idx) => (
            //     <p key={item.id}>{`${item.name.full} (#${item.id}) - ${item.name.native}`}</p>
            // ))
        }}
    </Query>
)

export default Courses