import { expect, test ,it, describe} from 'vitest'
import { canDrive, getCoupons, calculateDiscount, validateUserInput } from '../core.js'


test('should detect if a person can drive based on age and country', () => {
  expect(canDrive(16, 'US')).toBe(true)
})

test('should detect if a person can drive based on age and country', () => {
  expect(canDrive(17, 'UK')).toBe(true)
})


describe('getCoupons', () => {
  it('returns a list of coupons with code and discount', () => {
    const coupons = getCoupons()

    expect(coupons).toHaveLength(2)
    expect(coupons[0]).toMatchObject({
      code: 'SAVE20NOW',
      discount: 0.2,
    })
  })
})


describe('calculateDiscount', () => {
  it('applies SAVE10 discount correctly', () => {
    expect(calculateDiscount(100, 'SAVE10')).toBe(90)
  })

  it('returns full price for unknown discount code', () => {
    expect(calculateDiscount(100, 'UNKNOWN')).toBe(100)
  })

  it('returns error for invalid price', () => {
    expect(calculateDiscount(-10, 'SAVE10')).toBe('Invalid price')
  })

  it('returns error for invalid discount code type', () => {
    expect(calculateDiscount(100, null)).toBe('Invalid discount code')
  })
})


describe('validateUserInput', () => {
  it('returns success for valid input', () => {
    expect(validateUserInput('rasim', 25))
      .toBe('Validation successful')
  })

  it('returns multiple errors when input is invalid', () => {
    const result = validateUserInput('ab', 15)

    expect(result).toContain('Invalid username')
    expect(result).toContain('Invalid age')
  })
})