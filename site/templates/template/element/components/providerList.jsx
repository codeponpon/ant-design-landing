import React, { useEffect, useState } from 'react';
import { Col } from 'antd';
import gameProviders from '../api/gameProviders';

const ProviderList = () => {
  const [providers, setProviders] = useState([]);

  useEffect(async () => {
    if (providers.length === 0) {
      const { data } = await gameProviders();
      setProviders(data);
    }
  }, []);

  return providers.map((item) => {
    return (
      <Col key={item.id} md={6} xs={24} className="block content5-block-content">
        <div className="title-wrapper">
          <h2 name="title" className="title-h1 text-center">
            <p>{item.name}</p>
          </h2>
          <div name="content" className="title-content">
            <a href="#" className="content5-block-content">
              <span>
                <img src={item.items[0].image} height="100%" alt={item.name} />
              </span>
            </a>
          </div>
        </div>
      </Col>
    );
  });
};

export default ProviderList;
