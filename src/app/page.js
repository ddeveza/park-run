const getParkrunUser = async () => {
  const res = await fetch("api/getParkrun", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

export default async function Home() {
  const parkrun_user = await getParkrunUser();

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
  );
}
