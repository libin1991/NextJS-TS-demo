import React, { Component } from 'react';

export default class MyComponent extends Component {
  state = {
    selectedBreed: '',
    imageSrcOfSelectedBreed: '',
  };

  selectBreed = async (e: React.FormEvent<HTMLInputElement>) => {
    const breedSelected: string = e.target.innerText;

    const res = await fetch(
      `https://dog.ceo/api/breed/${breedSelected}/images/random`,
    );
    const randomImg = await res.json();
    this.setState({
      selectedBreed: breedSelected,
      imageSrcOfSelectedBreed: randomImg.message,
    });
  };

  public render() {
    const { breeds } = this.props;
    const { selectedBreed, imageSrcOfSelectedBreed } = this.state;
    return (
      <div>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {breeds.map((breed: string) => (
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
              onClick={e => this.selectBreed(e)}
            >
              {breed}
            </div>
          ))}
        </div>
        <h2 style={{ textTransform: 'capitalize' }}>{selectedBreed}</h2>
        <br />
        <div>
          {imageSrcOfSelectedBreed && (
            <a href={imageSrcOfSelectedBreed} target="_blank">
              <img
                src={imageSrcOfSelectedBreed}
                style={{
                  maxHeight: 400,
                  maxWidth: '100%',
                  borderRadius: 10,
                  cursor: 'pointer',
                }}
              />
            </a>
          )}
        </div>
      </div>
    );
  }
}
