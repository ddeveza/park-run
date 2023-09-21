'use client'

const MainComponent = ({parkrun_user}) => {
  return (
    <main className="p-48">
    {parkrun_user.map((user) => {
      return (
        <div key={user.name}>
          <h1>{user.name}</h1>
          <h1>{user.parkruns}</h1>
          <h1>{user.total_credits}</h1>
          <h1>{user.event_summary}</h1>
        </div>
      );
    })}
  </main>
  )
}

export default MainComponent