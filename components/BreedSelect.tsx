import fetch from 'isomorphic-unfetch';

const BreedSelect = (data: object[]) => {
  async function selectBreed(e: React.FormEvent<HTMLInputElement>) {
    const selectedBreed: string = e.target.innerHTML.toUpperCase();
    document.getElementById('title').innerHTML = selectedBreed;
    const res = await fetch(
      `https://dog.ceo/api/breed/${selectedBreed}/images/random`,
    );
    const randomImg = await res.json();
    const image = document.getElementById('img');
    image.style.display = 'block';
    image.src = randomImg.message;
  }
  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {data.breeds.map((breed: string) => (
          <div
            key={breed}
            className="breedselect"
            style={{
              margin: 3,
              padding: 4,
              border: '1px solid white',
              borderRadius: 10,
              textTransform: 'capitalize',
              fontSize: 12,
              cursor: 'pointer',
            }}
            value={breed}
            onClick={e => selectBreed(e)}
          >
            {breed}
          </div>
        ))}
      </div>
      <h2 id="title">&nbsp;</h2>
      <br />
      <div>
        <img
          id="img"
          src=""
          style={{ width: 600, height: 400, borderRadius: 10, display: 'none' }}
        />
      </div>
    </div>
  );
};

export default BreedSelect;
