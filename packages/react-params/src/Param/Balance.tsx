// Copyright 2017-2020 @polkadot/react-components authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Props } from '../types';

import BN from 'bn.js';
import React, { useCallback, useState } from 'react';
import { InputBalance } from '@polkadot/react-components';

import Bare from './Bare';

function Balance ({ className, defaultValue: { value }, isDisabled, isError, label, onChange, onEnter, onEscape, style, withLabel }: Props): React.ReactElement<Props> {
  const [isValid, setIsValid] = useState(false);
  const [defaultValue] = useState(new BN((value as BN || '0').toString()).toString(10));

  const _onChange = useCallback(
    (value?: BN): void => {
      const isValid = !isError && !!value;

      onChange && onChange({
        isValid,
        value
      });
      setIsValid(isValid);
    },
    [isError, onChange]
  );

  return (
    <Bare
      className={className}
      style={style}
    >
      <InputBalance
        className='full'
        defaultValue={defaultValue}
        isDisabled={isDisabled}
        isError={isError || !isValid}
        label={label}
        onChange={_onChange}
        onEnter={onEnter}
        onEscape={onEscape}
        withEllipsis
        withLabel={withLabel}
      />
    </Bare>
  );
}

export default React.memo(Balance);

export {
  Balance
};
