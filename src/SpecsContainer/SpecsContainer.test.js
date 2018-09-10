import React from 'react';
import { shallow, mount } from 'enzyme';
import {SpecsContainer} from "./SpecsContainer";

describe('SpecsContainer', () => {
  const groupName = 'TestPhone 1', rating = '3.3', description = 'This is a test phone';
  const activeDevice = { displayDescription: description };
  const specsContainer = shallow(<SpecsContainer groupName={groupName} rating={rating} device={activeDevice}/>);


  it('renders the group name', () => {
    expect(specsContainer.find('h1').text()).toEqual(groupName);
  });

  it('renders the group name', () => {
    expect(specsContainer.children().contains(<p>{description}</p>))
  });

  it('renders the rating', () => {
    expect(specsContainer.children().contains(<p>Rating: {rating}</p>))
  });
});