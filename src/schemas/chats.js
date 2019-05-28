import { product } from './products';

export const message = {
  type: 'object',
  properties: {
    id: { type: 'number' },
    chatId: { type: 'string' },
    ownerId: { type: 'string' },

    text: { type: 'string' },
    read: { type: 'boolean' },

    createdAt: { type: 'number' },
    updatedAt: { type: ['number', 'null'] },
  },
};

export const chat = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    productId: { type: 'string' },
    ownerId: { type: 'string' },

    createdAt: { type: 'number' },
    updatedAt: { type: ['number', 'null'] },
  },
};

export const chatWithLastMessage = {
  type: 'object',
  properties: {
    ...chat.properties,
    lastMessage: {
      anyOf: [{ type: 'null' }, message],
    },
  },
};

export const chatWithProductAndMessage = {
  type: 'object',
  properties: {
    ...chatWithLastMessage.properties,
    product,
  },
};
