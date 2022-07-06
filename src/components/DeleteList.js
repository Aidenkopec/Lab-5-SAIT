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
                this.setState({error: 'ERROR'})
            })
    }

    deleteRow(id, element) {
        axios.delete(`https://jsonplaceholder.typicode.com/photos/${id}`)
            .then(() => {
                this.setState({pics: this.state.pics.filter(picture => picture.id !== id)})
            })
    }

    render() {
        const {pics, error} = this.state
        return (
            <div>
                <h1>Lists Of Pics:</h1>
                {pics.length ?
                    <table>
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Thumbnail</th>
                            <th>Delete</th>
                        </tr>
                        </thead>
                        <tbody>

                        {pics.map(pictures => (
                            <tr key={pictures.id}>
                                <td>{pictures.id}</td>
                                <td>{pictures.title}</td>
                                <td><img src={pictures.thumbnailUrl}/></td>
                                <td>
                                    <button className="deleteButton"
                                            onClick={element => this.deleteRow(pictures.id, element)}>Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table> :
                    <div>{error}</div>
                }
            </div>
        )
    }
}

export default DeleteList;