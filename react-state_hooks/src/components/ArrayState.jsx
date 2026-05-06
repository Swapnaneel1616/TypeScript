import React, { useState } from 'react'

const ArrayState = () => {
    const [friends, setFriends] = useState(["Neel", "Sid", "Alex"])

    const addNewFriend = () => {
        setFriends([...friends, "New Friend"])
    }
    const removeNewFriend = () => {
        setFriends(friends.filter(f => f !== "New Friend"))
    }
    const updateNewFriend = () => {
        setFriends(friends.map(f => f === "New Friend" ? "Updated Friend" : f))
    }

  return (
    <section>
      <ul>
        {friends.map(f => (
          <li key={f}>{f}</li>
        ))}
      </ul>
      <button onClick={addNewFriend}>ADD Friend</button>
      <button onClick={removeNewFriend}>REMOVE Friend</button>
      <button onClick={updateNewFriend}>Update Friend</button>
    </section>
  )
}

export default ArrayState
