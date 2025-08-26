import { Header as HeaderV1 } from './desktop/v1';

import { MobileHeader } from './mobile';

interface MainHeaderProps {
  version?: '1';
}

export function MainHeader({ version = '1' }: MainHeaderProps) {
  return (
    <>
      {version === '1' && <HeaderV1 />}

      <MobileHeader />
    </>
  );
}
