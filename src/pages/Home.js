import React from 'react';
import '../styles/Home.css';
import Node from '../components/Node';

const Home = (props) => {
  let parents = props.parents;

  return (
    <div className='container-sm container'>
      {parents.map((parent) => (
        <Node parentId={parent.id} key={parent.id} />
      ))}
    </div>
  );
};

export default Home;
