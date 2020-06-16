import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Card';

const props = {
  key: 'id',
  title: 'title',
  content: 'lorem'
}

describe('Card Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card {...props} />, div)
    ReactDOM.unmountComponentAtNode(div);
  });

  it('displays title and content', () => {
    const tree = renderer.create(
      <Card title='title' content='lorem' />
    ).toJSON()
    expect(tree).toMatchSnapshot();
  });
  
})