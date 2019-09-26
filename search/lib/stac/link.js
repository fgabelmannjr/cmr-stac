const RELATION_TYPES = {
  self: 'self',
  root: 'root',
  parent: 'parent',
  child: 'child',
  item: 'item'
};

const MEDIA_TYPES = {
  json: 'application/json'
};

function createRoot (title, href, type) {
  return create(RELATION_TYPES.root, title, href, type);
}

function createSelf (title, href, type) {
  return create(RELATION_TYPES.self, title, href, type);
}

function createParent (title, href, type) {
  return create(RELATION_TYPES.parent, title, href, type);
}

function createChild (title, href, type) {
  return create(RELATION_TYPES.child, title, href, type);
}

function createItem (title, href, type) {
  return create(RELATION_TYPES.item, title, href, type);
}

function create (rel, title, href, type = MEDIA_TYPES.json) {
  return { rel, title, href, type };
}

module.exports = {
  RELATION_TYPES,
  MEDIA_TYPES,
  createRoot,
  createSelf,
  createParent,
  createChild,
  createItem,
  create
};
