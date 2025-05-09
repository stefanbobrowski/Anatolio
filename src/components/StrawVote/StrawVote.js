/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import { A } from 'hookrouter';
import './StrawVote-styles.scss';

const StrawVote = () => {
  const [votes, setVotes] = useState({
    voteName: 'Favorite DBZ character',
    straws: [
      { strawName: 'Goku', color: '#072083', strawCount: 4 },
      { strawName: 'Krillin', color: '#f85b1a', strawCount: 2 },
      { strawName: 'Vegeta', color: '#ce1ebf', strawCount: 4 },
    ],
  });

  const [totalVotes, setTotalVotes] = useState(10);

  const defaultCreateVote = {
    voteName: '',
    straws: [
      { strawName: '', color: '#ffffff', strawCount: 0 },
      { strawName: '', color: '#ffffff', strawCount: 0 },
    ],
  };

  const [createVote, setCreateVote] = useState(defaultCreateVote);

  const handleVote = (i) => {
    const newVotes = { ...votes };
    newVotes.straws[i].strawCount++;
    setVotes(newVotes);
    setTotalVotes(parseInt(totalVotes) + 1);
  };

  const handleCreateVote = () => {
    setVotes(createVote);
    setCreateVote(defaultCreateVote);
    setTotalVotes(0);
  };

  const handleAddStraw = () => {
    const newCreateVote = { ...createVote };
    newCreateVote.straws[newCreateVote.straws.length] = {
      strawName: '',
      color: '#ffffff',
      strawCount: 0,
    };
    setCreateVote(newCreateVote);
  };

  useEffect(() => {
    console.log(createVote);
  }, [createVote]);

  useEffect(() => {
    console.log('votes change', votes);
  }, [votes]);

  return (
    <div className='project-page straw-vote-project'>
      <h1>Straw Vote</h1>
      <p>Straw Vote is the best place to create instant, real-time votes for free.</p>
      <h6>! Under construction !</h6>
      <section className='straw-vote-container'>
        <h3>{votes.voteName}</h3>
        <section id='straw-graph'>
          {votes.straws.map((c, i) => (
            <div className='graph-row' key={i}>
              <span className='straw-name'>{c.strawName}</span>
              <div
                className='straw'
                key={i}
                style={{
                  width: (c.strawCount / totalVotes) * 50 + '%',
                  backgroundColor: c.color,
                }}></div>
              <span className='straw-votes'>
                {c.strawCount}({Math.round((c.strawCount / totalVotes) * 100)}
                %)
              </span>
            </div>
          ))}
        </section>
        <div className='vote-panel'>
          <p>Cast your vote:</p>
          {votes.straws.map((c, i) => (
            <div className='vote-choice' key={i} onClick={() => handleVote(i)}>
              <span>{c.strawName}</span>
            </div>
          ))}
        </div>

        <div className='share-straw-vote'>
          <span>Share this Straw Vote</span>
        </div>
      </section>

      <section className='create-straw-vote'>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.target.reset();
            handleCreateVote();
          }}>
          <div>
            <h4>Create a new Straw Vote</h4>
            <span>Vote Name:</span>
            <input
              onChange={(e) => setCreateVote({ ...createVote, voteName: e.target.value })}
              value={createVote.voteName}
              required></input>
          </div>

          {createVote.straws.map((s, i) => (
            <div key={i}>
              <span>Straw {i}:</span>
              <input
                onChange={(e) => {
                  const newName = { ...createVote };
                  newName.straws[i].strawName = e.target.value;
                  setCreateVote(newName);
                }}></input>
              <input
                name='color-picker'
                type='color'
                defaultValue='#ffffff'
                onChange={(e) => {
                  const newColor = { ...createVote };
                  newColor.straws[i].color = e.target.value;
                  setCreateVote(newColor);
                }}
              />
            </div>
          ))}
          <div onClick={handleAddStraw}>[Add straw]</div>
          <button type='submit'>Create Straw Vote</button>
        </form>
      </section>
      <section className='created-straw-vote'></section>
    </div>
  );
};

export default StrawVote;
