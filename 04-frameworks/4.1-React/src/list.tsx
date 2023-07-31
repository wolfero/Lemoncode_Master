import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface MemberEntity {
    id: string;
    login: string;
    avatar_url: string;
}

export const ListPage: FC = () => {
    const [members, setMembers] = useState<MemberEntity[]>([]);
    const [filter, setFilter] = useState('lemoncode');

    const loadMembers = () => {
        try {
            fetch(`https://api.github.com/orgs/${filter}/members`)
                .then((response) => response.json())
                .then((json) => setMembers(json));
        } catch (error) {
            console.log(error);
        }
    };

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFilter(e.target.value);
    };

    useEffect(() => {
        loadMembers();
    }, []);

    return (
        <>
            <h2>Hello from List page</h2>
            <div className='list-filter'>
                <input value={filter} type='text' onChange={handleOnChange} />
                <button onClick={loadMembers}>Search</button>
            </div>
            <div className='list-user-list-container'>
                <span className='list-header'>Avatar</span>
                <span className='list-header'>Id</span>
                <span className='list-header'>Name</span>
                {members.map((member, index) => (
                  <div className='list-content' key={index}>
                    <img src={member.avatar_url} />
                    <span>{member.id}</span>
                    <Link to={`/detail/${member.login}`}>
                      {member.login}
                    </Link>
                  </div>
                ))}
            </div>
            {/* <Link to="/detail">Navigate to detail page</Link> */}
        </>
    );
};
