import React, {useState} from 'react';
import styles from './UsersPage.module.css'
import Accordion from "react-bootstrap/Accordion";
import MyAccordion from "../../components/accardion/MyAccordion";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const UserCard = ({data}) => {
    const address = `${data.address.city} ${data.address.street}`
    const company = `${data.company.name} ${data.company.catchPhrase}`

    return(
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{data.name}</Card.Title>
                    <ListGroup variant="flush">
                        <ListGroup.Item>{data.email}</ListGroup.Item>
                        <ListGroup.Item>{data.phone}</ListGroup.Item>
                        <ListGroup.Item>{data.website}</ListGroup.Item>
                    </ListGroup>
                    <MyAccordion
                        title='address'
                        desc={address}
                    />
                    <MyAccordion
                        title='company'
                        desc={company}
                    />
                </Card.Body>
            </Card>
        </>
    )
}

const UsersPage = () => {
    const [users, setUsers] = useState([])

    const getUsers = () => {
        const link = 'https://jsonplaceholder.typicode.com/users';

        fetch(link)
            .then(response => response.json())
            .then(data => setUsers(data))
    }

    return (
        <div className='container'>
            <button onClick={getUsers}>
                Получить пользователей
            </button>
            <div className={styles.users_container}>
                {
                    users.map((item, index) =>{
                        return(
                            <UserCard
                                key={index}
                                data={item}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default UsersPage;

//
// <h2>{data.name}</h2>
// <ul>
//     <li>{data.email}</li>
//     <li>{data.phone}</li>
//     <li>{data.website}</li>
// </ul>
//
