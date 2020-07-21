import React from 'react';
import Button from './Button';

export default {
  component: Button,
  title: 'Components / UI / Button',
};

// const buttonDefaults = {};

export const Standard = () => <Button disabled={false}>Standard Button</Button>;
export const Disabled = () => <Button disabled={true}>Disabled Button</Button>;
