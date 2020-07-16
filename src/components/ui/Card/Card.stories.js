import React from 'react';
import Card from './Card';

export default {
  component: Card,
  title: 'Components / UI / Card',
};

// const CardDefaults = {};

export const Straight = () => <Card></Card>;
export const Curved = () => <Card edges={true}></Card>;
