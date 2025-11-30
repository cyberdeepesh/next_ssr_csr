export default function Home() {
  const a = 5;
  return (
    <>
      {
        a > 3 ? (
          <div>
            <h1>Welcome to the Home Page</h1>
          </div>
        ) : (
          <div>
            <h1>Access Denied</h1>
            <p>You do not have permission to view this content.</p>
          </div>
        )
      }
    </>
  );
}
