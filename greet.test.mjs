import assert from 'node:assert/strict';
import { test } from 'node:test';
import { greet } from './greet.mjs';

test('greets a visitor by name', () => {
  assert.equal(greet('Ann'), 'Hello, Ann!');
});

test('greets in French when the language is fr', () => {
  assert.equal(greet('Ann', 'fr'), 'Bonjour, Ann!');
});

test('greets in English when the language is en', () => {
  assert.equal(greet('Ann', 'en'), 'Hello, Ann!');
});
