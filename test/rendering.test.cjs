const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const context = vm.createContext({});
for (const name of ['note-list-view', 'single-note-view']) {
  vm.runInContext(fs.readFileSync(path.join(__dirname, '../views/' + name + '.js'), 'utf8'), context);
}

test('full note text is rendered as text even when it contains executable markup', () => {
  const view = new context.SingleNoteView({ text: () => '<img src=x onerror=alert(1)> & "quoted"' });
  assert.equal(view.parse(), '<div>&lt;img src=x onerror=alert(1)&gt; &amp; &quot;quoted&quot;</div>');
});

test('note previews escape after truncation, and note IDs cannot break attributes', () => {
  const view = new context.NoteListView({ notes: () => [{
    text: () => '<svg/onload=alert()>trailing text', id: () => "0' onclick='alert(1)"
  }] });
  const html = view.parse();
  assert.ok(html.includes('&lt;svg/onload=alert()&gt;'));
  assert.ok(!html.includes('<svg'));
  assert.ok(!html.includes("href='#notes/0' onclick"));
  assert.ok(!html.includes('trailing'));
});

test('existing view behavior still passes the original unit specifications', () => {
  context.print = { drive() {}, test() {} };
  for (const file of ['test-framework/assert.js', 'test-framework/test.js', 'test-framework/drive.js',
    'spec/note-list-view-spec.js', 'spec/single-note-view-spec.js']) {
    vm.runInContext(fs.readFileSync(path.join(__dirname, '..', file), 'utf8'), context);
  }
});
