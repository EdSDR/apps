// Copyright 2017-2024 @polkadot/app-coretime authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { TabItem } from '@polkadot/react-components/types';

import React, { useRef } from 'react';

import { Tabs } from '@polkadot/react-components';
import { useApi } from '@polkadot/react-hooks';

import Overview from './Overview/index.js';
import { useTranslation } from './translate.js';
import useCoreDescriptor from './useCoreDescriptor.js';
import useWorkloadInfos from './useWorkloadInfos.js';
import useWorkplanInfos from './useWorkplanInfos.js';

interface Props {
  basePath: string;
  className?: string;
}

function createItemsRef (t: (key: string, options?: { replace: Record<string, unknown> }) => string): TabItem[] {
  return [
    {
      isRoot: true,
      name: 'overview',
      text: t('Overview')
    }
  ];
}

function CoretimeApp ({ basePath, className }: Props): React.ReactElement<Props> {
  const { t } = useTranslation();
  const itemsRef = useRef(createItemsRef(t));
  const { api } = useApi();
  const coreInfos = useCoreDescriptor();
  const workloadInfos = useWorkloadInfos();
  const workplanInfos = useWorkplanInfos();

  if (api.query.broker) {
    return (
      <main className={className}>
        <Tabs
          basePath={basePath}
          items={itemsRef.current}
        />
        <Overview
          workloadInfos={workloadInfos}
          workplanInfos={workplanInfos}
        />
      </main>
    );
  } else {
    return (
      <main className={className}>
        <Tabs
          basePath={basePath}
          items={itemsRef.current}
        />
        <Overview
          coreInfos={coreInfos}
          relay={true}
        />
      </main>
    );
  }
}

export default React.memo(CoretimeApp);
