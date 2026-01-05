import { expect, test ,it} from 'vitest'
import { max } from '../intro.js'
import  { fizzBuzz } from '../intro.js'


test('should detect the maximum of two numbers', () => {
  expect(max(1, 2)).toBe(2)
})

it('should return the maximum of two numbers', () => {
  expect(max(10, 5)).toBe(10)
  expect(max(-1, -5)).toBe(-1)
  expect(max(0, 0)).toBe(0)
})

test('should return the first number when both are equal', () => {
  expect(max(7, 7)).toBe(7)
  expect(max(-3, -3)).toBe(-3)
})


test('fizzBuzz function tests', () => {
  expect(fizzBuzz(3)).toBe('Fizz')
  expect(fizzBuzz(5)).toBe('Buzz')
  expect(fizzBuzz(15)).toBe('FizzBuzz')
  expect(fizzBuzz(7)).toBe('7')
})

it('should return "Fizz" for multiples of 3', () => {
  expect(fizzBuzz(9)).toBe('Fizz')
  expect(fizzBuzz(12)).toBe('Fizz')
})

