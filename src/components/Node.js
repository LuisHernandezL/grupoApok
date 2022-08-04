import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getChilds } from '../store/slices/nodes.slice';
import { deleteCorrection } from '../store/slices/register.slice';

const Node = ({ parentId }) => {
  const [node, setNode] = useState({});
  const dispatch = useDispatch();
  const language = useSelector((state) => state.localization);
  const register = useSelector((state) => state.register);
  const toParent = register[register.length - 2];
  const body = {
    parent: parentId,
    locales: [language],
  };

  useEffect(() => {
    axios
      .get(
        `https://api-graph.tests.grupoapok.com/api/node/${parentId}?locale=${language}`
      )
      .then((res) => setNode(res.data));
  }, [parentId, language]);

  const deleteNode = () => {
    axios
      .get(`https://api-graph.tests.grupoapok.com/api/nodes?parent=${node.id}`)
      .then(() => alert('No se puede eliminar por que tiene hijos'))
      .catch((err) => {
        if (err.response.status === 404) {
          axios
            .delete(`https://api-graph.tests.grupoapok.com/api/node/${node.id}`)
            .then(() => {
              dispatch(getChilds(toParent));
              dispatch(deleteCorrection());
              alert('Node deleted');
            });
        }
      });
  };

  const addNode = () => {
    axios
      .post(`https://api-graph.tests.grupoapok.com/api/node`, body)
      .then(() => alert(`Node added successfully`));
  };

  return (
    <section className='card p-3'>
      <div className='card-body'>
        <button className='btn btn-primary me-3 mb-5' onClick={() => addNode()}>
          Add
        </button>
        <button
          className='btn btn-danger ms-3 mb-5'
          onClick={() => deleteNode()}
        >
          Delete
        </button>
        <div className='card-body'>
          <h4 className='card-title'>{node.id}</h4>
          <h4 className='card-subtitle text-muted'>
            {node.translation?.[0]?.title
              ? node.translation?.[0].title
              : node.title}
          </h4>
        </div>
      </div>
      <button
        className='btn btn-success'
        onClick={() => dispatch(getChilds(node.id))}
      >
        Childs
      </button>
    </section>
  );
};

export default Node;
