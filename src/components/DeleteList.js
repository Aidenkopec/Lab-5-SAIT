import React, {Component} from 'react';
import axios from "axios";

class DeleteList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pics: [],
            error: ''
        }

    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(response => {
                console.log(response)
                this.setState({pics: response.data})
            })
            .catch(error => {
                console.log(error)
                this.setState({errorMessage: 'ERROR'})
            })
    }

    render() {
        const {pics, errorMessage} = this.state

        return (

            <div>
                <h1>Pictures</h1>
                <table>
                    {/*<tr>*/}
                    <th>ID</th>
                    <th>Title</th>

                    <tr>
                        {
                            pics.length ? pics.map(post => <tr key={(post.id)}> {post.id} </tr>) : null
                        }

                    </tr>
                    <tr>
                        {
                            pics.length ? pics.map(post => <td key={(post.id)}> {post.title} </td>) : null
                        }

                    </tr>
                </table>
            </div>

        );
    }
}

export default DeleteList;