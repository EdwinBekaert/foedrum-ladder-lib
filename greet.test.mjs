import assert from 'node:assert/strict';
import { test } from 'node:test';
import { greet } from './greet.mjs';

test('greets a visitor by name', () => {
  assert.equal(greet('Ann'), 'Hello, Ann!');
});
