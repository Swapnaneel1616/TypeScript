import React from 'react'

const UserList = () => {
    const users = [
        { id: 1, name: "Alice", age: 25 },
        { id: 2, name: "Bob", age: 30 },
        { id: 3, name: "Charlie", age: 35 }
    ]
  return (
    <div>
      <main>
        {users.map(({id , name, age}) => (
            <ul key={id}>
            <li>{name}</li>
            <li>{age}</li>
            <li>{id}</li>
            </ul>
        ))}
      </main>
    </div>
  )
}

export default UserList
