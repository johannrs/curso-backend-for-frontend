/*
  Probando el componente de Register
*/
import React from 'react';
import { mount } from 'enzyme';
import Register from '../../containers/Register';
import ProviderMock from '../../__mocks__/ProviderMock';

describe('<Register />', () => {
  test('Register form', () => {
    const preventDefault = jest.fn();   /* hace un mock de las funciones */
    const register = mount(
      <ProviderMock>
        <Register />
      </ProviderMock>
    );
    register.find('form').simulate('submit', { preventDefault });   /* simula que hacemos submit */
    expect(preventDefault).toHaveBeenCalledTimes(1);    /* solo debe llamarse una sola vez */
    register.unmount(); /*  */
  });
})