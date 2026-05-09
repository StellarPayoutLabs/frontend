type HealthStatus = "connected" | "degraded" | "offline";

const cards: Array<{ title: string; value: string; status: HealthStatus }> = [
  { title: "Queued Payouts", value: "24", status: "connected" },
  { title: "Pending Approvals", value: "7", status: "degraded" },
  { title: "Failed Jobs", value: "1", status: "degraded" }
];

export function App() {
  return (
    <main className="container">
      <header>
        <h1>StellarPayoutLabs Console</h1>
        <p>Operational dashboard scaffold for payout workflows.</p>
      </header>
      <section className="grid">
        {cards.map((card) => (
          <article key={card.title} className={`card ${card.status}`}>
            <h2>{card.title}</h2>
            <strong>{card.value}</strong>
          </article>
        ))}
      </section>
    </main>
  );
}
