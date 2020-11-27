import React from 'react';
import { TextInput } from '@components/shared/TextInput';
import { FormProvider, useForm } from 'react-hook-form';
import { render, screen } from '@testing-library/react';

jest.mock('@material-ui/core/TextField', () => ({
  __esModule: true,
  default: class DummyComponent extends React.PureComponent<any, any> {
    render() {
      return <input data-testid="bar" />;
    }
  },
}));

const Form = () => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form>
        <TextInput name="foo" label="baz" required={true} />
      </form>
    </FormProvider>
  );
};

describe('Render behaviour', () => {
  it('Should render Component', async () => {
    render(<Form />);

    expect(screen.getByTestId('bar')).toBeTruthy();
  });
});
