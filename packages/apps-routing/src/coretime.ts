// Copyright 2017-2024 @polkadot/apps-routing authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Route, TFunction } from './types.js';

import Component from '@polkadot/app-coretime';

export default function create (t: TFunction): Route {
  return {
    Component,
    display: {
      needsApi: [
        ['query.broker.status',
        'query.coretimeAssignmentProvider.coreDescriptors']
      ],
      needsApiInstances: true
    },
    group: 'network',
    icon: 'calendar-clock',
    name: 'coretime',
    text: t('nav.coretime', 'Coretime (Experimental)', { ns: 'app-coretime' })
  };
}
