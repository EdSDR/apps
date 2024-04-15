// Copyright 2017-2024 @polkadot/app-coretime authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import { FormatBalance } from '@polkadot/react-query';

import { OnDemandQueueStatus } from '../types.js';

interface Props {
  className?: string;
  value?: OnDemandQueueStatus;
  query: string;
}

function QueueStatus ({ className, value, query }: Props): React.ReactElement<Props> {

    if (query === 'traffic') {
        return (
            <div className={className}>
            <FormatBalance
              className={value?.traffic.toString() ? '' : '--tmp'}
              value={value?.traffic.toString() || 1}
              withSi
            />
          </div>
        )
    } else {
        return (
            <div className={className}>
            {value?.nextIndex.toString()}
        </div>
        )
    }
    
}

export default React.memo(QueueStatus);
