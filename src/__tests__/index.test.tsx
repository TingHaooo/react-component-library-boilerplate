import { render } from '@testing-library/react'
import testComponent from '../index'

describe('Testing', () => {
  it('"Hello World!!" is appear on browser', () => {
    const ui = render(testComponent())
    expect(ui.queryByText('Hello World!!')).not.toBeNull()
  })
})
