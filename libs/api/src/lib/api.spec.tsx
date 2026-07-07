import { render } from '@testing-library/react';

import OrgApi from './api';

describe('OrgApi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OrgApi />);
    expect(baseElement).toBeTruthy();
  });
});
