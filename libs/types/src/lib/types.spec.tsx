import { render } from '@testing-library/react';

import OrgTypes from './types';

describe('OrgTypes', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OrgTypes />);
    expect(baseElement).toBeTruthy();
  });
});
