import React from 'react';
import { mount } from 'enzyme';
import { ServerStatus } from 'generated-sources';
import ClusterStatusIcon from '../ClusterStatusIcon';

describe('ClusterStatusIcon', () => {
  it('matches snapshot', () => {
    const wrapper = mount(<ClusterStatusIcon status={ServerStatus.ONLINE} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders online icon', () => {
    const wrapper = mount(<ClusterStatusIcon status={ServerStatus.ONLINE} />);
    expect(wrapper.exists('.is-primary')).toBeTruthy();
    expect(wrapper.exists('.is-danger')).toBeFalsy();
  });
  it('renders offline icon', () => {
    const wrapper = mount(<ClusterStatusIcon status={ServerStatus.OFFLINE} />);
    expect(wrapper.exists('.is-danger')).toBeTruthy();
    expect(wrapper.exists('.is-primary')).toBeFalsy();
  });
});
