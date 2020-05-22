// Copyright 2017-2020 @polkadot/app-claims authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { StatementKind } from '@polkadot/types/interfaces';

import React from 'react';
import ReactMd from 'react-markdown';
import styled from 'styled-components';

import { getStatementMd, getStatementUrl } from './util';
import { useTranslation } from './translate';

export interface Props{
  className?: string;
  kind: StatementKind;
}

function Statement ({ className, kind }: Props): React.ReactElement<Props> | null {
  const { t } = useTranslation();
  const statementUrl = getStatementUrl(kind);

  return (
    <div className={className}>
      {t('Please read the following statement carefully, it is also available at ')}
      <a href={statementUrl}>{statementUrl}</a>
      <ReactMd
        className='statement'
        escapeHtml={false}
        source={getStatementMd(kind)}
      />
    </div>
  );
}

export default React.memo(styled(Statement)`
  
`);