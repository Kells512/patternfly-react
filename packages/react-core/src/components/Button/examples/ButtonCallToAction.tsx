import React from 'react';
import { Button, Flex } from '@patternfly/react-core';
import ArrowRightIcon from '@patternfly/react-icons/dist/esm/icons/arrow-right-icon';

export const ButtonCallToAction: React.FunctionComponent = () => (
  <Flex>
    <Button variant="primary" isLarge>
      Call to action
    </Button>
    <Button variant="secondary" isLarge>
      Call to action
    </Button>
    <Button variant="tertiary" isLarge>
      Call to action
    </Button>
    <Button variant="link" isLarge>
      Call to action <ArrowRightIcon />
    </Button>
  </Flex>
);
