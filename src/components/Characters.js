import Search from "./searchBar";

export default function Characters(props) {
  const { characters, setCharacters } = props;

  const resetCharacters = () => {
    setCharacters(null);
  };

  const clickAway = () => {
    console.log("Juan");
  };

  return (
    <div className="characters">
      <h1>Personajes</h1>
      <div className="BoxSearch">
        <div className="BoxSearchB">
          <input
            type="text"
            name="name"
            className="inputSearch"
            placeholder="Search..."
            maxLength={30}
          />
          <button className="btn-search2" onClick={clickAway}>
            <Search />
          </button>
        </div>
      </div>

      <span className="back-home" onClick={resetCharacters}>
        Go to home
      </span>
      <div className="container-characters">
        {characters.map((character, index) => (
          <div className="character-container" key={index}>
            <div>
              <img src={character.image} alt={character.name} />
            </div>
            <div>
              <h3>{character.name}</h3>
              <h6>
                {character.status === "Alive" ? (
                  <>
                    <span className="Alive" />
                    Alive
                  </>
                ) : (
                  <>
                    <span className="dead" />
                    Dead
                  </>
                )}
              </h6>
              <p className="text-grey">
                <span>Episodios:</span>
                <span>{character.episode.length}</span>
              </p>
              <p>
                <span className="text-grey">Especie:</span>
                <span>{character.species}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <span className="back-home" onClick={resetCharacters}>
        Go to home
      </span>
    </div>
  );
}
