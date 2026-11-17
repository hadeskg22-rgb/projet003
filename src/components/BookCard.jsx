function BookCard({ titre, auteur, estDisponible, onClickEmprunt }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "16px",
        borderRadius: "8px",
        marginBottom: "12px",
      }}
    >
      <h3>{titre}</h3>
      <p>Auteur : {auteur}</p>

      <p>{estDisponible ? "🟢 Disponible" : "🔴 Emprunté"}</p>

      <button onClick={onClickEmprunt}>
        {estDisponible ? "Emprunter" : "Rendre"}
      </button>
    </div>
  );
}

export default BookCard;