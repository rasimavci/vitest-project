import { expect, test ,it, describe, beforeEach} from 'vitest'
import { canDrive, getCoupons, calculateDiscount, validateUserInput, createProduct, isStrongPassword, fetchData, Stack  } from '../core.js'


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

describe('createProduct', () => {
  it('fails when name is missing', () => {
    const result = createProduct({ price: 10 })

    expect(result.success).toBe(false)
    expect(result.error.code).toBe('invalid_name')
  })

  it('succeeds with valid product', () => {
    const result = createProduct({ name: 'Book', price: 10 })

    expect(result).toMatchObject({
      success: true,
    })
  })
})

describe('isStrongPassword', () => {
  it('returns true for strong password', () => {
    expect(isStrongPassword('Strong123')).toBe(true)
  })

  it('returns false for weak passwords', () => {
    expect(isStrongPassword('short')).toBe(false)
    expect(isStrongPassword('nocapital1')).toBe(false)
    expect(isStrongPassword('NOLOWERCASE1')).toBe(false)
    expect(isStrongPassword('NoNumber')).toBe(false)
  })
})

describe('fetchData', () => {
  it('resolves with data', async () => {
    const data = await fetchData()
    expect(data).toEqual([1, 2, 3])
  })
})

describe('Stack', () => {
  let stack

  beforeEach(() => {
    stack = new Stack()
  })

  it('pushes and pops items from stack', () => {
    stack.push(1)
    stack.push(2)

    expect(stack.pop()).toBe(2)
    expect(stack.size()).toBe(1)
  })

  it('throws error when popping empty stack', () => {
    expect(() => stack.pop()).toThrow('Stack is empty')
  })
})