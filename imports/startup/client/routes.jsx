import React from 'react';
import { FlowRouter as FR } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import { Layout } from '../../ui/layouts/Layout.jsx';

import CounterContainer from '../../ui/pages/CounterContainer/CounterContainer.js';

FR.route('/', {
  name: 'Home',
  triggersEnter: [function redirectFunc(context, redirect) {
    redirect('/1');
  }],
});

FR.route('/:multiplier', {
  name: 'Counter',
  action(params) {
    mount(Layout, {
      content: <CounterContainer {...params} />,
    });
  },
});
