import { render } from '@testing-library/react'
import Header from '../Header'
import { useFCL } from '../../../hooks/useFCL'
jest.mock('../../../hooks/useFCL')

describe('Component: Header', () => {
  test('should render the configurable component if version is old enough', () => {
    useFCL.mockImplementation(() => {
      return {
        appVersion: '1.0.0',
      }
    })

    const { container } = render(<Header />)
    expect(container.firstChild).toMatchSnapshot()
  })

  test('should NOT render the configurable component if version is too low', () => {
    useFCL.mockImplementation(() => {
      return {
        appVersion: '0.0.77',
      }
    })

    const { container } = render(<Header />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
